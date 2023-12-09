import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

export const Level = (props) => {
    const state = {
        tasks: [
            {
              id: 0,
              text: "string",
              type: 'one',
              attachments: [
                {
                  id: 0,
                  path: 'level1_task1',
                  type: 'photo'
                }
              ],
              answers: [
                {
                  id: 0,
                  text: "Басовый",
                  is_right: true
                },
                {
                    id: 1,
                    text: "Скрипичный",
                    is_right: false
                  },
                  {
                    id: 2,
                    text: "Альтовый",
                    is_right: false
                  },
                  {
                    id: 3,
                    text: "Теноровый",
                    is_right: false
                  }
              ],
              explanation: 'Нота до пишется на первой добавочной линейке'
            },
            {
                id: 0,
                text: "string",
                type: 'one',
                attachments: [
                  {
                    id: 0,
                    path: 'level1_task2',
                    type: 'photo'
                  }
                ],
                answers: [
                  {
                    id: 0,
                    text: "Нотный стан",
                    is_right: true
                  },
                  {
                      id: 1,
                      text: "Нотоносец",
                      is_right: false
                    },
                    {
                      id: 2,
                      text: "Нотный лист",
                      is_right: false
                    },
                    {
                      id: 3,
                      text: "Нотная линейка",
                      is_right: false
                    }
                ]
              },
              {
                id: 0,
                text: "string",
                type: 'two',
                attachments: [
                  {
                    id: 0,
                    path: './LevelsPage/do.png',
                    type: 'photo'
                  }
                ],
                answers: [
                  {
                    id: 0,
                    text: "fvf",
                    is_right: true
                  },
                  {
                      id: 1,
                      text: "vfs",
                      is_right: false
                    },
                    {
                      id: 2,
                      text: "vsd",
                      is_right: false
                    },
                    {
                      id: 3,
                      text: "vsf",
                      is_right: false
                    }
                ]
              },
          ]
    }
    const isEven = props.id % 2 === 0;
    const dynamicStyle = isEven ? styles.levelRight : styles.level;
    let dynamicColor;
    switch (props.id % 5) {
        case 1:
          dynamicColor = styles.red;
          break;
        case 2:
          dynamicColor = styles.orange;
          break;
        case 3:
          dynamicColor = styles.yellow;
          break;
        case 4:
          dynamicColor = styles.green;
          break;
        default:
          dynamicColor = styles.blue;
          break;
      } 
    return(
        <View style={styles.container}>
        {/* <TouchableOpacity style={[dynamicStyle, dynamicColor]} onPress={() => startLevel(props)}> */}
        <TouchableOpacity style={[dynamicStyle, dynamicColor]} onPress={() => props.navigation.navigate('Task', {
            levelId: props.id,
            tasks: state.tasks,
            index: 0
        })}> 
        <Text style={styles.buttonText}>{props.id}</Text>
      </TouchableOpacity>
      </View>
    );
}

// function startLevel(props) {
//     const requestOptions = {
//         method: 'GET',
//         headers: { 
//           'Content-Type': 'application/json',
//           Cookie: cookies
//         }
//     };
//     fetch(HOST + 'level/' + props.id, requestOptions)
//       .then(response => response.json())
//       .then(json => {
//         console.log(json);
//         props.navigation.navigate(json.result.tasks[0].type == 'one' ? 'TaskType1' : 'TaskType2', {
//             levelId: props.id,
//             tasks: json.result.tasks,
//             index: 0
//         });
//         // levelId: props.id,
//         // tasks: json.result.tasks,
//       })
//       .catch((err) => {
//         console.log(err.message);});
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    red: {
        backgroundColor: '#FE7579',
    },
    orange: {
        backgroundColor: '#F49C41'
    },
    yellow: {
        backgroundColor: '#E6E14A'
    },
    green: {
        backgroundColor: '#50CB72'
    },
    blue: {
        backgroundColor: '#64D4EF'
    },
    level: {
     width: 80,
     height: 75,
     borderRadius:20, 
     justifyContent: 'center',
     marginLeft: 45,
     marginTop: 20
    },
    levelRight: {
        width: 80,
        height: 75,
        borderRadius:20, 
        justifyContent: 'center',
        marginRight: 45,
        marginTop: 20,
        alignSelf: 'flex-end'
    },
    buttonText: {
        fontSize: 50,
        alignSelf: 'center'
    },
})