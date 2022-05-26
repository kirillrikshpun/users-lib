import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Box } from "@mui/material";
import { fetchUsers } from "../redux/actions/users.actions";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import UserCard from "./UserCard"
import EditWindow from "./EditWindow";

const MainComponent = ({data}) => {
    const [usersArray, setUsersArray] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null)
    const [openEdit, setOpenEdit] = useState(false);
    const handleEditClose = () => setSelectedUser(null)

    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchUsers(data))
    }, [data])

    const arr = useSelector((state) => state.users.users);
    useEffect(() => {
        arr.length > 0 && setUsersArray(arr)
    }, [arr])

    console.log(arr)

    useEffect(() => {
       selectedUser ? setOpenEdit(true) : setOpenEdit(false)
    },[selectedUser])

  return (
    <Box sx={{ display: "grid" }}>
        <Grid container spacing={ 2 } columns={{ xl: 4, xs: 4, md: 4 }}>
        {usersArray.map((elem, idx) => {
          return (
            <Grid item xl={ 1 } xs={ 4 } md={ 2 } key={idx}>
            <Box sx = {{padding: "1rem"}} key = {elem.phone}>
                <Box
                  sx={{
                    p: 2,
                    justifyContent: "space-around",
                    height: "8rem",
                    gridTemplateColumns: { md: "1fr 1fr" },
                    gap: 2,
                  }}
                >
                  <Box key={elem.phone}>
                    <UserCard
                      setSelectedUser = {setSelectedUser}
                      userData={elem}
                    />
                  </Box>
                </Box>
             
            </Box>
            </Grid>
          );
        })}


        </Grid>


        {selectedUser && <EditWindow usersArray = {usersArray}  openEdit = {openEdit} selectedUser={selectedUser} handleEditClose = {handleEditClose} />}
      </Box>
  );
};

export default MainComponent;
