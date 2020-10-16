const clicouEmTrocar= (evento) =>{
    evento.preventDefault();

    let imagem2= document.getElementById('foto-natureza');
    imagem2.src= 'download.jpg';
};

const iniciar = ()=> {
    document.getElementById('troca').addEventListener('click', clicouEmTrocar);
};

document.addEventListener('DOMContentLoaded', iniciar);