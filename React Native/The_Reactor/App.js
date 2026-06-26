//Não funciona no meu celular
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Vibration, Alert, TouchableOpacity, Share, AppState } from 'react-native';
import {Accelerometer} from 'expo-sensors';

export default function App() {
  const [leitura, setLeitura] = useState({x: 0, y: 0, z: 0});
  const [pausa, setPausa] = useState(false);
  const [maior, setMaior] = useState("");
  const [estado, setEstado] = useState(AppState.currentState)

  //Função para compartilhar dados
  const compartilhar = async () => {
  try {
    await Share.share({
      title: 'Estado dos sensores de meu dispositivo',
      message: `Sensores:
      Eixo X: ${leitura.x.toFixed(2)}
      Eixo Y: ${leitura.y.toFixed(2)}
      Eixo Z: ${leitura.z.toFixed(2)}`
    });
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    //Checa se está pausado
    if (pausa) return;
    //Define quantos milisegundos por leitura
    //100ms = 10 leituras por segundo
    Accelerometer.setUpdateInterval(50);
    //Inscreve: o sensor chama setLeitura toda vez que o valor muda 
    const inscricaoA = Accelerometer.addListener(setLeitura);
    //Inscreve: o sensor chama setEstado toda vez que o valor muda 
    const inscricaoE = AppState.addEventListener(
      'change',
      (estadoAtual) => {
        setEstado(estadoAtual);
        if (estadoAtual === 'active') {
          Alert.alert("Programa Pausado", "O programa foi pausado por sua saida");
          setPausa(true)
        }
      }
    );
    // Checagem do maior valor
    if (Math.abs(leitura.x) > Math.abs(leitura.y) && Math.abs(leitura.x) > Math.abs(leitura.z)) {
      setMaior("Eixo X")
    } else if (Math.abs(leitura.y) > Math.abs(leitura.x) && Math.abs(leitura.y) > Math.abs(leitura.z)) {
      setMaior("Eixo Y")
    } else if (Math.abs(leitura.z) > Math.abs(leitura.y) && Math.abs(leitura.z) > Math.abs(leitura.x)) {
      setMaior("Eixo Z")
    }

    //Indicador de valor extremo
    //Vibra se o valor é plano para algum eixo
    if (leitura.x >= 1 || leitura.y >= 1 || leitura.z >= 1) {
      Vibration.vibrate(100)
    }
    //cleanup: cancela inscrição quando o componente sai da tela
    //sem isso o componente continua rodando mesmo invisivel
    return () => {inscricaoA.remove();
      inscricaoE.remove()}
  }, [pausa, maior, leitura, estado])

  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>Sensor Ativo</Text>
      <Text style={styles.EixoX}>Eixo x: {leitura.x.toFixed(2)}</Text>
      <Text style={styles.EixoY}>Eixo y: {leitura.y.toFixed(2)}</Text>
      <Text style={styles.EixoZ}>Eixo z: {leitura.z.toFixed(2)}</Text>
      {/* Exemplo do botão usando o comando Button, não estava funcionando bem e foi trocado pelo  código TouchableOpacity
       <Button style={styles.Botao} title="Parar" onPress={() => {setPausa(true);
        Alert.alert("Tá pausado, doido!", "Você pausou o programa, tenha mais cuidado")
      }}></Button>
      Como pode ser visto abaixo, é muito mais versátil
      */}
      <TouchableOpacity style={styles.Botao} onPress={() => {setPausa(true);
        Alert.alert("Tá pausado, doido!", "Você pausou o programa, tenha mais cuidado!")}} ><Text>Pausar</Text></TouchableOpacity>
      <TouchableOpacity style={styles.Botao} onPress={() => setPausa(false)}><Text>Retomar</Text></TouchableOpacity>
      <Text style={styles.EixoY}>Maior valor: {maior}</Text>
      <TouchableOpacity style= {styles.Botao} onPress={compartilhar}><Text>Compartilhar</Text></TouchableOpacity>
      <StatusBar style= {()=> {if(pausa) { return 'light'} else { return 'dark'}}} /> 
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
        backgroundColor: '#ffffff',
      paddingVertical: 12,
      paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5
  }
});
