#Calculo de fatorial usando def.
def fatorial(n):
    """
    Calcula fatorial de n usando recursao.

    Recursao: funcao que chama a si mesma
    Caso base: fatorial(0) = 1
    Caso recursivo: fatorial(n) = n * fatorial(n-1)
    """
    fatorial_n = 1
    for i in range(n):
        fatorial_n = fatorial_n * (i + 1)
    
    return fatorial_n

# Testes
print(fatorial(5)) # 120
print(fatorial(0)) # 1
print(fatorial(10)) # 3628800