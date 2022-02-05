import { Alert, AlertTitle } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAlert } from "./alertSlice";

export function StatusAlert() {
  const alertMessage = useSelector(selectAlert);
  return (
    <div>
      {console.log(alertMessage)}
      {alertMessage.lenght > 0 ? (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          {alertMessage.alert}
        </Alert>
      ) : (
        <></>
      )}
    </div>
  );
}
