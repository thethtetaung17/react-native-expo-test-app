import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, Button } from '../components/Themed';
import { buyItem } from '../redux/actions';

const TabOneScreen = () => {
  const user = useSelector((state: any) => state.user);
  const { numOfItems } = useSelector((state: any) => state.items);
  const dispatch = useDispatch();
  const handleBuyItem = () => {
    dispatch(buyItem());
  }
  console.log(user);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text> Logged in as {user.email}</Text>
      <Text> Items in state: {numOfItems}</Text>
      <Button onPress={handleBuyItem} style={{ marginTop: 16 }}>
        <Text style={{ color: 'white' }}>Buy Item</Text>
      </Button>
    </View>
  );
}

export default TabOneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
