import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { Reward } from './Reward';
export const Rewards = () => {
    const state = {
        Rewards: [
            {
                id: 1,
                img: require('./Trophy1.png'),
                text: 'За пройденный первый уровень',
                rec: true
            },
            {
                id: 2,
                img: require('./Trophy2.png'),
                text: 'За пройденный второй уровень',
                rec: false
            },
            {
                id: 3,
                img: require('./Trophy3.png'),
                text: 'За пройденный третий уровень',
                rec: false
            },
            {
                id: 4,
                img: require('./Trophy4.png'),
                text: 'За пройденный четвертый уровень',
                rec: false
            },
            {
                id: 5,
                img: require('./Ribbon1.png'),
                text: 'Ты умничка',
                rec: false
            },
            {
                id: 6,
                img: require('./Ribbon2.png'),
                text: 'Ангеличка лучшая',
                rec: false
            },
            {
                id: 7,
                img: require('./Ribbon3.png'),
                text: 'За что-нибудь еще хорошее',
                rec: false
            },
            {
                id: 8,
                img: require('./Ribbon4.png'),
                text: 'За то, что ты есть',
                rec: false
            }
        ]
    }
   
const RewardsElements = state.Rewards.map(reward => <Reward img={reward.img} text={reward.text} rec={reward.rec}></Reward>)

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.rewardsList}>
             {RewardsElements}
                </View>
            </ScrollView>
        </View>
    )
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    rewardsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15, 
    },
  });
  