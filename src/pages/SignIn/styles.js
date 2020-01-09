import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  alignitems: center;
  justifycontent: center;
  backgroundcolor: #f5f5f5;
`;

export const Logo = styled.Image`
  height: 10%;
  marginbottom: 40px;
`;

export const Input = styled.TextInput`
  paddinghorizontal: 20px;
  paddingvertical: 15px;
  borderradius: 5px;
  backgroundcolor: #fff;
  alignself: stretch;
  marginbottom: 15px;
  marginhorizontal: 20px;
  fontsize: 16px;
`;

export const ErrorMessage = styled.Text`
  textalign: center;
  color: red;
  fontsize: 16px;
  marginbottom: 15px;
  marginhorizontal: 20px;
`;

export const Button = styled.TouchableHighlight`
  padding: 20px;
  borderradius: 5px;
  backgroundcolor: #f15624;
  alignself: stretch;
  margin: 15px;
  marginhorizontal: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  fontweight: bold;
  fontsize: 16px;
  textalign: center;
`;

export const SignUpLink = styled.TouchableHighlight`
  padding: 10px;
  margintop: 20px;
`;

export const SignUpLinkText = styled.Text`
  color: #999;
  fontweight: bold;
  fontsize: 16px;
  textalign: center;
`;
