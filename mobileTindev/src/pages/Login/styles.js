import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { lighten } from 'polished';

export const Container = styled.View`
  flex: 1;
  background: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Input = styled.TextInput.attrs({
  autoCaptalize: 'none',
  autoCorrect: false,
})`
  height: 46px;
  align-self: stretch;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 20px;
  padding: 0px 15px;
`;

export const Button = styled(RectButton)`
  height: 46px;
  align-self: stretch;
  background: ${lighten(0.1, '#df4723')};
  margin-top: 10px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
