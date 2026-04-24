-- A conexão de track com album é feita através da coluna album(album_id) em track, e album se conecta ao artist atráves da coluna artist(artist_id) em album.

-- select *
-- from customer
-- limit 1000;

-- O código acima codigo seleciona a coluna na primeira linha, em sequência ele direciona de que banco a coluna deve ser coletada, por fim a última linha define o limite de quantos elementos do banco serão selecionados.

-- Criando tabela genérica
-- CREATE TABLE IF NOT EXISTS clientes (
--   id SERIAL PRIMARY KEY,
--   nome VARCHAR(100) NOT NULL,
--   email VARCHAR(250) UNIQUE NOT NULL,
--   status VARCHAR(20) DEFAULT 'ativo',
--   limite NUMERIC(10,2) CHECK (limite >= 0),
--   criado_em TIMESTAMPTZ DEFAULT NOW()
-- );

-- primeiro criamos a tabela pai
create table if not exists autores (
  id serial primary key,
  nome varchar(100) not null
);

-- Depois criamos a tabela filha
create table if not exists livros (
  id serial primary key,
  titulo varchar(150) not null,
  preco numeric(10,2) not null,
  autor_id integer references autores(id) on delete restrict
);

-- Alterar tabela

--Adicionar coluna
alter table livros add column paginas integer;

--Remover coluna
alter table livros drop column paginas;

--Mudar tipo
alter table livros alter column titulo type varchar(200);

--Adicionar regra
alter table livros add constraint chk_preco check (preco > 0);

-- Codigo inconsistente
-- create table consultas (
--   id integer,
--   paciente varchar(100),
--   medico varchar(100),
--   data_consulta timestamp,
--   valor real,
--   status varchar(50)
-- );

--Codigo corrigido
create table if not exists consultas (
  id serial primary key,
  paciente varchar(100) not null,
  medico varchar(100) references medicos(id) on delete restrict,
  data_consulta timestamptz default now()
  valor numeric(1000,2) not null,
  status varchar(50) default 'agendado'
);

--Codigo inconsistente 2
-- create table consultas (
--   id serial primary key,
--   cliente_id integer references clientes(id),
--   total double precision,
--   desconto numeric(10,2),
--   criado_em timestamp,
--   status varchar(20) default 'pendente'
-- );

--Código corrigido 2
create table if not exists pedidos (
  id serial primary key,
  cliente_id integer references clientes(id) on delete restrict,
  total double precision,
  desconto numeric(10,2) check (desconto >= 0 and desconto <= 100),
  criado_em timestamptz default now(),
  status varchar not null default 'pendente'
);

-- Atividade dois
create table if not exists artistas_caju (
  id serial primary key,
  nome varchar(100) not null unique,
  pais varchar(50),
  cadastro timestamptz default now()
);

create table if not exists albuns_caju (
  id serial primary key,
  titulo varchar(50) not null,
  ano integer check (ano >= 1850 and ano <= 2026),
  artista integer references artistas_caju(id) on delete restrict,
  preco numeric(10,2) check(preco > 0)
);

create if not exists faixas_caju (
  faixa_id serial primary key,
  nome varchar(50) not null,
  duracao integer not null check (duracao > 0),
  album integer references albuns_caju(id) on delete restrict
);

alter table faixas_caju add column genero_musical varchar(50) not null check (genero_musical == 'rock' or genero_musical == 'pop' or genero_musical == 'folk' or genero_musical == 'blues');

-- Aula 3

--Inserindo dados
insert into artistas_caju (nome,pais)
values('Djavan', 'Brasil');

insert into artistas_caju (nome,pais)
values('AC/DC', 'EUA');

insert into artistas_caju (nome,pais)
values('Chico Buarque', 'Brasil');

insert into artistas_caju (nome,pais)
values('Paula Fernades', 'Brasil');

--Alternativo
insert into artistas_caju (nome,pais)
values('Djavan', 'Brasil'),('AC/DC', 'EUA'),('Chico Buarque', 'Brasil'),('Paula Fernades', 'Brasil');

-- Insert com select
insert into artistas_caju(nome)
select "name" From "artist" limit 3;

-- Update simples
update albuns_caju
set preco = 34.90
where id = 1;

--Update com expressão e com returning
update albuns_caju
set preco = preco * 1.10
where artistas(id) = 1;
returning(id)


--Testando funções usando "TRANSACTION"

begin;

truncate table track restart identity cascade;
select count(*) from track

rollback;
select count(*) from track
-- Depois deste código usamos truncate para reiniciar a tabela e em seguida preenchemos ela novamente com dados do chinhook

--Testando código falho

begin;
delete from album;
select * from album;

rollback;

--Testando transferencia de albuns

begin;

update track
set album_id = 2
where album_id = 1;

rollback;
commit;

--Criando um insert inválido

begin;

insert into artist(name)
values ('Sabrina Samira');

insert into artist(artist_id,name)
values ('1','Dudu Silva');

select * from artist;
rollback;

--Criando update sem fechamento

begin;

update track
set name = 'Juju'
where track_id = 1;

select * from track
where track_id = 1

--Fazendo um select detalhado

select first_name, country from customer
where "country" = 'Brazil';

select name from track
where track_id = 999;

select name, milliseconds from track
where milliseconds between 200000 and 300000;

select count(*) from track
where milliseconds between 200000 and 300000;

select first_name, country from customer
where country in ('Brazil', 'Argentina', 'Chile');

select first_name, last_name from customer
where first_name like '_____'; --"like" checa palavras iguais aos paramêtros parecidos

select first_name, last_name, company from customer
where company is null;