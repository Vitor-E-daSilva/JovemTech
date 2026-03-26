numero = 1
num_ant = 0
aumento = 0
loop = 1

while numero != 0:
    numero = int(input("Seu número (0 para sair):"))

    if numero == 0:
        break

    elif numero > num_ant and loop > 1:
        aumento += 1
        num_ant = numero
    
    loop +=1
    
print(f"Aumentou {aumento} vezes")
    