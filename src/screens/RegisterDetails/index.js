
import React, {useState} from 'react';
import {View, Text, TextInput,Image, TouchableOpacity} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { normalize } from '../../utils/normalizeHeightwidth';
import {styles} from './styles';
const Register = ({navigation}) => {
  const [email, setEmail] = useState();
  const onchangemail = text => {
    setEmail(text);
  };

  const circlesView = () => {
    return (
      <View>
        <View style={{flexDirection: 'row', marginTop:normalize(5)}}>
          <View style={[styles.bluecircle,{
                backgroundColor: 'white',
                borderColor: colors.lightblue,
              }]}>
            <Text style={{color: colors.lightblue, fontSize: 18, alignSelf: 'center'}}>
              01
            </Text>
          </View>

          <View style={styles.dots}></View>
          <View style={styles.linebtwcircles}></View>
          <View style={[styles.dots, {marginLeft: 0}]} />
          <View
            style={[
              styles.bluecircle,
              {
                marginLeft: 10,
              },
            ]}>
            <Text
              style={{
                color: "#ffff",
                fontSize: 18,
                alignSelf: 'center',
              }}>
              02
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{marginLeft: 60, marginTop: 10}}>Verify Employer</Text>
          <Text style={{marginLeft: 60, marginTop: 10}}>Register Details</Text>
        </View>
      </View>
    );
  };
  const recognitionView=()=>{
    return(
        <View>
        <View style={{flexDirection:"row",marginTop:normalize(20)}}>
            <Image source={images.faceid} style={{marginLeft:normalize(105),height:normalize(35),width:normalize(35),marginRight:normalize(40)}}/>
            <Image source={images.fingerprint} style={{height:normalize(35),width:normalize(35)}}/>
        </View>
        <View style={{flexDirection:"row",marginTop:normalize(10)}}>
            <Text style={{marginLeft:normalize(95),marginRight:normalize(17),color:"#ffff"}}>
                Facelock
            </Text>
            <Text style={{color:"#ffff"}}>
                Fingerprint
            </Text>
        </View>
        </View>
    )
  }
  return (
    <ScreenHOC title={false}  backIcon={false} backloginIcon={true} backnavigation={()=>navigation.goBack()}  leftblueimage={false}showcalenderimage={false}rightblueimage={true}>
      {circlesView()}

      <View style={[styles.loginview,{marginTop:normalize(40)}]}>
      <View style={ styles.imagecontainer}>
    
            <Image source={images.userProfile} style={{height:normalize(65),width:normalize(65),alignSelf:"center"}}/>
          </View>
          <View style={styles.cameracontainer}>
          <Image source={images.camera} style={{height:normalize(16),width:normalize(16),alignSelf:"center"}}/>
          </View>
       
         <View style={[styles.inputContainer, {marginTop: 10}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Name'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Official Email'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Phone Number'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Designation'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Employer Code'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Password'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Confirm Password'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
          />
        </View>
  {recognitionView()}
  <TouchableOpacity style={[styles.buttoncontainer]}>
          <Text style={{color: '#000000', fontSize: 16, fontWeight: '500'}}>
            {'Register'}
          </Text>
          </TouchableOpacity>
          <Text style={{color:"#ffff",fontSize:12,alignSelf:"center",marginTop:10}}>By signing up you agree to our</Text>
          <Text style={{color:"#ffff",fontSize:12,alignSelf:"center",textDecorationStyle:"dashed", marginTop:10}}>Terms and conditions & Privacy policy</Text>
      </View>
    </ScreenHOC>
  );
};

export default Register;
