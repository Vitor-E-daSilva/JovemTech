import agendamento
import medicos
import pacientes

while True:
    print("\n --- Sistema de gerenciamento de Consultas ---")
    print("Opções:")
    print("1 - Cadastrar Paciente")
    print("2 - Visualizar Pacientes")
    print("3 - Cadastrar Médico")
    print("4 - Visualizar Medicos")
    print("5 - Agendar Consulta")
    print("6 - Visualizar Consultas")
    print("0 - Sair")
    
    try:
        opcao = int(input("Escolha uma opção:"))
    except ValueError:
        print("Opção inválida!")
        continue

    if opcao == 1:
        nome = input("\nNome do paciente:")
        pacientes.cadastro_paciente(nome)
    
    elif opcao == 2:
        pacientes.checar()

    elif opcao == 3:
        nome = input("\nNome do médico:")
        medicos.adicionar_médico(nome)
    
    elif opcao == 4:
        medicos.checar()

    elif opcao == 5:
        agendamento.agendar()
    
    elif opcao == 6:
        agendamento.checar()

    elif opcao == 0:
        print("\nAté logo!")
        break

    else:
        print("Opção inválida!")