alunos = {}
notas = 0

while True:
    print(f"\n Sistema de Notas")
    print(f"1 - Adicionar Aluno")
    print("2 - Adicionar nota")
    print("3 - Calcular média por aluno")
    print("4 - Verificar aprovação")
    print("0 - Sair")

    try:
        opcao = int(input("Escolha uma opção: "))
    except:
        print("Opção inválida")
        continue

    if opcao == 1:
        nome = input("Nome do aluno:")
        alunos[nome] = {
            "notas": "",
            "faltas": ""
            }
        print(f"Aluno {nome} adicionado")

    elif opcao == 2:
        nome = input("Nome do aluno:")
        if nome in alunos:
            try:
                nota = float(input("Escolha uma opção: "))
            except:
                print("Nota inválida")
                continue
            if alunos[nome][notas]:
                alunos[nome][notas] = nota
            else:
                alunos[nome][notas] = alunos[nome][notas], nota
        
    
    elif opcao == 3:
        pass

    elif opcao == 4:
        pass

    elif opcao == 0:
        break

    else:
        print("Opção inválida")