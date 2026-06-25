import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {Accelerometer} from 'expo-sensors';

export default function App() {
  const [leitura, setLeitura] = useState({x: 0, y: 0, z: 0});
  const [pausa, setPausa] = useState(false);
  const [maior, setMaior] = useState("")

  useEffect(() => {
    //Checa se está pausado
    if (pausa) return;
    //Define quantos milisegundos por leitura
    //100ms = 10 leituras por segundo
    Accelerometer.setUpdateInterval(50);
    //Inscreve: o sensor chama setLeitura toda vez que o valor muda 
    const inscricao = Accelerometer.addListener(setLeitura);
    // Checagem do maior valor
    if (Math.abs(leitura.x) > Math.abs(leitura.y) && Math.abs(leitura.x) > Math.abs(leitura.z)) {
      setMaior("Eixo X")
    } else if (Math.abs(leitura.y) > Math.abs(leitura.x) && Math.abs(leitura.y) > Math.abs(leitura.z)) {
      setMaior("Eixo Y")
    } else if (Math.abs(leitura.z) > Math.abs(leitura.y) && Math.abs(leitura.z) > Math.abs(leitura.x)) {
      setMaior("Eixo Z")
    }
    //cleanup: cancela inscrição quando o componente sai da tela
    //sem isso o componente continua rodando mesmo invisivel
    return () => inscricao.remove();
  }, [pausa, maior, leitura])

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Sensor Ativo</Text>
      <Text style={styles.EixoX}>Eixo x: {leitura.x.toFixed(2)}</Text>
      <Text style={styles.EixoY}>Eixo y: {leitura.y.toFixed(2)}</Text>
      <Text style={styles.EixoZ}>Eixo z: {leitura.z.toFixed(2)}</Text>
      <Button title="Parar" onPress={() => setPausa(true)}></Button>
      <Button title="Retomar" onPress={() => setPausa(false)}></Button>
      <Text style={styles.EixoY}>Maior valor: {maior}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',    
  },
  Titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffff'
  },
  EixoX: {
    fontSize: 20,
    color: '#0037ff'
  },
  EixoY: {
    fontSize: 20,
    color: '#ff0000'
  },
  EixoZ: {
    fontSize: 20, 
    color: '#0dff00',
    paddingBottom: 10
  },
  Botao: {
        backgroundColor: '#4CAF50',
      paddingVertical: 12,
      paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5
  }
});
