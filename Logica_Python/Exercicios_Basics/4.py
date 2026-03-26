cpf = " "

while True:
    cpf = input("Digite o CPF (11 digitos): ")

# Validacoes
    if len(cpf) != 11:
        print("CPF deve ter 11 caracteres!")
    elif not cpf.isdigit():
        print("CPF deve conter apenas numeros!")
    else:
        break # Valido!

print(f"CPF registrado: {cpf}")