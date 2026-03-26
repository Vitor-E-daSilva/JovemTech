medicos = {
    "Carlos Alberto" : {
        'CRM' : '12346-SE' ,
        'Especialidade' : 'Odontologista',
        'Disponibilidade' : {
          "12/12/2026" : ["13:0","14:0"]
          }
        }
    }

def adicionar_médico(nome):
    medicos[nome] = {
        "CRM" : "",
        "Especialidade" : "",
        "Disponibilidade" : ""
    }

    while True:
        try:
            crm_num = int(input("Números do CRM:"))
        except:
            print("Erro! Digite apenas números!")
            continue

        crm_sigla = input("Sigla do CRM:")

        medicos[nome]["CRM"] = (f"{crm_num}-{crm_sigla}")
        break

    medicos[nome]["Especialidade"] = input(f"Especialidade de dr. {nome}:")

    
    while True:
      print("Gerenciar Disponibilidade")
      
      print("Adicione data:")
      try:
        Ano = 2026
        Mes = int(input("Mês:"))
        Dia =int(input("Dia:"))
        data = (f"{Dia}/{Mes}/{Ano}")
      except:
        print("Data inválida!")
        continue

      while True: 
        print("Adicione os hórarios")
        horarios = []
        try:
          hora = int(input("Hora:"))
          minuto = int(input("Minuto:"))
        except:
            print("Horário inválido!")
            continue
        Hora = (f"{hora}:{minuto}")
        horarios.append(Hora)
        validar_hora = input("Digite 0 para parar de adicionar horários")

        if validar_hora == "0":
          medicos[nome]["Disponibilidade"]= { f"{data}" : horarios
          }
          print("Hórario(s) adicionado(s)!")
          break

      validar_dia =  input("Digite 0 para parar de adicionar dias")

      if validar_dia == "0":
          print("Dia(s) Adicionado(s)!")
          break
    
    return medicos

def checar():
  for medico in medicos:
    print(f"Doutor : {medico}")
    print(f"CRM : {medicos[medico]["CRM"]}")
    print(f"Especialidade : {medicos[medico]["Disponibilidade"]}")
    