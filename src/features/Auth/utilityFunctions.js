export const validateCredentils = (credentials) => {
  const regex = /\w+(\d+)?@(gmail|hotmail|outlive).(com|live)/;
  const validateEmail = regex.test(credentials.email);
  if (validateEmail && credentials.password >= 6) {
    return true;
  }
  return false;
};
