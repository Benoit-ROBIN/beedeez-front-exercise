import React from 'react';
import {Formik} from 'formik';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {navigate} from '../navigators/utils';
import {SCREENS} from '../navigators/screens';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={({email, password}) => {
          console.log({email, password});
        }}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            <Button
              onPress={handleSubmit as ({email, password}: any) => void}
              title="Login"
            />
            <Text
              style={styles.link}
              onPress={() => navigate(SCREENS.REGISTER)}>
              Pas de compte ? Créer un compte
            </Text>
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
  link: {
    marginTop: '14px',
  },
});
