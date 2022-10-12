import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export const Button = ({
  onPress,
  title,
}: {
  onPress: (value: any) => void;
  title: string;
}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2196f3',
    height: '40px',
  },
  text: {
    color: 'white',
    alignContent: 'center',
    lineHeight: 40,
    textAlign: 'center',
  },
});
