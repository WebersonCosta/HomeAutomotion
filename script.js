const url = "https://177c-138-36-39-182.ngrok-free.app"; // Sua URL ngrok, atualizada!

async function nomeandoButton() {
    const buttonLuz = document.getElementById('buttonLuz');
    const response = await fetch(url + '/home/VerificandoEquipamentos/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    });
    if (response.ok) {
        const data = await response.json();
        // Garante que a comparação seja com a string "true" ou "false"
        const api_status = data[0]["StatusLampada"]; 
        if (api_status === "true") { // Use === para comparação de tipo e valor
            buttonLuz.innerHTML = "DESLIGAR";
        } else {
            buttonLuz.innerHTML = "LIGAR";
        }
    } else {
        console.error('Falha na consulta inicial da API para nomear botão:', response.statusText);
    }
}

async function atualizarStatusLampada() {
    try {
        const response = await fetch(url + '/home/VerificandoEquipamentos/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            const api_status = data[0]["StatusLampada"];
            const botao = document.getElementById("buttonLuz");

            if (api_status === "true") { // Comparação com string
                const requestBody = JSON.stringify({ "StatusLampada": "false" });

                const updateResponsetrue = await fetch(url + `/home/AtualizarEquipamentos/${1}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: requestBody,
                });
                if (updateResponsetrue.ok) {
                    console.log('Lâmpada desligada com sucesso.');
                    botao.innerHTML = "LIGAR"; // Mudei para LIGAR após desligar
                } else {
                    console.error('Falha ao desligar lâmpada:', updateResponsetrue.statusText);
                }

            } else if (api_status === "false") { // Comparação com string

                const requestBody = JSON.stringify({ "StatusLampada": "true" });

                const updateResponsefalse = await fetch(url + `/home/AtualizarEquipamentos/${1}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: requestBody,
                });
                if (updateResponsefalse.ok) {
                    console.log('Lâmpada ligada com sucesso.');
                    botao.innerHTML = "DESLIGAR"; // Mudei para DESLIGAR após ligar
                } else {
                    console.error('Falha ao ligar lâmpada:', updateResponsefalse.statusText);
                }
            }

        } else {
            console.error('Falha na consulta da API para atualizar status da lâmpada:', response.statusText);
        }

    } catch (error) {
        console.error('Erro ao atualizar o status da lâmpada:', error);
    }
}


async function onOffSensor() {
    try {
        const response = await fetch(url + '/home/VerificandoEquipamentos/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            const api_status = data[0]["AtivacaoSensorMovimento"];
            const botao = document.getElementById("buttonPIR");

            if (api_status === "true") { // Comparação com string
                const requestBody = JSON.stringify({ "AtivacaoSensorMovimento": "false" });

                const updateResponsetrue = await fetch(url + `/home/AtualizarEquipamentos/${1}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: requestBody,
                });
                if (updateResponsetrue.ok) {
                    console.log('SENSOR desligado com sucesso.');
                    botao.innerHTML = "LIGAR"; // Mudei para LIGAR após desligar
                } else {
                    console.error('Falha ao desligar sensor:', updateResponsetrue.statusText);
                }

            } else if (api_status === "false") { // Comparação com string

                const requestBody = JSON.stringify({ "AtivacaoSensorMovimento": "true" });

                const updateResponsefalse = await fetch(url + `/home/AtualizarEquipamentos/${1}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: requestBody,
                });
                if (updateResponsefalse.ok) {
                    console.log('SENSOR ligado com sucesso.');
                    botao.innerHTML = "DESLIGAR"; // Mudei para DESLIGAR após ligar
                } else {
                    console.error('Falha ao ligar sensor:', updateResponsefalse.statusText);
                }
            }

        } else {
            console.error('Falha na consulta da API para atualizar status do sensor:', response.statusText);
        }

    } catch (error) {
        console.error('Erro ao atualizar o status do sensor:', error);
    }
}


async function capturarDados() {
    const requestBody = JSON.stringify({ "CapturarMedidaCaixa": "true" });

    const updateResponsetrue = await fetch(url + `/home/AtualizarEquipamentos/${1}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: requestBody,
    });
    if (updateResponsetrue.ok) {

        console.log("estou true");
        const requesBodyFalse = JSON.stringify({ "CapturarMedidaCaixa": "false" });
        await delay(3000);
        // CORRIGIDO: Usando a variável `url` do ngrok aqui também!
        const updateResponsefalse = await fetch(url + `/home/AtualizarEquipamentos/${1}`, { 
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: requesBodyFalse,
        });
        if (updateResponsefalse.ok) {
            console.log("estou false");
            const bottao = document.getElementById("alturaAgua");

            const response = await fetch(url + '/hidro/PorcentagemCaixa/', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                const api_status = data[0]["valorOcupadoAgua"];

                bottao.innerHTML = api_status;
            } else {
                console.error('Falha ao obter porcentagem da caixa:', response.statusText);
            }
        } else {
            console.error('Falha ao desativar CapturarMedidaCaixa:', updateResponsefalse.statusText);
        }
    } else {
        console.error('Falha ao ativar CapturarMedidaCaixa:', updateResponsetrue.statusText);
    }
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.addEventListener('load', nomeandoButton);