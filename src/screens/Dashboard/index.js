import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import { normalize } from '../../utils/normalizeHeightwidth';
import {styles} from './styles';

const Dashboard = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password,setPassword]=useState()
  const onchangemail = text => {
    setEmail(text);
  };
  const onChangePassword=text=>{
    setPassword(text)
  }
  const DetailsView = () => {
    return (
      <View>
        <Text style={styles.logintext}>Login</Text>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={email}
            onChangeText={text => onchangemail(text)}
            placeholder={'Email/Phone Number'}
            multiline={false}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
            style={{width:100,color:"#ffff"}}
          />
        </View>
        <View style={[styles.inputContainer, {marginTop: 24}]}>
          <TextInput
            value={password}
            onChangeText={text => onChangePassword(text)}
            placeholder={'Password'}
            multiline={false}
            style={{width:100,color:"#ffff"}}
            placeholderTextColor={'white'}
            underlineColorAndroid="transparent"
            allowFontScaling={false}
            editable={true}
            secureTextEntry={true}
          />
        </View>
      </View>
    );
  };
 
  return (
    <ScreenHOC 
    backIcon={false}
    title={false}  
    showcalenderimage={false} 
    leftblueimage={true}>
     <View style={{flexDirection:'row',marginTop:-35,alignItems:"center"}}>
       <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
       <Text style={{alignSelf:"center",marginLeft:normalize(160)}}>Hi John</Text>

        </TouchableOpacity>        
     </View>
    </ScreenHOC>
  );
};

export default Dashboard;
