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
            if (quantidade && tamanhoItem && tempoMin) {
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

    function calculaConsumoReal(obj) {
        const { chuveiro, maquina, vaso } = obj

        function validaTamanhoMaquina(tamanho) {
            let tamanhoReal;
            if (tamanho === "p") {
                return tamanhoReal = 135;
            } else if (tamanho === "m") {
                return tamanhoReal = 168;
            } else {
                return tamanhoReal = 197;
            }
        }

        const calculoChuveiro = chuveiro?.quantidade * chuveiro?.usoDiario * chuveiro?.minutos * 4.2 * 30;
        const calculoMaquina = maquina?.quantidade * maquina?.usoSemanal * validaTamanhoMaquina(maquina?.tamanho) * 4;
        const calculoVaso = vaso?.quantidade * vaso?.usoDiario * 72;
        // console.log(calculoChuveiro)
        $("#chuveiro_real").css('width', (calculoChuveiro * 100) / 50000 + "%")
        $("#chuveiro_real_valor").text(calculoChuveiro + "L")

        $("#maquina_real").css('width', (calculoMaquina * 100 / 100000 + "%"))
        $("#maquina_real_valor").text(calculoMaquina + "L")

        $("#vaso_real").css('width', (calculoVaso * 100 / 10000 + "%"))
        $("#vaso_real_valor").text(calculoVaso + "L")
    }

    if (!dados) {
        $("#chuveiro_real_valor").text("Insira valores para realizar o cálculo")
        $("#chuveiro_real").css("width", "100%")

        $("#maquina_real_valor").text("Insira valores para realizar o cálculo")
        $("#maquina_real").css("width", "100%")

        $("#vaso_real_valor").text("Insira valores para realizar o cálculo")
        $("#vaso_real").css("width", "100%")
        return
    } else {
        calculaConsumoReal(dados)
    }
});