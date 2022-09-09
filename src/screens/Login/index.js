import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import {styles} from './styles';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const onchangemail = text => {
    setEmail(text);
  };
  return (
    <ScreenHOC leftblueimage={true}>
      <View style={styles.loginview}>
        <Text style={styles.logintext}>Login</Text>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Email/Phone Number'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Password'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
        <Text style={{alignSelf: 'flex-end', marginTop: 20, color: '#ffff'}}>
          Forgot Password ?
        </Text>
        <TouchableOpacity style={[styles.buttoncontainer]}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '500'}}>
            {'Login'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          
          <Text style={{alignSelf: 'center', marginTop: 20, color: '#ffff'}}>
            Didnt have an account? Signup
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenHOC>
  );
};

export default LoginScreen;
