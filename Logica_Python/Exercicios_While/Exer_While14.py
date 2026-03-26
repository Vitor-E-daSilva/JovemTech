numero = 1
num_ant = 1
loop = 0
consec = 0

while numero != 0:
    numero = int(input("Seu número (0 para sair) :"))

    if numero == 0:
        break

    elif numero %num_ant== 0 and loop > 0:
        consec += 1

    num_ant = numero
    loop += 1
    
print(f"{consec} ocorrências")


