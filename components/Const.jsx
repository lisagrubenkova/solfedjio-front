import createStorage from 'typed-async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ActivityIndicator,} from 'react-native';
import PropTypes from 'prop-types';

export const HOST = 'http://192.168.0.103:8000/';
// export const HOST = 'http://127.0.0.1:8000/';
export var cookies;

const cookiesSchema = {
    cookies: PropTypes.string.isRequired
};

export const cookiesStorage = createStorage({
    name: 'cookiesStorage',
    schema: cookiesSchema,
    AsyncStorage
});

export function setCookies(otherCookies) {
    cookies = otherCookies;
}

export function SplashScreen() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
}
