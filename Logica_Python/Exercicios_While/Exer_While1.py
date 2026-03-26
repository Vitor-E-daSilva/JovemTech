numero = 1
lidos = 0
while numero != 0:
    numero = int(input("Seu numero (0 para sair) :"))
    if (numero !=0):
        lidos += 1
    
print(f"{lidos} números lidos")