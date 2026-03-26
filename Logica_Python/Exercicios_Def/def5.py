#Verificador de número primo usando def.
def eh_primo(numero):
    """
    Verifica se numero e primo.

    Numero primo: divisivel apenas por 1 e ele mesmo
    """
    if numero < 2:
        return False
    
    for i in range(2, numero):
        
        if (numero %i == 0):
            return False
    return True

# Testes
print(eh_primo(2)) # True
print(eh_primo(17)) # True
print(eh_primo(20)) # False