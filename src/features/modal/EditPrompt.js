import { useDispatch } from "react-redux";
import { closeModal } from "./modalSlice";
import { editUserAsync } from "../users/usersSlice";
import { userForm } from "../validateForm/formConfig";
import useForm from "../validateForm/useForm";
import { Button, Typography, Container, Paper, Divider } from "@mui/material";

export const EditPrompt = ({ user }) => {
  const dispatch = useDispatch();

  const { renderFormInputs, isFormValid } = useForm(userForm);

  function submitForm(e) {
    //didnt pass id here, will use email in filter
    e.preventDefault();

    let updatedUser = {
      id: user.id,
      name: e.target[0].value,
      email: e.target[2].value,
      username: "",
      address: { city: "" },
    };

    if (e.target[4].value.length > 0) {
      updatedUser["username"] = e.target[4].value;
    }

    if (e.target[6].value.length > 0) {
      updatedUser["address"]["city"] = e.target[6].value;
    }

    dispatch(editUserAsync(updatedUser));
    dispatch(closeModal());
  }

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        minWidth: "40vw",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Typography variant="h6" p={2} sx={{ fontWeight: "bold" }}>
          Edit
        </Typography>
      </Container>
      <Divider sx={{ width: "100%" }} />
      <form className="userForm" onSubmit={(e) => submitForm(e)}>
        {user && renderFormInputs(user)}
        <Container
          sx={{
            display: "flex",
            justifyContent: "right",
            marginTop: "20px",
            marginBottom: "20px",
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
            type="submit"
            variant="contained"
            sx={{
              textTransform: "none",
              width: "40%",
            }}
            disabled={isFormValid() === "false"}
          >
            Submit
          </Button>
        </Container>
      </form>
    </Paper>
  );
};
