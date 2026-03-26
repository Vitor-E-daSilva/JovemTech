senha = 999
voto = 0
aline = 0
bruno = 0
branco =0
nulo = 0
eleitores = 0
validos =0

while voto != senha:
	print(f"Opções de Voto: \n 1 - Cadidato Aline \n 2 - Candidato Bruno \n 3 - Voto em Branco \n 4 - Voto Nulo")
	try:
		voto = int(input("Opção : "))
	except:
		print("Voto Inválido")
		continue
		
	if voto <= 0:
		print("Voto Inválido")
		continue
	
	elif voto > 4:
		print("Voto Inválido")
		continue
	
	if voto == 1:
		aline += 1
		validos += 1
	
	elif voto == 2:
		bruno += 1
		validos += 1
	
	elif voto == 3:
		branco += 1
	
	elif voto == 4:
		nulo += 1
	
	print("Voto realizado")
	eleitores += 1

porcent_aline = aline / validos * 100
porcent_bruno = bruno / validos * 100

if aline > bruno:
	resultado = " ALINE ELEITA !"
elif bruno > aline:
	resultado = " BRUNO ELEITO !"
	
print(f"--- RESULTADO DAS ELEIÇÕES--- \n Total de Eleitores : {eleitores} \n Aline : {aline} votos ({porcent_aline}% dos válidos) \n Bruno {bruno} votos ({porcent_bruno}% dos válidos \n Brancos : {branco} | Nulos : {nulo}")

print(f"Situação Final: {resultado}")