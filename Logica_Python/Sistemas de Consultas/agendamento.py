import medicos
import pacientes

agendado = {}

def agendar():
    while True:
        print("\nMedicos Cadastrados:")
        for medico in medicos.medicos:
          print(medico)
        medico = input("Nome do médico:")
        if medico in medicos.medicos:
          break
        else:
          print("Médico não encontrado no sistema")
    
    while True:
        print("\nPacientes Cadastrados:")
        for paciente in pacientes.pacientes:
          print(paciente)
        paciente = input("Nome do paciente:")
        if paciente in pacientes.pacientes:
            break
        else:
          print("Paciente não registrado no sistema!")
    
    

    while True:
      print(f"\nDatas disponiveis:")
      for data in medicos.medicos[medico]["Disponibilidade"]:
        print(data)
      print("Selecione a data")
      try:
        Ano = 2026
        Dia = int(input("Dia:"))
        Mes = int(input("Mês:"))
        data = (f"{Dia}/{Mes}/{Ano}")
        print(data)
      except:
        print("Data inválida!")
        continue
      
      print("\nHorários disponíveis")
      for horario in medicos.medicos[medico]["Disponibilidade"][data]:
        print(horario)
      
      print("Selecione o horário")
      try:
        hora = int(input("Hora:"))
        minuto = int(input("Minuto:"))
        Hora = (f"{hora}:{minuto}")
        print(Hora)
      except:
        print("Horario inválido!")
        continue
      
      if data in medicos.medicos[medico]["Disponibilidade"]:
        if Hora in medicos.medicos[medico]["Disponibilidade"][data]:
                agendado[f"{medico}"] = {
                    "Paciente": f"{paciente}",
                    "Medico" : f"{medico}",
                    "Data" : f"{data}",
                    "Horario" : f"{Hora}"
                }
                print("Agendamento realizado!")
                break
        else:
          print("Hórario indisponível!")
          continue
        
      else:
        print("Dia indisponível")
        continue
    
    return agendado

def cancelar():
    pass

def checar():
    for agendamento in agendado:
      print(f"Medico : {agendamento}")
      print(f"Paciente : {agendado[agendamento]["Paciente"]}")
      print(f"Data : {agendado[agendamento]["Data"]}")
      print(f"Hora : {agendado[agendamento]["Hora"]}")