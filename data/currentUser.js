import AsyncStorage from '@react-native-async-storage/async-storage';
import { ErrorHandler } from '../server/ErrorHandler';

export const setCurrentUser = async (user) => {
    try {
        await AsyncStorage.setItem('currentUser', JSON.stringify(user));
    } catch (err) {
        new ErrorHandler(err).log();
    }
}

export const getCurrentUser = async () => {
    try {
        let user = await AsyncStorage.getItem('currentUser');
        if (user !== null) return user;
        else throw 'There is no user in AsyncStorage';
    } catch (err) {
        new ErrorHandler(err).log();
    }
}

