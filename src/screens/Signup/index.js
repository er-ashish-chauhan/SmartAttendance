import React, { useState } from 'react';
import {
  View, Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScreenHOC from '../../components/HOC/Screen';
import { images } from '../../utils';
import colors from '../../utils/colors';
import { showShortToast } from '../../utils/methods';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';

const {
  width
} = Dimensions.get("window");

const SignUp = ({ navigation }) => {
  const [employerCode, setEmployerCode] = useState("");
  const [employerName, setEmployerName] = useState("");

  //method for handle reset password
  const verifyHandler = () => {
    if (!validateform()) return;
    navigation.navigate('Register')
  }

  // method for validation 
  const validateform = () => {
    let flag = true;
    if (employerCode.trim().length == 0) {
      showShortToast("Please enter valid employer code.");
      flag = false;
    } else if (employerName.trim().length == 0) {
      showShortToast("Please enter employer name.");
      flag = false;
    }
    return flag;
  }

  const circlesView = () => {
    return (
      <View>
        <View style={{ flexDirection: 'row', marginTop: 38 }}>
          <View style={styles.bluecircle}>
            <Text style={{ color: '#ffff', fontSize: 18, alignSelf: 'center' }}>
              01
            </Text>
          </View>

          <View style={styles.dots}></View>
          <View style={styles.linebtwcircles}></View>
          <View style={[styles.dots, { marginLeft: 0 }]} />
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
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginLeft: 60, marginTop: 10 }}>Verify Employer</Text>
          <Text style={{ marginLeft: 60, marginTop: 10 }}>Register Details</Text>
        </View>
      </View>
    );
  };

  const DetailsView = () => {
    return (
      <View>
        <Text style={styles.logintext}>Enter Details To Verify Employer</Text>
        <View style={[styles.inputContainer, { marginTop: normalize(36) }]}>
          <Image source={images.idcard} style={{
            width: 20,
            height: 17,
            marginRight: 8
          }}
            resizeMode="contain" />
          <TextInput
            value={employerCode}
            onChangeText={text => setEmployerCode(text)}
            placeholder={'Employer Code'}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
            selectionColor={colors.white}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <Image source={images.briefcase} style={{
            width: 20,
            height: 17,
            marginRight: 8
          }}
            resizeMode="contain" />
          <TextInput
            value={employerName}
            onChangeText={text => setEmployerName(text)}
            placeholder={'Employer Name'}
            placeholderTextColor={'white'}
            underlineColorAndroid={"transparent"}
            style={styles.textInput}
            selectionColor={colors.white}
          />
        </View>
      </View>
    );
  };

  const Buttonsview = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.buttoncontainer]}
          onPress={verifyHandler}>
          <Text style={styles.buttonText}>
            {'Verify Employer'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", marginTop: normalize(34) }}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.forgotText}>
            {' '}
            Already have an account? Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScreenHOC
      showHeaderWithoutTitle={true}
      backIcon={false}
      leftblueimage={true}>
      <Image source={images.smallbluebox}
        style={{
          alignSelf: 'flex-end',
          position: "absolute",
          top: width * 0.25
        }} />
      {circlesView()}
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

export default SignUp;
