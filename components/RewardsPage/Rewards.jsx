import React from 'react';
import { StyleSheet, View, ScrollView} from 'react-native';
import { Reward } from './Reward';
export const Rewards = () => {
    const state = {
        Rewards: [
            {
                id: 1,
                img: require('./Trophy1.png'),
                text: 'За пройденный первый уровень'
            },
            {
                id: 2,
                img: require('./Trophy2.png'),
                text: 'За пройденный второй уровень'
            },
            {
                id: 3,
                img: require('./Trophy3.png'),
                text: 'За пройденный третий уровень'
            },
            {
                id: 4,
                img: require('./Trophy4.png'),
                text: 'За пройденный четвертый уровень'
            },
            {
                id: 5,
                img: require('./Ribbon1.png'),
                text: 'Ты умничка'
            },
            {
                id: 6,
                img: require('./Ribbon2.png'),
                text: 'Ангеличка лучшая'
            },
            {
                id: 7,
                img: require('./Ribbon3.png'),
                text: 'За что-нибудь еще хорошее'
            },
            {
                id: 8,
                img: require('./Ribbon4.png'),
                text: 'За то, что ты есть'
            }
        ]
    }
   
const RewardsElements = state.Rewards.map(reward => <Reward img={reward.img} text={reward.text}></Reward>)

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
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15, 
    },
  });
  