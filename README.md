1. Instalação do Node.js e npm

    Instalação:
    Baixe e instale o Node.js do site oficial. Isso instalará o npm automaticamente.

2. Instalação do Ionic CLI
   
    Instalação
    npm install -g @ionic/cli

4. Instalação do Angular CLI

    Instalação:
    npm install -g @angular/cli

5. Clonagem do Repositório

    git clone <URL do repositório>
    cd <nome-do-repositório>

6. Instalação das Dependências do Projeto
    Instalação:
    npm install

7. Rodando o Servidor de Desenvolvimento
    Inicie o servidor de desenvolvimento para rodar o aplicativo:
    ionic serve

em caso do seguinte erro 

ionic : O arquivo C:\Users\-------------------------------ionic.ps1 não pode ser carregado porque a execução de scripts foi desabilitada neste sistema. Para obter mais informações, consulte about_Execution_Policies em 
https://go.microsoft.com/fwlink/?LinkID=135170.
No linha:1 caractere:1
+ ionic serve
+ ~~~~~
    + CategoryInfo          : ErrodeSegurança: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess



    Solução:
Abra o PowerShell como Administrador:

Clique com o botão direito do mouse no ícone do PowerShell e selecione "Executar como administrador".
Verifique a política de execução atual:

Digite o seguinte comando e pressione Enter:
powershell
Get-ExecutionPolicy
Normalmente, a política estará definida como Restricted, que impede a execução de scripts.
Altere a política de execução para RemoteSigned:

Isso permite a execução de scripts locais e scripts baixados que são assinados por um editor confiável.
Digite o seguinte comando e pressione Enter:
powershell
Set-ExecutionPolicy RemoteSigned
Quando solicitado, confirme a alteração digitando A (para "Sim para todos").
Tente novamente o comando ionic serve

comando para abrir no android studio

build 


npm run build


atualizar emulador


npx cap sync


npx cap open android

Login

![image](https://github.com/user-attachments/assets/05f61a2f-ff73-4043-8332-2cebd7dffe14)

home
![image](https://github.com/user-attachments/assets/424c8a90-1221-46c8-8c41-1b609578cc80)

add livro

![image](https://github.com/user-attachments/assets/6c9beb34-c15d-464c-b70e-dabb5a2bb2e0)







