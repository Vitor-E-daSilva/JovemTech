numero = 1
soma = 0

while numero >=0:
    numero = int(input("Seu número (Insira um negativo pra sair): "))
    if numero > 0:
        soma += numero

print(f"Soma: {soma}") 