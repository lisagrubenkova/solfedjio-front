import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';


export const Level = (props, navigation) => {
    return(
        <View>
        <TouchableOpacity style={styles.level} onPress={() => navigation.navigate('Level1')}>
        <Text style={styles.buttonText}>{props.id}</Text>
      </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    level: {
     backgroundColor: '#FE7579',
     width: 80,
     height: 75,
     borderRadius:20, 
     justifyContent: 'center',
     marginLeft: 45,
     marginTop: 20
    },
    buttonText: {
        fontSize: 50,
        alignSelf: 'center'
    },
})