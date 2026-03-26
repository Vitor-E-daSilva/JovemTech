#Criação de um validador de senha usando def.
def validar_senha(senha):
    """
    Valida se senha atende criterios:
    -Minimo 8 caracteres
    -Pelo menos 1 numero
    -Pelo menos 1 letra maiuscula

    Retorna True se valida, False caso contrario
    """
    maiuscula = False
    numero = False
    if len(senha) < 8:
        return False
    
    for i in range(len(senha)):
        caractere = senha[i]
        if (caractere.isupper()):
            maiuscula = True
        if (caractere.isdigit()):
            numero = True

    if maiuscula and numero:
        return True
    else:
        return False
    

            
# Testes
print(validar_senha("abc123")) # False (curta)
print(validar_senha("abcdefgh")) # False (sem numero)
print(validar_senha("Abc12345"))