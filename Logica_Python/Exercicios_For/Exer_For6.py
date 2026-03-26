transacoes = int(input("Numero de dias : "))
trans_lucro = 0
trans_prejuizo = 0
for i in range(1, transacoes +1):
    valores = float(input(f"Lucro no dia {i} : "))
    if (valores > 0):
        trans_lucro += 1

    elif (valores < 0):
        trans_prejuizo += 1

print(f"{trans_lucro} transações positivas, {trans_prejuizo} negativas")