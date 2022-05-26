import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { removeUsers } from "../redux/actions/users.actions";

function UserCard({ setSelectedUser, handleEditOpen, userData }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ display: "flex", justifyContent: "space-between" }}>
      <CardContent sx={{ display: "grid", padding: 1, width: "100%" }}>
        <Typography
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          component="div"
          variant="h5"
        >
          {userData.name.title +
            ". " +
            userData.name.first +
            " " +
            userData.name.last}
        </Typography>
        <Typography
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          variant="subtitle1"
          color="text.secondary"
          component="div"
        >
          {userData.email}
        </Typography>
        <Box
          sx={{
            display: "grid",
            padding: 2,
            alignItems: "center",
            pl: 1,
            pb: 1,
          }}
        >
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            variant="v2"
            component="div"
          >
            Address:
            {" " +
              userData.location.street.name +
              " " +
              userData.location.street.number +
              ", " +
              userData.location.city +
              ", " +
              userData.location.country}
          </Typography>
          <Typography
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            variant="v1"
            component="div"
          >
            Id:
            {" " + userData.login.uuid}
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={() => setSelectedUser(userData)}>
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => dispatch(removeUsers(userData.login.uuid))}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 250 }}
        image={userData.picture.medium}
      />
    </Card>
  );
}

export default UserCard;
