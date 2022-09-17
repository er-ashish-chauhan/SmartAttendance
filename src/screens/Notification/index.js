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
                id: 1, read: true
            },
            {
                id: 2, read: false
            },
            {
                id: 3, read: false
            },
            {
                id: 4, read: false
            },
        ];
        return (
            <View style={{ marginTop: normalize(8) }}>

                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.shadow}>
                                <View style={[styles.boxView, { borderColor: item.read ? colors.lightBorder : colors.lightblue }]}>
                                    <View style={styles.flexRow}>
                                        <Text style={styles.dateText}>11:30 AM, 02/09/2022</Text>
                                        <TouchableOpacity>
                                            <Text style={styles.marktext}>{item.read ? '' : 'Mark as read'}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.listtexts}>
                                        Your leave for 1 day i.e. 05 Sept,2022 has been approved.
                                    </Text>
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
            rightText={'Clear All'}
            customHeaderHeading={'Notifications'}
            backnavigation={() => navigation.goBack()}>
            <View style={[styles.selectAttendance]}>
                {ListView()}
            </View>
        </ScreenHOC>
    );
};

export default Notification;
