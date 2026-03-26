saldo = 1000.0
continuar = True

while continuar:
    print(f"\nSaldo atual: R$ {saldo:.2f}")
    print("1-Sacar")
    print("2-Depositar")
    print("3-Sair")
    escolha = int(input("Opção:"))

    while escolha == 1:
        saque = int(input("Valor do saque"))
        if saque <= saldo:
            saldo = saldo - saque
            print("Saque realizado")
            escolha = 0
            break
        
        else:
            print("Valor de saque invalido")

    if escolha == 2:
        deposito = int(input("Valor do deposito: "))
        print("Deposito realizado")
        saldo = saldo + deposito
    
    if escolha == 3:
        break

print("Ate logo")