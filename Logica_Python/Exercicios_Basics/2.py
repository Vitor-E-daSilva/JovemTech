soma = 0
quantidade = 0

nota = float(input("Digite sua nota (-1 pra sair): "))
while nota != (-1):
    soma += nota
    quantidade += 1
    nota = float(input("Digite sua nota (-1 pra sair): "))

    if nota == -1:
        break

if quantidade > 0:
    media = soma / quantidade
    print(f"Media: {media:.2f}")

else:
    print("Nenhuma nota digitada")