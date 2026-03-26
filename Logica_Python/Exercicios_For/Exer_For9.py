movimentos = int(input("Numero de movimentos : "))
andar = 0

for i in range(movimentos):
    acao = int(input(f"Movimento {i + 1} (1 para subir , -1 para descer) : "))
    
    if (acao == 1):
        andar += 1
    
    elif (acao == -1):
        andar -= 1

print(f"O elevador parou no andar {andar}")