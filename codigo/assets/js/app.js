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

        // Cálculo do valor da conta em reais
        // Cálculo do valor total em reais: Tarifa Fixa + Tarifa Variável (Calculada com base no consumo, de acordo com os valores da tabela de volume)
        const consumoTotalM3 = consumoTotal / 1000;
        const valorTarifaFixa = 21.23; // Tarifa fixa
        let valorTotal = valorTarifaFixa;

        // As tarifas utilizadas no cálculo foram baseadas nas informações disponíveis no site oficial da Copasa
        // https://copasaportalprd.azurewebsites.net/Copasa.Portal/Services/TariffEvolution
        // Os dados considerados são das tarifas residenciais de 2023

        if (consumoTotalM3 <= 5) {
            valorTotal += consumoTotalM3 * 2.20;
        } else if (consumoTotalM3 <= 10) {
            valorTotal += (5 * 2.20) + ((consumoTotalM3 - 5) * 4.685);
        } else if (consumoTotalM3 <= 15) {
            valorTotal += (5 * 2.20) + (5 * 4.685) + ((consumoTotalM3 - 10) * 7.260);
        } else if (consumoTotalM3 <= 20) {
            valorTotal += (5 * 2.20) + (5 * 4.685) + (5 * 7.260) + ((consumoTotalM3 - 15) * 9.911);
        } else if (consumoTotalM3 <= 40) {
            valorTotal += (5 * 2.20) + (5 * 4.685) + (5 * 7.260) + (5 * 9.911) + ((consumoTotalM3 - 20) * 12.607);
        } else {
            valorTotal += (5 * 2.20) + (5 * 4.685) + (5 * 7.260) + (5 * 9.911) + (20 * 12.607) + ((consumoTotalM3 - 40) * 15.381);
        }

        $("#consumoRealAguaValor").text("R$ " + valorTotal.toFixed(2));
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

        // Cálculo do valor total em reais: A Cemig aplica tarifas para consumidores residenciais com base em diferentes bandeiras tarifárias
        // No código, definimos a tarifa da bandeira vermelha como padrão, considerando-a como uma média para os cálculos
        const precoKwh = 0.84432; // Tarifa da bandeira vermelha 1

        // As tarifas utilizadas no cálculo foram baseadas nas informações disponíveis no site oficial da Cemig
        // https://www.cemig.com.br/atendimento/valores-de-tarifas-e-servicos/
        // Os dados considerados são "Tarifas do Grupo B – (Antes de IMPOSTOS)" para a categoria "B1 - RESIDENCIAL NORMAL"

        let valorTotal = (consumoTotal * precoKwh);
        $("#consumoRealEnergiaValor").text("R$ " + valorTotal.toFixed(2));
        
    }

    calculaConsumoRealAgua(dados);
    calculaConsumoRealEnergia(dados);

    //Função para exibir relatório

    $('#gerarRelatorio').click(function () {

        $('#exibirRelatorio').removeClass('d-none');
        $('#exibirRelatorio').addClass('d-block')
        
        let equipamentosSalvos = JSON.parse(localStorage.getItem('equipamentosSalvosLocal')) || {};
    
        let equipamentoSelecionado = $('#relatorioEquipamento').val();
    
        if (equipamentoSelecionado === "selecionar") {
            $('#exibirRelatorio').html("<strong>Por favor, selecione um equipamento para gerar o relatório.</strong>");
            return;
        }
    
        let equipamento = equipamentosSalvos[equipamentoSelecionado];
    
        if (!equipamento) {
            $('#exibirRelatorio').html(`<strong>O equipamento "${equipamentoSelecionado}" não possui dados salvos no momento.</strong>`);
            return;
        }

        let htmlContent = `<strong>Relatório do Equipamento:</strong><br>`;
        switch (equipamentoSelecionado) {
            case "chuveiro":
                htmlContent += `Você possui ${equipamento.quantidade || "0"} chuveiro(s) em sua casa, utilizado(s) ${equipamento.usoDiario || "0"} vezes por dia, por ${equipamento.minutos || "0"} minutos.`;
                break;
            case "geladeira":
                htmlContent += `Você possui ${equipamento.quantidade || "0"} geladeira(s) com tamanho de ${equipamento.tamanho || "não especificado"}.`;
                break;
            case "maquina":
                htmlContent += `Você possui ${equipamento.quantidade || "0"} máquina(s) de lavar, utilizada(s) ${equipamento.usoSemanal || "0"} vezes por semana, com tamanho ${equipamento.tamanho || "não especificado"}.`;
                break;
            case "ar":
                htmlContent += `Você possui ${equipamento.quantidade || "0"} ar-condicionado(s), utilizado(s) por ${equipamento.horas || "0"} horas por dia.`;
                break;
            case "tv":
                htmlContent += `Você possui ${equipamento.quantidade || "0"} TV(s), utilizada(s) ${equipamento.usoSemanal || "0"} vezes por semana, por ${equipamento.horas || "0"} horas.`;
                break;
            case "pc":
                htmlContent += `Você possui ${equipamento.quantidade || "0"} computador(es), utilizado(s) ${equipamento.usoSemanal || "0"} vezes por semana, por ${equipamento.horas || "0"} horas.`;
                break;
            case "vaso":
                htmlContent += `Você possui ${equipamento.quantidade || "0"} vaso(s) sanitário(s), utilizado(s) ${equipamento.usoDiario || "0"} vezes por dia.`;
                break;
            default:
                htmlContent += `Não há informações disponíveis para este equipamento.`;
        }

        console.log($('#exibirRelatorio').attr('class')); // Verifica as classes aplicadas
        $('#exibirRelatorio').html(htmlContent);
    });
    
    
    


});

