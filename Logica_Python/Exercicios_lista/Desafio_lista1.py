import random
import time
numeros = [random.randint(0, 9),random.randint(0, 9), 
           random.randint(0, 9), random.randint(0, 9),
           random.randint(0, 9), ]
tentativas = 5
for i in range(5):
    print("Memorize os números!")
    print(numeros)
    time.sleep(2)
    print("\033[H\033[J", end = "")
    tentativa = []
    for i in range(5):
        numero = int(input(f"Numero {i +1 } :"))
        tentativa.append(numero)
    
    if tentativa == numeros:
        print("Vitória!")
        break
    else:
        tentativas -= 1
        print("Errou")
        print(f"Tentativas restantes : {tentativas}")

if tentativas == 0:
    print("Sem tentativas restantes! \nDerrota")
    
    