import { TopMenu } from './TopMenu';
import { Level } from './Level';
import { Menu } from './Menu';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Button, TouchableOpacity} from 'react-native';

export const Levels = ({navigation}) => {
    // const [levelsActive, setLevelsActive] = useState(true);
    // const [rewardActive, setRewardActive] = useState(false);
    // const [theoryActive, setTheoryActive] = useState(false);
    // const [userActive, setUserActive] = useState(false);

    const [currentScreen, setCurrentScreen] = useState('Levels');

    const state = {
      Levels: [
        {
          id: 1,
          tasks: [
            {
              id: 1,
              type: 1,
              rightAnswer: 'До',
              img: 'do.png',
              text: 'Что это за нота?',
              answers: [
                {
                  id: 1,
                  text: 'До',
                },
                {
                  id: 2,
                  text: 'Ре',
                },
                {
                  id: 3,
                  text: 'Ми',
                },
                {
                  id: 4,
                  text: 'Фа',
                },
              ]
            }
          ]
        },
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

    const LevelsElements = state.Levels.map((level) => <Level id={level.id} naviagation={navigation}/>)
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
               {LevelsElements}
            {/* <TouchableOpacity style={styles.level} onPress={() => navigation.navigate('Level1')}>
        <Text style={styles.buttonText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.levelRight} onPress={() => navigation.navigate('Level2')}>
        <Text style={styles.buttonText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.level}>
        <Text style={styles.buttonText} onPress={() => navigation.navigate('Level3')}>3</Text>
      </TouchableOpacity>*/}
      <TouchableOpacity style={styles.levelRight} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>4</Text>
      </TouchableOpacity> 
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
    levelRight: {
        backgroundColor: '#FE7579',
        width: 80,
        height: 75,
        borderRadius:20, 
        justifyContent: 'center',
        marginLeft: 265,
        marginTop: 20
    },
    levelRightDisabled: {
        backgroundColor: '#ACA3A3',
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
  