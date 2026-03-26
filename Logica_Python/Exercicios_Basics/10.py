secreto = 42 
palpite = int(input("Adivinhe o numero? (1-100) "))
acertou = (palpite == secreto)
muito_baixo = (palpite < secreto - 10)
muito_alto = (palpite > secreto + 10)
perto = (not acertou and not muito_alto and not muito_baixo)
print (f"Acertou? {acertou}")
print (f"Muito baixo? {muito_baixo}")
print (f"Muito alto? {muito_alto}")
print (f"Perto? {perto}")
#if (acertou):
#    print("Parabens! Acertou!")

#if (muito_alto):
#    print ("Muito alto!")

#if (muito_baixo):
#    print ("Muito baixo!")

#if (perto):
#       print ("Perto!")