--> O time financeiro quer saber o menor e o maior valor de fatura registrados por país de cobrança. Mostre o país, o menor valor e o maior valor. Ordene do país com maior valor máximo para o com menor.
--Codigo incorreto
select
  min(total) as menor_fatura,
  max(total) as maior_fatura
from
  invoice
group by
  billing_country
order by
  maior_fatura desc;


--Tudo certo só faltava o pais


select
  billing_contry as pais,
  min(total) as menor_fatura,
  max(total) as maior_fatura
from
  invoice
group by
  billing_country
order by
  maior_fatura desc;


-- ### Query 8

-- > O time regional quer saber quantas faturas foram emitidas por cidade de cobrança no Canadá. Mostre a cidade e a contagem, apenas cidades com **mais de 3 faturas**. Ordene da cidade com mais faturas para a com menos.

select
  billing_city as cidade,
  count(invoice_id) as total_faturas,
from
  invoice
group by
  cidade
having
  count(invoice_id) > 3
order by
  cidade asc;
--Codigo correto, adicionei o pais
select
  billing_city as cidade,
  count(invoice_id) as total_faturas,
  billing_country as pais
from
  invoice
where
    billing_contry = 'Canada'
group by
  cidade
having
  count(invoice_id) > 3
order by
  cidade asc;

-- ### Query 9

-- > O time de planejamento quer saber o faturamento total por trimestre. Mostre o trimestre e o total faturado. Ordene do trimestre com maior faturamento para o menor.
--Codigo errado
select
  sum(total) as faturamento_total
from
  invoice
group by
  extract(quarter from invoice_date)
order by
  extract(quarter from invoice_date) asc;
--Codigo correto, adicionei o trimestre no select


select
  extract(quarter from invoice_date)
  sum(total) as faturamento_total
from
  invoice
group by
  extract(quarter from invoice_date)
order by
  extract(quarter from invoice_date) asc;


-- ### Query 10

-- > O time de dados quer saber quantos clientes distintos existem por cidade, considerando apenas cidades com **pelo menos 2 clientes**. Mostre a cidade e a contagem. Ordene da cidade com mais clientes para a com menos.

--Codigo incorreto
select
  count(customer_id) as total_clientes
from
  customer
group by
  city
having
  count(customer_id) >= 2
order by
  total_clientes desc;

--Codigo correto

select
  billing_city as cidade,
  count(customer_id) as total_clientes
from
  invoice
group by
  cidade
having
  count(customer_id) >= 2
order by
  total_clientes desc;