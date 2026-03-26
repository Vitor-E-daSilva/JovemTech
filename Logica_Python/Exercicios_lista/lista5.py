numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pares = []
impares = []

for i in range(len(numeros)):
    item = numeros[i]

    if item == 0:
        pares.append(item)

    elif item %2 == 0:
        pares.append(item)
    
    elif item %2 != 0:
        impares.append(item)

print(f"Pares: {pares}") # [2, 4, 6, 8, 10]
print(f"Impares: {impares}") # [1, 3, 5, 7, 9]