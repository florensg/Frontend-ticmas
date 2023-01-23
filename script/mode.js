document.getElementById("boton").addEventListener('click',function() {
    if (document.getElementById('estilo').getAttribute('href') == "css/light.css") {
        document.getElementById('estilo').setAttribute('href', 'css/dark.css');
        document.getElementById('icon').classList.remove('bi-moon-fill');
        document.getElementById('icon').classList.add('bi-brightness-high-fill');
    }else{
        document.getElementById('estilo').setAttribute('href', "css/light.css");
        document.getElementById('icon').classList.remove('bi-brightness-high-fill');
        document.getElementById('icon').classList.add('bi-moon-fill');
    }
});
