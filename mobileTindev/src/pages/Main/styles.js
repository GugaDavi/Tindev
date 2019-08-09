import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  justify-content: space-between;
  align-items: center;
`;

export const CardsContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  max-height: 500px;
`;

export const Card = styled.View`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 30px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ImageCard = styled.Image`
  flex: 1;
  height: 300px;
`;

export const Footter = styled.View`
  background: #fff;
  padding: 15px 20px;
`;
export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
export const Bio = styled.Text`
  font-size: 14px;
  color: #999;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
`;
export const Button = styled(RectButton)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
`;
