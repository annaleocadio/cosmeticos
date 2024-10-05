function validatePassword(password) {
  const minLength = 8;
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const digit = /\d/;
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

  if (password.length < minLength) {
    return "A senha deve ter pelo menos 8 caracteres.";
  }
  if (!upperCase.test(password)) {
    return "A senha deve conter pelo menos uma letra maiúscula.";
  }
  if (!lowerCase.test(password)) {
    return "A senha deve conter pelo menos uma letra minúscula.";
  }
  if (!digit.test(password)) {
    return "A senha deve conter pelo menos um número.";
  }
  if (!specialChar.test(password)) {
    return "A senha deve conter pelo menos um caractere especial.";
  }
  return "Senha válida.";
}

function checkPassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const passwordMessage = validatePassword(password);
  document.getElementById("passwordMessage").innerText = passwordMessage;

  if (password !== confirmPassword) {
    document.getElementById("confirmMessage").innerText =
      "As senhas não coincidem.";
    return false;
  } else {
    document.getElementById("confirmMessage").innerText = "";
  }

  return passwordMessage === "Senha válida.";
}

// function checkAge() {
//     const birthDate = new Date(document.getElementById("birthDate").value);
//     const today = new Date();
//     const age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//         age--;
//     }

//     if (age < 18) {
//         document.getElementById("ageMessage").innerText = "Você deve ter pelo menos 18 anos.";
//         return false;
//     }
//     else {
//         document.getElementById("ageMessage").innerText = "";
//     }
//     return true;
// }

function updateCities() {
  const state = document.getElementById("state").value;
  const cities = {
    SP: ["São Paulo", "Campinas", "Santos"],
    RJ: ["Rio de Janeiro", "Niterói", "Petrópolis"],
    MG: ["Belo Horizonte", "Nova Lima", "Ouro Preto"],
    ES: ["Vitória", "Vila Velha", "Serra"],
  };
  const citySelect = document.getElementById("city");
  citySelect.innerHTML = "<option value=''>Selecione uma cidade</option>";
  if (state) {
    cities[state].forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.text = city;
      citySelect.add(option);
    });
    citySelect.disabled = false;
  } else {
    citySelect.disabled = true;
  }
}

function validateForm() {
  const passwordValid = checkPassword();
  // const ageValid = checkAge();
  const message = document.getElementById("message").value !== "";
  const stateSelected = document.getElementById("state").value !== "";
  const citySelected = document.getElementById("city").value !== "";

  if (passwordValid && message && stateSelected && citySelected) {
    window.alert("Formulário enviado com sucesso!");
    return true;
  } else {
    document.getElementById("formMessage").innerText =
      "Por favor, preencha todos os campos corretamente.";
    return false;
  }
}
