import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import { normalize } from '../../utils/normalizeHeightwidth';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles';
import images from '../../utils/images';
import colors from '../../utils/colors';

const CustomerSupport = ({ navigation }) => {

    const dropDownPicker = () => {
        const [open, setOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [items, setItems] = useState([
            { label: 'Apple', value: 'apple' },
            { label: 'Banana', value: 'banana' },
        ]);
        return (
            <DropDownPicker
                style={[styles.dropdownView]}
                disableBorderRadius={true}
                placeholder="Leave Type"
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


    return (
        <ScreenHOC
            backIcon={true}
            title={false}
            showcalenderimage={false}
            leftblueimage={false}
            customHeader={true}
            safeAreaRequired={true}
            customHeaderHeading={'Leave Application'}
            backnavigation={() => navigation.goBack()}>

            <View style={[styles.selectAttendance]}>
                {dropDownPicker()}
                <View style={[styles.straightLine]}></View>

                <View style={styles.flexFull}>
                    <View style={[styles.flexHalf,{borderBottomWidth:1,borderColor:colors.lightblue}]}>
                    </View>
                    <View style={styles.flexHalf}>
                        <TouchableOpacity style={{paddingLeft:normalize(50)}}>
                        <Text style={styles.addTxt}> Add More Days</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginTop:normalize(25)}}>
                    <TextInput
                        value={''}
                        onChangeText={text => console.log(text)}
                        placeholder={'Reason'}
                        multiline={true}
                        placeholderTextColor={'#969696'}
                        underlineColorAndroid="transparent"
                        allowFontScaling={false}
                        editable={true}
                    />
                    <View style={[styles.straightLine]} />
                </View>

                <TouchableOpacity style={[styles.buttoncontainer]}
                    onPress={() => navigation.navigate('Dashboard')}
                >
                    <Text style={styles.submitTxt}>
                        {'Apply Leave'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttoncontainer2]}
                    onPress={() => navigation.navigate('Dashboard')}
                >
                    <Text style={[styles.submitTxt, { color: colors.lightblue }]}>
                        {'Cancel'}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScreenHOC>
    );
};

export default CustomerSupport;
