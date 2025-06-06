# WebApp (Interface Gráfica)

A interface gráfica destinada aos moradores dos Kitnets e ao proprietário foi desenvolvida utilizando as tecnologias HTML, CSS e JavaScript. Essa interface atua como uma ponte de comunicação com a nossa API, transmitindo informações relevantes para atualizações. Quando o ESP32 chama o endpoint correspondente, ele lê as alterações feitas pela interface e realiza ações específicas, como acender as luzes ou desativar o sensor de movimento. Essa interação entre a interface e a API garante um controle eficiente e intuitivo sobre as funcionalidades do sistema.

## Configuração da Interface Gráfica

### Passos para serem seguidos :

1. Clone este repositório:
   ```bash
   git clone https://github.com/seuusuario/seurepositorio.git
    ```
2.  Procure o arquivo script.js e altere a variável 'url' para a sua URL:
     ```bash
    const url = "http://189.107.98.120:9000"
    ```
- Caso você ainda não tenha clonado a sua API e publicado, siga os passos dito [neste link](https://github.com/BrunoAlbuMaia/APIHome_automation).


Com os passo acima seguido, você pode publicar essa interface em um servidor de sua preferência, mas se for usar para teste, você pode rodar simplesmente a interface em localmente na sua maquina.


## Imagem da Interface Gráfica:

![ImagemInterfaca](https://github.com/BrunoAlbuMaia/WebApp_HomeAutomotion/blob/Master/img/Captura%20de%20tela%20de%202023-11-15%2021-00-05.png?raw=true)

