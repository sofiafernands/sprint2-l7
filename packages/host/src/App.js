import "./index.css";
import renderHeader from 'header/Header';
import renderFooter from "footer/Footer";



document.getElementById("app").innerHTML = 
`
<div class="container">
  <div>Name: host</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
</div>
`;

renderHeader() // Llama a tu componente header - puede ser en minuscula 
renderFooter() // Llama a tu componente footer - puede ser en minuscula
