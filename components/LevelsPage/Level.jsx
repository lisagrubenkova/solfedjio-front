import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { HOST, cookies, SplashScreen } from "../Const";


export const Level = (props) => {
    const isEven = props.id % 2 === 0;
    const dynamicStyle = isEven ? styles.levelRight : styles.level;
    return(
        <View>
        <TouchableOpacity style={[dynamicStyle]} onPress={() => startLevel(props)}>
        <Text style={styles.buttonText}>{props.id}</Text>
      </TouchableOpacity>
      </View>
    );
}

function startLevel(props) {
    const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          Cookie: cookies
        }
    };
    fetch(HOST + 'level/' + props.id, requestOptions)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        props.navigation.navigate('TaskType1', {
            levelId: props.id,
            tasks: json.result.tasks,
            index: 0
        });
        // levelId: props.id,
        // tasks: json.result.tasks,
      })
      .catch((err) => {
        console.log(err.message);});
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
    levelRight: {
        backgroundColor: '#FE7579',
        width: 80,
        height: 75,
        borderRadius:20, 
        justifyContent: 'center',
        marginLeft: 265,
        marginTop: 20
    },
    buttonText: {
        fontSize: 50,
        alignSelf: 'center'
    },
})