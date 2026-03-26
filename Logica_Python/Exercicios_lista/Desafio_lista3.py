import random
baralho = []
numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]

for i in range(len(numeros)):
    baralho.append(f"{numeros[i]} de espadas")
    baralho.append(f"{numeros[i]} de ouros")
    baralho.append(f"{numeros[i]} de copas")
    baralho.append(f"{numeros[i]} de paus")

print("Sua mão :")

for c in range(5):
    print(f"{baralho[random.randint(0, (len(baralho) - 1))]}")