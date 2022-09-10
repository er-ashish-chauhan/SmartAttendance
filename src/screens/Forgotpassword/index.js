import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity,Image} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { normalize } from '../../utils/normalizeHeightwidth';
import {styles} from './styles';
const Forgotpassword = ({navigation}) => {
  const [email, setEmail] = useState();
  const onchangemail = text => {
    setEmail(text);
  };

 
  return (
    <ScreenHOC backIcon={false} leftblueimage={true}>
      
      <Image source={images.smallbluebox} style={{alignSelf:"flex-end",}}/> 
      <View style={styles.loginview}>
        <Text style={styles.logintext}>Forgot Password?</Text>
        <Text style={{color:"#ffff",fontSize:12,marginTop:10,letterSpacing:0.8}}>Don’t Worry!! It happens.Please enter the  email/Phone no. associated with account </Text>
        <View style={[styles.inputContainer, {marginTop: 25}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={' @  Email / Phone Number'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
       

        <TouchableOpacity style={[styles.buttoncontainer]} onPress={()=>navigation.navigate('Resetpassword')}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '500'}}>
            {'Submit'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <Image source ={images.backtologin} style={{marginTop:normalize(30),alignSelf:"center"}}/>
        </TouchableOpacity>
      </View>
    </ScreenHOC>
  );
};

export default Forgotpassword;
