numeros = [1, 2, 3, 2, 4, 1, 5, 3, 6, 4]

# Criar nova lista sem duplicatas
sem_duplicatas = []

# Seu codigo aqui...
for i in range(len(numeros)):
    item = numeros[i]
    if item not in sem_duplicatas:
        sem_duplicatas.append(item)
    else:
        continue


print(sem_duplicatas)