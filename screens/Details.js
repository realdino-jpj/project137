import React from "react"
import {Text,View,Stylesheet,Button,Alert} from "react-native"
import { Card, Icon } from "react-native-elements";
import axios from "axios";

export default class Details extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      details:{},
      imagePath:"",
      url:""
    }
  }
  compinentDidMount(){
    this.getDetails()
  }

getDeatils=()=>{
  const{url}=this.state
  axios
      .get(url)
      .then(response => {
        this.setDetails(response.data.data);
      })
      .catch(error => {
        Alert.alert(error.message);
      });
}

setDetails = starDetails => {
  const starType = starDetails.star_type;
  let imagePath = "";
  switch (starType) {
    case "Gas Giant":
      imagePath = require("");
      break;
    case "Terrestrial":
      imagePath = require("");
      break;
    case "Super Earth":
      imagePath = require("");
      break;
    case "Neptune Like":
      imagePath = require("");
      break;
    default:
      imagePath = require("");
  }

  this.setState({
    details: starDetails,
    imagePath: imagePath
  });
};



render(){
  const { details, imagePath } = this.state;
  if (details.specifications) {
    return (
      <View style={styles.container}>
        <Card
          title={details.name}
          image={imagePath}
          imageProps={{ resizeMode: "contain", width: "100%" }}
        >
          <View>
            <Text
              style={styles.cardItem}
            >{`Distance from Earth : ${details.distance_from_earth}`}</Text>
            <Text
              style={styles.cardItem}
            >{`Distance from Sun : ${details.distance_from_their_sun}`}</Text>
            <Text
              style={styles.cardItem}
            >{`Gravity : ${details.gravity}`}</Text>
            <Text
              style={styles.cardItem}
            >{`Orbital Period : ${details.orbital_period}`}</Text>
            <Text
              style={styles.cardItem}
            >{`Orbital Speed : ${details.orbital_speed}`}</Text>
            <Text
              style={styles.cardItem}
            >{`star Mass : ${details.star_mass}`}</Text>
            <Text
              style={styles.cardItem}
            >{`star Radius : ${details.star_radius}`}</Text>
            <Text
              style={styles.cardItem}
            >{`star Type : ${details.star_type}`}</Text>
          </View>
          <View style={[styles.cardItem, { flexDirection: "column" }]}>
            <Text>{details.specifications ? `Specifications : ` : ""}</Text>
            {details.specifications.map((item, index) => (
              <Text key={index.toString()} style={{ marginLeft: 50 }}>
                {item}
              </Text>
            ))}
          </View>
        </Card>
      </View>
    );
  }
  return null;
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardItem: {
    marginBottom: 10
  }
});