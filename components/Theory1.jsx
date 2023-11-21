import React from 'react';
import { StyleSheet, Alert, View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import { TopMenu } from './TopMenu';
import { Menu } from './Menu';
export const Theory1 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TopMenu/>
            <ScrollView>
                <Text style={styles.text}>
                    Существует семь основных звуков: до, ре, ми, фа, соль, ля, си. Они соответствуют белым клавишам фортепиано.
                    Пять линий, на которых пишутся ноты, называются нотным станом или нотносцем. Нумерация линий - снизу вверх. Ноты могут располагаться на линиях и между ними.
                </Text>
                <Image style={styles.img} source={require('./imgs/gamma.webp')}></Image>
            </ScrollView>
            <Menu navigation={navigation}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
        margin: 25,
        fontSize: 30,
    },
    img: {
        alignSelf: 'center'
    }
  });
  