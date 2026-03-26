nadadores = int(input("Numero de jogadores : "))
tempo = 999999

for i in range( 1, nadadores + 1):
    tempo_jogador = int(input(f"Tempo {i} (s) : "))

    if (tempo_jogador < tempo):
        tempo = tempo_jogador

print(f"O menor tempo foi {tempo} segundos")
