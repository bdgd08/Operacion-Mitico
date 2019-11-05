(function() {

  "use strict";


  document.addEventListener('DOMContentLoaded', function() {

    // Campos Datos usuario
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var errorDiv = document.getElementById('error');

    nombre.addEventListener('blur',validarCampos);
    apellido.addEventListener('blur',validarCampos);
    email.addEventListener('blur', validarEmail);

    function validarCampos() {
        if(this.value == '') {
          errorDiv.style.display = 'block';
          errorDiv.style.border = '1px solid red';
          errorDiv.innerHTML= "Este campo es obligatorio";
          this.style.border = '1px solid red';
          console.log("ponga algo");
        }
        else {
          errorDiv.style.display ='block';
          this.style.border= '1px solid #cccccc';
          errorDiv.innerHTML= "";
        }
        }

    function validarEmail() {

      if(this.value.indexOf ("@") > -1) {
        errorDiv.style.display = 'none';
        this.style.border = '1px solid #cccccc';
    } else {
      errorDiv.style.display = 'block';
      errorDiv.style.border = '1px solid red';
      errorDiv.innerHTML= "Debe tener almenos un @";
      this.style.border = '1px solid red';
  }
}



//     if(document.getElementById('')){
//
//
//       nombre.addEventListener('blur',validarCampos);
//       apellido.addEventListener('blur',validarCampos);
//       email.addEventListener('blur', validarEmail);
//
//       function validarCampos() {
//           if(this.value == '') {
//             errorDiv.style.display = 'block';
//             errorDiv.style.border = '1px solid red';
//             errorDiv.innerHTML= "Este campo es obligatorio";
//             this.style.border = '1px solid red';
//             console.log("ponga algo");
//           }
//           else {
//             errorDiv.style.display ='block';
//             this.style.border= '1px solid #cccccc';
//             errorDiv.innerHTML= "";
//           }
// }
//
//
//   }




  }); // DOM CONTENT LOADED
})();
