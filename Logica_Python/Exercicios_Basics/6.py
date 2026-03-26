palavra = input("Digite uma palavra: ").lower()

inicio = 0
fim = len(palavra)- 1
eh_palindromo = True

# Compare caracteres de fora para dentro
while inicio < fim:
    if palavra[inicio] != palavra[fim]:
        eh_palindromo = False
        break

    else:
        inicio += 1
        fim-= 1
    
    if fim == inicio:
        eh_palindromo = True
        break


if eh_palindromo:
    print("E palindromo")

else:
    print("Nao e palidromo")