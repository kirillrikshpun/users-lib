import React, { useState } from "react";
import { Box, TextField, Modal } from "@mui/material";
import WindowButtons from "./WindowButtons";

export default function EditWindow({
  usersArray,
  openEdit,
  selectedUser,
  handleEditClose,
}) {
  const [changedUserData, setChangedUserData] = useState(selectedUser);

  console.log(changedUserData);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20rem",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Modal
      open={openEdit}
      onClose={handleEditClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: "20rem" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <Box sx={{ display: "grid", justifyContent: "center" }}>
            <TextField
              label="First name"
              value={changedUserData.name.first}
              onChange={(event) => {
                setChangedUserData((changedUserData) => ({
                  ...changedUserData,
                  name: { ...changedUserData.name, first: event.target.value },
                }));
              }}
            />
            <TextField
              label="Last name"
              value={changedUserData.name.last}
              onChange={(event) => {
                setChangedUserData((changedUserData) => ({
                  ...changedUserData,
                  name: { ...changedUserData.name, last: event.target.value },
                }));
              }}
            />
            <TextField
              label="Email"
              value={changedUserData.email}
              onChange={(event) => {
                setChangedUserData((changedUserData) => ({
                  ...changedUserData,
                  email: event.target.value,
                }));
              }}
            />

            <TextField
              label="Country"
              value={changedUserData.location.country}
              onChange={(event) => {
                setChangedUserData((changedUserData) => ({
                  ...changedUserData,
                  location: {
                    ...changedUserData.location,
                    country: event.target.value,
                  },
                }));
              }}
            />
            <TextField
              label="City"
              value={changedUserData.location.city}
              onChange={(event) => {
                setChangedUserData((changedUserData) => ({
                  ...changedUserData,
                  location: {
                    ...changedUserData.location,
                    city: event.target.value,
                  },
                }));
              }}
            />
            <TextField
              label="Street name"
              value={changedUserData.location.street.name}
              onChange={(event) => {
                setChangedUserData((changedUserData) => ({
                  ...changedUserData,
                  location: {
                    ...changedUserData.location,
                    street: {
                      ...changedUserData.location.street,
                      name: event.target.value,
                    },
                  },
                }));
              }}
            />
            <TextField
              label="Street number"
              value={changedUserData.location.street.number}
              onChange={(event) => {
                setChangedUserData((changedUserData) => ({
                  ...changedUserData,
                  location: {
                    ...changedUserData.location,
                    street: {
                      ...changedUserData.location.street,
                      number: event.target.value,
                    },
                  },
                }));
              }}
            />
          </Box>
          <WindowButtons
            usersArray={usersArray}
            changedUserData={changedUserData}
            handleEditClose={handleEditClose}
          />
        </Box>
      </Box>
    </Modal>
  );
}
