import React from 'react';
import {View, TextInput, Text, StyleSheet, Button} from 'react-native';
import {Formik} from 'formik';

export const Register = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={({email, password}) => {
          console.log(email, password);
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <Text>Email</Text>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
            />
            <Text>Password</Text>
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
            />
            <Button
              onPress={handleSubmit as ({email, password}: any) => void}
              title="Register"
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '60px',
  },
  input: {
    marginTop: '10px',
    marginBottom: '14px',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    height: '40px',
    paddingHorizontal: 4,
  },
});
