# Projeto WEB

![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white)

> Esse repositório foi criado como atividade avaliativa para a disciplina de Programação Avançada WEB, da Universidade de Vila Velha, ministrada pelo professor Otávio Lube. O exercício consiste no desenvolvimento de uma API do tipo CRUD com Typescript, usando React, implementando o Prisma para conexão e migração do Banco de Dados e experimentando a inserção de AI através do GROQ.

O projeto da API tem o controle dos modelos de usuário, posts e comentários.

## 💻 Lista de comandos

Alguns dos comandos usados para a execução do projeto:

- ``` npm init -y ```
- ``` npm i typescript ```
- ``` npx tsc --init ```
- ``` npm i ts-node ```
- ``` npx tsc ```
- ``` npm install express ```
- ``` npm i --save-dev @types/express ```

## Extensões do VSCode

Algumas das extensões usadas para no desenvolvimento do projeto:

```
{
    "recommendations": [
        "vscode-icons-team.vscode-icons",
        "esbenp.prettier-vscode",
        "prisma.prisma",
        "Prisma.prisma-insider",
        "rangav.vscode-thunder-client"
    ]
}
```

## Ts-node-dev

O ts-node-dev nos ajuda a ter mais produtividade uma vez que ele reinicializar o servidor automaticamente a medida que salvamos o projeto.

- ``` npm i ts-node-dev --save-dev ```

Depois de instalado, basta atualizar o script de execução do projeto para:

```
  "dev": "npx ts-node-dev ./src/server.ts"
```

## Prisma ORM

Para a instalação e utilização do Prisma, segue-se a documentação:

- https://www.prisma.io/docs/getting-started/quickstart

