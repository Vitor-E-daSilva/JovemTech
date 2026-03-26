lista = []

for i in range (5):
    item = int(input("Digite um número :"))
    lista.append(item)

print(lista)
print(max(lista))
print(min(lista))
print(sum(lista) / len(lista))
lista.sort()
print(lista)

