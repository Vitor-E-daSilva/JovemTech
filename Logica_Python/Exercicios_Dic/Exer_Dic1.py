agenda = {}

while True:
    print(f"\nFuncionalidades:")
    print("1 - Adicionar contato(Telefone, email)")
    print("2 - Buscar contato")
    print("3 - Listar todos os contatos")
    print("4 - Remover contato")
    print("5 - Sair")

    try:
        opcao = int(input("Escolha uma opção: "))
    except:
        print("Opção inválida")
        continue

    if opcao == 1:
        nome = input("Nome do contato:")
        numero = input("Número de telefone:")
        caixa = input("E-mail:")
        agenda[nome] = {"telefone" : f"{numero}" , "email" : f"{caixa}"}
        print(f"Contato adicionado: {nome}: {agenda[nome]}")
                         
    elif opcao == 2:
        contato = input("Nome do contato:")
        if contato in agenda:
            print(f"Contato de {contato} : {agenda[contato]} ")
        
        else:
            print("Contato não encontrado")

    elif opcao == 3:
        print(agenda)

    elif opcao == 4:
        remocao = input("Contato a ser removido : ")
        if remocao in agenda:
            agenda.pop(remocao)
        
        else:
            print("Contato não encontrado")

    elif opcao == 5:
        break

    else:
        print("Opção inválida")