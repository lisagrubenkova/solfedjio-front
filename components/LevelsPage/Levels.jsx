import { Level } from './Level';
import React, { useState, useEffect } from "react";
import { HOST, cookies, SplashScreen } from "../Const";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';

export const Levels = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [levels, setLevels] = useState(null);

  useEffect(async () => {
    try {
      setLoading(true);
      const data = await level_list();
      setLevels(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);

  if (loading) {
    return <SplashScreen />;
  }
  // FOR TEST levels = [{"id": 1, "title": "Level1"}, {"id": 2, "title": "lelev22"}, {"id": 3, "title": "string"}, {"id": 4, "title": "new"}, {"id": 5, "title": "old"}, {"id": 6, "title": "xcvx"}, {"id": 7, "title": "opdof"}, {"id": 8, "title": "3432"}, {"id": 9, "title": "fgd"}]
  const LevelsElements = levels.map((level) => 
  <Level key={level.id} id={level.id} navigation={navigation}/>)

  return (
    <View style={styles.container}> 
      <ScrollView style={styles.scrollView}> 
        {LevelsElements}
      </ScrollView>
    </View>
  )
}

async function level_list() {
  const requestOptions = {
    method: 'GET',
    headers: { 
      'Content-Type': 'application/json',
      Cookie: cookies
    }
  };
  const levels = await fetch(HOST + 'level/?order=id', requestOptions)
  .then(response => response.json())
  .then(json => json.result)
  .catch((err) => {
    console.log(err.message);
  });

  return levels;
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
  