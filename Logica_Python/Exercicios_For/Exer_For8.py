numeros = int(input("Quantidade de numeros :"))
num_aceitos = 0

for i in range(1, numeros + 1):
    numero = int(input(f"Numero {i} : "))

    if (numero %3 == 0 and numero %5 == 0):
        num_aceitos += 1
    
print(f"{num_aceitos} números atendem à regra")