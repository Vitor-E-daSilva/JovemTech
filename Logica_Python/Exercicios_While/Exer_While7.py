numero = 1
multiplos = 0

while numero != 0:
    numero = int(input("Seu numero (0 para sair) :"))
    if numero == 0:
        break

    elif numero %7 == 0:
        multiplos += 1
    
    
    
print(f"{multiplos} múltiplos de 7")

