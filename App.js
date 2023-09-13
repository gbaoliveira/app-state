import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [confirmarEmail, setConfirmarEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [idioma, setIdioma] = useState('');
  const [dadosCapturados, setDadosCapturados] = useState(null);

  const handleCadastrar = () => {
    // Aqui você pode validar os dados antes de prosseguir
    // Por exemplo, verifique se o email e o email de confirmação são iguais

    // Crie um objeto com os dados capturados
    const dados = {
      nome,
      genero,
      dataNascimento,
      usuario,
      senha,
      email,
      confirmarEmail,
      cpf,
      idioma,
    };

    // Exiba os dados no console
    console.log(dados);

    // Atualize o estado para exibir os dados na tela
    setDadosCapturados(dados);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Nome</Text>
        <TextInput
          style={styles.textinput}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Gênero</Text>
        <TextInput
          style={styles.textinput}
          value={genero}
          onChangeText={(text) => setGenero(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Data de Nascimento</Text>
        <TextInput
          style={styles.textinput}
          value={dataNascimento}
          onChangeText={(text) => setDataNascimento(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Usuário</Text>
        <TextInput
          style={styles.textinput}
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Senha</Text>
        <TextInput
          style={styles.textinput}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry // Para esconder a senha
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>E-mail</Text>
        <TextInput
          value={email}
          style={styles.textinput}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Confirme seu E-mail</Text>
        <TextInput
          style={styles.textinput}
          value={confirmarEmail}
          onChangeText={(text) => setConfirmarEmail(text)}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>CPF</Text>
        <TextInput
          style={styles.textinput}
          value={cpf}
          onChangeText={(text) => setCpf(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Idioma do Currículo</Text>
        <TextInput
          style={styles.textinput}
          value={idioma}
          onChangeText={(text) => setIdioma(text)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="CADASTRAR" onPress={handleCadastrar} />
      </View>
      {dadosCapturados && (
        <View>
          <Text>Dados Capturados:</Text>
          <Text>{JSON.stringify(dadosCapturados, null, 2)}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  inputContainer: {
    alignSelf: 'center',
  },
  textinput:{
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 200, 
    height: 40,
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: 'center', // Centraliza o botão horizontalmente
  },
});

export default CadastroScreen;