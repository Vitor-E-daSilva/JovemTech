numeros = int(input("Número de números :"))
primos = 0

for i in range(numeros):
    numero = int(input(f"Numero {i +1} :"))
    eh_primo = 0
    
    for j in range(2, numero):
        
        if (numero %j == 0):
            break
        else:
            eh_primo += 1
    
    if (eh_primo != 0):
        primos += 1

print(f"Foram digitados {primos} números primos")
