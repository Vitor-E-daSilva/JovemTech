numero = -1
num_ant = 0
sequencia = True
while numero != 0:
    numero = int(input("Seu número (0 para sair) :"))
    
    if numero == 0:
        break

    if numero > num_ant:
        sequencia = True
    
    elif numero < num_ant:
        sequencia = False

    num_ant = numero

if sequencia:
    print("Sequência Crescente Válida")

else:
    print("Sequência Quebrada")


