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
                placeholder="Select Issue"
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
            customHeaderHeading={'Customer Support'}
            backnavigation={() => navigation.goBack()}>
            <View style={[styles.selectAttendance]}>
                {dropDownPicker()}
                <View style={[styles.straightLine]}></View>
                <View style={styles.textArea}>
                    <TextInput
                        value={''}
                        onChangeText={text => console.log(text)}
                        placeholder={'Share Details (optional)'}
                        multiline={true}
                        placeholderTextColor={'#969696'}
                        underlineColorAndroid="transparent"
                        allowFontScaling={false}
                        editable={true}
                    // style={{ color: "#ffff" }}
                    />
                </View>

                <TouchableOpacity style={[styles.buttoncontainer]}
                    onPress={() => navigation.navigate('Dashboard')}
                >
                    <Text style={styles.submitTxt}>
                        {'Submit'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttoncontainer2]}
                    onPress={() => navigation.navigate('PreviousTickets')}
                >
                    <Text style={[styles.submitTxt,{color:colors.lightblue}]}>
                        {'Previous Tickets'}
                    </Text>
                    <Image source={images.rightarrow} style={{marginLeft:10,top:1}}/>
                </TouchableOpacity>
            </View>
        </ScreenHOC>
    );
};

export default CustomerSupport;
