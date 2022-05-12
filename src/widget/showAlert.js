import ReactDOM from "react-dom";
import * as React from "react";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

export const showAlert = (text, type, time, variant) => {
  let div = document.createElement("div");
  document.body.appendChild(div);
  div.id = "alert";
  let open = true;

  ReactDOM.render(
    <Snackbar open={open}>
      <Alert
        variant={variant ? variant : "filled"}
        severity={type.toLowerCase()}
      >
        {text}
      </Alert>
    </Snackbar>,
    document.getElementById("alert")
  );

  setTimeout(() => {
    ReactDOM.render(<> </>, document.getElementById("alert"));
    div.remove();
  }, time);
};
