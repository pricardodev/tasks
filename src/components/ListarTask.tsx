import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type Dado = {
  id: string;
  title: string;
};

type dadoProps = {
  dados: Dado[];
  onRemoveTask: (id: string) => void;
};

// posso tambem criar dessa maneira: interface Task { id: string; title: string; }
// interface TaskListProps { tasks: Task[]; }

// caso eu não queira usar props. eu posso desestruturar. ex: const ListarTask = ({dados}: dadoProps)
const ListarTask = (props: dadoProps) => {
  var data = props.dados;

  const handleRemoveTask = (id: string) => {
    Alert.alert('Excluir Task', 'Deseja realmente Excluir a Task?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => {
          console.log('Item excluido!', id);
          removeTask(id);
        },
      },
    ]);
  };

  const removeTask = (id: string) => {
    const newData = data.filter(item => item.id !== id);
    console.log(newData);
    props.onRemoveTask(id); // Notifica o componente pai sobre a exclusão
  };

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id} // só aceita tipo string
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              handleRemoveTask(item.id);
            }}
            activeOpacity={0.7}
            style={styles.btn}>
            <Text style={styles.btnText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#c0c0ff',
    marginBottom: 5,
    padding: 5,
    borderRadius: 50,
    alignItems: 'center',
  },
  btnText: {
    color: '#121214',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ListarTask;
