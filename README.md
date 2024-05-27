
# HMZ-Test
A seguir temos instruções de como rodar cada parte do projeto individualmente, alternativamente você pode baixar o projeto inteiro e só seguir os passos apartir da clonagem
link para clonar o projeto utilizando do git
```
git clone https://github.com/MarkVN2/HMZ-Test
```

## Utilizando o Back-end
### Requisitos
> [!WARNING]
> .NET 6.0 SDK 
>
> MySQL Server
>
> Git

#

### Setup

1. Utilizando do git utilize esse comando para clonar o back-end do projeto
```
git clone https://github.com/MarkVN2/HMZ-Test/tree/main/hmzBackEnd
```
2. Navegue até o diretorio do projeto
```
cd hmzBackEnd/hmzBackEnd
```
3. Atualize "ConnectionStrings" no arquivo `appsetting.json`
```json
{
  "ConnectionStrings": {
    "Database": "server=localhost;database=myDataBase;user=myUsername;password=myPassword;"
  }
}
```
Substitua `myDatabase`,`myUsername` e `myPassword`
com os dados do seu banco MySQL.

#

## Configuração do Banco
O back-end do projeto utiliza-se de MySQL e um arquivo para recriar o banco está presente nos arquivos dele, ele possui também 30 entradas de exemplo que só devem ser colocadas após o proximo passo já que a tabela de usuários só será criada após ele.

### Atualizando o Banco

Antes de executar o projeto certifique-se de atualizar o banco de dados utilizando o seguinte comando
```
dotnet tool install --global dotnet-ef
dotnet ef database update
```

### Rodando
1. Restaure os pacotes .NET :
```
dotnet restore
```
2. Construa o projeto :
```
dotnet build
```
3. Execute o projeto :
```
dotnet run
```

A API estará rodando em [http://localhost:5107](https://localhost:5107)

Se querer ver a documentação da API navegue para [http://localhost:5107/swagger](http://localhost:5107/swagger)

## Utilizando o Front-end
### Requisitos
> [!WARNING]
> Node v20.6.0 ou mais
> 
> Git
> 
> Precisa-se também de um arquivo .env como o exemplo

### Setup

1. Utilizando do git utilize esse comando para clonar o front do projeto
```
git clone https://github.com/MarkVN2/HMZ-Test/tree/main/hmz-front-end
```
2. Após o download do projeto execute esse comando no diretório do front do projeto
```
npm install
```
### Adicionando .env

Não se esqueça de configurar um arquivo .env assim como o exemplo `.env.example`

```env
# URL da API
NEXT_PUBLIC_API_IP = 'http://localhost:5107' 
```

3. Então inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador de escolha.



