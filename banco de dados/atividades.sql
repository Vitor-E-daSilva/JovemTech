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
