numero = 1
loop = 1
superou = 0
primeiro = 0

while numero != 0:
    numero = int(input("Seu número (0 para sair) :"))

    if loop == 1:
        primeiro = numero
    
    elif numero > primeiro:
        superou += 1

    loop +=1

print(f"{superou} valores superaram o {primeiro}")
