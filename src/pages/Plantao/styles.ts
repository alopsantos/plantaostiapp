import styled from "styled-components/native";

export const Container = styled.View`
  background: #ccc;
  flex: 1;
  padding: 30px 10px;
`;

export const Title = styled.Text`
  font-family: "Archivo_700Bold";
  font-size: 20px;
  max-width: 160px;
`;

export const AvatarImg = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 0 auto;
`;

export const Detalhes = styled.View`
  flex: 1;
  width: 342px;
  height: 100px;
  background: #FFF;
  margin: 15px auto 0;
  padding: 10px;
  border-radius: 8px;
`;

export const DetalhesAvatar = styled.View`
  flex-direction: row;
  height: 90px;
  align-items: center
`;

export const DetalhesAvatarImg = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 8px;
`;
