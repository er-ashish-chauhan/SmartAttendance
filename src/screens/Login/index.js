import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import { styles } from './styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const onchangemail = text => {
    setEmail(text);
  };
  const onChangePassword = text => {
    setPassword(text)
  }
  const DetailsView = () => {
    return (
      <View>
        <Text style={styles.logintext}>Login</Text>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Email/Phone Number'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
            style={{ width: 100, color: "#ffff" }}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <TextInput
            value={password}
            onChangeText={text => onChangePassword(text)}
            placeholder={'Password'}
            multiline={false}
            style={{ width: 100, color: "#ffff" }}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
            secureTextEntry={true}
          />
        </View>
      </View>
    );
  };
  const Buttonsview = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Forgotpassword')}>
          <Text style={{ alignSelf: 'flex-end', marginTop: 20, color: '#ffff' }}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttoncontainer]}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={{ color: '#000000', fontSize: 16, fontWeight: '500' }}>
            {'Login'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{ alignSelf: 'center', marginTop: 20, color: '#ffff' }}>
            Didnt have an account? Signup
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScreenHOC backIcon={false}
      showHeaderWithoutTitle={true}
      leftblueimage={true}>
      <View style={styles.loginview}>
        {DetailsView()}
        {Buttonsview()}
      </View>
    </ScreenHOC>
  );
};

export default LoginScreen;
