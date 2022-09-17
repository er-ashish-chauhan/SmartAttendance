import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import images from '../../utils/images';
import {normalize} from '../../utils/normalizeHeightwidth';
import {styles} from './styles';
const Resetpassword = ({navigation}) => {
  const [email, setEmail] = useState();
  const onchangemail = text => {
    setEmail(text);
  };

  const DetailsView = () => {
    return (
      <View>
        <Text style={styles.logintext}>Reset Password</Text>
        <Text
          style={{
            color: '#ffff',
            fontSize: 12,
            marginTop: 10,
            letterSpacing: 0.8,
          }}>
          Type new password so that you can log into your registered accounte
          no. associated with account
        </Text>

        <View style={[styles.inputContainer, {marginTop: 30}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={' @ New Password'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 30}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={' @ Confirm Password'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
      </View>
    );
  };
  const buttonsView = () => {
    return (
      <TouchableOpacity
        style={[styles.buttoncontainer]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: '#000000', fontSize: 16, fontWeight: '500'}}>
          {'Submit'}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScreenHOC
      backIcon={false}
      leftblueimage={true}
      showHeaderWithoutTitle={true}
      calendartext={'Attendance Tracker'}>
      <Image source={images.smallbluebox} style={{alignSelf: 'flex-end'}} />
      <View style={styles.loginview}>
        {DetailsView()}
        {buttonsView()}
      </View>
    </ScreenHOC>
  );
};

export default Resetpassword;
