peso = 0

while peso <= 100:
    entrada = int(input("Peso da carga (KG) :"))
    peso += entrada

    if peso > 100:
        peso -= entrada
        break

print(f"Capacidade atingida. Parada com {peso} kg registrados.")

