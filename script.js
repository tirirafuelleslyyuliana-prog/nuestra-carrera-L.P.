// =========================================================
// CAMBIAR DE PANTALLA
// =========================================================

function irA(id) {

    const pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {

        pantalla.classList.remove("activa");

    });


    const destino = document.getElementById(id);

    if (destino) {

        destino.classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


// =========================================================
// TARJETAS INTERACTIVAS
// =========================================================

function abrirTarjeta(tarjeta) {

    tarjeta.classList.toggle("abierta");

}


// =========================================================
// RESPUESTA DE PAUL
// =========================================================

function respuesta(opcion) {

    const mensaje =
        document.getElementById("respuesta");


    if (!mensaje) {
        return;
    }


    if (opcion === "si") {

        mensaje.innerHTML =
            "🏎️❤️ Entonces seguimos corriendo juntos...";

    }

    else {

        mensaje.innerHTML =
            "❤️ Entonces prepárate, porque todavía quedan muchas vueltas.";

    }


    setTimeout(function() {

        irA("casi-meta");

    }, 2500);

}


// =========================================================
// CONFETI
// =========================================================

function crearConfeti() {

    const contenedor =
        document.getElementById("confeti");


    if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";


    const emojis = [
        "❤️",
        "🏎️",
        "🔥",
        "✨",
        "🏁",
        "⭐",
        "🫶"
    ];


    for (let i = 0; i < 55; i++) {

        const pieza =
            document.createElement("div");


        pieza.classList.add(
            "confeti-pieza"
        );


        pieza.textContent =
            emojis[
                Math.floor(
                    Math.random() *
                    emojis.length
                )
            ];


        pieza.style.left =
            Math.random() * 100 + "%";


        pieza.style.animationDelay =
            Math.random() * 2 + "s";


        pieza.style.animationDuration =
            (2 + Math.random() * 2) + "s";


        contenedor.appendChild(pieza);

    }

}


// =========================================================
// BOTONES - PEQUEÑO EFECTO DE PRESIÓN
// =========================================================

document.addEventListener(
    "click",
    function(event) {

        if (
            event.target.tagName ===
            "BUTTON"
        ) {

            event.target.style.transform =
                "scale(0.95)";


            setTimeout(function() {

                event.target.style.transform =
                    "";

            }, 120);

        }

    }
);


// =========================================================
// INICIO
// =========================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const inicio =
            document.getElementById("inicio");


        if (inicio) {

            inicio.classList.add(
                "activa"
            );

        }

    }
);