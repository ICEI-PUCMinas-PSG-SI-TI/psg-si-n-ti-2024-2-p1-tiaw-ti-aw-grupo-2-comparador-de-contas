function atualizaConsumoRealAgua() {
    const consumoRealEl = document.querySelector('#consumoRealAgua');
    const consumoEsperadoEl = document.querySelector('.consumoEsperadoAgua');
    const botaoSituacao = document.querySelector('.botaoSituacaoAgua');

    
    consumoRealEl.classList.remove('bg-danger', 'bg-success', 'bg-warning');
    
    const textoConsumoReal = parseFloat(consumoRealEl.textContent.replace(' L', ''));
    const textoConsumoEsperado = parseFloat(consumoEsperadoEl.textContent.replace(' L', ''));
    
    console.log(textoConsumoReal);
    console.log(textoConsumoEsperado);
    
    if (textoConsumoReal > textoConsumoEsperado) {
        consumoRealEl.classList.add('bg-danger');
        botaoSituacao.classList.add('bg-danger');
        botaoSituacao.textContent = 'Ruim'; 


    } else if (textoConsumoReal < textoConsumoEsperado) {
        consumoRealEl.classList.add('bg-success');
        botaoSituacao.classList.add('bg-sucess');
        botaoSituacao.textContent = 'Ótimo'; 

    } else {
        consumoRealEl.classList.add('bg-warning');
        botaoSituacao.classList.add('bg-warning');
        botaoSituacao.textContent = 'Regular'; 
        
    }
}

atualizaConsumoRealAgua();

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


atualizaConsumoRealEnergia();