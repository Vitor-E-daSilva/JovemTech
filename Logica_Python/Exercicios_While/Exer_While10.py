dado = 1
maior = 0
menor = 999999

while dado != 0:
    dado = int(input("Seu número (0 para sair) :"))

    if dado == 0:
        break
    
    elif dado > maior:
        maior = dado
    
    if dado < menor:
        menor = dado
    
diferenca = maior - menor

print(f"Diferença: {diferenca} ({maior} - {menor})")
