jogadores = int(input("Número de jogadores :"))
total_pontos = 0
maior_pont = 0
menor_pont = 999999999
for i in range(jogadores):
    pontuacao = int(input(f"Pontuação do jogador {i + 1}:"))
    
    if pontuacao > maior_pont:
        maior_pont = pontuacao
    
    if pontuacao < menor_pont:
        menor_pont = pontuacao
    
    total_pontos += pontuacao

print(f"Resumo do Campeonato :"
      f"\nTotal de Pontos: {total_pontos}"
      f"\nMaior Pontuação: {maior_pont}"
      f"\nMenor Pontuação: {menor_pont}"
      f"\nMédia da Partida: {total_pontos / jogadores}")
