import "./index.css";
import moment from "moment";

function renderFooter() {
  // Obtiene el elemento con id "app"
  const appElement = document.getElementById("app");

  // se crea el contenido del footer
  const footerContent = `
    <div id="footer">
      <div>Home</div>
      <div>About</div>
      <div id="date">Date: ${moment().format("DD/MM/YYYY")}</div>
    </div>
  `;

  // Agrega el contenido del footer al final del elemento con id "app"
  appElement.innerHTML += footerContent;
}

// Exporta la funcion para que pueda ser utilizada por otros
export default renderFooter;

// Llama a la función para renderizar el footer
renderFooter();