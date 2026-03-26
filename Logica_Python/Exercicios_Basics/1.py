import random

numero = random.randint(1, 10)
palpite = 0
# Complete o loop while
while palpite != numero:
    try:
        palpite = int(input("Adivinhe (1-10): "))
    except:
        print("Valor invalido")
        continue
    if palpite < numero:
        print("Muito baixo!")
    elif palpite > numero:
        print("Muito alto!")


print("Parabens! Acertou!")