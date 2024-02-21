

function quitarImagen() {
    let textarea = document.getElementById('texto_resuelto');

    textarea.style.backgroundImage = 'none';
}

function textoinc(){
    
    let textoUsuario = document.getElementById('texto_usuario').value
    let textoModificado = "";
            for (let i = 0; i < textoUsuario.length; i++) {
                let letra = textoUsuario[i];
                if (letra.toLowerCase() === 'a') {
                    textoModificado += 'ai';
                } else if (letra.toLowerCase() === 'i') {
                    textoModificado += 'imes';
                } else if (letra.toLowerCase() === 'e') {
                    textoModificado += 'enter';
                } else if (letra.toLowerCase() === 'o') {
                    textoModificado += 'ober';
                }else if (letra.toLowerCase() === 'u') {
                    textoModificado += 'ufat';
                }    else {
                    textoModificado += letra;
                }
            }    

    document.getElementById('texto_resuelto').textContent= ""+textoModificado;
}

function textodes() {
    let textoUsuario = document.getElementById('texto_usuario').value.toLowerCase();
    let textoModificado = "";

    for (let i = 0; i < textoUsuario.length; i++) {

        if (textoUsuario.substring(i, i + 2) === 'ai') {
            textoModificado += 'a';
            i++;
        } else if (textoUsuario.substring(i, i + 4) === 'imes') {
            textoModificado += 'i';
            i += 3;
        } else if (textoUsuario.substring(i, i + 5) === 'enter') {
            textoModificado += 'e';
            i += 4;
        } else if (textoUsuario.substring(i, i + 4) === 'ober') {
            textoModificado += 'o';
            i += 3;
        } else if (textoUsuario.substring(i, i + 4) === 'ufat') {
            textoModificado += 'u';
            i += 3;
        } else {
            textoModificado += textoUsuario[i];
        }
    }

    document.getElementById('texto_resuelto').textContent = textoModificado;
}

function copiarTexto() {
    var textarea = document.getElementById('texto_resuelto');
    
    textarea.select();
    document.execCommand('copy');

    alert('Great :)');
}



function validarYejecutar() {
    var textarea = document.getElementById('texto_usuario');
    var boton = document.getElementById('botonn');
    var texto = textarea.value;

    var tieneMayusculas = /[A-Z]/.test(texto);

    var tieneAcentos = /[áéíóúÁÉÍÓÚüÜ]/.test(texto);

    boton.disabled = tieneMayusculas||tieneAcentos;
    
}




