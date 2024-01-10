import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [age,setAge] = useState('');
  const [lowerLimit,setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  function calculate() {
    
    const ageNumber = parseFloat(age);
    const lower = (220 - ageNumber) * 0.65;
    const upper = (220 - ageNumber) * 0.85;
    
    setLowerLimit(lower);
    setUpperLimit(upper);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />
      <Text style={styles.field}>Lower Limit</Text>
      <Text style={styles.field}>{lowerLimit.toFixed(2)}</Text>
      <Text style={styles.field}>Upper Limit</Text>
      <Text style={styles.field}>{upperLimit.toFixed(2)}</Text>
      <Button onPress={calculate} title="Calculate"></Button>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    marginLeft:10,
  },
  field:{
    marginBottom: 10,
    
  }
});