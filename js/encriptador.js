function encriptar(traduccion){
// Esta función encripta el texto del área de entrada
    const textarea = document.querySelector("#texto");
    //Selecciona el área de entrada
    const texto = textarea.value;
    //Obtiene el texto ingresado
    const area_default = document.querySelector("#default");
    //Selecciona el área predeterminada
    const area_result = document.querySelector("#result");
    //Selecciona el área de resultado
    const texto_out = document.querySelector("#texto_out");
    //Selecciona el área de salida

    if (texto !== ""){ 
    //Comprueba que el área de entrada no esté vacía
        let out = ""; 
        //Variable para almacenar el resultado encriptado

        for(let i=0; i < texto.length; i++){ 
        //Itera a través del texto de entrada
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] !== ' ')){
            //Comprueba que el texto de entrada solo contenga letras minúsculas y espacios
                document.querySelector("#warning").style.color = "red";
                //Muestra una advertencia si el texto no cumple con los requisitos
                document.querySelector("#warning").style.fontSize = "16px";
                return;
            } else if((texto.length === 1 && texto === " ") || texto.replace(/ /g, "") === ""){
            //Comprueba si el texto está vacío o solo contiene espacios
                area_default.classList.remove("invisible");
                //Muestra el área predeterminada
                area_result.classList.add("invisible");
                //Oculta el área de resultado
                return;
            }

            switch(texto[i]){
            //Realiza la traducción de cada letra del texto de entrada a la letra correspondiente
                case 'a':
                    out += traduccion["a"];
                    break;
                case 'e':
                    out += traduccion["e"];
                    break;
                case 'i':
                    out += traduccion["i"];
                    break;
                case 'o':
                    out += traduccion["o"];
                    break;
                case 'u':
                    out += traduccion["u"];
                    break;
                default:
                //Si la letra no está en la lista anterior, la añade sin encriptar
                    out += texto[i];
                    break;
            }
        }

        // Muestra el área de texto de resultado y actualiza el texto de salida
        area_default.classList.add("invisible");
        //Oculta el área predeterminada
        area_result.classList.remove("invisible");
        //Muestra el área de resultado
        texto_out.innerHTML = out;
        //Escribe el resultado encriptado en el área de resultado
    }

    return;
    //Sale de la función
}

function desencriptar(traduccion){
// Esta función desencripta el texto del área de entrada con una traducción determinada
    const textarea = document.querySelector("#texto");
    //Selecciona el área de entrada
    let texto = textarea.value;
    //Obtiene el texto ingresado
    const area_default = document.querySelector("#default");
    //Selecciona el área predeterminada
    const area_result = document.querySelector("#result");
    //Selecciona el área de resultado
    const texto_out = document.querySelector("#texto_out");
    //Selecciona el área de salida

    if (texto !== ""){
    //Verifica que el campo de texto no esté vacío
        for(let i=0; i < texto.length; i++){
            //Itera a través del texto de entrada
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] !== ' ')){
                // Verifica si el caracter actual no es una letra minúscula o un espacio
                document.querySelector("#warning").style.color = "red";
                 // Cambia el color del id "warning" 
                document.querySelector("#warning").style.fontSize = "16px";
                 // Cambia el tamaño del elemento con id "warning
                return;
                // Retorna de la función
            } else if((texto.length === 1 && texto === " ") || texto.replace(/ /g, "") === ""){
              //Verifica si el texto no tiene caracteres o solo tiene espacios en blanco, se oculta el área de resultados y se muestra el área de texto por defecto, luego se retorna.
                area_default.classList.remove("invisible");
                // Quita la clase "invisible"
                area_result.classList.add("invisible");
                // Agrega la clase "invisible"
                return;
            }
        }

        // Si no hubo problemas en las validaciones
        area_default.classList.add("invisible");
        // Si no hubo problemas en las validaciones, agrega la clase "invisible" 
        area_result.classList.remove("invisible");
        //Si no hubo problemas en las validaciones. quita la clase "invisible"
        texto = texto.replace(new RegExp(traduccion["a"], "g"), "a")
                     .replace(new RegExp(traduccion["e"], "g"), "e")
                     .replace(new RegExp(traduccion["i"], "g"), "i")
                     .replace(new RegExp(traduccion["o"], "g"), "o")
                     .replace(new RegExp(traduccion["u"], "g"), "u");
        texto_out.innerHTML = texto;
    }

    return;
}

function clipboard(){
// Esta función copia el texto de salida al portapapeles
    const texto_out = document.querySelector("#texto_out");
    // Selecciona el campo de texto de salida
    navigator.clipboard.writeText(texto_out.value);
    // Copia el texto al portapapeles
}

const enc = document.querySelector('#enc'); 
// Botón de encriptar
const des = document.querySelector('#des');
// Botón de desencriptar
const copy = document.querySelector('#copiar');
// Botón de copiar al portapapeles
const traduccion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};
// Traducción utilizada

enc.addEventListener('click', function() {encriptar(traduccion);} );
// Agrega un evento de clic al botón de encriptar
des.addEventListener('click', function() {desencriptar(traduccion);} );
// Agrega un evento de clic al botón de desencriptar
copy.addEventListener('click', function() {clipboard();} );
// Agrega un evento de clic al botón de copiar al portapapeles
