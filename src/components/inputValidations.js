/*
 * Input validation with superstruct structures errors
 * - set error messages if any
 */

export function messageWith(structureErrors, setMessage) {
  const msg = {};
  const { path, value, type } = structureErrors;
  const key = path[0];
  if (value === undefined) {
    msg[key] = `${key} required`;
  } else if (type === "never") {
    msg[key] = `attribute unknown`;
  } else {
    msg[key] = `${key} is invalid`;
  }
  console.log(msg);
  setMessage(msg);
}
