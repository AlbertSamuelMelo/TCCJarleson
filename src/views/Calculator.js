import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextPlaceHolder from "../components/TextPlaceHolder"

export default class Calculator extends Component {
    constructor() {
        super();
        this.state = {
          altura: "",
          comprimento: "",
          area: "",
          abertura: "",
          tijolos: "",
          resultado: false
        };
      }
      

    medidaAltura(altura){
        this.setState({altura: altura})
    }

    medidaComprimento(comprimento){
        this.setState({comprimento: comprimento})
    }
    medidaArea(area){
        this.setState({area: area})
    }
    medidaAbertura(abertura){
        this.setState({abertura: abertura})
    }

    calcular() {
      var tijolos = 1/(((parseInt(this.state.comprimento.category) / 100) + 0.01) * ((parseInt(this.state.altura.category) / 100) + 0.01))
      tijolos = tijolos * (this.state.area.category - this.state.abertura.category)
      this.setState({tijolos: tijolos})
      console.log(tijolos)
      this.setState({resultado: true})
    }

    render(){
        return (
            <View style={styles.container}>
              <StatusBar style="auto" />
                <View style={styles.card}>
                    <Text style={styles.textIsideCard}>Medidas do bloco</Text>
                    <TextPlaceHolder input={"Altura"} callbackFromParent={(value) => this.medidaAltura(value)}/>
                    <TextPlaceHolder input={"Comprimento"} callbackFromParent={(value) => this.medidaComprimento(value)}/>

                    <Text style={styles.textIsideCard}>Área da parede</Text>
                    <TextPlaceHolder input={"Área(m2)"} callbackFromParent={(value) => this.medidaArea(value)}/>
        
                    <Text style={styles.textIsideCard}>Abertura da parede</Text>
                    <TextPlaceHolder input={"Abertura(m2)"} callbackFromParent={(value) => this.medidaAbertura(value)}/>
                    {
                      this.state.resultado ? 
                      <View style={{height: "100%", width: "80%",}}>
                        <View style={{width: "100%", height: "80%"}}>
                          <Text
                          style={styles.textIsideCard}
                          >
                            Tijolos
                          </Text>
                          <View style={styles.resultContainer}>
                            <Text  
                              style={styles.TextButton}
                            >{this.state.tijolos} Tijolos</Text>
                          </View>
                        </View>
                      </View>
                      :<TouchableOpacity style={styles.button} onPress={() => this.calcular()}>
                        <Text style={styles.TextButton}>Calcular</Text>
                      </TouchableOpacity>
                    }

                </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: "80%",
    height: "90%",
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textIsideCard: {
      color: "#FFC0A2",
      fontWeight: "bold",
      fontSize: 20,
      textAlign: "left",
      width: "80%",
      marginBottom: "5%",
      marginTop: "10%"
  },
  TextButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    width: "100%",
    height: "100%",
    padding: "8%"
  },
  button: {
    width: "80%",
    height: "10%",
    marginBottom: "8%",
    marginTop: "20%",
    backgroundColor: '#FFC0A2',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.4,
  },
  resultContainer: {
    width: "100%",
    height: "10%",
    marginBottom: "8%",
    backgroundColor: '#FFC0A2',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.4,
  },
});
