import { Level } from './Level';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

export const Levels = ({navigation}) => {
    const state = {
      Levels: [
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4,
        }
      ]
    }

    const LevelsElements = state.Levels.map((level) => <Level id={level.id} />)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View>
        <TouchableOpacity style={styles.level} onPress={() => navigation.navigate('TaskType1')}>
        <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      </View>
               {LevelsElements}
          </ScrollView>
        </View>
    )
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
    container: {
      flex: 1,
    },
    scrollView: {
      backgroundColor: 'CFCFCF',
    },
    text: {
      fontSize: 42,
    },
  });
  