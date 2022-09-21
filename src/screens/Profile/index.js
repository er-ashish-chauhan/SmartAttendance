import {
  Text, View, Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import { normalize } from '../../utils/normalizeHeightwidth';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import { styles } from './styles';
import images from '../../utils/images';
import { showShortToast } from '../../utils/methods';

export default function Profile({ navigation }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onchangName = text => {
    setName(text);
  };

  const onchangemail = text => {
    setEmail(text);
  };
  const onChangePhone = text => {
    setPhone(text);
  };


  // method for handle save changes 

  const saveChangeHandler = () => {
    if (!validateform()) return;
    navigation.goBack();
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
    }

    return flag;
  }


  const recognitionView = () => {
    return (
      <View>
        <View style={{ flexDirection: 'row', marginTop: normalize(50) }}>

          <Image
            source={images.fingerprintIcon}
            style={{
              height: normalize(35), width: normalize(35), marginRight: normalize(40),
              marginLeft: normalize(138),
            }}
          />
          <Image
            source={images.faceIcon}
            style={{
              marginLeft: 8,
              height: normalize(35),
              width: normalize(35),

            }}
          />
        </View>
        <View style={{ flexDirection: 'row', marginTop: normalize(10) }}>
          <Text
            style={{
              marginLeft: normalize(125),
              marginRight: normalize(17),
              color: '#000',
            }}>
            Fingerprint
          </Text>
          <Text style={{ color: '#000' }}>Facelock</Text>
        </View>
      </View>
    );
  };

  const DetailsView = () => {
    return (
      <View style={{ marginHorizontal: normalize(25), marginTop: normalize(12) }}>
        <View>
          <Text style={styles.myprofiletextinput}>Name</Text>
          <TextInput
            value={name}
            onChangeText={text => onchangName(text)}
            placeholder={'John Doe'}
            placeholderTextColor={'#969696'}
            underlineColorAndroid="transparent"
            selectionColor={colors.primary}
            style={styles.textInput}
          />
          <View style={[styles.straightLine]} />
        </View>

        <View>
          <Text style={styles.myprofiletextinput}>Email</Text>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'johndoe123@gmail.com'}
            placeholderTextColor={'#969696'}
            underlineColorAndroid="transparent"
            selectionColor={colors.primary}
            style={styles.textInput}
          />
          <View style={[styles.straightLine]} />
        </View>
        <View>
          <Text style={styles.myprofiletextinput}>Phone</Text>
          <TextInput
            value={phone}
            onChangeText={text => onChangePhone(text)}
            placeholder={'0987654321'}
            placeholderTextColor={'#0987654321'}
            underlineColorAndroid="transparent"
            selectionColor={colors.primary}
            style={styles.textInput}
          />
          <View style={[styles.straightLine]} />
        </View>
      </View>
    );
  };

  const registerandpolicyView = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={saveChangeHandler}
          activeOpacity={.6}
          style={[styles.buttoncontainer]}>
          <Text style={styles.buttonText}>
            {'Save Changes'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            marginTop: 20
          }}
          onPress={() => navigation.navigate('ChangePassword')}>
          <Text
            style={[
              styles.profiletext,
              {
                color: '#0079FF',
              },
            ]}>
            Change Password
          </Text>
        </TouchableOpacity>
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
      customHeaderHeading={'My Profile'}
      backnavigation={() => navigation.goBack()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          paddingBottom: 50
        }}>

        <View style={[styles.loginview, { marginTop: normalize(40) }]}>
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
                source={images.camera_white}
                style={{
                  height: normalize(18),
                  width: normalize(16),
                  alignSelf: 'center',
                }}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.profileNametext}>Web Developer</Text>
          <Text style={styles.profiletext}>#123455677</Text>
        </View>

        {DetailsView()}
        {recognitionView()}
        {registerandpolicyView()}

      </ScrollView>
    </ScreenHOC>
  );
}
