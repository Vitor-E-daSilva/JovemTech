#Conversor de temperatura usando def.
def celsius_para_fahrenheit(celsius):
    Fahrenheit = (celsius * 9/5) + 32
    return Fahrenheit

def fahrenheit_para_celsius(fahrenheit):
    Celsius = (fahrenheit-32) * 5/9
    return Celsius

# Testes
print(celsius_para_fahrenheit(0)) # 32.0
print(celsius_para_fahrenheit(100)) # 212.0
print(fahrenheit_para_celsius(32)) # 0.0