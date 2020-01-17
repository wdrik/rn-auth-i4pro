import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding-top: 10px;
`;

export const Button = styled.TouchableHighlight`
  padding: 20px;
  border-radius: 5px;
  background-color: #f15624;
  align-self: stretch;
  margin: 15px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`;

export const List = styled.FlatList`
  padding: 20px;
`;

export const ListItem = styled.View`
  background-color: #ffffff;
  border-width: 1px;
  border-color: #ddd;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ListItemTitle = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #333333;
`;

export const ListItemDescription = styled.Text`
  font-size: 16px;
  color: #999;
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 24px;
`;
