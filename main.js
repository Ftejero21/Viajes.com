// Aqui comenzamos con las Animaciones//

window.sr = ScrollReveal();


sr.reveal('.titulo',{
    duration: 2000,
    origin: "bottom",
    distance: "400px"



});

sr.reveal('#caja1',{
    duration: 1500,
    origin:"left",
    distance: "300px"
});

sr.reveal('#caja2',{
    duration: 1500,
    origin:"right",
    distance: "300px"
});

sr.reveal('#caja3',{
    duration: 1500,
    origin:"left",
    distance: "300px"
});


   // validacion Formulario//
    
    


    function validar(){
        const nombre = document.getElementById("nombre")
        const apellido = document.getElementById('apellido')
        const email = document.getElementById('email')
        

        if (nombre.value.length < 6) {
            document.getElementById("nombre").style.borderBottomColor = "red"
        } else{
            
            document.getElementById("nombre").style.borderBottomColor = "green"
            
        }

        if (apellido.value.length < 6) {
            document.getElementById("apellido").style.borderBottomColor = "red"
        } else {
            document.getElementById("apellido").style.borderBottomColor = "green"
        }

        if (email.value.length < 9) {
            document.getElementById("email").style.borderBottomColor = "red"
        } else {
            document.getElementById("email").style.borderBottomColor = "green"
        }
    }

    // Aqui crearemos la funcion alerta para los botones de "ver Mas"


function warnings(){
    alert("Funcion No Disponble, Gracias por visitarnos");
}