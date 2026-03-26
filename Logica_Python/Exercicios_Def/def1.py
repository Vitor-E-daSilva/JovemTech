#Teste de calculadora usando def.
def somar(a, b):
    soma = a + b
    return soma

def subtrair(a, b):
    subtracao = a - b
    return subtracao

def multiplicar(a, b):
    multiplicacao = a * b
    return multiplicacao

def dividir(a, b):
 if b == 0 or a == 0:
    return "Erro!"
 divisao = a / b
 return divisao
 
# Teste
print(somar(5, 3)) # 8
print(dividir(10, 2)) # 5.0
print(dividir(10, 0)) # Erro!