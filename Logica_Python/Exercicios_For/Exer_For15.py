alt_mare = int(input("Número de medições :"))
valor_ant = 0
valor_atual = 0
picos = 0

for i in range(alt_mare):
    valor_futuro = int(input(f"Altura da maré no dia {i + 1} :"))

    if (i>0 and valor_atual > valor_ant and
         valor_atual > valor_futuro):
        picos += 1
    
    valor_ant = valor_atual
    valor_atual = valor_futuro
        
print(f"Detectamos {picos} picos de maré")