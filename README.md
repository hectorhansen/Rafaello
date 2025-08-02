# Painel Administrativo Dinâmico - Projeto Rafaello

![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

## 📖 Descrição do Projeto

O **Projeto Rafaello** é uma aplicação web completa que serve como um painel de controle administrativo (Dashboard). Desenvolvido em PHP procedural com banco de dados MySQL, o sistema foi projetado para gerenciar e visualizar dados de forma centralizada e intuitiva.

A aplicação demonstra a integração de múltiplas tecnologias para criar uma ferramenta funcional, incluindo autenticação de usuários, geração de gráficos dinâmicos, emissão de relatórios em PDF e consumo de APIs externas, sendo um excelente exemplo de um projeto full-stack prático e funcional.

---

## ✨ Funcionalidades Principais

* **🔐 Sistema de Autenticação Completo:**
    * Telas de **login** e **cadastro de usuários** para controlar o acesso à plataforma.
    * Gerenciamento de sessões em PHP para proteger as páginas e garantir que apenas usuários logados possam acessar o dashboard.

* **📊 Dashboard com Gráficos Dinâmicos:**
    * Painel principal que exibe dados de forma visual e interativa.
    * Utiliza a biblioteca **Chart.js** para renderizar múltiplos gráficos (pizza, barras, etc.), cujos dados são carregados dinamicamente do banco de dados através do PHP.

* **📄 Geração de Relatórios em PDF:**
    * Funcionalidade para exportar dados e relatórios diretamente para o formato **PDF**.
    * Implementado com a biblioteca **FPDF**, que gera documentos com layout profissional a partir das informações do sistema.

* **🌐 Integração com API Externa (REST):**
    * Capacidade de se conectar a serviços de terceiros, demonstrada através do consumo da API `restcountries.com`.
    * O sistema busca, processa e exibe dados de fontes externas, mostrando proficiência na manipulação de requisições HTTP e dados em formato JSON.

---

## 🛠️ Tecnologias e Ferramentas

* **Backend:** **PHP** (Abordagem procedural, com scripts organizados por funcionalidade).
* **Banco de Dados:** **MySQL** para armazenamento e gerenciamento dos dados.
* **Frontend:**
    * **HTML5** e **CSS3** para estrutura e estilização.
    * **Bootstrap** para criar uma interface moderna, responsiva e amigável.
    * **JavaScript** para a interatividade do lado do cliente.
* **Bibliotecas Externas:**
    * **Chart.js:** Para a visualização de dados e criação de gráficos dinâmicos.
    * **FPDF:** Para a geração de relatórios em PDF no lado do servidor.

---

## 🚀 Como Executar o Projeto Localmente

Para rodar este projeto no seu ambiente de desenvolvimento, siga os passos abaixo:

1.  **Pré-requisitos:**
    * Um ambiente de servidor local como **XAMPP** ou **WAMP** devidamente instalado.
    * Acesso a um gerenciador de banco de dados (como o phpMyAdmin).

2.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/rafaello.git](https://github.com/seu-usuario/rafaello.git)
    ```

3.  **Configuração do Banco de Dados:**
    * Crie um novo banco de dados no seu MySQL.
    * Localize o arquivo de conexão (`conexao.php`) e configure as credenciais (host, usuário, senha, nome do banco) para corresponder ao seu ambiente local.

4.  **Execução:**
    * Mova a pasta do projeto para o diretório `htdocs` (no XAMPP) ou `www` (no WAMP).
    * Inicie os serviços Apache e MySQL.
    * Abra seu navegador e acesse a URL do projeto (ex: `http://localhost/rafaello`).

---

## 🖼️ Telas do Sistema

*(Sugestão: Adicione aqui screenshots das principais telas para deixar seu portfólio mais visual e atrativo)*

**Tela de Login:**
`![Tela de Login](caminho/para/imagem_login.png)`

**Dashboard Principal com Gráficos:**
`![Dashboard](caminho/para/imagem_dashboard.png)`

**Exemplo de PDF Gerado:**
`![PDF Gerado](caminho/para/imagem_pdf.png)`
