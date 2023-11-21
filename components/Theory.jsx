import React from 'react';
import { StyleSheet, Alert, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { Menu } from './Menu';
import { useState } from 'react';
export const Theory = ({navigation}) => {
    const [levelsActive, setLevelsActive] = useState(false);
    const [rewardActive, setRewardActive] = useState(false);
    const [theoryActive, setTheoryActive] = useState(true);
    const [userActive, setUserActive] = useState(false);
    return (
        <View style={styles.container}>
            <TopMenu/>
            <ScrollView>
                <View style={styles.theoryList}>
                <TouchableOpacity style={styles.theory} onPress={() => navigation.navigate('Theory1')}>
                <Text style={styles.theoryHeader}>Названия звуков</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theory}>
                <Text style={styles.theoryHeader}>Ключи</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theory}>
                <Text style={styles.theoryHeader}>Знаки альтерации</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theory}>
                <Text style={styles.theoryHeader}>Ритм, Длительности</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theory}>
                <Text style={styles.theoryHeader}>Размер, Такт</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theory}>
                <Text style={styles.theoryHeader}>Гамма</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theory}>
                <Text style={styles.theoryHeader}>Тон и полутон</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theory}>
                <Text style={styles.theoryHeader}>Устойчивые звуки</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.theory}>
                <Text style={styles.theoryHeader}>Неустойчивые звуки</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
            <Menu navigation={navigation} levelsActive={levelsActive} 
          setLevelsActive={setLevelsActive}
          rewardActive={rewardActive} setRewardActive={setRewardActive}
          theoryActive={theoryActive} setTheoryActive={setTheoryActive}
          userActive={userActive} setUserActive={setUserActive}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    theory: {
        width: 330,
        height: 60,
        backgroundColor: '#A19B9B',
        margin: 10,
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    theoryList: {
        flexDirection: 'column',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15, 
    },
    theoryHeader: {
        fontSize: 30,
        color: '#FFFFFF'
    }
  });
  
