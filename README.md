# Backend-MKS

API de filmes

## Execução

> docker-compose up -d
> npm install
> npm run start:dev

## Notas

### Possíveis Melhorias

- TypeORM (Meu primeiro contanto com TypeORM).
	- Não esquecer de setar 'false' em dataBaseProviders:synchronize para produção.
	- Definir length das Colunas

- Criar Regex
	- Year
	- Released
	- Runtime
	- IMDb

## Tarefas (Funcional)

### Endpoints com Tokens.

- [x] Bearer Token.
	- Se um usuário possuir um token secreto, poderá fazer operações.
- [x] Autenticação JWT.
	- Um usuário pode ter um token fazendo login.

## Ferramentas Requeridas

- [x] TypeScript
- [x] Nest.JS
- [x] TypeORM
- [x] Swagger
- [x] Docker
- [x] PostgreSQL
	- [x] Database
- [X] Redis
	- [x] Cache

## OBSERVAÇÕES SOBRE CACHING COM REDIS

A documentação atualmente apresenta suporte para versões anteriores para caching.

A configuração de ttl e max (quantidade máxima de itens no cache) é incerta. **max** só fica com valor padrão. 

Contudo, o **caching** usando **Redis** está **implementado** (várias soluções foram testadas),
um banco de dados (do **Supabase**) está disponível em app.module.ts apontando para um **servidor na Índia** está sendo fornecido para a averiguação.