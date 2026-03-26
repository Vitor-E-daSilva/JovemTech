dias = int(input("Número de dias :"))
fatura = 0

for i in range(dias):
    vendas = float(input(f"Valor do dia {i +1} :"))
    fatura += vendas

print(f"Faturamento total : R$ {fatura}")