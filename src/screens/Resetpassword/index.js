import React, { useState } from 'react';
import {
  View, Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { showShortToast } from '../../utils/methods';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';

const hitSlop = {
  top: 15,
  bottom: 15,
  left: 15,
  right: 15
}

const Resetpassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");


  //method for handle reset password
  const resetPwdHandler = () => {
    if (!validateform()) return;
    navigation.navigate('Login')
  }


  // method for validation 
  const validateform = () => {
    let flag = true;
    if (password.trim().length == 0) {
      showShortToast("Please enter new Password.");
      flag = false;
    }else if (confPassword.trim().length == 0) {
      showShortToast("Please enter confirm Password.");
      flag = false;
    }else if (confPassword.trim() !== password.trim()) {
      showShortToast("New password & confirm password not macthed.");
      flag = false;
    }

    return flag;
  }

  const DetailsView = () => {
    return (
      <View>
        <Text style={styles.logintext}>Reset Password</Text>
        <Text
          style={styles.descText}>
          Type new password so that you can log into your registered accounte
          no. associated with account
        </Text>

        <View style={[styles.inputContainer, { marginTop: 30 }]}>
          <Image source={images.lock} style={{
            width: 14,
            height: 18,
            marginRight: 8
          }} />
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder={'New Password'}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => { }}
            hitSlop={hitSlop}>
            <Image source={images.eye_l} style={{
              width: 21,
              height: 14,
              marginLeft: 8
            }} />
          </TouchableOpacity>
        </View>
        <View style={[styles.inputContainer, { marginTop: 30 }]}>
          <Image source={images.lock} style={{
            width: 14,
            height: 18,
            marginRight: 8
          }} />
          <TextInput
            value={confPassword}
            onChangeText={text => setConfPassword(text)}
            placeholder={'Confirm Password'}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
            secureTextEntry={true}
            autoCapitalize="none"
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => { }}
            hitSlop={hitSlop}>
            <Image source={images.eye_l} style={{
              width: 21,
              height: 14,
              marginLeft: 8
            }} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const buttonsView = () => {
    return (
      <TouchableOpacity
        style={[styles.buttoncontainer]}
        onPress={resetPwdHandler}>
        <Text style={styles.buttonText}>
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
      <Image source={images.smallbluebox} style={{ alignSelf: 'flex-end' }} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        extraHeight={200}
        automaticallyAdjustContentInsets={true}
        showsVerticalScrollIndicator={false} style={styles.loginview}>
        {DetailsView()}
        {buttonsView()}
      </KeyboardAwareScrollView>
    </ScreenHOC>
  );
};

export default Resetpassword;
