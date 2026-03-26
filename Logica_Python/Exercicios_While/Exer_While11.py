soma = 0
digito = int(input("Seu número:"))
while digito >=  0:
    soma += digito // 100
    digito = digito - (digito // 100 * 100)
    digito *= 10
    if digito <= 0:
    	break

print(f"A soma dos digitos é {soma}")


    