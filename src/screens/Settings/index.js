import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import { normalize } from '../../utils/normalizeHeightwidth';
import {styles} from './styles';

const Settings = ({navigation}) => {
 
 
  return (
    <ScreenHOC 
    backIcon={false}
    title={false}  
    showcalenderimage={false} 
    leftblueimage={false}
    customHeader={true}
    customHeaderHeading={"Settings"}
     backnavigation={()=>navigation.goBack()}
    >
 <View>

 </View>
    </ScreenHOC>
  );
};

export default Settings;
