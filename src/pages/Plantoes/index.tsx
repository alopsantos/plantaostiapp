import React from "react";
import { View, Text, Image } from "react-native";

import Avatar from '../../assets/images/avatar.png';

import {Container} from "./styles";
function Plantoes() {
  return (
    <Container>
      <Text>Plantões</Text>
      <View>
        <Image source={Avatar} />
      </View>
    </Container>
  );
}

export default Plantoes;
