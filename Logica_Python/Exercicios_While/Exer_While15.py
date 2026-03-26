resultado = 1
valor1 = int(input("Valor 1 : "))
valor2 = int(input("Valor 2 : "))
resto = valor1 % valor2

while valor2 <= valor1:
    valor2 += valor2
    resultado += 1
    
print(f"Resultado: {resultado}. Resto: {resto}")



    
