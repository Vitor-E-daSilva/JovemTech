valor_total = 0
mais_caro = 0
mais_barato = 999999999
itens = 0
while True:
	valores = float(input("Valor do produto (0 para sair) : "))
	if valores == 0:
		break
	if valores < mais_barato:
		mais_barato = valores
	
	if valores > mais_caro:
		mais_caro = valores
	
	valor_total += valores
	itens += 1

print(f" --- Fechamento de Caixa ---\n Total Vendido: R$ {valor_total} \n Produto Mais Caro: R$ {mais_caro} \n Produto Mais Barato : R$ {mais_barato} \n Quantidade de Itens : {itens}")
	