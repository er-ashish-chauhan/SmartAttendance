import {
  Image,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
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
        <View style={styles.contentContainer}>
          <Text style={styles.ContactText}>
            Dessert brownie tootsie roll caramels cookie. Tart pie brownie sesame
            snaps bonbon marshmallow jelly-o. Sweet roll marzipan cotton candy
            chocolate bar.
          </Text>
        </View>
        <View style={{
          alignItems: "center"
        }}>
          <Text style={styles.ContactHeading}>Contact Details</Text>
          <Image
            source={images.indexHcl}
            style={[styles.imgHcl]}
            resizeMode="contain" />

          <View style={{ marginTop: 16 }}>
            <TouchableOpacity style={styles.flexRow}>
              <Image source={images.phone} style={{
                width: 14,
                height: 16
              }}
                resizeMode="contain" />
              <Text style={styles.contactText}>987654321</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
              <Image source={images.envelope} style={{
                width: 16,
                height: 16
              }}
                resizeMode="contain" />
              <Text style={styles.contactText}>info@helpdesk.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
              <Image source={images.facebook} style={{
                width: 14,
                height: 16
              }}
                resizeMode="contain" />
              <Text style={styles.contactText}>/CompanyFBPage</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexRow}>
              <Image source={images.linkedin} style={{
                width: 14,
                height: 16
              }}
                resizeMode="contain" />
              <Text style={styles.contactText}>/CompanyLinkedinPage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const bottomimageView = () => {
    return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
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
