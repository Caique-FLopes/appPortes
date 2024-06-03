// src/components/SliderFilter.js
import React, { useState } from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';

const SliderFilter = ({ min, max, step, onValueChange }) => {
  const [value, setValue] = useState(min);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Value: {value}</Text>
      <Slider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={handleValueChange}
        minimumTrackTintColor="#1EB1FC"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#1EB1FC"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default SliderFilter;
