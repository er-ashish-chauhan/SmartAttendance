import React, { useState } from 'react';
import {
  View, Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-simple-toast';
import ScreenHOC from '../../components/HOC/Screen';
import { colors, images } from '../../utils';
import { showShortToast } from '../../utils/methods';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';

const hitSlop = {
  top: 15,
  bottom: 15,
  left: 15,
  right: 15
}
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const onchangemail = text => {
    setEmail(text);
  };
  const onChangePassword = text => {
    setPassword(text)
  }

  // method for login
  const loginHandler = () => {
    if (!validateform()) return;
    navigation.navigate('Dashboard');
  }

  // method for validation 
  const validateform = () => {
    let flag = true;
    if (email.trim().length == 0) {
      showShortToast("Please enter registered email address or phone number.");
      flag = false;
    }else if (password.trim().length == 0) {
      showShortToast("Please enter valid password.")
      flag = false;
    }
    return flag;
  }

  const DetailsView = () => {
    return (
      <View>
        <Text style={styles.logintext}>Login</Text>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <Image source={images.at} style={{
            width: 16,
            height: 16,
            marginRight: 8
          }} />
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Email/Phone Number'}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
            autoCapitalize="none"
            cursorColor={colors.white}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <Image source={images.lock} style={{
            width: 14,
            height: 18,
            marginRight: 8
          }} />
          <TextInput
            value={password}
            onChangeText={text => onChangePassword(text)}
            placeholder={'Password'}
            style={[styles.textInput, { flex: 1 }]}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
            selectionColor={colors.white}
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

  const Buttonsview = () => {
    return (
      <View>
        <TouchableOpacity
          style={{ alignSelf: 'flex-end', marginTop: 18 }}
          onPress={() => navigation.navigate('Forgotpassword')}>
          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttoncontainer]}
          onPress={loginHandler}
        >
          <Text style={styles.buttonText}>
            {'Login'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: 'center', marginTop: normalize(32) }}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.forgotText}>
            Didn't have an account? Signup
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScreenHOC
      backIcon={false}
      showHeaderWithoutTitle={true}
      leftblueimage={true}>
      <View style={{
        alignItems: "center",
        marginTop: normalize(34)
      }}>
        <TouchableOpacity
          activeOpacity={0.6}
          hitSlop={hitSlop}
          style={styles.flexRow}>
          <Text style={styles.languageLable}>Change Language</Text>
          <Image source={images.globe} style={{
            width: 14,
            height: 14
          }} />
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustContentInsets={true}
        showsVerticalScrollIndicator={false}
        extraHeight={200}
        style={styles.loginview}>
        {DetailsView()}
        {Buttonsview()}
      </KeyboardAwareScrollView>
    </ScreenHOC>
  );
};

export default LoginScreen;
