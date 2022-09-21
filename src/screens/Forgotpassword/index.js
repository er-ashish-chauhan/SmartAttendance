import React, { useState } from 'react';
import {
  View, Text, TextInput,
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
const Forgotpassword = ({ navigation }) => {

  const [email, setEmail] = useState("");

  const onchangemail = text => {
    setEmail(text);
  };


  // method for forgot
  const forgotHandler = () => {
    if (!validateform()) return;
    navigation.navigate('Resetpassword')
  }

  // method for validation 
  const validateform = () => {
    let flag = true;
    if (email.trim().length == 0) {
      showShortToast("Please enter registered email address or phone number.");
      flag = false;
    }
    return flag;
  }


  const detailsView = () => {
    return (
      <View>
        <Text style={styles.logintext}>Forgot Password?</Text>
        <Text
          style={styles.descText}>
          Don’t Worry!! It happens.Please enter the email/Phone no. associated
          with account{' '}
        </Text>
        <View style={[styles.inputContainer, { marginTop: 25 }]}>
          <Image source={images.at} style={{
            width: 16,
            height: 16,
            marginRight: 8
          }} />
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Email / Phone Number'}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
            autoCapitalize="none"
            selectionColor={colors.white}
          />
        </View>
      </View>
    );
  };
  const buttonsView = () => {
    return (
      <View>
        <TouchableOpacity
          style={[styles.buttoncontainer]}
          onPress={forgotHandler}>
          <Text style={styles.buttonText}>
            {'Submit'}
          </Text>
        </TouchableOpacity>

        <View style={{
          marginTop: 25.5,
          alignItems: "center"
        }}>
          <TouchableOpacity
            style={styles.flexRow}
            onPress={() => navigation.goBack()}>
            <Image
              source={images.leftarrow}
              style={{
                tintColor: colors.white,
                width: 16,
                height: 14
              }}
              resizeMode="contain"
            />
            <Text style={styles.backText}>Back To Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScreenHOC
      showHeaderWithoutTitle={true}
      backIcon={false}
      leftblueimage={true}>
      <Image source={images.squarebox} style={{
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: -70
      }}></Image>
      <Image source={images.smallbluebox} style={{ alignSelf: 'flex-end' }} />

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustContentInsets={true}
        showsVerticalScrollIndicator={false}
        extraHeight={200}
        style={styles.loginview}>
        {detailsView()}
        {buttonsView()}
      </KeyboardAwareScrollView>
    </ScreenHOC>
  );
};

export default Forgotpassword;
