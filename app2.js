const personajeSelect = document.getElementById("personajeSelect");
        const variantesSelect = document.getElementById("variantes");

        
        const segundos = {
            selecciona: ["Selecciona"],
            Peter: ["Temp1", "Temp2", "Temp3"],
            Glenn: ["Temp1", "Temp2", "Temp3"],
            Meg: ["Temp1", "Temp4", "Temp5"],
            Stewie: ["Temp1", "Temp3", "Temp5"],
            Brian: ["Temp1", "Temp5", "Temp7"],
            Lois: ["Temp1", "Temp2", "Temp7"],
            Eliza: ["Temp1"],
            Mono: ["Temp1", "Temp2", "Temp4"],
            Ernie: ["Temp1", "Temp4", "Temp5"],
            Chris: ["Temp1", "Temp3", "Temp5"],
        };

        // Función para actualizar las opciones del select de ciudades
        function actualizarVariantes() {
            const personajeSeleccionado = personajeSelect.value;
            const seg = segundos[personajeSeleccionado];

            variantes.innerHTML = ""; // Limpia las opciones actuales

            for (let per of seg) {
                const opcion = document.createElement("option");
                opcion.value = per;
                opcion.textContent = per;
                variantesSelect.appendChild(opcion);
            }
        }

        // Agrega un evento de cambio al select de países
        personajeSelect.addEventListener("change", actualizarVariantes);

        // Inicialmente, deshabilita el select de ciudades
        variantesSelect.disabled = true;