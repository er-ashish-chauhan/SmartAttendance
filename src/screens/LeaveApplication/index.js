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
            { label: 'Casual Leave', value: 'Casual Leave' },
            { label: 'Sick Leave', value: 'Sick Leave' },
        ]);
        return (
            <DropDownPicker
                style={[styles.dropdownView]}
                disableBorderRadius={true}
                placeholder="Leave Type"
                arrowIconStyle={[styles.arrowIconsty]}
                labelStyle={styles.textInput}
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

                <View style={[styles.flexFull, { marginTop: normalize(27) }]}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => { }}
                        style={[styles.inputContainer]}>
                        <Text style={styles.dateStyle}>05 Sept, 2022</Text>
                        <Image source={images.calendar_fill}
                            style={{
                                width: 13.27,
                                height: 16,
                                marginLeft: 27
                            }}
                            resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.flexRow}>
                        <Image source={images.plus}
                            style={{
                                width: 13.27,
                                height: 16,
                                marginLeft: 27
                            }}
                            resizeMode="contain" />
                        <Text style={styles.addTxt}> Add More Days</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.inputContainer, { marginTop: normalize(27) }]}>
                    <TextInput
                        value={''}
                        onChangeText={text => console.log(text)}
                        placeholder={'Reason'}
                        underlineColorAndroid="transparent"
                        placeholderTextColor={colors.darkGray}
                        style={[styles.textInput, {flex: 1}]}
                    />
                </View>

                <TouchableOpacity
                    style={[styles.buttoncontainer]}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>
                        {'Apply Leave'}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.buttoncontainer2]}
                    onPress={() => navigation.goBack()}>
                    <Text style={[styles.buttonText, { color: colors.lightblue }]}>
                        {'Cancel'}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScreenHOC>
    );
};

export default CustomerSupport;
