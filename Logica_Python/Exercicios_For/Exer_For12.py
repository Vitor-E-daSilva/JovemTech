numeros = int(input("Quantidade de numeros : "))
sequencia = 1
maiorseq = 1
for i in range(numeros):
    numero = int(input(f"Numero {i + 1} :"))
    
    if (i > 0 and numero == num_anterior):
        sequencia += 1
    
    elif (sequencia > maiorseq):
        maiorseq = sequencia
        sequencia = 1
    
    num_anterior = numero

print(f"Maior sequência de repetições : {maiorseq}")
