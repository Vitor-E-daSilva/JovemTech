#Display de estatísticas usando def
def estatisticas(numeros):
    """
    Retorna minimo, maximo, media de uma lista.

    Retorna:
    tupla: (minimo, maximo, media)
    """
    minimo = min(numeros)
    maximo = max(numeros)
    media = sum(numeros) / len(numeros)
    return minimo, maximo, media

# Teste
numeros = [10, 20, 30, 40, 50]
min_val, max_val, media = estatisticas(numeros)
print(f"Min: {min_val}, Max: {max_val}, Media: {media}")
 # Min: 10, Max: 50, Media: 30.0