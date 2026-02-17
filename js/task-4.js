const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const normalizedEmail = email.value.trim();
  const normalizedPassword = password.value.trim();

  if (!normalizedEmail || !normalizedPassword) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: normalizedEmail,
    password: normalizedPassword,
  };

  console.log(formData);
  event.currentTarget.reset();
});
