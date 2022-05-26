import React from "react";
import { Box } from "@mui/material";
import { useSnackbar } from "notistack";
import { Button } from "@mui/material";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { editUsers } from "../redux/actions/users.actions";

function WindowButtons({ usersArray, changedUserData, handleEditClose }) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const validation = () => {
    let isValid = true;
    const arrayOfEmails = usersArray
      .map((elem) => {
        return elem.email;
      })
      .filter((e) => e !== changedUserData.email);

    const validationSchema = yup.object({
      firstName: yup.string().min(3).required(),
      lastName: yup.string().required(),
      email: yup.string().email().notOneOf(arrayOfEmails).required(),
      countryLocation: yup.string().required(),
      cityLocation: yup.string().required(),
      streetNameLocation: yup.string().required(),
    });

    try {
      validationSchema.validateSync(
        {
          firstName: changedUserData.name.first,
          lastName: changedUserData.name.last,
          email: changedUserData.email,
          countryLocation: changedUserData.location.country,
          cityLocation: changedUserData.location.city,
          streetNameLocation: changedUserData.location.street.name,
        },
        { abortEarly: false }
      );
    } catch (error) {
      error.errors.forEach((elem) => {
        enqueueSnackbar(elem, { variant: "error" });
      });
      error.errors.length > 0 && (isValid = false);
    }

    return isValid;
  };

  const saveChanges = () => {
    if (validation()) {
      dispatch(editUsers(changedUserData));
      handleEditClose();
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button onClick={() => saveChanges()}>save</Button>
      <Button onClick={() => handleEditClose()}>cancel</Button>
    </Box>
  );
}

export default WindowButtons;
