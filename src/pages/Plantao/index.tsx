import React from "react";
import { View, Text, Image } from "react-native";

import Avatar from "../../assets/images/avatar.png";

import {
  Container,
  Title,
  AvatarImg,
  Detalhes,
  DetalhesAvatar,
  DetalhesAvatarImg,
} from "./styles";

function Plantao() {
  return (
    <Container>
      <Title>Plantões</Title>
      <AvatarImg source={Avatar} />
      <Detalhes>
        <DetalhesAvatar>
          <DetalhesAvatarImg source={Avatar} />
          <View>
            <Text style={{ fontWeight: "bold" }}>MasterFarma</Text>
            <Text>Centro</Text>
          </View>
        </DetalhesAvatar>
        <View>
          <Text>Telefone: (45) 3541-2940</Text>
          <Text>Whatsapp: (45) 3541-2940</Text>
          <Text>Endereço: Rua dos Estudantes, 1906</Text>
          <Text>Bairro: Center</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 8,
            borderTopWidth: 1,
            borderTopColor: "#E6E6F0"
          }}
        >
          <Text style={{ alignItems: "center", marginBottom: 13 }}>
            Inicio / Fim
          </Text>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 139,
                marginRight: 8,
                height: 56,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "#04D361",
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#fff" }}>ago</Text>
                <Text style={{ color: "#fff" }}>25</Text>
              </View>
              <Text style={{ color: "#fff" }}>Inicio</Text>
            </View>
            <View
              style={{
                width: 139,
                marginLeft: 8,
                height: 56,
                borderRadius: 8,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                backgroundColor: "#EB5757",
              }}
            >
              <View
                style={{
                  width: 47,
                  height: 47,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 8,
                }}
              >
                <Text style={{ color: "#fff" }}>set</Text>
                <Text style={{ color: "#fff" }}>02</Text>
              </View>
              <Text style={{ color: "#fff" }}>Fim</Text>
            </View>
          </View>
        </View>
      </Detalhes>
    </Container>
  );
}

export default Plantao;
