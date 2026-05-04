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

-- Exemplos
select
  name as nome,
  composer as compositor,
  milliseconds as tempo
from
  track
select
  sum(total) as total_faturado
from
  invoice
  --Ao adicionar mais colunas a seleção acima, um erro emergirá devido ao agrupamento
  --Exercicios
select
  first_name as nome,
  last_name as sobrenome,
  country as pais
from
  customer
where
  country in ('Brazil', 'Canada', 'France')
order by
  sobrenome;

select
  name as nome,
  milliseconds as tempo
from
  track
where
  milliseconds between 240000 and 360000
order by
  tempo desc;

select
  name as nome,
  composer as compositor
from
  track
where
  composer is null
order by
  nome asc;

select
  total,
  invoice_date as data
from
  invoice
where
  total >= 5
limit
  10
offset
  30;

--Exemplos
select
  sum(total) as faturamento_total,
  round(avg(total), 2) as ticket_medio,
  max(total) as valor_maximo,
  min(total) as valor_minimo
from
  invoice;

select
  genre_id as genero,
  count(track_id) as total_de_faixas
from
  track
group by
  genero
having
  count(*) > 15
order by
  genero
  
select
  billing_country as pais_de_compra,
  sum(total) as faturamento_total,
  count(invoice_id) as total_faturas,
  round(avg(total), 2) as ticket_medio
from
  invoice
where
  billing_country in ('France', 'Germany', 'Italy', 'Portugal')
group by
  pais_de_compra
having
  sum(total) > 100
order by
  faturamento_total desc;

--Exemplo de select
select
  billing_country as pais,
  count(invoice_id) as total_faturas,
  sum(total) as faturamento_total,
  round(avg(total), 2) as ticket_medio
from
  invoice
where
  billing_country in (
    'Germany',
    'Spain',
    'Portugal',
    'United Kingdom',
    'France'
  )
group by
  pais
having
  sum(total) > 100
order by
  faturamento_total desc;

--Exemplo com erro
select customer_id, sum(total) as total_gasto from invoice where sum(total) > 50 group by customer_id;
--Correção
select customer_id, sum(total) as total_gasto from invoice group by customer_id having sum(total) > 30;

--Exercicios
--Ex. 1 e 2
select
  genre_id as genero,
  count(track_id) as total,
from track
group by genre_id
having count(track_id) > 100
order by total desc;
--Ex. 3
select 
  customer_id as customer,
  count(invoice_id) as total
from invoice
group by customer_id
having count(invoice_id) > 5
order by customer;
--Ex. 4
select 
  customer_id as cliente,
  sum(total) as total,
  round(avg(total), 2) as ticket_medio
from invoice
group by cliente
having avg(total) > 5
order by total desc;

--Exemplos de inner join
select * from track t
inner join album al
on t.album_id = al.album_id;

select
 t.name as musica,
 ar.name as artista,
 t.unit_price as preco,
 al.title as album
from track t
inner join album al
on t.album_id = al.album_id
inner join artist ar
on al.artist_id = ar.artist_id;

select
 ar.name as artista,
 ar.artist_id as id,
 count(t.track_id) as musicas
from track t
inner join album al
on t.album_id = al.album_id
inner join artist ar
on al.artist_id = ar.artist_id
group by artista, id;

select c.first_name, c.last_name
from customer c
left join invoice i
 on c.customer_id = i.customer_id
where invoice_id is null;

--Exemplo de subquery
select customer_id,total
from invoice
where total > (select avg(total) from invoice);

select round(avg(total_por_clientes),2) as media
from (select customer_id, sum(total) as total_por_clientes
      from invoice
      group by customer_id
) as totais;

--Exemplos de CTE

with totais as (
  select customer_id, sum(total) as total_gasto
  from invoice
  group by customer_id
)
select concat(c.first_name,' ', c.last_name) as cliente, total_gasto
from totais t
inner join customer c on c.customer_id = t.customer_id;

--Exemplo de view

create view v_sales_by_customer as 
select
  customer_id,
  sum(total) as total_spent,
  count(invoice_id) as total_purchases
from invoice
group by customer_id;

select * from v_sales_by_customer;

create or replace view v_sales_by_customer as 
select
  customer_id,
  sum(total) as total_spent,
  count(invoice_id) as total_purchases,
  max(invoice_date) as last_purchase_date
from invoice
group by customer_id;

drop view if exists v_sales_by_customer;

--Atividade - Construção Inclemental
-- 6
select
  i.invoice_id as codigo_da_fatura,
  concat(c.first_name, ' ', c.last_name) as cliente,
  i.total as valor 
from invoice i
inner join customer c 
on c.customer_id = i.customer_id
group by codigo_da_fatura,cliente
order by valor desc;
-- 7
