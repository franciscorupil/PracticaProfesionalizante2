function verificar() {
    if (document.getElementById('nombre', 'mail', 'telefono', 'contraseña').value =="") {
        window.alert('completar campos');
    }  else if (document.getElementById('nombre').value =="") {
        window.alert('completar campo nombre');
    }  else if (document.getElementById('mail').value =="") {
        window.alert('completar campo mail');
    }  else if (document.getElementById('telefono').value =="") {
        window.alert('completar campo telefono');
    }  else if (document.getElementById('contraseña').value =="") {
        window.alert('completar campo contraseña');
    }  else {
        window.alert('Formulario realizado con exito');
    }
}