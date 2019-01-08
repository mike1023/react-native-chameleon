import React from 'react';
import {
    ScrollView,
    Alert, Picker
} from 'react-native';

import {ListItem} from "./component/ListItem";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title:'组件列表'
  };

  render() {
      let { navigation} = this.props;
      return (
          <ScrollView>
              <ListItem title={'touchable'} onPress={() => {navigation.navigate('TouchableDemo')}}/>
              <ListItem title={'switch'} onPress={() => {navigation.navigate('SwitchDemo')}}/>
              <ListItem title={'line'} onPress={() => {navigation.navigate('LineDemo')}}/>
              <ListItem title={'modal'} onPress={() => {navigation.navigate('ModalDemo')}}/>
              <ListItem title={'list'} onPress={() => {navigation.navigate('ListDemo')}}/>
          </ScrollView>
      );
  }
}
