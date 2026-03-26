senha = 1
tentativas = 0

while senha != 100:
    senha = int(input("Senha :"))
    tentativas += 1

print(f"Acesso concedido após {tentativas} tentativas")

