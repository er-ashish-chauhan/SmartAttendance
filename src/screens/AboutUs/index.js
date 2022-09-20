import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenHOC from '../../components/HOC/Screen';
import { styles } from './styles';
import { normalize } from '../../utils/normalizeHeightwidth';
import images from '../../utils/images';
import colors from '../../utils/colors';

const AboutUs = ({ navigation }) => {


    const bottomimageView = () => {
        return (
            <View style={{ marginBottom: normalize(-40), flex: 1, justifyContent: "flex-end" }}>
                <Image source={images.bottomblueimage} />
            </View>
        )
    }

    return (
        <ScreenHOC
            backIcon={true}
            title={false}
            showcalenderimage={false}
            leftblueimage={false}
            customHeader={true}
            safeAreaRequired={true}
            customHeaderHeading={'About Us'}
            backgroundColor={colors.white}
            backnavigation={() => navigation.goBack()}>
            <View style={[styles.selectAttendance]}>
                <Text style={styles.ContactText}>

                    Marshmallow brownie powder jelly-o bonbon. Cake pastry shortbread croissant bonbon dragée chocolate cake chupa chups. Brownie tiramisu gummies powder brownie lollipop candy caramels pastry. Gingerbread dessert tiramisu tiramisu marzipan tart jelly sugar plum chocolate.

                    Soufflé candy cupcake brownie brownie macaroon. Jelly chocolate bar cake tart chocolate bar chupa chups. Oat cake caramels macaroon topping lemon drops. Muffin marshmallow pastry cheesecake donut cotton candy apple pie toffee cake.

                    Apple pie pastry liquorice marshmallow pie marzipan cheesecake. Bonbon tiramisu muffin danish caramels topping jelly-o gummi bears. Chocolate cake fruitcake cupcake cotton candy cookie tiramisu biscuit gummi bears. Soufflé macaroon carrot cake sweet roll cotton candy.

                </Text>
            </View>
            {bottomimageView()}
        </ScreenHOC>
    );
};

export default AboutUs;
