compras = []
opcao = -1
while opcao != 0:
    print(f"1 - Adicionar item \n 2 - Remover item \n 3- Ver lista \n 0 - Sair")
    try:
        opcao = int(input("Escolha uma opção: "))
    except ValueError:
        print("Opção inválida")

    if opcao == 1:
        item = input("Item para adicionar :")
        compras.append(item)
        print(f"{item} adicionado na lista : {compras}")
    
    elif opcao == 2:
        item = input("Item para remover :")
        if item in compras:
            compras.pop(item)
        
        else:
            print(f"{item} não está na lista {compras}")
    
    elif opcao == 3:
        print(f"Sua lista {compras}")
    
    elif opcao == 0:
        print("Até breve!")
        break

    else:
        print("Opção inválida")