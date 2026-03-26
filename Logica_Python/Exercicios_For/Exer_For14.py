numeros = int(input("Quantidade de numeros : "))
numero_anterior = 0
repeticao = 0

for i in range(numeros):
    numero = int(input(f"Numero {i + 1} :"))

    if (i > 0 and numero == numero_anterior):
        repeticao += 1
    
    numero_anterior = numero

print(f"Houve repetição em {repeticao} ocasiões")
