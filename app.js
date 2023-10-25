const select = document.getElementById("personajeSelect");
        const imagenContainer = document.getElementById("imagenContainer");
        const imagen = document.getElementById("personajeImagen");
     

        select.addEventListener("change", function() {
            const selectedOption = select.options[select.selectedIndex];
            const imageUrl = selectedOption.value;

            if (imageUrl) {
                imagen.src = imageUrl;
                imagenContainer.style.display = "block";
            } else {
                imagenContainer.style.display = "none";
            }
        });
        /////////////////////////////////////////

        
        const variantes = document.getElementById("variantes");


        function actu(){
            
            const imagenContainer2 = document.getElementById("imagenContainer2");
            const imagen2 = document.getElementById("personajeImagen2");
            var per1 = document.getElementById("personajeSelect");

            if(per1.value  == "img/Meg_Griffin.webp"){
            
                console.log("entra")

                    var vari = document.getElementById("variantes");
                    console.log(vari.value);

                    if (vari.value == "Temp1") {
                        console.log("entra2");
                        imagen2.src = "img/m1.jpg";
                        imagenContainer2.style.display = "block";
                    }

                    else if (vari.value == "Temp4") {
                        console.log("entra2");
                        imagen2.src = "img/m4.jpg";
                        imagenContainer2.style.display = "block";
                    }

                    else if (vari.value == "Temp5") {
                        console.log("entra2");
                        imagen2.src = "img/m5.jpg";
                        imagenContainer2.style.display = "block";
                    }
                    
                    
                    else {
                        console.log("no entra");
                        imagenContainer2.style.display = "none";
                    }
              

        }

///////////////////
        else if(per1.value  == "img/Peter_Griffin.webp"){
            console.log("entra")

            var vari = document.getElementById("variantes");
            console.log(vari.value);

            if (vari.value == "Temp1") {
                console.log("entra2");
                imagen2.src = "img/p1.jpg";
                imagenContainer2.style.display = "block";
            }

            else if (vari.value == "Temp2") {
                console.log("entra2");
                imagen2.src = "img/p2.jpg";
                imagenContainer2.style.display = "block";
            }

            else if (vari.value == "Temp3") {
                console.log("entra2");
                imagen2.src = "img/p3.jpg";
                imagenContainer2.style.display = "block";
            }
            
            
            else {
                console.log("no entra");
                imagenContainer2.style.display = "none";
            }
        }
        
///////////////////

else if(per1.value  == "img/Glenn.webp"){
    console.log("entra")

    var vari = document.getElementById("variantes");
    console.log(vari.value);

    if (vari.value == "Temp1") {
        console.log("entra2");
        imagen2.src = "img/g1.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp2") {
        console.log("entra2");
        imagen2.src = "img/g2.webp";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp3") {
        console.log("entra2");
        imagen2.src = "img/g3.jpg";
        imagenContainer2.style.display = "block";
    }
    
    
    else {
        console.log("no entra");
        imagenContainer2.style.display = "none";
    }
}


//////////////////

else if(per1.value  == "img/Stewie_Griffin.webp"){
    console.log("entra")

    var vari = document.getElementById("variantes");
    console.log(vari.value);

    if (vari.value == "Temp1") {
        console.log("entra2");
        imagen2.src = "img/s1.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp3") {
        console.log("entra2");
        imagen2.src = "img/s3.webp";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp5") {
        console.log("entra2");
        imagen2.src = "img/s5.webp";
        imagenContainer2.style.display = "block";
    }
    
    
    else {
        console.log("no entra");
        imagenContainer2.style.display = "none";
    }
}


//////////////////


else if(per1.value  == "img/Brian_Griffin.webp"){
    console.log("entra")

    var vari = document.getElementById("variantes");
    console.log(vari.value);

    if (vari.value == "Temp1") {
        console.log("entra2");
        imagen2.src = "img/b1.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp5") {
        console.log("entra2");
        imagen2.src = "img/b5.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp7") {
        console.log("entra2");
        imagen2.src = "img/b7.jpg";
        imagenContainer2.style.display = "block";
    }
    
    
    else {
        console.log("no entra");
        imagenContainer2.style.display = "none";
    }
}


//////////////////

else if(per1.value  == "img/Lois_Griffin.webp"){
    console.log("entra")

    var vari = document.getElementById("variantes");
    console.log(vari.value);

    if (vari.value == "Temp1") {
        console.log("entra2");
        imagen2.src = "img/l1.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp2") {
        console.log("entra2");
        imagen2.src = "img/l2.png";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp7") {
        console.log("entra2");
        imagen2.src = "img/l7.jpg";
        imagenContainer2.style.display = "block";
    }
    
    
    else {
        console.log("no entra");
        imagenContainer2.style.display = "none";
    }
}


//////////////////

else if(per1.value  == "img/Mono_Malvado.webp"){
    console.log("entra")

    var vari = document.getElementById("variantes");
    console.log(vari.value);

    if (vari.value == "Temp1") {
        console.log("entra2");
        imagen2.src = "img/mono1.webp";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp2") {
        console.log("entra2");
        imagen2.src = "img/mono2.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp4") {
        console.log("entra2");
        imagen2.src = "img/mono4.jpg";
        imagenContainer2.style.display = "block";
    }
    
    
    else {
        console.log("no entra");
        imagenContainer2.style.display = "none";
    }
}


//////////////////


else if(per1.value  == "img/Ernie.webp"){
    console.log("entra")

    var vari = document.getElementById("variantes");
    console.log(vari.value);

    if (vari.value == "Temp1") {
        console.log("entra2");
        imagen2.src = "img/pollo1.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp4") {
        console.log("entra2");
        imagen2.src = "img/pollo4.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp5") {
        console.log("entra2");
        imagen2.src = "img/pollo5.webp";
        imagenContainer2.style.display = "block";
    }
    
    
    else {
        console.log("no entra");
        imagenContainer2.style.display = "none";
    }
}


//////////////////


else if(per1.value  == "img/Chris_Griffin.webp"){
    console.log("entra")

    var vari = document.getElementById("variantes");
    console.log(vari.value);

    if (vari.value == "Temp1") {
        console.log("entra2");
        imagen2.src = "img/c1.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp3") {
        console.log("entra2");
        imagen2.src = "img/c3.jpg";
        imagenContainer2.style.display = "block";
    }

    else if (vari.value == "Temp5") {
        console.log("entra2");
        imagen2.src = "img/c5.jpg";
        imagenContainer2.style.display = "block";
    }
    
    
    else {
        console.log("no entra");
        imagenContainer2.style.display = "none";
    }
}


//////////////////

        }



        variantes.addEventListener("change", actu);
        
        
        ////////////////////////////////////////////////

        const personajeSelect = document.getElementById("personajeSelect");
        const variantesSelect = document.getElementById("variantes");

        
        const segundos = {
            selecciona: ["Selecciona"],
            "img/Peter_Griffin.webp": ["Temp1", "Temp2", "Temp3"],
            "img/Glenn.webp": ["Temp1", "Temp2", "Temp3"],
            "img/Meg_Griffin.webp": ["Temp1", "Temp4", "Temp5"],
            "img/Stewie_Griffin.webp": ["Temp1", "Temp3", "Temp5"],
            "img/Brian_Griffin.webp": ["Temp1", "Temp5", "Temp7"],
            "img/Lois_Griffin.webp": ["Temp1", "Temp2", "Temp7"],
            "img/Eliza_Pinchley.webp": ["Temp1"],
            "img/Mono_Malvado.webp": ["Temp1", "Temp2", "Temp4"],
            "img/Ernie.webp": ["Temp1", "Temp4", "Temp5"],
            "img/Chris_Griffin.webp": ["Temp1", "Temp3", "Temp5"],
        };

        // Función para actualizar las opciones del select de ciudades
        function actualizarVariantes() {
            const personajeSeleccionado = personajeSelect.value;
            const seg = segundos[personajeSeleccionado];
            const imagen2 = document.getElementById("personajeImagen2");

            variantes.innerHTML = ""; // Limpia las opciones actuales

            for (let per of seg) {
                const opcion = document.createElement("option");
                opcion.value = per;
                opcion.textContent = per;
                variantesSelect.appendChild(opcion);
            }
            variantesSelect.disabled = false;
            imagen2.src = "img/Wiki-wordmark.webp";
            if(personajeSelect.value == "img/Eliza_Pinchley.webp"){
                imagen2.src = "img/Eliza_Pinchley.webp";
            }
        }

        // Agrega un evento de cambio al select de países
        personajeSelect.addEventListener("change", actualizarVariantes);

        // Inicialmente, deshabilita el select de ciudades
        variantesSelect.disabled = true;


        ///////////////////////////////onclick

        

        function newContent() {
            var p1 = document.getElementById("personajeSelect");
            var v1 = document.getElementById("variantes");
            

            if(p1.value  == "img/Meg_Griffin.webp"){
            
                console.log("entra")

                    var v1 = document.getElementById("variantes");

                    if (v1.value == "Temp1") {

                        document.open();
                        document.write(`<link rel="stylesheet" href="estilos3.css">`);
                        document.write(`<h1>Meg Griffin</h1>
                        <h1>Temp1</h1>
                        <center>
                        <img id="personajeImagen" src="img/m1.jpg" alt="Imagen del personaje"> </center>
                        <p>Megatron Griffin o simplemente Meg, es un personaje ficticio de la serie Padre de familia creada por Seth MacFarlane. Desde el año 2000 cuenta con la voz de Mila Kunis salvo en las canciones, de las que se encarga Tara Strong. Con 18 años es la hermana mayor de la familia Griffin por delante de Chris y Stewie Griffin.</p>`
                        );
                        document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                        document.close();

                    }

                    else if (v1.value == "Temp4") {
                        document.open();
                        document.write(`<link rel="stylesheet" href="estilos3.css">`);

                        document.write(`<h1>Meg Griffin</h1>
                        <h1>Temp4</h1>
                        <center>
                        <img id="personajeImagen" src="img/m4.jpg" alt="Imagen del personaje"></center>
                        <p>Megatron Griffin o simplemente Meg, es un personaje ficticio de la serie Padre de familia creada por Seth MacFarlane. Desde el año 2000 cuenta con la voz de Mila Kunis salvo en las canciones, de las que se encarga Tara Strong. Con 18 años es la hermana mayor de la familia Griffin por delante de Chris y Stewie Griffin.</p>`
                        );
                        document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                        document.close();
                    }

                    else if (v1.value == "Temp5") {
                        document.open();
                        document.write(`<link rel="stylesheet" href="estilos3.css">`);
                        document.write(`<h1>Meg Griffin</h1>
                        <h1>Temp5</h1>
                        <center>
                        <img id="personajeImagen" src="img/m5.jpg" alt="Imagen del personaje"></center>
                        <p>Megatron Griffin o simplemente Meg, es un personaje ficticio de la serie Padre de familia creada por Seth MacFarlane. Desde el año 2000 cuenta con la voz de Mila Kunis salvo en las canciones, de las que se encarga Tara Strong. Con 18 años es la hermana mayor de la familia Griffin por delante de Chris y Stewie Griffin.</p>`
                        );
                        document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                        document.close();
                    }
                    
                    
                    else {
                        console.log("no entra");
                        
                    }

                    /////////////////

                   
            // document.write(`<h1>`+ p1.value +`</h1>`);
            // document.close();
          }

          else if(p1.value  == "img/Peter_Griffin.webp"){
            
            console.log("entra")

                var v1 = document.getElementById("variantes");

                if (v1.value == "Temp1") {

                    document.open();
                    document.write(`<link rel="stylesheet" href="estilos3.css">`);
                    document.write(`<h1>Peter Griffin</h1>
                    <h1>Temp1</h1>
                    <center>
                    <img id="personajeImagen" src="img/p1.jpg" alt="Imagen del personaje"> </center>
                    <p>Peter Löwenbrau McFinnigan Griffin, conocido sencillamente como Peter Griffin, es un personaje ficticio y protagonista principal de la serie Padre de familia.</p>`
                    );
                    document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                    document.close();

                }

                else if (v1.value == "Temp2") {
                    document.open();
                    document.write(`<link rel="stylesheet" href="estilos3.css">`);

                    document.write(`<h1>Peter Griffin</h1>
                    <h1>Temp2</h1>
                    <center>
                    <img id="personajeImagen" src="img/p2.jpg" alt="Imagen del personaje"></center>
                    <p>Peter Löwenbrau McFinnigan Griffin, conocido sencillamente como Peter Griffin, es un personaje ficticio y protagonista principal de la serie Padre de familia.</p>`
                    );
                    document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                    document.close();
                }

                else if (v1.value == "Temp3") {
                    document.open();
                    document.write(`<link rel="stylesheet" href="estilos3.css">`);
                    document.write(`<h1>Peter Griffin</h1>
                    <h1>Temp3</h1>
                    <center>
                    <img id="personajeImagen" src="img/p3.jpg" alt="Imagen del personaje"></center>
                    <p>Peter Löwenbrau McFinnigan Griffin, conocido sencillamente como Peter Griffin, es un personaje ficticio y protagonista principal de la serie Padre de familia.</p>`
                    );
                    document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                    document.close();
                }
                
                
                else {
                    console.log("no entra");
                    
                }
        }
        ////////////////////////////////

        if(p1.value  == "img/Glenn.webp"){
            
            console.log("entra")

                var v1 = document.getElementById("variantes");

                if (v1.value == "Temp1") {

                    document.open();
                    document.write(`<link rel="stylesheet" href="estilos3.css">`);
                    document.write(`<h1>Glenn Quagmire</h1>
                    <h1>Temp1</h1>
                    <center>
                    <img id="personajeImagen" src="img/g1.jpg" alt="Imagen del personaje"> </center>
                    <p>Glenn Quagmire es un personaje ficticio de la serie animada Padre de familia, es conocido por su promiscuidad y su hipersexualidad. Trabaja como piloto aéreo en la aerolínea comercial Transnational, anteriormente fue alférez en la marina. Quagmire es vecino y amigo de la familia Griffin.</p>`
                    );
                    document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                    document.close();

                }

                else if (v1.value == "Temp2") {
                    document.open();
                    document.write(`<link rel="stylesheet" href="estilos3.css">`);

                    document.write(`<h1>Glenn Quagmire</h1>
                    <h1>Temp2</h1>
                    <center>
                    <img id="personajeImagen" src="img/g2.webp" alt="Imagen del personaje"></center>
                    <p>Glenn Quagmire es un personaje ficticio de la serie animada Padre de familia, es conocido por su promiscuidad y su hipersexualidad. Trabaja como piloto aéreo en la aerolínea comercial Transnational, anteriormente fue alférez en la marina. Quagmire es vecino y amigo de la familia Griffin.</p>`
                    );
                    document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                    document.close();
                }

                else if (v1.value == "Temp3") {
                    document.open();
                    document.write(`<link rel="stylesheet" href="estilos3.css">`);
                    document.write(`<h1>Glenn Quagmire</h1>
                    <h1>Temp3</h1>
                    <center>
                    <img id="personajeImagen" src="img/g3.jpg" alt="Imagen del personaje"></center>
                    <p>Glenn Quagmire es un personaje ficticio de la serie animada Padre de familia, es conocido por su promiscuidad y su hipersexualidad. Trabaja como piloto aéreo en la aerolínea comercial Transnational, anteriormente fue alférez en la marina. Quagmire es vecino y amigo de la familia Griffin.</p>`
                    );
                    document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                    document.close();
                }
                
                
                else {
                    console.log("no entra");
                    
                }
 
            }


            ////////////////////////////////

        if(p1.value  == "img/Stewie_Griffin.webp"){
            
            console.log("entra")

                var v1 = document.getElementById("variantes");

                if (v1.value == "Temp1") {

                    document.open();
                    document.write(`<link rel="stylesheet" href="estilos3.css">`);
                    document.write(`<h1>Stewie Griffin</h1>
                    <h1>Temp1</h1>
                    <center>
                    <img id="personajeImagen" src="img/s1.jpg" alt="Imagen del personaje"> </center>
                    <p>Stewart Gilligan Griffin, más conocido como Stewie es un personaje ficticio de la serie de animación estadounidense Padre de familia. El personaje, un lactante es conocido por su obsesión con las armas junto con el matricidio y la megalomanía, aunque en las últimas temporadas ha prescindido de estas dos últimas.</p>`
                    );
                    document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                    document.close();

                }

                else if (v1.value == "Temp3") {
                    document.open();
                    document.write(`<link rel="stylesheet" href="estilos3.css">`);

                    document.write(`<h1>Stewie Griffin</h1>
                    <h1>Temp3</h1>
                    <center>
                    <img id="personajeImagen" src="img/s3.webp" alt="Imagen del personaje"></center>
                    <p>Stewart Gilligan Griffin, más conocido como Stewie es un personaje ficticio de la serie de animación estadounidense Padre de familia. El personaje, un lactante es conocido por su obsesión con las armas junto con el matricidio y la megalomanía, aunque en las últimas temporadas ha prescindido de estas dos últimas.</p>`
                    );
                    document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                    document.close();
                }

                else if (v1.value == "Temp5") {
                    document.open();
                    document.write(`<link rel="stylesheet" href="estilos3.css">`);
                    document.write(`<h1>Stewie Griffin</h1>
                    <h1>Temp5</h1>
                    <center>
                    <img id="personajeImagen" src="img/s5.webp" alt="Imagen del personaje"></center>
                    <p>Stewart Gilligan Griffin, más conocido como Stewie es un personaje ficticio de la serie de animación estadounidense Padre de familia. El personaje, un lactante es conocido por su obsesión con las armas junto con el matricidio y la megalomanía, aunque en las últimas temporadas ha prescindido de estas dos últimas.</p>`
                    );
                    document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
                    document.close();
                }
                
                
                else {
                    console.log("no entra");
                    
                }
 
            }

////////////////////////////////

if(p1.value  == "img/Brian_Griffin.webp"){
            
    console.log("entra")

        var v1 = document.getElementById("variantes");

        if (v1.value == "Temp1") {

            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Brian Griffin</h1>
            <h1>Temp1</h1>
            <center>
            <img id="personajeImagen" src="img/b1.jpg" alt="Imagen del personaje"> </center>
            <p>Brian Griffin es un perro ficticio y personaje de la serie Padre de familia. Seth MacFarlane le presta su voz desde los inicios de la serie, aunque su primera aparición fue en un cortometraje en 1998. Brian fue creado y diseñado por MacFarlane basándose en el personaje canino de Larry and Steve.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();

        }

        else if (v1.value == "Temp5") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);

            document.write(`<h1>Brian Griffin</h1>
            <h1>Temp5</h1>
            <center>
            <img id="personajeImagen" src="img/b5.jpg" alt="Imagen del personaje"></center>
            <p>Brian Griffin es un perro ficticio y personaje de la serie Padre de familia. Seth MacFarlane le presta su voz desde los inicios de la serie, aunque su primera aparición fue en un cortometraje en 1998. Brian fue creado y diseñado por MacFarlane basándose en el personaje canino de Larry and Steve.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }

        else if (v1.value == "Temp7") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Brian Griffin</h1>
            <h1>Temp7</h1>
            <center>
            <img id="personajeImagen" src="img/b7.jpg" alt="Imagen del personaje"></center>
            <p>Brian Griffin es un perro ficticio y personaje de la serie Padre de familia. Seth MacFarlane le presta su voz desde los inicios de la serie, aunque su primera aparición fue en un cortometraje en 1998. Brian fue creado y diseñado por MacFarlane basándose en el personaje canino de Larry and Steve.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }
        
        
        else {
            console.log("no entra");
            
        }

    }

    ////////////////////////////////

if(p1.value  == "img/Lois_Griffin.webp"){
            
    console.log("entra")

        var v1 = document.getElementById("variantes");

        if (v1.value == "Temp1") {

            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Lois Griffin</h1>
            <h1>Temp1</h1>
            <center>
            <img id="personajeImagen" src="img/l1.jpg" alt="Imagen del personaje"> </center>
            <p>Lois Patrice Griffin es un personaje ficticio de la serie Padre de familia donde ocupa el cargo de matriarca de la familia protagonista. Alex Borstein le presta su voz en inglés desde su primera aparición en el corto de 1998. Lois fue creada y diseñada por Seth MacFarlane.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();

        }

        else if (v1.value == "Temp2") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);

            document.write(`<h1>Lois Griffin</h1>
            <h1>Temp2</h1>
            <center>
            <img id="personajeImagen" src="img/l2.png" alt="Imagen del personaje"></center>
            <p>Lois Patrice Griffin es un personaje ficticio de la serie Padre de familia donde ocupa el cargo de matriarca de la familia protagonista. Alex Borstein le presta su voz en inglés desde su primera aparición en el corto de 1998. Lois fue creada y diseñada por Seth MacFarlane.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }

        else if (v1.value == "Temp7") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Lois Griffin</h1>
            <h1>Temp7</h1>
            <center>
            <img id="personajeImagen" src="img/l7.jpg" alt="Imagen del personaje"></center>
            <p>Lois Patrice Griffin es un personaje ficticio de la serie Padre de familia donde ocupa el cargo de matriarca de la familia protagonista. Alex Borstein le presta su voz en inglés desde su primera aparición en el corto de 1998. Lois fue creada y diseñada por Seth MacFarlane.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }
        
        
        else {
            console.log("no entra");
            
        }

    }

    ////////////////////////////////

if(p1.value  == "img/Eliza_Pinchley.webp"){
            
    console.log("entra")



            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Eliza Pinchley</h1>
            <h1>Temp1</h1>
            <center>
            <img id="personajeImagen" src="img/Eliza_Pinchley.webp" alt="Imagen del personaje"> </center>
            <p>Eliza Pinchley es un personaje episódico de Padre de Familia, quien aparece en el episodio Adiós a la almeja ebria.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();

            }

            ////////////////////////////////

if(p1.value  == "img/Mono_Malvado.webp"){
            
    console.log("entra")

        var v1 = document.getElementById("variantes");

        if (v1.value == "Temp1") {

            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Mono Malvado</h1>
            <h1>Temp1</h1>
            <center>
            <img id="personajeImagen" src="img/mono1.webp" alt="Imagen del personaje"> </center>
            <p>El Mono Malvado o Mono Malo (Evil Monkey en E.U.A) es un personaje introducido en el episodio Querida Janet. Regularmente atormenta a Chris, lo que lo convirtió en un chiste recurrente en la serie.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();

        }

        else if (v1.value == "Temp2") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);

            document.write(`<h1>Mono Malvado</h1>
            <h1>Temp2</h1>
            <center>
            <img id="personajeImagen" src="img/mono2.jpg" alt="Imagen del personaje"></center>
            <p>El Mono Malvado o Mono Malo (Evil Monkey en E.U.A) es un personaje introducido en el episodio Querida Janet. Regularmente atormenta a Chris, lo que lo convirtió en un chiste recurrente en la serie.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }

        else if (v1.value == "Temp4") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Mono Malvado</h1>
            <h1>Temp4</h1>
            <center>
            <img id="personajeImagen" src="img/mono4.jpg" alt="Imagen del personaje"></center>
            <p>El Mono Malvado o Mono Malo (Evil Monkey en E.U.A) es un personaje introducido en el episodio Querida Janet. Regularmente atormenta a Chris, lo que lo convirtió en un chiste recurrente en la serie.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }
        
        
        else {
            console.log("no entra");
            
        }

    }

    ////////////////////////////////

if(p1.value  == "img/Ernie.webp"){
            
    console.log("entra")

        var v1 = document.getElementById("variantes");

        if (v1.value == "Temp1") {

            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Ernie el Pollo Gigante</h1>
            <h1>Temp1</h1>
            <center>
            <img id="personajeImagen" src="img/pollo1.jpg" alt="Imagen del personaje"> </center>
            <p>Ernie, el pollo gigante es un personaje avícola ficticio de la serie Padre de familia. Es un gallo antropomorfo de tamaño desproporcionado en comparación al de las aves de corral ya que mide casi lo mismo que una persona. En la serie actúa como némesis de Peter Griffin.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();

        }

        else if (v1.value == "Temp4") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);

            document.write(`<h1>Ernie el Pollo Gigante</h1>
            <h1>Temp4</h1>
            <center>
            <img id="personajeImagen" src="img/pollo4.jpg" alt="Imagen del personaje"></center>
            <p>Ernie, el pollo gigante es un personaje avícola ficticio de la serie Padre de familia. Es un gallo antropomorfo de tamaño desproporcionado en comparación al de las aves de corral ya que mide casi lo mismo que una persona. En la serie actúa como némesis de Peter Griffin.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }

        else if (v1.value == "Temp5") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Ernie el Pollo Gigante</h1>
            <h1>Temp5</h1>
            <center>
            <img id="personajeImagen" src="img/pollo5.webp" alt="Imagen del personaje"></center>
            <p>Ernie, el pollo gigante es un personaje avícola ficticio de la serie Padre de familia. Es un gallo antropomorfo de tamaño desproporcionado en comparación al de las aves de corral ya que mide casi lo mismo que una persona. En la serie actúa como némesis de Peter Griffin.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }
        
        
        else {
            console.log("no entra");
            
        }

    }

        ////////////////////////////////

if(p1.value  == "img/Chris_Griffin.webp"){
            
    console.log("entra")

        var v1 = document.getElementById("variantes");

        if (v1.value == "Temp1") {

            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Chris Griffin</h1>
            <h1>Temp1</h1>
            <center>
            <img id="personajeImagen" src="img/c1.jpg" alt="Imagen del personaje"> </center>
            <p>Christopher "Cross" Griffin o Chris Griffin es un personaje ficticio estadounidense de la serie Padre de familia creada por Seth MacFarlane. El personaje cuenta con la voz de Seth Green y es el segundo de los tres hijos de Peter y Lois Griffin por delante de Stewie y de Meg.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();

        }

        else if (v1.value == "Temp3") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);

            document.write(`<h1>Chris Griffin</h1>
            <h1>Temp3</h1>
            <center>
            <img id="personajeImagen" src="img/c3.jpg" alt="Imagen del personaje"></center>
            <p>Christopher "Cross" Griffin o Chris Griffin es un personaje ficticio estadounidense de la serie Padre de familia creada por Seth MacFarlane. El personaje cuenta con la voz de Seth Green y es el segundo de los tres hijos de Peter y Lois Griffin por delante de Stewie y de Meg.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }

        else if (v1.value == "Temp5") {
            document.open();
            document.write(`<link rel="stylesheet" href="estilos3.css">`);
            document.write(`<h1>Chris Griffin</h1>
            <h1>Temp5</h1>
            <center>
            <img id="personajeImagen" src="img/c5.jpg" alt="Imagen del personaje"></center>
            <p>Christopher "Cross" Griffin o Chris Griffin es un personaje ficticio estadounidense de la serie Padre de familia creada por Seth MacFarlane. El personaje cuenta con la voz de Seth Green y es el segundo de los tres hijos de Peter y Lois Griffin por delante de Stewie y de Meg.</p>`
            );
            document.write(`<input type="button" value="Volver" onclick="location.reload()">`);
            document.close();
        }
        
        
        else {
            console.log("no entra");
            
        }

    }

        }


        // function abrir() {
            
        //     p1 = document.getElementById("personajeSelect");
        //     v1 = document.getElementById("variantes");
        //     // Abrir nuevo tab
        //     var win = window.open('temporadas.html');
        //     // Cambiar el foco al nuevo tab (punto opcional)
        //     win.focus();
        // }

