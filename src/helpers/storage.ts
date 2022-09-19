import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: any) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log(error);
    }
}

const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (error) {
        console.log(error);
    }
}

const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }
}

const getAllKeys = async () => {
    let keys: any = [];
    try {
        keys = await AsyncStorage.getAllKeys();
        // console.log(keys)
    } catch (error) {
        console.log(error)
    }
}

const storage = {
    storeData,
    getData,
    removeData,
    getAllKeys
};

export default storage;
