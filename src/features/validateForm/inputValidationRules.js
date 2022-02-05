/**
 * creates and returns a validation rule object that
 * is used by useForm hook to validate the form inputs
 *
 * @param {string} ruleName - name of the validation rule
 * @param {string} errorMessage - message to display
 * @param {function} validateFunc - validation function
 */
function createValidationRule(ruleName, errorMessage, validateFunc) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
}

export function emailRule(inputName) {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return createValidationRule(
    "emailRegex",
    `Insert a valid email!`,
    (inputValue, formObj) => emailRegex.test(inputValue)
  );
}

export function nameRegex(inputName) {
  const nameRegex = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
  return createValidationRule(
    "nameRegex",
    `Insert a valid name!`,
    (inputValue, formObj) => nameRegex.test(inputValue)
  );
}

export function usernameRegex(inputName) {
  const usernameRegex = /^[a-z0-9_.]+$/;
  return createValidationRule(
    "usernameRegex",
    `Only . and _ as special characters`,
    (inputValue, formObj) => {
      if (inputValue.length > 0) {
        usernameRegex.test(inputValue);
      }
      return true;
    }
  );
}

export function requiredRule(inputName) {
  return createValidationRule(
    "required",
    `${inputName} required`,
    (inputValue, formObj) => inputValue.length !== 0
  );
}

export function minLengthRule(inputName, minCharacters) {
  return createValidationRule(
    "minLength",
    `${inputName} should contain atleast ${minCharacters} characters`,
    (inputValue, formObj) =>
      inputValue.length >= minCharacters || inputValue.length === 0
  );
}

export function maxLengthRule(inputName, maxCharacters) {
  return createValidationRule(
    "minLength",
    `${inputName} cannot contain more than ${maxCharacters} characters`,
    (inputValue, formObj) => inputValue.length <= maxCharacters
  );
}
