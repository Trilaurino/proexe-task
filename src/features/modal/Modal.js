import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  Container,
  Paper,
  Divider,
  TextField,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { closeModal, selectModal } from "./modalSlice";
import { EditPrompt } from "./EditPrompt";
import { DeletePrompt } from "./DeletePrompt";
import { AddPrompt } from "./AddPrompt";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function OptionsModal() {
  const modalStatus = useSelector(selectModal);
  const dispatch = useDispatch();

  return (
    <div>
      <Modal
        open={modalStatus?.open || false}
        onClose={() => dispatch(closeModal())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          sx={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {modalStatus?.data.type === "delete" ? (
            <DeletePrompt user={modalStatus.data.user} />
          ) : null}
          {modalStatus?.data.type === "edit" ? (
            <EditPrompt user={modalStatus.data.user} />
          ) : null}
          {modalStatus?.data.type === "add" ? <AddPrompt /> : null}
        </Container>
      </Modal>
    </div>
  );
}
