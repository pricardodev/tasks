import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ListarTask from '../../components/ListarTask';

interface Task {
  id: string;
  title: string;
}

export const Home = () => {
  const [newTask, setNewTask] = React.useState('');
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const handleAddNewTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTask ? newTask : 'Task Empty',
    };

    setTasks([...tasks, data]);
  };

  const handleRemoveTask = (id: string) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}> Tasks </Text>
        <TextInput
          placeholder="Digite uma Task"
          placeholderTextColor="#696969"
          style={styles.input}
          onChangeText={setNewTask}
          // so aparece quando stiliza a opacidade o toachable
          // activeOpacity={0.7} Percentual 0.7 = 70% e se quisr 100% é 0 (zero)
        />
        <TouchableOpacity
          onPress={handleAddNewTask}
          activeOpacity={0.7}
          style={styles.btn}>
          <Text style={styles.btnText}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Minha Lista de Tasks</Text>

        {/*tasks.map(task => (
          <TouchableOpacity
            key={task.id} style={{backgroundColor:'#c0c0c0', padding: 5, margin: 5, borderRadius: 50}}
            activeOpacity={0.7}>
            <Text style={{color:'#000000', padding: 5, textAlign:'center'}}>{task.title}</Text>
          </TouchableOpacity>
        ))*/}

        <ListarTask dados={tasks} onRemoveTask={handleRemoveTask} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    marginTop: 32,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#c0c0c0',
    borderRadius: 7,
    fontSize: 20,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#eba417',
    marginBottom: 50,
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  btnText: {
    color: '#121214',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
