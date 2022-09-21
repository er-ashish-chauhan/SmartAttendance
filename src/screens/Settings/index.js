import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import { normalize } from '../../utils/normalizeHeightwidth';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles';
import images from '../../utils/images';
import colors from '../../utils/colors';
const Settings = ({ navigation }) => {
  const dropDownPicker = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      { label: 'Change Password', value: 'Change Password' },
      { label: 'Update Profile', value: 'Update Profile' },
    ]);
    return (
      <DropDownPicker
        style={[styles.dropdownView]}
        disableBorderRadius={true}
        placeholder="Select Attendance Method"
        arrowIconStyle={[styles.arrowIconsty]}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    );
  };

  const ListView = () => {
    const data = [
      {
        id: 1,
        img: images.mobileIcon,
        name: 'Device Name',
      },
      {
        id: 2,
        img: images.codeIcon,
        name: 'Device Build',
      },
      {
        id: 3,
        img: images.tagIcon,
        name: 'Device Model',
      },
      {
        id: 4,
        img: images.oIcon,
        name: 'Device Power Status',
      },
    ];
    return (
      <View style={{ marginTop: normalize(30) }}>
        <Text style={styles.logintexts}>Beacon Device Information</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 18,
                }}>
                <Image
                  source={item.img}
                  style={{ width: 20, height: 20, resizeMode: 'contain' }}
                />
                <Text style={styles.listtexts}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
        <Text style={[styles.logintexts, { marginTop: 30 }]}>
          Security Settings
        </Text>
        <View style={[styles.securityImgView]}>
          <Text style={[styles.securityListText]}>Facelock </Text>
          <Image source={images.faceIcon} style={[styles.securityImg]} />
        </View>
        <View style={[styles.securityImgView]}>
          <Text style={[styles.securityListText]}>Fingerprint </Text>
          <Image source={images.fingerprintIcon} style={[styles.securityImg]} />
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
      customHeaderHeading={'Settings'}
      backnavigation={() => navigation.goBack()}>
      <View style={[styles.selectAttendance]}>
        {dropDownPicker()}
        <View style={[styles.straightLine]}></View>
        {ListView()}
      </View>
    </ScreenHOC>
  );
};

export default Settings;
