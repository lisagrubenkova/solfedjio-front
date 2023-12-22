import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { HOST, cookies, SplashScreen } from "./Const";

export const User = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [finishedLevelCount, setFinishedLevelCount] = useState(null);
  const [rightAnswersCount, setRightAnswersCount] = useState(null);
  const [rightAnswersPercent, setRightAnswersPercent] = useState(null);

  useEffect(async () => {
    try {
      setLoading(true);
      setUsername(await getUsername());
      await getStatsCount(setFinishedLevelCount, setRightAnswersCount, setRightAnswersPercent)
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image style={styles.img} source={require('./imgs/ava.png')} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.statHeader}>Статистика</Text>
        <View style={styles.statblocks}>
          <View style={styles.block}>
            <Text style={styles.digit}>{finishedLevelCount}</Text>
            <Text style={styles.statText}>Пройденные уровни</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.digit}>{rightAnswersCount}</Text>
            <Text style={styles.statText}>Правильные ответы</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.digit}>{rightAnswersPercent}%</Text>
            <Text style={styles.statText}>Процент верных ответов</Text>
          </View>
          <View style={styles.block}>

            <Text style={styles.digit}>1</Text>
            <Text style={styles.statText}>Полученные награды</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

async function getStatsCount(setFinishedLevelCount, setRightAnswersCount, setRightAnswersPercent) {
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      Cookie: cookies
    }
  };
  const stats = await fetch(HOST + 'stat', requestOptions)
  .then(response => response.json())
  .then(json => json.result)
  .catch((err) => {
    console.log(err.message);
  });

  var rightAnswersCount = 0;
  var allAnswersCount = 0;
  stats.forEach((element) => {
    rightAnswersCount += element.right_answers_count;
    allAnswersCount += element.all_answers_count;
  });

  setFinishedLevelCount(stats.length);
  setRightAnswersCount(rightAnswersCount);
  setRightAnswersPercent((rightAnswersCount / allAnswersCount * 100).toFixed(2));

}

async function getUsername() {
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      Cookie: cookies
    }
  };
  const username = await fetch(HOST + 'level/check_username', requestOptions)
  .then(response => response.json())
  .then(json => json.result)
  .catch((err) => {
    console.log(err.message);
  });

  return username;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  info: {
    alignItems: 'center',
    marginBottom: 20,
  },
  img: {
    margin: 7,
  },
  username: {
    color: '#000000',
    fontSize: 35,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgba(161, 155, 155, 0.5)',
    borderRadius: 15,
    padding: 5
  },
  statHeader: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 10,
  },
  statblocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  block: {
    width: '48%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#878787',
    borderRadius: 15
  },
  digit: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
  },
  statText: {
    color: '#000000',
  },
});

  