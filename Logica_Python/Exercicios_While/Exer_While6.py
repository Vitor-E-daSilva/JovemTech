numero = 1
pares = 0

while numero != 0:
    numero = int(input("Seu número (0 para sair) :"))

    if numero == 0:
        break 
    
    if numero %2 == 0:
        pares +=1

print(f"{pares} números pares")
