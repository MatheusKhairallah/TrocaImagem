const clicouEmTrocar= (evento) =>{
    evento.preventDefault();

    
};

const iniciar = ()=> {
    document.getElementById('troca').addEventListener('click', clicouEmTrocar);
};

document.addEventListener('DOMContentLoaded', iniciar);