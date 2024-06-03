// src/screens/FilterScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SliderFilter from '../components/SliderFilter';

const FilterScreen = () => {
  const [filterValue, setFilterValue] = useState(0);

  const handleValueChange = (value) => {
    setFilterValue(value);
    // Adicione aqui qualquer lógica adicional para lidar com a mudança do valor do filtro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slider Filter Example</Text>
      <SliderFilter
        min={0}
        max={100}
        step={1}
        onValueChange={handleValueChange}
      />
      <Text style={styles.valueLabel}>Selected Value: {filterValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  valueLabel: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default FilterScreen;
