# Cashforce-teste

Bem vindo ao meu teste tecnico para a seleção de desenvolcedor fullstack. A seguir, as orientações para a execução do projeto localmente.

Primeiro, vamos baixar o projeto. Execute o comando abaixo na pasta onde você deseja fazer o download.

```
git clone https://github.com/rachidb5/cashforce.git
```

## Backend

Primeiro entraremos na subpasta onde fica o backend
```bash
cd back-end
```

Depois, instalamos as dependencias

```bash
npm i
```
Vamos rodar uma instancia do mysql no docker

```bash
docker-compose up
```
Gerando o banco de dados
```bash
npm run db:up
```
Executando o backend
```bash
npm run dev
```

## Frontend

Primeiro entraremos na subpasta onde fica o frontend
```bash
cd front-end
```

Depois, instalamos as dependencias

```bash
npm i
```

Executando o frontend
```bash
npm run dev
```
## Deploy

O backend pode ser acessado no link [BACK](https://cashforce-back.fly.dev/orders)

e o front: [FRONT](https://cashforce.vercel.app/)
