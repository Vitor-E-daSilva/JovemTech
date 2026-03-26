dias = int(input("Numero de dias : "))
dia_temp = 0
for i in range(1, dias + 1):
    temperaturas = float(input(f"Temperatura do dia {i} : "))
    if (temperaturas >= 30):
        dia_temp += 1

print(f"{dia_temp} dias com calor extremo")
