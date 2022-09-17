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

const EmployDetails = ({ navigation }) => {


    const joinView = () => (
        <>
            <Text style={[styles.employTxt, { marginTop: normalize(14) }]}>Job Hours Details:</Text>
            <View style={[styles.flexFull]}>
                <View style={styles.flexHalf}>
                    <Text style={styles.listTxt}>1. Working Hours</Text>
                    <Text style={styles.employTxt}>:</Text>
                </View>
                <Text style={styles.cmpnyTxt}>08 Hrs</Text>
            </View>
            <View style={[styles.flexFull]}>
                <View style={styles.flexHalf}>
                    <Text style={styles.listTxt}>2. Punch Inrs</Text>
                    <Text style={styles.employTxt}>:</Text>
                </View>
                <Text style={styles.cmpnyTxt}>09:00 Am</Text>
            </View>
            <View style={[styles.flexFull]}>
                <View style={styles.flexHalf}>
                    <Text style={styles.listTxt}>3. Punch Out</Text>
                    <Text style={styles.employTxt}>:</Text>
                </View>
                <Text style={styles.cmpnyTxt}>08:00 Pm</Text>
            </View>
            <View style={[styles.flexFull]}>
                <View style={styles.flexHalf}>
                    <Text style={styles.listTxt}>4. Breaks Hours</Text>
                    <Text style={styles.employTxt}>:</Text>
                </View>
                <Text style={styles.cmpnyTxt}>01 Hrs</Text>
            </View>
            <View style={[styles.flexFull]}>
                <View style={styles.flexHalf}>
                    <Text style={styles.listTxt}>5. Attendance Method </Text>
                    <Text style={styles.employTxt}>:</Text>
                </View>
                <Text style={styles.cmpnyTxt}>Beacon</Text>
            </View>
        </>
    )

    const licenseView = () => (
        <>
            <Text style={[styles.employTxt, { marginTop: normalize(14) }]}>License Details : </Text>
            <View style={[styles.flexFull]}>
                <View style={styles.flexHalf}>
                    <Text style={styles.listTxt}>License No.</Text>
                    <Text style={styles.employTxt}>:</Text>
                </View>
                <Text style={styles.cmpnyTxt}>01245589</Text>
            </View>
            <View style={[styles.flexFull]}>
                <View style={styles.flexHalf}>
                    <Text style={styles.listTxt}>Expiry Date</Text>
                    <Text style={styles.employTxt}>:</Text>
                </View>
                <Text style={styles.cmpnyTxt}>12/09/2025</Text>
            </View>
        </>
    )

    return (
        <ScreenHOC
            backIcon={true}
            title={false}
            showcalenderimage={false}
            leftblueimage={false}
            customHeader={true}
            safeAreaRequired={true}
            customHeaderHeading={'Employment Details'}
            backnavigation={() => navigation.goBack()}>
            <View style={[styles.selectAttendance]}>

                <View style={styles.firstSection}>
                    <Image source={images.indexHcl} style={{ height: normalize(53), width: normalize(62) }} />
                    <View style={styles.employView}>
                        <View style={[styles.flexFull,{marginTop:0}]}>
                            <View style={styles.flexHalf}>
                            <Text style={styles.employTxt}>Employer Name</Text>
                                <Text style={styles.employTxt}>:</Text>
                            </View>
                            <Text style={styles.cmpnyTxt}>HCL Technologies</Text>
                        </View>
                        <View style={[styles.flexFull]}>
                            <View style={styles.flexHalf}>
                                <Text style={styles.employTxt}>Employer Code </Text>
                                <Text style={styles.employTxt}>:</Text>
                            </View>
                            <Text style={styles.cmpnyTxt}>#1290493044</Text>
                        </View>
                    </View>
                </View>

                {joinView()}
                {licenseView()}
                <Text style={[styles.employTxt, { marginTop: normalize(14) }]}>Job Location : </Text>
                <Text style={[styles.cmpnyTxt, { marginTop: normalize(14) }]}> A-54, Sec 63, Landmark, Noida</Text>
            </View>
        </ScreenHOC>
    );
};

export default EmployDetails;
