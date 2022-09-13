import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import {styles} from './styles';
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState();
  const onchangemail = text => {
    setEmail(text);
  };

  const circlesView = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop: 38}}>
          <View style={styles.bluecircle}>
            <Text style={{color: '#ffff', fontSize: 18, alignSelf: 'center'}}>
              01
            </Text>
          </View>

          <View style={styles.dots}></View>
          <View style={styles.linebtwcircles}></View>
          <View style={[styles.dots, {marginLeft: 0}]} />
          <View
            style={[
              styles.bluecircle,
              {
                backgroundColor: 'white',
                marginLeft: 10,
                borderColor: colors.lightblue,
              },
            ]}>
            <Text
              style={{
                color: colors.lightblue,
                fontSize: 18,
                alignSelf: 'center',
              }}>
              02
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 60, marginTop: 10}}>Verify Employer</Text>
          <Text style={{marginLeft: 60, marginTop: 10}}>Register Details</Text>
        </View>
      </View>
    );
  };
  const DetailsView = () => {
    return (
      <View>
        <Text style={styles.logintext}>Enter Details To Verify Employer</Text>
        <View style={[styles.inputContainer, {marginTop: 10}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Employer Code'}
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
            placeholder={'Employer Name'}
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
  const Buttonsview = () => {
    return (
      <View>
        <TouchableOpacity
          style={[styles.buttoncontainer]}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '500'}}>
            {'Verify Employer'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{alignSelf: 'center', marginTop: 20, color: '#ffff'}}>
            {' '}
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScreenHOC backIcon={false} leftblueimage={true}>
      {circlesView()}
      <View style={styles.loginview}>
        {DetailsView()}
        {Buttonsview()}
      </View>
    </ScreenHOC>
  );
};

export default SignUp;
