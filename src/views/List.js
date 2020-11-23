import React, {Component} from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import ListCell from "./ListCell";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
        keysOnStorage: [""],
        storage: false,
        dataOnStorage: [],
        data:[]
    };
  }

  selectListItem(item) {
    console.log(item)
    // if(typeof(item) == "string") {
    //     console.log("Selecionou Key", item)
    //     this.props.navigation.push("List", {
    //       key: item
    //     })
    // } else {
    //     console.log("Selecionou Objeto", item)
    // }
  }

  componentDidMount(){
    if(this.props.route.name == "Quantitativo"){
      this.setState({data: ["Parede", "Piso", "Concreto", "Reboco"]})
    }
  }

  render(){
    return (
      <View style={styles.container}>
          <SafeAreaView style={styles.safeArea}>
            <FlatList 
                data={ this.state.data }
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index, separators}) => 
                <TouchableHighlight
                    onPress={() => this.selectListItem(item)}
                    onShowUnderlay={separators.highlight}
                    onHideUnderlay={separators.unhighlight}>
                        <ListCell 
                            key={{key:true}} 
                            listItem={{title: item}}/>
                </TouchableHighlight>}
            />
          </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: "5%",
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 4,
      },
    shadowOpacity: 0.4,
  },
  safeArea: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  }
});