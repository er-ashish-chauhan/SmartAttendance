import React, { useState } from 'react';
import {
  View, Text, TextInput,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { showShortToast } from '../../utils/methods';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';
const Register = ({ navigation }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [empCode, setEmpCode] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPwd, setConfPassword] = useState("");

  // method for handle registeration 

  const registerationHandler = () => {
    if (!validateform()) return;
    navigation.navigate('Login')
  }

  // method for validation 
  const validateform = () => {
    let flag = true;
    if (name.trim().length == 0) {
      showShortToast("Please enter full name.");
      flag = false;
    }else if (email.trim().length == 0) {
      showShortToast("Please enter valid email address.");
      flag = false;
    }else if (phone.trim().length == 0) {
      showShortToast("Please enter phone number.");
      flag = false;
    }else if (designation.trim().length == 0) {
      showShortToast("Please enter your designation.");
      flag = false;
    }else if (empCode.trim().length == 0) {
      showShortToast("Please enter your employee code.");
      flag = false;
    }else if (password.trim().length == 0) {
      showShortToast("Please enter new Password.");
      flag = false;
    }else if (confrimPwd.trim().length == 0) {
      showShortToast("Please enter confirm Password.");
      flag = false;
    }else if (confrimPwd.trim() !== password.trim()) {
      showShortToast("New password & confirm password not macthed.");
      flag = false;
    }

    return flag;
  }

  const circlesView = () => {
    return (
      <View>
        <View style={{ flexDirection: 'row', marginTop: normalize(5) }}>
          <View
            style={[
              styles.bluecircle,
              {},
            ]}>
            <Text
              style={styles.indicatorText}>
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
                marginLeft: 10,
              },
            ]}>
            <Text
              style={styles.indicatorText}>
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

  const recognitionView = () => {
    return (
      <View>
        <View style={{ flexDirection: 'row', marginTop: normalize(20) }}>
          <Image
            source={images.faceid}
            style={{
              marginLeft: normalize(105),
              height: normalize(35),
              width: normalize(35),
              marginRight: normalize(40),
            }}
          />
          <Image
            source={images.fingerprint}
            style={{ height: normalize(35), width: normalize(35) }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: normalize(10) }}>
          <Text
            style={{
              marginLeft: normalize(95),
              marginRight: normalize(17),
              color: '#ffff',
            }}>
            Facelock
          </Text>
          <Text style={{ color: '#ffff' }}>Fingerprint</Text>
        </View>
      </View>
    );
  };

  const registerandpolicyView = () => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={registerationHandler}
          style={[styles.buttoncontainer]}>
          <Text style={styles.buttonText}>
            {'Register'}
          </Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", marginTop: normalize(26) }}>
          <Text
            style={[styles.forgotText, { textAlign: "center" }]}>
            By signing up you agree to our {'\n'}
            <Text style={{
              textDecorationLine: "underline"
            }}>Terms and conditions</Text> & <Text style={{
              textDecorationLine: "underline"
            }}>Privacy policy</Text>
          </Text>
        </View>
      </View>
    );
  };

  const detailsView = () => {
    return (
      <View style={{ marginTop: normalize(30) }}>
        <View style={[styles.inputContainer, {}]}>
          <Image source={images.userR} style={{
            width: 14,
            height: 18,
            marginRight: 8
          }}
            resizeMode="contain" />
          <TextInput
            selectionColor={colors.white}
            value={name}
            onChangeText={text => setName(text)}
            placeholder={'Name'}
            multiline={false}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <Image source={images.email} style={{
            width: 16,
            height: 18,
            marginRight: 8
          }}
            resizeMode="contain" />
          <TextInput
            selectionColor={colors.white}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder={'Official Email'}
            multiline={false}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <Image source={images.contact} style={{
            width: 16,
            height: 18,
            marginRight: 8
          }}
            resizeMode="contain" />
          <TextInput
            selectionColor={colors.white}
            value={phone}
            onChangeText={text => setPhone(text)}
            placeholder={'Phone Number'}
            multiline={false}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <Image source={images.usertie} style={{
            width: 14,
            height: 18,
            marginRight: 8
          }}
            resizeMode="contain" />
          <TextInput
            selectionColor={colors.white}
            value={designation}
            onChangeText={text => setDesignation(text)}
            placeholder={'Designation'}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <Image source={images.briefcase} style={{
            width: 16,
            height: 18,
            marginRight: 8
          }}
            resizeMode="contain" />
          <TextInput
            selectionColor={colors.white}
            value={empCode}
            onChangeText={text => setEmpCode(text)}
            placeholder={'Employee Code'}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={styles.textInput}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <Image source={images.lock} style={{
            width: 14,
            height: 18,
            marginRight: 8
          }} />
          <TextInput
            selectionColor={colors.white}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholder={'Password'}
            multiline={false}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={[styles.textInput, { flex: 1 }]}
            secureTextEntry={true}
          />
          <Image source={images.eye_l} style={{
            width: 21,
            height: 14,
            marginLeft: 8
          }} />
        </View>
        <View style={[styles.inputContainer, { marginTop: 24 }]}>
          <Image source={images.lock} style={{
            width: 14,
            height: 18,
            marginRight: 8
          }} />
          <TextInput
            selectionColor={colors.white}
            value={confrimPwd}
            onChangeText={text => setConfPassword(text)}
            placeholder={'Confirm Password'}
            multiline={false}
            placeholderTextColor={colors.white}
            underlineColorAndroid="transparent"
            style={[styles.textInput, { flex: 1 }]}
            secureTextEntry={true}
          />
          <Image source={images.eye_l} style={{
            width: 21,
            height: 14,
            marginLeft: 8
          }} />
        </View>
      </View>
    );
  };

  return (
    <ScreenHOC
      title={false}
      backIcon={false}
      backloginIcon={true}
      backnavigation={() => navigation.goBack()}
      leftblueimage={false}
      showcalenderimage={false}
      showHeaderWithoutTitle={true}
      rightblueimage={true}>
      {circlesView()}
      <View style={{
        marginTop: 26,
        marginBottom: 18,
        alignItems: "center"
      }}>
        <Text style={styles.logintext}>Enter Details To Register</Text>
      </View>
      <View
        style={[styles.loginview, { marginTop: normalize(40) }]}>
        <View>
          <View style={styles.imagecontainer}>
            <Image
              source={images.userProfile}
              style={{
                height: normalize(65),
                width: normalize(65),
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={styles.cameracontainer}>
            <Image
              source={images.camera}
              style={{
                height: normalize(16),
                width: normalize(18),
                alignSelf: 'center',
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          extraHeight={200}
          automaticallyAdjustContentInsets={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: normalize(80)
          }}>
          {detailsView()}
          {recognitionView()}
          {registerandpolicyView()}
        </KeyboardAwareScrollView>

      </View>
    </ScreenHOC>
  );
};

export default Register;
