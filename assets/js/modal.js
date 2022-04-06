//detectar o click quando executar function

document.addEventListener('click', function(e){
    //verificando o local do click, se ele possui a classe gallery.item
    //console.log(e.target);
    if(e.target.classList.contains('gallery-item')){
        //pegar os atributos da imagem
        const src = e.target.getAttribute('src');
        const alt = e.target.getAttribute('alt');
        
        document.querySelector('.modal-title').textContent = alt;
        document.querySelector('.modal-img').src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show(); 
    }
});