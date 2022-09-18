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

const Notification = ({ navigation }) => {

    const ListView = () => {
        const data = [
            {
                id: 1,
            },
            {
                id: 2,
            },
        ];
        return (
            <View style={{ marginTop: normalize(8) }}>

                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.shadow}>
                            <View style={[styles.boxView]}>
                                <Text style={styles.dateText}>28th August, 2022</Text>
                                <Text style={styles.issueRTxt}>Issue Raised :</Text>
                                <Text style={styles.emplyTxt}>Employee misbehaving while working on a project</Text>
                                <Text style={[styles.issueRTxt, { marginTop: 12 }]}>Reply Recieved :</Text>
                                <Text style={styles.resolveTxt}>Your Issue has been resolved.</Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TextInput
                                        value={''}
                                        onChangeText={text => console.log(text)}
                                        placeholder={'Send Reply'}
                                        multiline={true}
                                        placeholderTextColor={'#969696'}
                                        underlineColorAndroid="transparent"
                                        allowFontScaling={false}
                                        editable={true}
                                        style={{ color: "#ffff", width: '90%' }}
                                    />
                                    <TouchableOpacity>
                                        <Image source={images.sendReply} />
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.straightLine]}></View>
                            </View>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    };

    return (
        <ScreenHOC
            title={false}
            showcalenderimage={false}
            leftblueimage={false}
            customHeader={true}
            safeAreaRequired={true}
            showBackIcon={true}
            customHeaderHeading={'Previous Tickets'}
            backnavigation={() => navigation.goBack()}>
            <View style={[styles.selectAttendance]}>
                {ListView()}
            </View>
        </ScreenHOC>
    );
};

export default Notification;
