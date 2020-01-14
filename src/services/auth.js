import { AsyncStorage } from 'react-native';

export const getToken = () => AsyncStorage.getItem('@i4proApp:token');
