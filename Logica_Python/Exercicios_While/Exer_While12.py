numero = 0
sequencia = 1
maior_sequencia = 0
num_ant = 0

while numero != -1:
    numero = int(input("Seu número (-1 para sair) :"))
    
    if numero == -1:
        break

    elif numero == num_ant:
        sequencia += 1
        
    
    else:
        numero != num_ant
        sequencia = 1
    
    num_ant = numero

    if sequencia > maior_sequencia:
    	maior_sequencia = sequencia
    	
    

print(f"A maior sequência teve {maior_sequencia} números repetidos")