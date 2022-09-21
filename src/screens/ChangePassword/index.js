import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { normalize } from '../../utils/normalizeHeightwidth';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { styles } from './styles';
import { showShortToast } from '../../utils/methods';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const ChangePassword = ({ navigation }) => {

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const _oldPass = text => {
    setOldPass(text);
  };

  const _newPass = text => {
    setNewPass(text);
  };
  const _confirmPass = text => {
    setConfirmPass(text);
  };


  const changePwdHandler = () => {
    if (!validateform()) return;
    navigation.goBack();
  }

  // method for validation 
  const validateform = () => {
    let flag = true;
    if (oldPass.trim().length == 0) {
      showShortToast("Please enter old password");
      flag = false;
    } else if (newPass.trim().length == 0) {
      showShortToast("Please enter new password");
      flag = false;
    } else if (confirmPass.trim().length == 0) {
      showShortToast("Please enter confirm new password.");
      flag = false;
    }

    if (confirmPass.trim() !== newPass.trim()) {
      showShortToast("Confirm password & new password not matched.");
      flag = false;
    }

    return flag;
  }

  const DetailsView = () => {
    return (
      <View style={{ marginHorizontal: normalize(25), marginTop: normalize(25) }}>
        <View style={styles.inputContainer}>
          <TextInput
            value={oldPass}
            onChangeText={text => _oldPass(text)}
            placeholder={'Old Password'}
            placeholderTextColor={'#000'}
            underlineColorAndroid="transparent"
            style={styles.textInput}
          />
          <Image
            source={images.eyeIcon}
            resizeMode="contain"
            style={[styles.eyeImgSty]}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            value={newPass}
            onChangeText={text => _newPass(text)}
            placeholder={'New Password'}
            placeholderTextColor={'#000'}
            underlineColorAndroid="transparent"
            style={styles.textInput}
          />
          <Image
            source={images.eyeIcon}
            resizeMode="contain"
            style={[styles.eyeImgSty]}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={confirmPass}
            onChangeText={text => _confirmPass(text)}
            placeholder={'Confirm Password'}
            placeholderTextColor={'#000'}
            underlineColorAndroid="transparent"
            style={styles.textInput}
          />
          <Image
            source={images.eyeIcon}
            resizeMode="contain"
            style={[styles.eyeImgSty]}
          />
        </View>
      </View>
    );
  };
  return (
    <ScreenHOC
      title={false}
      backIcon={true}
      showcalenderimage={false}
      leftblueimage={false}
      customHeader={true}
      safeAreaRequired={true}
      backgroundColor={colors.white}
      customHeaderHeading={'Change Password'}
      backnavigation={() => navigation.goBack()}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        extraHeight={200}
        automaticallyAdjustContentInsets={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: normalize(80)
        }}>
        {DetailsView()}
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => changePwdHandler()}
            style={[styles.buttoncontainer]}>
            <Text style={styles.buttonText}>
              {'Save Password'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>

    </ScreenHOC>
  );
};

export default ChangePassword;
