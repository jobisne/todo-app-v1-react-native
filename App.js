import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';
import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInput';

export default function App() {
  const [currentGoal, setCurrentGoal] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const addGoalHandler = gaolTitle => {
    setCurrentGoal(currentGoal => [
      ...currentGoal,
      { id: Math.random().toString(), value: gaolTitle }
    ]);
    //TTo cancle the modal after adding goal
    setIsModal(false)
  };

  const removeGoalItem = goalId => {
    setCurrentGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalId);
    });
  };

  const toggleModal = () => {
    setIsModal(true);
  }
  
  const clearGoalHandle = () => {
    setIsModal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="showInput" onPress={toggleModal}  />
      <GoalInput isModal={isModal} onAddGoal={addGoalHandler} onCancle={clearGoalHandle} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={currentGoal}
        renderItem={itemData => (
          <GoalItems
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalItem}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
