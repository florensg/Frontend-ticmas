document.getElementById('boton').addEventListener('click',() => {
    if (document.getElementById('estilo').getAttribute('href') == 'css/light.css') {
        document.getElementById('estilo').setAttribute('href', 'css/dark.css');
        document.getElementById('boton').classList.toggle('bi-brightness-high-fill');
    }else{
        document.getElementById('boton').classList.toggle('bi-brightness-high-fill');
        document.getElementById('estilo').setAttribute('href', 'css/light.css')
    }

   
})
