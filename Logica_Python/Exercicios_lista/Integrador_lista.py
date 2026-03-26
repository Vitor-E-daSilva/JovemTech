notas = []

while True:
    print("\n=== SISTEMA DE NOTAS ===")
    print("1-Adicionar nota")
    print("2-Remover nota")
    print("3-Ver notas")
    print("4-Calcular media")
    print("5-Maior e menor")
    print("0-Sair")
    opcao = input("Escolha: ")
    
    if opcao == "1":
        try:
            nota = float(input("Digite a nota: "))
        except ValueError:
            print("Nota inválida")
            continue

        if 0 <= nota <= 10:
            notas.append(nota)
            print("Nota adicionada!")

        else:
            print("Nota invalida! Deve ser 0-10.")

    elif opcao == "2":
        try:
            nota = float(input("Digite a nota"))
        except ValueError:
            print("Nota inválida")
            continue

        if nota in notas:
            notas.remove(nota)
            print("Nota removida!")
        else:
            print(f"Nota não encontrada no sistema \n Notas : {notas}")
        
    elif opcao == "3":
        print(f"Notas : {notas}")
    
    elif opcao == "4":
        print(f"Média : {sum(notas) / len(notas)}")
    
    elif opcao == "5":
        acima = 0
        for i in range (len(notas)):
            media = sum(notas) / len(notas)
            nota_atual = notas[i]
            if nota_atual > media:
                acima += 1
            else:
                continue
        print(f"{acima} notas acima da média")
    
    elif opcao == "0":
        print("Até breve!")
        break

    else:
        print("Opção inválida")

    notas.sort()