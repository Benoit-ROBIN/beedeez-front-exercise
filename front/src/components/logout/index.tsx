import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {logoutAction} from '../../actions/auth';
import {useAppDispatch} from '../../hooks/redux';
import {useCurrentUser} from '../../selectors/user';

export const LogoutButton = () => {
  const user = useCurrentUser();
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Button onPress={() => dispatch(logoutAction(user))} title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 4,
  },
});
