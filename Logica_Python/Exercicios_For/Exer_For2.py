corredores = int(input("Numero de corredores : "))

for i in range(corredores + 1):
    if (i %2 == 0 and i > 0):
        print(i, end = " ")