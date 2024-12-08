function atualizaConsumoRealAgua() {
    const consumoRealEl = document.querySelector('#consumoRealAgua');
    const consumoEsperadoEl = document.querySelector('.consumoEsperadoAgua');
    const botaoSituacao = document.querySelector('.botaoSituacaoReal');
    const statusAtual = document.querySelector('.statusUsuario');
    const btnStatus = document.querySelector('.botaoStatus');

    
    consumoRealEl.classList.remove('bg-danger', 'bg-success', 'bg-warning');
    
    const textoConsumoEsperado = parseFloat(
        consumoEsperadoEl.textContent.replace(' L', '').trim()
    );
    const textoConsumoReal = parseFloat(
        consumoRealEl.textContent.replace(' L', '').trim()
    );

    console.log(textoConsumoReal);
    console.log(textoConsumoEsperado);
    
    if (textoConsumoReal > textoConsumoEsperado) {
        consumoRealEl.classList.add('bg-danger');
        botaoSituacao.classList.add('bg-danger');
        btnStatus.classList.add('bg-danger');
        botaoSituacao.textContent = 'Ruim';
        statusAtual.textContent = 'Ruim';


    } else if (textoConsumoReal < textoConsumoEsperado) {
        consumoRealEl.classList.add('bg-success');
        botaoSituacao.classList.add('bg-sucess');
        btnStatus.classList.add('bg-sucess');
        botaoSituacao.textContent = 'Ótimo'; 
        statusAtual.textContent = 'Ótimo';

    } else {
        consumoRealEl.classList.add('bg-warning');
        botaoSituacao.classList.add('bg-warning');
        botaoSituacao.textContent = 'Regular'; 
        statusAtual.textContent = 'Regular';
        btnStatus.classList.add('bg-warning');

        
    }
}


function atualizaConsumoRealEnergia() {
    const consumoEnergiaEl = document.querySelector('#consumoRealEnergia');
    const esperadoEnergiaEl = document.querySelector('.consumoEsperadoEnergia');
    const botaoSituacao = document.querySelector('.botaoSituacaoEnergia');
    
    const textoConsumoReal = parseFloat(consumoEnergiaEl.textContent.replace(' Kwh', ''));
    const textoConsumoEsperado = parseFloat(esperadoEnergiaEl.textContent.replace(' Kwh', ''));
    
    console.log(textoConsumoReal);
    console.log(textoConsumoEsperado);
    
    if (textoConsumoReal > textoConsumoEsperado) {
        consumoEnergiaEl.classList.add('bg-danger');
        botaoSituacao.classList.add('bg-danger');
        botaoSituacao.textContent = 'Ruim'; 

    } else if (textoConsumoReal < textoConsumoEsperado) {
        consumoEnergiaEl.classList.add('bg-success');
        botaoSituacao.classList.add('bg-success');
        botaoSituacao.textContent = 'Ótimo'; 

    } else {
        consumoEnergiaEl.classList.add('bg-warning');
        botaoSituacao.classList.add('bg-warning');
        botaoSituacao.textContent = 'Regular'; 
    }
}


const intervalo = setInterval(() => {
    const consumoRealEl = document.querySelector('#consumoRealAgua');
    const consumoEnergiaEl = document.querySelector('#consumoRealEnergia');
    if (consumoRealEl.textContent.trim() && consumoEnergiaEl.textContent.trim()) {
        clearInterval(intervalo); 
        atualizaConsumoRealAgua();
        atualizaConsumoRealEnergia();
    }
}, 500);
