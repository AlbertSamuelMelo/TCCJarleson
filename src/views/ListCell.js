import React, {Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import 'react-native-gesture-handler';
import next from "../../assets/next.png";

export default class ListCell extends Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  render(){
    return (
      <View style={styles.container}>
            <Text style={styles.text}>{ this.props.listItem.title }
            </Text>
          <Image style={styles.imageIcon} source={next}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    backgroundColor: '#E3D68D',
    alignItems: 'center',
    justifyContent: "space-around",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  text: {
    width: "50%",
    height: "30%",
    textAlign: "right",
    fontSize: 25,
    padding: "5%",
    marginLeft: "5%"
  },
  imageIcon: {
    width: "30%", 
    height: "50%",
    marginRight: "5%",
    opacity: 0.3
    }
});