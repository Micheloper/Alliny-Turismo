function isMobile() {
  if (sessionStorage.desktop) return false;
  else if (localStorage.mobile) return true;
  let mobile = [
    "iphone",
    "ipad",
    "android",
    "blackberry",
    "nokia",
    "opera mini",
    "windows mobile",
    "windows phone",
    "iemobile",
  ];
  for (let i in mobile)
    if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0)
      return true;
  return false;
}

const formulario = document.querySelector("#formulario");
const buttonSubmit = document.querySelector("#submit");
const urlDesktop = "https://web.whatsapp.com/";
const urlMobile = "whatsapp://";
const telefono = "5521990076850";

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';
  buttonSubmit.disabled = true;
  setTimeout(() => {
    let Nome = document.querySelector("#Nome").value;
    let Telefone = document.querySelector("#Telefone").value;
    let Data = document.querySelector("#Data").value;
    let email = document.querySelector("#email").value;
    let Service = document.querySelector("#Service").value;
    let NdA = document.querySelector("#my-input").value;
    let NdC = document.querySelector("#my-input_").value;
    let Mensage = document.querySelector("#Mensage").value;

    let mensaje =
      "send?phone=" +
      telefono +
      "&text=*_FORMULARIO DE RESERVA_*%0A*Nome?*%0A" +
      "🢂" +
      Nome +
      "%0A*Telefone?*%0A" +
      "🢂" +
      Telefone +
      "%0A*Data do Passeio?*%0A" +
      "🢂" +
      Data +
      "%0A*E-mail?*%0A" +
      "🢂" +
      email +
      "%0A*Serviço Escolhido?*%0A" +
      "🢂" +
      Service +
      "%0A**Numero de Adulto?*%0A" +
      "🢂" +
      NdA +
      "%0A*Numero de Criança?*%0A" +
      "🢂" +
      NdC +
      "%0A*Duvida*%0A" +
      "🢂" +
      Mensage +
      "";
    if (isMobile()) {
      window.open(urlMobile + mensaje, "_blank");
    } else {
      window.open(urlDesktop + mensaje, "_blank");
    }
    buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp';
    buttonSubmit.disabled = false;
  }, 3000);
});

const myInput = document.getElementById("my-input");
function stepper(btn) {
  let id = btn.getAttribute("id");
  let min = myInput.getAttribute("min");
  let max = myInput.getAttribute("max");
  let step = myInput.getAttribute("step");
  let val = myInput.getAttribute("value");
  let calcStep = id == "increment" ? step * 1 : step * -1;
  let newValue = parseInt(val) + calcStep;

  if (newValue >= min && newValue <= max) {
    myInput.setAttribute("value", newValue);
  }
}
const myInput_ = document.getElementById("my-input_");
function stepper_(btn_) {
  let id_ = btn_.getAttribute("id");
  let min_ = myInput_.getAttribute("min");
  let max_ = myInput_.getAttribute("max");
  let step_ = myInput_.getAttribute("step");
  let val_ = myInput_.getAttribute("value");
  let calcStep_ = id_ == "increment_" ? step_ * 1 : step_ * -1;
  let newValue_ = parseInt(val_) + calcStep_;

  if (newValue_ >= min_ && newValue_ <= max_) {
    myInput_.setAttribute("value", newValue_);
  }
}
