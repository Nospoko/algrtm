const validateForm = (name, email, message) => {
  const errors = {};

  if (!name) {
    errors.your_name = "Name field cannot be empty";
  }

  if (!email) {
    errors.your_email = "Email field cannot be empty";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.your_email = "Invalid email address";
  }

  if (!message) {
    errors.message = "Message field cannot be empty";
  }

  return errors;
};

export default validateForm;
