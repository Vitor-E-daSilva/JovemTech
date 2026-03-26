a, b = 0, 1
limite = 1000

print(a)
print(b)

7 # Complete: gere fibonacci ate b > limite
while (b <= 1000):
    c = a + b
    print(c)
    a, b = b, c

print(f"Parou em {b}")