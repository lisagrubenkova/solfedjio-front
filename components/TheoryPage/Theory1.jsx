import React from 'react';
import { TopMenu } from '../TopMenu';
import { StyleSheet, View, Text, ScrollView, Image} from 'react-native';
export const Theory1 = () => {
    return (
        <View style={styles.container}>
            <TopMenu/>
            <ScrollView>
                <Text style={styles.text}>
                    Существует семь основных звуков: до, ре, ми, фа, соль, ля, си. Они соответствуют белым клавишам фортепиано.
                    Пять линий, на которых пишутся ноты, называются нотным станом или нотносцем. Нумерация линий - снизу вверх. Ноты могут располагаться на линиях и между ними.
                </Text>
                <Image style={styles.img} source={require('./gamma.webp')}></Image>
            </ScrollView>
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
  