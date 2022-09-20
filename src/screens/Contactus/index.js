import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenHOC from '../../components/HOC/Screen';
import { styles } from './styles';
import { normalize } from '../../utils/normalizeHeightwidth';
import images from '../../utils/images';
import colors from '../../utils/colors';

const ContactUs = ({ navigation }) => {
  const contactDetails = () => {
    return (
      <View style={{ marginTop: normalize(30) }}>
        <Text style={styles.ContactText}>
          Dessert brownie tootsie roll caramels cookie. Tart pie brownie sesame
          snaps bonbon marshmallow jelly-o. Sweet roll marzipan cotton candy
          chocolate bar.
        </Text>
        <Text style={styles.ContactHeading}>Contact Details</Text>
        <Image source={images.indexHcl} style={[styles.imgHcl]} />
      </View>
    );
  };

  const bottomimageView = () => {
    return (
      <View style={{ marginBottom: normalize(-40), flex: 1, justifyContent: "flex-end" }}>
        <Image source={images.bottomblueimage} />
      </View>
    )
  }

  return (
    <ScreenHOC
      backIcon={true}
      title={false}
      showcalenderimage={false}
      leftblueimage={false}
      customHeader={true}
      safeAreaRequired={true}
      customHeaderHeading={'Contact Us'}
      backgroundColor={colors.white}
      backnavigation={() => navigation.goBack()}>
      <View style={[styles.selectAttendance]}>{contactDetails()}</View>
      {bottomimageView()}
    </ScreenHOC>
  );
};

export default ContactUs;
