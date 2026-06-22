import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Accelerometer} from 'expo-sensors';

export default function App() {
  const [leitura, setLeitura] = useState({x: 0, y: 0, z: 0});

  useEffect(() => {
    //Define quantos milisegundos por leitura
    //100ms = 10 leituras por segundo
    Accelerometer.setUpdateInterval(50);
    //Inscreve: o sensor chama setLeitura toda vez que o valor muda 
    const inscricao = Accelerometer.addListener(setLeitura);
    //cleanup: cancela inscrição quando o componente sai da tela
    //sem isso o componente continua rodando mesmo invisivel
    return () => inscricao.remove();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Sensor Ativo</Text>
      <Text style={styles.EixoX}>Eixo x: {leitura.x.toFixed(2)}</Text>
      <Text style={styles.EixoY}>Eixo y: {leitura.y.toFixed(2)}</Text>
      <Text style={styles.EixoZ}>Eixo z: {leitura.z.toFixed(2)}</Text>
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
    color: '#0dff00'
  }
});
