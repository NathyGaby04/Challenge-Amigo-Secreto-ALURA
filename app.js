// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listanombres = [];


function agregarAmigo(){
    let nombreamigo = document.getElementById('amigo').value;
    console.log(nombreamigo);

    if(nombreamigo==''){
        alert("Por favor ingresa un nombre valido"); 
    }else{
        listanombres.push(nombreamigo);
        let listnombreHTML = document.getElementById('listaAmigos');
        listnombreHTML.innerHTML = ""
        
        for ( i = 0; i < listanombres.length; i++) {
            
            let li = document.createElement('li'); 
            li.textContent = listanombres[i]; 
            listnombreHTML.appendChild(li);
        }
        limpiarInput();
        }
    }

    function limpiarInput() {
        document.getElementById('amigo').value = '';
    }

    function sortearAmigo(){
        let listnombreHTML = document.getElementById('listaAmigos');
        listnombreHTML.innerHTML = ""
        if(listanombres.length == 0){
            alert("No se puede realizar el sorteo, la lista está vacía")
        }else{
            let numeroindiceAleatorio = Math.floor(Math.random() * listanombres.length);
            let amigoaleatorio = listanombres.splice(numeroindiceAleatorio, 1)[0];
            let resultadoHTML = document.getElementById('resultado');
            resultadoHTML.innerHTML=`El amigo secreto es: ${amigoaleatorio}`;

        }
        

    }