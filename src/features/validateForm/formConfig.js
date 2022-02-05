import React from "react";
import { TextField, Typography, Container } from "@mui/material";

import {
  requiredRule,
  minLengthRule,
  emailRule,
  nameRegex,
  usernameRegex,
} from "./inputValidationRules";

/**
 * creates and returns object representation of form field
 *
 * @param {string} label - label to show with the form input
 * @param {string} name - input name
 * @param {string} type - input type
 * @param {string} defaultValue - default value for the input
 */
function createFormFieldConfig(label, name, type, defaultValue) {
  return {
    renderInput: (handleChange, value, isvalid, error, key, user) => {
      return (
        <Container
          key={key}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "10px",
          }}
        >
          <Typography>{label}</Typography>
          <TextField
            key={key}
            name={name}
            type={type}
            isvalid={isvalid.toString()}
            value={value || ""}
            label={
              (user && user[name]) || (user && user["address"][name]) || ""
            }
            onChange={handleChange}
            error={error ? !isvalid : false}
            helperText={!isvalid ? error : null}
            size="small"
            sx={{ width: "60%" }}
          />
        </Container>
      );
    },
    label,
    value: defaultValue,
    valid: false,
    errorMessage: "",
    touched: false,
  };
}

// object representation of signup form
export const userForm = {
  name: {
    ...createFormFieldConfig("Name", "name", "text"),
    validationRules: [
      nameRegex("name"),
      requiredRule("name"),
      minLengthRule("name", 5),
    ],
  },
  email: {
    ...createFormFieldConfig("Email", "email", "email"),
    validationRules: [emailRule("email"), requiredRule("email")],
  },
  username: {
    ...createFormFieldConfig("Username", "username", "text"),
    valid: true,
    validationRules: [usernameRegex("username"), minLengthRule("username", 6)],
  },
  city: {
    ...createFormFieldConfig("City", "city", "text"),
    valid: true,
    validationRules: [nameRegex("name")],
  },
};
