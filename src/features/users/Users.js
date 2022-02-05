import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAsync, selectUsers } from "./usersSlice";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Container,
  Divider,
} from "@mui/material";
import { openModal, selectModal } from "../modal/modalSlice";

export function Users() {
  const [selectedUser] = useState();

  const allUsers = useSelector(selectUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  const editUser = (user) => {
    const data = { type: "edit", user: user };
    dispatch(openModal(data));
  };

  const deleteUser = (user) => {
    const data = { type: "delete", user: user };
    dispatch(openModal(data));
  };

  const addUser = () => {
    const data = { type: "add" };
    dispatch(openModal(data));
  };

  return (
    <Container>
      <Typography variant="h3" mb={5} mt={5} sx={{ fontWeight: "bold" }}>
        Dashboard
      </Typography>
      <Paper
        sx={{
          maxWidth: "98vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: 4,
          marginBottom: "50px",
        }}
      >
        <Container
          ma={10}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
          }}
        >
          <Typography variant="h5">User list</Typography>
          <Button
            onClick={() => addUser()}
            variant="contained"
            color="info"
            sx={{ minWidth: "150px", textTransform: "none" }}
          >
            Add new
          </Button>
        </Container>
        <Divider sx={{ width: "100%" }} />
        {allUsers.users.length > 0 ? (
          <TableContainer
            sx={{ width: "96%", margin: "20px" }}
            component={Paper}
          >
            <Table
              sx={{ minWidth: 400, border: "1px solid lightgray" }}
              aria-label="users table"
            >
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f2f2f2" }}>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Username</TableCell>
                  <TableCell align="center">City</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Edit</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allUsers?.users.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {user.id}
                    </TableCell>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.username}</TableCell>
                    <TableCell align="center">{user.address?.city}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => editUser(user)}
                        user={selectedUser}
                        sx={{ textTransform: "none", width: "90px" }}
                      >
                        edit
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteUser(user)}
                        sx={{ textTransform: "none", width: "90px" }}
                      >
                        delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography>No users available</Typography>
        )}
      </Paper>
    </Container>
  );
}
