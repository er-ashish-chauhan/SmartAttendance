import React from 'react';
import { Text, View } from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';

const Reports = ({navigation}) => {
    const CardsView=(text)=>{
        return(
            <View style={styles.cardcontainer}>
               <View
            style={[
              styles.bluecircle,
              {
                backgroundColor: 'white',
                borderColor: colors.lightblue,
              },
            ]}>
            <Text
              style={{
                color: colors.lightblue,
                fontSize: 18,
                alignSelf: 'center',
              }}>
              01
            </Text>
            </View>
            <Text style={{fontSize:14,alignSelf:"center",marginTop:normalize(5)}}>
              {text}
            </Text>
            </View>
        )
    }
  return (
    <ScreenHOC
    backIcon={false}
    title={false}  
    showcalenderimage={false} 
    leftblueimage={false}
    
     >
<Text style={{alignSelf:"center",fontSize:16,marginTop:normalize(17)}}>
                {"Monthly Reports"}
            </Text>
            <View style={styles.detailcontainer}>
<Text style={{fontSize:14}}>
Total Working Hours
</Text>
<View style={{flexDirection:"column"}}> 
<Text style={{fontSize:14,color:colors.lightblue,alignItems:"flex-end"}}>
37:40
</Text>
<Text style={{fontSize:10,color:colors.lightblue,alignItems:"flex-end"}}>
HH:MM
</Text>
</View>
        </View>
        <View style={{flexDirection:"row",marginHorizontal:30,marginTop:normalize(30), justifyContent:"space-between"}}>
            {CardsView("Total Absent")}
            {CardsView("Over Time")}
        </View>
        <View style={{flexDirection:"row",marginHorizontal:30,marginTop:normalize(30), justifyContent:"space-between"}}>
            {CardsView("Early In")}
            {CardsView("Total Present")}
        </View>
        <View style={{flexDirection:"row",marginHorizontal:30,marginTop:normalize(30), justifyContent:"space-between"}}>
            {CardsView("Late Arrival")}
            {CardsView("Early Out")}
        </View>
      </ScreenHOC>
  );
};
export default Reports