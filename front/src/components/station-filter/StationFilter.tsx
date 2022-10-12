import React from 'react';
import {Formik} from 'formik';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export const StationFilter = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          filter: '',
        }}
        onSubmit={({filter}) => {
          console.log(filter);
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <Text>Filter</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={handleChange('filter')}
                onBlur={handleBlur('filter')}
                value={values.filter}
              />
            </View>
            <Button
              title="Filter"
              onPress={handleSubmit as ({filter}: any) => void}
            />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '10px',
  },
  inputContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    marginLeft: '10px',
    marginRight: '10px',
  },
  input: {
    height: '40px',
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});
