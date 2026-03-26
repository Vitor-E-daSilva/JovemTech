def contar_palavras(texto):
    
    palavras = []
    palavra = ""
    for i in range(len(texto)):
    
        letra = texto[i]
        if letra == " ":
            palavras.append(palavra)
            palavra = ""
        else:
            palavra = f"{palavra}{letra}"   
    
    contagem = {}
    for i in range(len(palavras)):
        palavra = palavras[i]
        if palavra not in contagem:
            contagem[palavra] = 1
        
        else:
            contagem[palavra] = contagem[palavra] + 1
        
    return contagem

texto = "o rato roeu a roupa do rei de roma "
contagem = contar_palavras(texto)
print(contagem)