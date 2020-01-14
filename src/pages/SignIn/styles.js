import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Logo = styled.Image`
  height: 10%;
  margin-bottom: 40px;
`;

export const Input = styled.TextInput`
  padding-horizontal: 20px;
  padding-vertical: 15px;
  border-radius: 5px;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 15px;
  margin-horizontal: 20px;
  font-size: 16px;
`;

export const ErrorMessage = styled.Text`
  text-align: center;
  color: red;
  font-size: 16px;
  margin-bottom: 15px;
  margin-horizontal: 20px;
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

export const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  margin-top: 20px;
`;

export const SignUpLinkText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;
