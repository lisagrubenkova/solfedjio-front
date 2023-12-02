import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
export const Theory = ({navigation}) => {
    return (
        <View style={styles.container}>
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
  
