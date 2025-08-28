import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native-web';

export default function App() {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function carregarTarefas() {
      const tarefasGuardadas = await AsyncStorage.getItem('tarefas');
      if (tarefasGuardadas) {
        setTarefas(tarefasGuardadas.split(',').filter(item => item !== ''));
      }
    }
    carregarTarefas();
  }, []);

  const salvarTarefa = async () => {
    if (tarefa.trim() === '') {
      alert('Digite um produto primeiro');
      return;
    }
    const novaListaTarefas = [...tarefas, tarefa];
    setTarefas(novaListaTarefas);
    await AsyncStorage.setItem('tarefas', novaListaTarefas.join(','));
    setTarefa('');
    alert('Produto adicionado com sucesso');
  };

  const excluirTarefa = async (index) => {
    const novaListaTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novaListaTarefas);
    await AsyncStorage.setItem('tarefas', novaListaTarefas.join(','));
  };

  const limparTudo = async () => {
    if (window.confirm('Deseja realmente excluir todos os produtos?')) {
      setTarefas([]);
      await AsyncStorage.removeItem('tarefas');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffd1dc" />
      <Text style={styles.titulo}>Lista de Produtos </Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite o produto de maquiagem"
          style={styles.input}
          value={tarefa}
          onChangeText={setTarefa}
        />
        <Button 
          title="Adicionar" 
          onPress={salvarTarefa} 
          color="#a56ecc"
        />
      </View>
      
      {tarefas.length === 0 ? (
        <View style={styles.mensagemContainer}>
          <Text style={styles.texto}>Nenhum produto cadastrado</Text>
          {/* <Text style={styles.emoji}>💋</Text> */}
        </View>
      ) : (
        <>
          <Text style={styles.subtitulo}>Seus produtos:</Text>
          <FlatList
            data={tarefas}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.tarefaItem}>
                <Text style={styles.tarefaTexto}>{item}</Text>
                <TouchableOpacity onPress={() => excluirTarefa(index)}>
                  <Text style={styles.excluirBotao}>✖</Text>
                </TouchableOpacity>
              </View>
            )}
            style={styles.lista}
          />
          
          <Button
            title="Limpar Tudo"
            onPress={limparTudo}
            color="#a56ecc"
            style={styles.botaoLimpar}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d6abf5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#a56ecc',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a56ecc',
  },
  inputContainer: {
    marginBottom: 20,
  },
  mensagemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 50,
    marginTop: 20,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#a57cc2',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  lista: {
    marginBottom: 20,
  },
  tarefaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#a56ecc',
  },
  tarefaTexto: {
    fontSize: 16,
    color: '#a56ecc',
  },
  excluirBotao: {
    color: '#c71585',
    fontSize: 18,
    fontWeight: 'bold',
  },
  botaoLimpar: {
    marginTop: 10,
  },
});