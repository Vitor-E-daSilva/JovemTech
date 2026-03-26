idade = 0
maior_idade = 0
while idade != 999:
    idade = int(input("Idade (Digite 999 para parar) :"))
    
    if idade == 999:
        break
    
    if idade > maior_idade:
        maior_idade = idade
    
    

print(f"A maior idade foi {maior_idade}")
