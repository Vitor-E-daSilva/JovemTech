#Sistema de notas usando def.
notas = []
def adicionar_nota(notas, nota):
    """Adiciona nota se valida (0-10)."""
    if 0 <= nota <= 10:
        notas.append(nota)
        print("Nota adicionada!")
        return True
    return False

def calcular_media(notas):
    """Calcula media das notas."""
    if len(notas) == 0:
        return 0
    return sum(notas) / len(notas)

def contar_aprovados(notas, nota_minima = 5):
    aprovados = 0
    for i in range(len(notas)):
        nota = notas[i]
        if nota >= nota_minima:
            aprovados += 1
    return aprovados

def exibir_estatisticas(notas):
    if len(notas) == 0:
        print("Sistema vazio")
        return False
    else:
        menor = min(notas)
        maior = max(notas)
        media = calcular_media(notas)
        aprovados = contar_aprovados(notas)
        notas.sort()
    
        print("\n---Estatisticas ---")
        print(f"Notas : {notas}")
        print(f"Maior nota: {maior}")
        print(f"Menor nota : {menor}")
        print(f"Número de aprovados : {aprovados}")
        print(f"Média da turma : {media}")
        return True

def menu_principal():
    """Exibe menu e retorna opcao escolhida."""
    print("\n=== SISTEMA DE NOTAS ===")
    print("1-Adicionar nota")
    print("2-Ver estatisticas")
    print("0-Sair")
    return input("Escolha: ")

while True:
    try:
        escolha = int(menu_principal())
    except:
        print("Escolha inválida")
        continue

    if escolha == 1:
        adicionar_nota(notas, int(input("Nota:")))
    
    elif escolha == 2:
        exibir_estatisticas(notas)
    
    elif escolha == 0:
        print("Até breve!")
        break

    else:
        print("Escolha inválida")