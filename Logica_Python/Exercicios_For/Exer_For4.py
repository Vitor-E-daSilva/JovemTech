alunos = int(input("Numero de alunos : "))
aprovados = 0
for i in range(1,alunos+1):
    nota = float(input(f"Nota {i} : "))
    if (nota >= 7):
        aprovados += 1

print (f"{aprovados} alunos aprovados")