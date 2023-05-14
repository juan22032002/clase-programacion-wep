document.getElementById("valNombre").style.display = "none";
document.getElementById("valDescripcion").style.display = "none";
document.getElementById("valValor").style.display = "none";
document.getElementById("valStock").style.display = "none";
/* document.getElementById("valNombreImagen").style.display = "none"; */

document.getElementById("ocultar").style.display = "none"; 

function validarForm(){
    let txtNombre = document.getElementById("txtNombre").value;
    let txtDescripcion = document.getElementById("txtDescripcion").value;
    let txtValor = document.getElementById("txtValor").value;
    let txtStock = document.getElementById("txtStock").value;
    /* let txtNombreImagen = document.getElementById("txtNombreImagen").value; */

/*     if (txtRut.length == 0) {
    if (txtRut.length == 0) {
        alert("Debe ingresar su rut.");
        return;
    }
    if (txtNombre.length == 0) {
        alert("Debe ingresar su nombre.");
        return;
    }
    if (txtApellido.length == 0) {
        alert("Debe ingresar su apellido.");
        return;
    } */


    if (txtNombre.length == 0) {
        document.getElementById("valNombre").style.display = "inline";
        document.getElementById("txtNombre").classList.add("is-invalid");
    }else{
        document.getElementById("txtNombre").classList.remove("is-invalid");
        document.getElementById("txtNombre").classList.add("is-valid");
        document.getElementById("valNombre").style.display = "none";
    }

    if (txtDescripcion.length == 0) {
        document.getElementById("valDescripcion").style.display = "inline";
        document.getElementById("txtDescripcion").classList.add("is-invalid");
    }else{
        document.getElementById("txtDescripcion").classList.remove("is-invalid");
        document.getElementById("txtDescripcion").classList.add("is-valid");
        document.getElementById("valDescripcion").style.display = "none";
    }

     if (txtValor.length == 0) {
        document.getElementById("valValor").style.display = "inline";
        document.getElementById("txtValor").classList.add("is-invalid");
    }else{
        document.getElementById("txtValor").classList.remove("is-invalid");
        document.getElementById("txtValor").classList.add("is-valid");
        document.getElementById("valValor").style.display = "none";
    }

    if (txtStock.length == 0) {
        document.getElementById("valStock").style.display = "inline";
        document.getElementById("txtStock").classList.add("is-invalid");
    }else{
        document.getElementById("txtStock").classList.remove("is-invalid");
        document.getElementById("txtStock").classList.add("is-valid");
        document.getElementById("valStock").style.display = "none";
    }

   /*  if (txtNombreImagen.length == 0) {
        document.getElementById("valNombreImagen").style.display = "inline"; 
        document.getElementById("txtNombreImagen").classList.add("is-invalid");
    }else{
        document.getElementById("txtNombreImagen").classList.remove("is-invalid");
        document.getElementById("txtNombreImagen").classList.add("is-valid");
        document.getElementById("valNombreImagen").style.display = "none"; 
    } */
 
  






    

}