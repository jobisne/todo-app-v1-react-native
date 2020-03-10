import React, {useState } from 'react';
import {TextInput, View, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnterGoal] = useState('');
 ;

  const goalInputHandler = enteredText => {
    setEnterGoal(enteredText);
  };
  //To clear text after adding goal

  const clearText = () => {
    props.onAddGoal(enteredGoal)
    setEnterGoal('');
  }
  

  return (
    <Modal visible={props.isModal} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <View style={styles.buttonContainer}>
          <View>
            <Button style={styles.button} title="ADD" onPress={clearText} />
          </View>
          <View>
            <Button style={styles.button} title="CANCLE" color="red" onPress={props.onCancle} />
          </View>
      </View>
      
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: '80%'
  },
  button: {
    width: "40%"
  }
  
});

export default GoalInput;
