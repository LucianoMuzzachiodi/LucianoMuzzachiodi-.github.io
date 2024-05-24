
const regExpNombre = /^[a-zA-Z]{0,9}$/;
const regExpApellido = /^[a-zA-Z]{0,20}$/;
const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regExpTelefono = /^[1-9][0-9]{9}$/;

function limpiarErrores(event){
    const actualInput = event.target;
    actualInput.classList.remove('inputErroneo');
    const actualHermano = actualInput.nextSibling;

    if(actualHermano.classList && actualHermano.classList.contains('colorRojo')){
        actualHermano.remove();
    }
}


function validar(){
    let flagError = false;
    const nombre = document.getElementById('name');
    const apellido = document.getElementById('lastname');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const civil = document.getElementById('estado');

    
if(nombre.value == "" || !regExpNombre.test(nombre.value)){
    const spanError = document.createElement('span');
    spanError.textContent = "*Debe ingresar sin números, no puede superar los 9 carcteres)";
    spanError.classList.add('colorRojo');


    if(nombre.nextSibling.nodeName != 'SPAN'){
        nombre.insertAdjacentElement("afterend", spanError);
        nombre.classList.add('inputErroneo');
    }
    
 
    flagError = true;
}


if(apellido.value == "" || !regExpApellido.test(apellido.value)){  
    const spanError = document.createElement('span');
    spanError.textContent = "*Debe ingresar sin números, no puede superar los 9 carcteres)";
    spanError.classList.add('colorRojo');

    if(apellido.nextSibling.nodeName != 'SPAN'){
        apellido.insertAdjacentElement("afterend", spanError);
        apellido.classList.add('inputErroneo');
    }

   flagError = true;
}


if(email.value == "" || !regExpEmail.test(email.value)){
    const spanError = document.createElement('span');
    spanError.textContent = "*E-mail inválido";
    spanError.classList.add('colorRojo');

    if(email.nextSibling.nodeName!= 'SPAN'){
        email.insertAdjacentElement("afterend", spanError);
        email.classList.add('inputErroneo');
    }
   
   flagError = true;
}


if(telefono.value && !regExpTelefono.test(telefono.value)){
    const spanError = document.createElement('span');
    spanError.textContent = "*Teléfono inválido";
    spanError.classList.add('colorRojo');

    if(telefono.nextSibling.nodeName != 'SPAN'){
        telefono.insertAdjacentElement("afterend", spanError);
        telefono.classList.add('inputErroneo');
    }

   flagError = true;
}


if(!flagError){
    let texto = ''
    texto = `- Hola ${nombre.value} ${apellido.value}, nos pondremos en contacto por las vías que nos habilitaste para darte información sobre tu inquietud, Gracias por comunicarte con nosotros. Tú Teléfono es ${telefono.value}, el E-mail es ${email.value} y Tú Estado Civil es ${civil.value}. Saludos.`;
    
    const li = document.createElement('li');
    li.textContent = texto;
    const ul = document.getElementById("list");
   /* console.log(ul);*/
    ul.appendChild(li);

    nombre.value = '';
    apellido.value = '';
    email.value = '';
    telefono.value = '';
}

return false;
}
