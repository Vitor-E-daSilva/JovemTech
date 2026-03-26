clientes = int(input("Numero de clientes : "))
avaliacao = 0
nota1 = 0
nota2 = 0
nota3 = 0
nota4 = 0
nota5 = 0

for i in range(clientes):
    avaliacoes = int(input(f"Avaliação do {i + 1}° cliente : "))
    avaliacao += avaliacoes
    if avaliacoes == 1:
        nota1 += 1
    elif avaliacoes == 2:
        nota2 += 1
    elif avaliacoes == 3:
        nota3 += 1
    elif avaliacoes == 4:
        nota4 += 1
    elif avaliacoes == 5:
        nota5 += 1

print(f"Relatório do Dia:", f"\n Nota 1: {nota1} cliente(s)", 
    f"\n Nota 2: {nota2} cliente(s)",
    f"\n Nota 3: {nota3} cliente(s)", 
    f"\n Nota 4: {nota4} cliente(s)", 
    f"\n Nota 5: {nota5} cliente(s)",
    f"\n Média Geral: {avaliacao / clientes} estrelas")



