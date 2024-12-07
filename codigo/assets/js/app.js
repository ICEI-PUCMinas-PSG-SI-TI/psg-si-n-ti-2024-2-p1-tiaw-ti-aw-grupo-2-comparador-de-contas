$(document).ready(function () {

    //Declaração de variáveis
    var valorSelecionado;

    //Declaração de objetos
    const equipamentos = {
        chuveiro: {
            quantidade: null,
            usoDiario: null,
            minutos: null
        },
        geladeira: {
            quantidade: null,
            tamanho: null
        },
        maquina: {
            quantidade: null,
            usoSemanal: null,
            tamanho: null
        },
        ar: {
            quantidade: null,
            horas: null
        },
        tv: {
            quantidade: null,
            usoSemanal: null,
            horas: null
        },
        pc: {
            quantidade: null,
            usoSemanal: null,
            horas: null
        },
        vaso: {
            quantidade: null,
            usoDiario: null
        }
    };

    //Escondendo campos no momento de abertura do site
    $('#divUsoDiario').hide();
    $('#divUsoSemanal').hide();
    $('#divHoras').hide();
    $('#divMinutos').hide();
    $('#divTamanho').hide();

    //Função para alterar campos do cadastro inicial
    $('#cadastroInicial').change(function () {
        valorSelecionado = $(this).val();

        if (valorSelecionado === 'geladeira') {
            $('#divUsoDiario').hide();
            $('#divUsoSemanal').hide();
            $('#divHoras').hide();
            $('#divMinutos').hide();
            $('#divTamanho').show();
            
        }
        else if (valorSelecionado === 'chuveiro') {
            $('#divUsoDiario').show();
            $('#divUsoSemanal').hide();
            $('#divHoras').hide();
            $('#divMinutos').show();
            $('#divTamanho').hide();
        }
        else if (valorSelecionado === 'ar') {
            $('#divUsoDiario').hide();
            $('#divUsoSemanal').hide();
            $('#divHoras').show();
            $('#divMinutos').hide();
            $('#divTamanho').hide();
        }
        else if (valorSelecionado === 'maquina') {
            $('#divUsoDiario').hide();
            $('#divUsoSemanal').show();
            $('#divHoras').hide();
            $('#divMinutos').hide();
            $('#divTamanho').show();
        }
        else if (valorSelecionado === 'tv') {
            $('#divUsoDiario').hide();
            $('#divUsoSemanal').show();
            $('#divHoras').show();
            $('#divMinutos').hide();
            $('#divTamanho').hide();
        }
        else if (valorSelecionado === 'pc') {
            $('#divUsoDiario').hide();
            $('#divUsoSemanal').show();
            $('#divHoras').show();
            $('#divMinutos').hide();
            $('#divTamanho').hide();
        }
        else if (valorSelecionado === 'vaso') {
            $('#divUsoDiario').show();
            $('#divUsoSemanal').hide();
            $('#divHoras').hide();
            $('#divMinutos').hide();
            $('#divTamanho').hide();
        }
        else {
            $('#divUsoDiario').hide();
            $('#divUsoSemanal').hide();
            $('#divHoras').hide();
            $('#divMinutos').hide();
            $('#divTamanho').hide();
        }
    })

    //Função para salvar cadastro Inicial no objeto equipamentos e depois no localStorage
    $('#salvarInicial').click(function () {
        console.log("Botão Salvar Inicial clicado.");
        if (valorSelecionado === 'geladeira') {
            const quantidade = $('#quantidade').val().trim();
            const tamanhoItem = $('#tamanhoItem').val().trim();
            if (quantidade && tamanhoItem) {
                equipamentos.geladeira.quantidade = quantidade;
                equipamentos.geladeira.tamanho = tamanhoItem;
                alert(JSON.stringify(equipamentos.geladeira));
            } else {
                alert("Por favor, insira valores corretos.");
            }
        } else if (valorSelecionado === 'chuveiro') {
            const quantidade = $('#quantidade').val().trim();
            const usoDiario = $('#usoDiario').val().trim();
            const tempoMin = $('#tempoMin').val().trim();
            if (quantidade && usoDiario && tempoMin) {
                equipamentos.chuveiro.quantidade = quantidade;
                equipamentos.chuveiro.usoDiario = usoDiario;
                equipamentos.chuveiro.minutos = tempoMin;
                alert(JSON.stringify(equipamentos.chuveiro));
            } else {
                alert("Por favor, insira valores corretos.");
            }
        } else if (valorSelecionado === 'maquina') {
            const quantidade = $('#quantidade').val().trim();
            const tamanhoItem = $('#tamanhoItem').val().trim();
            const usoSemanal = $('#usoSemanal').val().trim();
            if (quantidade && tamanhoItem && usoSemanal) {
                equipamentos.maquina.quantidade = quantidade;
                equipamentos.maquina.tamanho = tamanhoItem;
                equipamentos.maquina.usoSemanal = usoSemanal;
                alert(JSON.stringify(equipamentos.maquina));
            } else {
                alert("Por favor, insira valores corretos.");
            }
        } else if (valorSelecionado === 'ar') {
            const quantidade = $('#quantidade').val().trim();
            const tempoHoras = $('#tempoHoras').val().trim();
            if (quantidade && tempoHoras) {
                equipamentos.ar.quantidade = quantidade;
                equipamentos.ar.horas = tempoHoras;
                alert(JSON.stringify(equipamentos.ar));
            } else {
                alert("Por favor, insira valores corretos.");
            }
        } else if (valorSelecionado === 'tv') {
            const quantidade = $('#quantidade').val().trim();
            const usoSemanal = $('#usoSemanal').val().trim();
            const tempoHoras = $('#tempoHoras').val().trim();
            if (quantidade && tempoHoras && usoSemanal) {
                equipamentos.tv.quantidade = quantidade;
                equipamentos.tv.horas = tempoHoras;
                equipamentos.tv.usoSemanal = usoSemanal;
                alert(JSON.stringify(equipamentos.tv));
            } else {
                alert("Por favor, insira valores corretos.");
            }
        } else if (valorSelecionado === 'pc') {
            const quantidade = $('#quantidade').val().trim();
            const usoSemanal = $('#usoSemanal').val().trim();
            const tempoHoras = $('#tempoHoras').val().trim();
            if (quantidade && tempoHoras && usoSemanal) {
                equipamentos.pc.quantidade = quantidade;
                equipamentos.pc.horas = tempoHoras;
                equipamentos.pc.usoSemanal = usoSemanal;
                alert(JSON.stringify(equipamentos.pc));
            } else {
                alert("Por favor, insira valores corretos.");
            }
        } else {
            const quantidade = $('#quantidade').val().trim();
            const usoDiario = $('#usoDiario').val().trim();
            if (quantidade && usoDiario) {
                equipamentos.vaso.quantidade = quantidade;
                equipamentos.vaso.usoDiario = usoDiario;
                alert(JSON.stringify(equipamentos.vaso));
            }
            else {
                alert("Por favor, insira valores corretos.");
            }
        }

        salvarEquipamentosLocalStorage(equipamentos);

    });

    function salvarEquipamentosLocalStorage(equipamentos) {

        let equipamentosSalvos = JSON.parse(localStorage.getItem('equipamentosSalvosLocal')) || {};
        for (let equipamento in equipamentos) {
            if (equipamentos[equipamento].quantidade) {
                equipamentosSalvos[equipamento] = {
                    ...equipamentosSalvos[equipamento],
                    ...equipamentos[equipamento]
                };
            }
        }

        localStorage.setItem('equipamentosSalvosLocal', JSON.stringify(equipamentosSalvos));

        console.log("Dados salvos no localStorage:", JSON.parse(localStorage.getItem('equipamentosSalvosLocal')));
    }

    const dados = JSON.parse(localStorage.getItem('equipamentosSalvosLocal'));
    console.log(dados)

    // Função para calcular consumo de água
    function calculaConsumoRealAgua(obj) {
        const { chuveiro, maquina, vaso } = obj

        // Função para calcular o volume de água da máquina de lavar dependendo do tamanho inserido
        function validaTamanhoMaquina(tamanho) {
            let tamanhoReal;
            if (tamanho === "p") {
                return tamanhoReal = 135; // Lavadoras de até 10 kg
            } else if (tamanho === "m") { 
                return tamanhoReal = 168; // Lavadoras de 11 á 12 kg
            } else {
                return tamanhoReal = 197; // Lavadoras de até 17 kg
            } 
        }

        // Cálculos dos consumos
        // Consumo de água do chuveiro (L/mês) = (Volume por hora (L/h) * ((número de banhos * tempo do banho em minutos)/60) * 30) * quantidade na residência
        const calculoChuveiro = (540 * ((chuveiro?.usoDiario * chuveiro?.minutos)/60) * 30) * chuveiro?.quantidade;

        // Consumo de água da máquina de lavar (L/mês) = ((Volume por tamanho (L/por ciclo) * número de lavagens por semana) * 4) * quantidade na residência
        const calculoMaquina = ((validaTamanhoMaquina(maquina?.tamanho) * maquina?.usoSemanal) * 4) * maquina?.quantidade;

        // Consumo de água do vaso sanitário (L/mês) = ((Volume por uso (L/por descarga) * número de uso por dia) * 30) * quantidade na residência
        const calculoVaso = ((12 * vaso?.usoDiario) * 30) * vaso?.quantidade;

        console.log(calculoChuveiro)
        console.log(calculoMaquina)
        console.log(calculoVaso)

        // Atualiza barra de progresso para cada tipo de consumo
        $("#chuveiro_agua_real").css('width', (calculoChuveiro * 100) / 20000 + "%");
        $("#chuveiro_agua_real_valor").text(calculoChuveiro + " L");

        $("#maquina_real").css('width', (calculoMaquina * 100) / 20000 + "%");
        $("#maquina_real_valor").text(calculoMaquina + " L");

        $("#vaso_real").css('width', (calculoVaso * 100) / 20000 + "%");
        $("#vaso_real_valor").text(calculoVaso + " L");

        // Cálculo do consumo real
        const consumoTotal = (calculoChuveiro + calculoMaquina + calculoVaso).toFixed(2);
        $("#consumoRealAgua").text(consumoTotal + " L");
        
    }

    // Função para calcular consumo de energia
    function calculaConsumoRealEnergia(obj) {
        const { chuveiro, geladeira, ar, tv, pc } = obj;

        // Função para calcular a potência de energia da geladeira dependendo do tamanho inserido
        function validaTamanhoGeladeira(tamanho) {
            if (tamanho === "p") {
                return 40; // De 100 a 200 litros
            } else if (tamanho === "m") {
                return 60; // De 200 e 400 litros
            } else {
                return 80; // Mais de 400 litros
            }
        }

        // Consumo de energia do chuveiro (kWh/mês) = (((Potência por hora (W/h) * ((número de banhos * tempo do banho em minutos)/60)) * 30) / 1000) * quantidade na residência
        const calculoChuveiro = (((5400 * ((chuveiro?.usoDiario * chuveiro?.minutos)/60)) * 30) / 1000 ) * chuveiro?.quantidade;
        
        // Consumo de energia da geladeira (kWh/mês) = Potência por tamanho (kWh/mês) * quantidade na residência
        const calculoGeladeira = validaTamanhoGeladeira(geladeira?.tamanho) * geladeira?.quantidade;

        // Consumo de energia do ar-condicionado (kWh/mês) = (((Potência por hora (W/h) * tempo de uso em horas) * 30) / 1000) * quantidade na residência
        const calculoAr = (((1450 * ar?.horas) * 30) / 1000) * ar?.quantidade; // 12.000 BTUs = 1.450 W

        // Consumo de energia da TV (kWh/mês) = (((Potência por hora (W/h) * (número de usos por semana * tempo de uso em  hora)) * 4) / 1000) * quantidade na residência
        const calculoTV = (((39 * (tv?.usoSemanal * tv?.horas)) * 4) / 1000 ) * tv?.quantidade; // TV 32 Polegadas =  39 W
        
        // Consumo de energia da PC (kWh/mês) = (((Potência por hora (W/h) * (número de usos por semana * tempo de uso em  hora)) * 4) / 1000) * quantidade na residência
        const calculoPC = (((300 * (pc?.usoSemanal * pc?.horas)) * 4) / 1000 ) * pc?.quantidade; // Microcomputador = 300 W


        console.log(calculoChuveiro)
        console.log(calculoGeladeira)
        console.log(calculoAr)
        console.log(calculoTV)
        console.log(calculoPC)

        // Atualiza barra de progresso para cada tipo de consumo
        $("#chuveiro_energia_real").css('width', (calculoChuveiro * 100) / 2000 + "%");
        $("#chuveiro_energia_real_valor").text(calculoChuveiro + " kWh");

        $("#geladeira_real").css('width', (calculoGeladeira * 100) / 2000 + "%");
        $("#geladeira_real_valor").text(calculoGeladeira + " kWh");

        $("#ar_real").css('width', (calculoAr * 100) / 2000 + "%");
        $("#ar_real_valor").text(calculoAr + " kWh");

        $("#tv_real").css('width', (calculoTV * 100) / 2000 + "%");
        $("#tv_real_valor").text(calculoTV + " kWh");

        $("#pc_real").css('width', (calculoPC * 100) / 2000 + "%");
        $("#pc_real_valor").text(calculoPC + " kWh");


        // Cálculo do consumo real
        const consumoTotal = (calculoChuveiro + calculoGeladeira + calculoAr + calculoTV + calculoPC).toFixed(2);
        $("#consumoRealEnergia").text(consumoTotal + " kWh");
    }

    calculaConsumoRealAgua(dados);
    calculaConsumoRealEnergia(dados);

});

// Criando feedback
document.addEventListener('DOMContentLoaded', function() {
    const botaoFeedback = document.getElementById('botaoFeedback');
    const modalFeedback = document.getElementById('modalFeedback');
    const fecharModal = document.querySelector('.fechar');
    const botaoEnviarFeedback = document.getElementById('botaoEnviarFeedback');
    const campoFeedback = document.getElementById('campoFeedback');
    const listaFeedbacks = document.createElement('ul'); // Cria uma lista para exibir os feedbacks
    document.body.appendChild(listaFeedbacks); // Adiciona a lista ao body

    // Carrega feedbacks do localStorage ao iniciar
    carregarFeedbacks();

    // Abre o modal ao clicar no botão
    botaoFeedback.onclick = function() {
        modalFeedback.style.display = 'block';
    }

    // Fecha o modal ao clicar no 'x'
    fecharModal.onclick = function() {
        modalFeedback.style.display = 'none';
    }

    // Fecha o modal ao clicar fora do conteúdo
    window.onclick = function(event) {
        if (event.target == modalFeedback) {
            modalFeedback.style.display = 'none';
        }
    }

    // Salva o feedback no localStorage ao clicar no botão "Enviar"
    botaoEnviarFeedback.onclick = function() {
        const feedback = campoFeedback.value;
        if (feedback) {
            // Recupera os feedbacks existentes ou cria um novo array
            const feedbacks = JSON.parse(localStorage.getItem('feedbacksUsuario')) || [];
            feedbacks.push(feedback); // Adiciona o novo feedback ao array
            localStorage.setItem('feedbacksUsuario', JSON.stringify(feedbacks)); // Salva o array atualizado no localStorage
            
            // Adiciona o feedback à lista exibida
            adicionarFeedbackNaLista(feedback);
            alert('Feedback enviado com sucesso!');
            campoFeedback.value = ''; // Limpa a caixa de texto
            modalFeedback.style.display = 'none'; // Fecha o modal
        } else {
            alert('Por favor, digite seu feedback antes de enviar.');
        }
    }

    // Função para carregar feedbacks do localStorage e exibi-los
    function carregarFeedbacks() {
        const feedbacks = JSON.parse(localStorage.getItem('feedbacksUsuario')) || [];
        feedbacks.forEach(feedback => {
            adicionarFeedbackNaLista(feedback);
        });
    }
    // Função para adicionar feedback na lista exibida
    function adicionarFeedbackNaLista(feedback) {
        const li = document.createElement('li');
        li.textContent = feedback;
        listaFeedbacks.appendChild(li);
    }
});
