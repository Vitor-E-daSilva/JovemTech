pacientes = {
    "Ana Carla": {
        "CPF" : "12345678901",
        "Nascimento" : "11/11/1989",
        "Contato" : {
            "Numero" : "1234676239",
            "Email": "anacarla123@email"        
            }
        }
    }

def cadastro_paciente(nome):
    pacientes[nome] = {
        "CPF": "",
        "Nascimento" : "",
        "Contato" : ""
        }
    
    while True:
        validade_cpf = False
        try:
            cpf = int(input("CPF (Somente números) :"))
        except:
            print("CPF inválido!")
            continue
        
        numeros = str(cpf)

        if len(numeros) == 11:
            validade_cpf = True
            break

        else:
            print("CPF inválido!")
            continue

    if validade_cpf:
        pacientes[nome]["CPF"] = cpf
    
    while True:
        validade_data = False
        try:
          Ano = int(input("Ano de nascimento (Apenas números):"))
          Mes = int(input("Mês de nascimento (Apenas números):"))
          Dia =int(input("Dia de nascimento (Apenas números):"))
          nascimento = (f"{Dia}/ {Mes}/ {Ano}")
        except:
            print("Data inválida!")
            continue

        pacientes[nome]["Nascimento"] = nascimento
        validade_data = True

        if validade_data:
            break

    while True:
        validade_contato = False
        try:
            numero = int(input("Número de telefone (Apenas números):"))
        except:
            print("Número inválido")
            continue

        email = input("Correio eletrônico:")

        pacientes[nome]["Contato"] = {"Telefone" : numero, "Email" : email }

        validade_contato = True
        if validade_contato:
            break

    return pacientes

def checar():
    for paciente in pacientes:
      print(f"Paciente : {paciente}")
      print(f"CPF : {pacientes[paciente]["CPF"]}")
      print(f"Nascimento : {pacientes[paciente]["Nascimento"]}")
      print(f"Contato : {pacientes[paciente]["Contato"]}")