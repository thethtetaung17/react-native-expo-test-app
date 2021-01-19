import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { Text, View } from '../components/Themed';
import { buyItem } from '../redux/actions';

function TabOneScreen(props: any) {

  const handleBuyItem = () => {
    props.buyItem();
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text> Items in state: {props.numOfItems}</Text>
      <TouchableOpacity onPress={handleBuyItem} style={{backgroundColor: 'blue', padding:10, marginTop: 16}}>
        <Text style={{color: 'white'}}>Buy Item</Text>
      </TouchableOpacity>
    </View>
  );
}
const mapStateToProps = (state: any) => {
  const { numOfItems } = state
  return { numOfItems }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyItem: () => dispatch(buyItem())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabOneScreen);

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
