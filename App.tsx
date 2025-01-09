import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        {sexoNome: 'Sexo', id: 0},
        {sexoNome: 'Feminino', id: 1},
        {sexoNome: 'Masculino', id: 2},
      ],
      limite: 0,
      estudante: false,
      
    };
    this.enviarDados = this.enviarDados.bind(this)
  }
  

  enviarDados(){
    if(this.state.nome === "" || this.state.idade === "" ){
      alert(
        "Por favor, preencha os campos nome e idade."
      )
      return 
    }
    alert(
      "Conta aberta com sucesso!  \n\n"  +
      "Nome: " + this.state.nome + "\n\n" +
      "Idade: " + this.state.idade + "\n\n" +
      "Sexo: " + this.state.sexos[this.state.sexo].sexoNome + "\n\n" +
      "Limite da Conta: " + this.state.limite.toFixed(2) + "\n\n" +
      "Estudante: " +((this.state.estudante)? "Ativo": "Inativo")
    )
  }
  render() {
    let sexoItems = this.state.sexos.map((value, key) => {
      return <Picker.Item key={key} value={key} label={value.sexoNome} />;
    });
    return (
      <View style={styles.container}>
        <View style={styles.logoArea}>
          <Text style={styles.logo}>Banco React</Text>
        </View>
        <View style={styles.box1}>
          <View style={styles.inputArea}>
            <TextInput
              style={styles.inputs}
              placeholder="Digite seu nome"
              onChangeText={texto => this.setState({nome: texto})}></TextInput>
            <TextInput
              style={styles.inputs}
              placeholder="Digite sua idade"
              onChangeText={texto => this.setState({idade: texto})}
              keyboardType="numeric"></TextInput>
          </View>
          <View style={styles.pickerArea}>
            <Picker
              selectedValue={this.state.sexo}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({sexo: itemValue})
              }
              style={styles.picker}>
              {sexoItems}
            </Picker>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.sliderArea}>
            <View>
              <Text style={styles.sliderText}>Meus limites</Text>
            </View>
            <View>
              <Text style={styles.sliderText}>
                R$ {this.state.limite.toFixed(0)}
              </Text>
            </View>
            <View>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={10000}
                value={this.state.limite}
                onValueChange={limite => this.setState({limite: limite})}
              />
            </View>
          </View>
        </View>
        <View style={styles.boxUn}>
          <View style={styles.switchArea}>
            <Text style={styles.switchText}>Estudante:</Text>
            <Switch  value={this.state.estudante} onValueChange={(valor => this.setState({estudante:valor}))} style={styles.switch}></Switch>
            
            
          </View>
        </View>
        <View style={styles.box3}>
          <TouchableOpacity onPress={this.enviarDados} style={styles.btn}>
            <Text style={styles.btnText}>Abrir Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#122123',
    padding: 20,
  },
  logoArea: {
    flex: 1,
  },
  logo: {
    flex: 1,
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 40,
  },
  box1: {
    flex: 2,
    paddingTop: 30,
  },
  box2: {
    flex: 2,
  },
  box3: {
    flex: 1,
  },
  boxUn:{
    flex: 1
  },
  inputArea: {},
  inputs: {
    marginBottom: 20,
    height: 42,
    padding: 10,
    fontSize: 20,
    color: '#122123',
    backgroundColor: '#819fa4',
    borderRadius: 10,
  },
  pickerArea: {
    flex: 1,
    marginTop: -85,
  },
  picker: {
    fontSize: 20,
  },
  sliderArea: {
    flex: 1,
    marginTop: 20,
  },
  sliderText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 20,
  },
  btn: {
    height: 42,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: '#819fa4',
  },
  btnText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
    color: '#122123',
  },
  
  switchArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  switchText:{
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 15
  },
  switch: {
    marginLeft: 20,
    marginBottom: 20,
  },
});
export default App;
