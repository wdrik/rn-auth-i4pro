import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding-top: 30;
  padding-left: 20;
  padding-right: 20;
`;

export const Button = styled.TouchableHighlight`
  height: 52;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 4;
  background-color: #f15624;
  margin-bottom: 20;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16;
  text-align: center;
`;

export const List = styled.FlatList`
  margin-top: 20;
  margin-bottom: 20;
`;

export const ListItem = styled.View`
  background-color: #ffffff;
  border-width: 1;
  border-color: #ddd;
  border-radius: 5;
  margin-bottom: 10;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
`;

export const ListItemTitle = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #333333;
`;

export const ListItemDescription = styled.Text`
  font-size: 16;
  color: #999;
  margin-top: 2;
  margin-bottom: 2;
  line-height: 18;
`;
