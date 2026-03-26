letras = []
vogais = []
consoante = []
frase = input("Digite sua frase :")

for i in range(len(frase)):
    letra = frase[i]
    
    if letra != " ":
        letras.append(letra)

    if letra == "a" or letra == "e" or letra == "i" or letra == "o" or letra == "u":
        vogais.append(letra)

    else:
        consoante.append(letra)


print(f"Número de letras : {len(letras)}")
print(f"Número de vogais : {len(vogais)}")
print(f"Número de consoantes : {len(consoante)}")