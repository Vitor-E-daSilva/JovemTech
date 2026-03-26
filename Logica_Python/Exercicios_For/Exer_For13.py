dias = int(input("Numero de dias : "))
dia_anterior = 0
aumento = 0
for i in range(dias):
    vendas = int(input(f"Vendas do dia {i +1 } :"))
    if (i > 0 and vendas > dia_anterior):
        aumento += 1
    
    dia_anterior = vendas

print(f"Houve aumento em {aumento} ocasiões")

    