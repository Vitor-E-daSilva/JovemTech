numeros = [10, 25, 30, 15, 20, 35, 40]
procurado = 20

 # Buscar posicao
posicao =-1 #-1 indica nao encontrado

for i in range(len(numeros)):
    item = numeros[i]
    if item == procurado:
        posicao += 1
        break
    else:
        posicao += 1


if posicao !=-1:
    print(f"Encontrado na posicao {posicao}")
else:
    print("Nao encontrado")