import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Button = styled.TouchableHighlight`
  padding: 20px;
  border-radius: 5px;
  background-color: #f15624;
  align-self: stretch;
  margin: 15px;
  margin-horizontal: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
