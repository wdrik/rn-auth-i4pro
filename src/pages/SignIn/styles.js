import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding-left: 20;
  padding-right: 20;
`;

export const Logo = styled.Image`
  height: 10%;
  margin-bottom: 40;
`;

export const Input = styled.TextInput`
  height: 52;
  padding-left: 20;
  padding-right: 20;
  background-color: #fff;
  align-self: stretch;
  margin-bottom: 10;
  font-size: 16;
  border-radius: 4;
  border-width: 2;
  border-color: #eee;
  align-self: stretch;
`;

export const ErrorMessage = styled.Text`
  text-align: center;
  color: red;
  font-size: 16;
  margin-bottom: 15;
  margin-left: 20;
  margin-right: 20;
`;

export const Button = styled.TouchableHighlight`
  height: 52;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 4;
  background-color: #f15624;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16;
  text-align: center;
`;

export const SignUpLink = styled.TouchableHighlight`
  margin-top: 20;
`;

export const SignUpLinkText = styled.Text`
  color: #999;
  font-weight: bold;
  font-size: 16;
  text-align: center;
`;
