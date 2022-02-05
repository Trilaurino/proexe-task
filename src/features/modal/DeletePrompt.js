import {  useDispatch } from "react-redux";
import { closeModal } from "./modalSlice";
import { deleteUserAsync } from "../users/usersSlice";
import {

  Button,
  Typography,

  Container,
  Paper,
  Divider,

} from "@mui/material";

export const DeletePrompt = ({ user }) => {
  const dispatch = useDispatch();

  function deleteUser(id) {
    dispatch(closeModal());
    dispatch(deleteUserAsync(id));
  }

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h6" p={2} sx={{ fontWeight: "bold" }}>
          Delete
        </Typography>
      </Container>
      <Divider sx={{ width: "100%" }} />
      <Container>
        <Typography p={2}>
          Are you sure you want to delete
          <strong>
            <em> {user.username} ?</em>
          </strong>
        </Typography>
      </Container>
      <Divider sx={{ width: "100%" }} />
      <Container
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
          marginBottom: "20px",
          marginRight: "20px",
          paddingRight: "10 !important",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            dispatch(closeModal());
          }}
          sx={{ marginRight: "20px", textTransform: "none" }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => deleteUser(user.id)}
          variant="contained"
          color="error"
          sx={{ textTransform: "none", width: "40%" }}
        >
          Delete
        </Button>
      </Container>
    </Paper>
  );
};
