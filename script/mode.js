document.getElementById("boton").addEventListener('click',() => {
    document.body.classList.toggle("dark")
    if (document.getElementById('estilo').getAttribute('href') == 'css/light.css') {
        document.getElementById('estilo').setAttribute('href', 'css/dark.css');
    }else{
        document.getElementById('estilo').setAttribute('href', 'css/light.css');
    }

})