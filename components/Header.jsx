import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.container}>
            <Text>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#878787',
        width: 390,
        height: 81,
        justifyContent: 'center',
        alignItems: 'center'
      },
})