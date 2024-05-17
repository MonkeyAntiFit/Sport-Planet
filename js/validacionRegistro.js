function validar(){
    var form = document.form;

    if (form.nombre.value == 0) {
        alert("el campo nombre esta vacio ");
        form.nombre.value="";
        form.nombre.focus();
        return false;
    };
    if (form.apellido.value == 0) {
        alert("El campo apellido esta vacio ");
        form.apellido.value="";
        form.apellido.focus();
        return false;
    };
    if (form.correo.value == 0) {
        alert("El campo correo esta vacio ");
        form.correo.value="";
        form.correo.focus();
        return false;
    };
    if (form.contraseña.value == 0) {
        alert("El campo contraseña esta vacio ");
        form.contraseña.value="";
        form.contraseña.focus();
        return false;
    };
    if (form.confirmarContraseña.value == 0) {
        alert("El campo confirmar Contraseña esta vacio ");
        form.confirmarContraseña.value="";
        form.confirmarContraseña.focus();
        return false;
    };
    if (form.confirmarContraseña.value !== form.contraseña.value) {
        alert("La contraseña no coincide!!");
        form.confirmarContraseña.value="";
        form.confirmarContraseña.focus();
        return false;
    };
    alert("Se ha registrado con exito!!");
    form.submit();
    window.location.href = "index.html";
}