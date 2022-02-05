import * as React from "react";
import {
  Modal,
  Container,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { closeModal, selectModal } from "./modalSlice";
import { EditPrompt } from "./EditPrompt";
import { DeletePrompt } from "./DeletePrompt";
import { AddPrompt } from "./AddPrompt";


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
