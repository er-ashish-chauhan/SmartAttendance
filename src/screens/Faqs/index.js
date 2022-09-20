import React, { useEffect } from 'react';
import {
    FlatList,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import { styles } from './styles';
import { normalize } from '../../utils/normalizeHeightwidth';
import images from '../../utils/images';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const {
    width,
    height
} = Dimensions.get("window");

const faqsList = [{
    id: 1,
    ques: "How can we mark attendance ?",
    answer: "Marshmallow brownie powder jelly-o bonbon. Cake pastry shortbread croissant bonbon dragée chocolate cake chupa chups. Brownie tiramisu gummies powder brownie lollipop candy."
}, {
    id: 2,
    ques: "How can we mark attendance ?",
    answer: "Marshmallow brownie powder jelly-o bonbon. Cake pastry shortbread croissant bonbon dragée chocolate cake chupa chups. Brownie tiramisu gummies powder brownie lollipop candy."
}, {
    id: 3,
    ques: "How can we mark attendance ?",
    answer: "Marshmallow brownie powder jelly-o bonbon. Cake pastry shortbread croissant bonbon dragée chocolate cake chupa chups. Brownie tiramisu gummies powder brownie lollipop candy."
}, {
    id: 4,
    ques: "How can we mark attendance ?",
    answer: "Marshmallow brownie powder jelly-o bonbon. Cake pastry shortbread croissant bonbon dragée chocolate cake chupa chups. Brownie tiramisu gummies powder brownie lollipop candy."
}, {
    id: 5,
    ques: "How can we mark attendance ?",
    answer: "Marshmallow brownie powder jelly-o bonbon. Cake pastry shortbread croissant bonbon dragée chocolate cake chupa chups. Brownie tiramisu gummies powder brownie lollipop candy."
}, {
    id: 6,
    ques: "How can we mark attendance ?",
    answer: "Marshmallow brownie powder jelly-o bonbon. Cake pastry shortbread croissant bonbon dragée chocolate cake chupa chups. Brownie tiramisu gummies powder brownie lollipop candy."
}, {
    id: 7,
    ques: "How can we mark attendance ?",
    answer: "Marshmallow brownie powder jelly-o bonbon. Cake pastry shortbread croissant bonbon dragée chocolate cake chupa chups. Brownie tiramisu gummies powder brownie lollipop candy."
}]

const hitSlop = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
}

const FAQs = ({ navigation }) => {

    const [list, setList] = React.useState([]);
    const [localStateChanged, setLocalStateChanged] = React.useState(false);

    //Hook call
    useEffect(() => {
        const formatList = () => {
            faqsList.map((m, i) => {
                if (!i) m.selected = true;
                else m.selected = false
            });

            setList(faqsList);
        }
        formatList();

        // call return statement
        return () => {
            formatList();
        }
    }, []);

    const changeHandler = (selectedIndex) => {
        list.map((m, _i) => {
            m.selected = false;
            if (_i == selectedIndex) m.selected = !m.selected;
        });
        setList(list);
        setLocalStateChanged(!localStateChanged);
    }

    const _renderItems = (_item, _index) => {
        return (
            <View style={{
            }}>
                <View style={{
                    paddingHorizontal: normalize(15)
                }}>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        activeOpacity={0.6}
                        onPress={() => changeHandler(_index)}
                        style={styles.quesContainer}>
                        <Text style={styles.questext}>Q. {_item.ques}</Text>
                        <Icon name={!_item?.selected ? "keyboard-arrow-down" : "keyboard-arrow-up"} size={25} color={colors.primary} />
                    </TouchableOpacity>
                    {_item?.selected && (
                        <View>
                            <Text style={[styles.questext, { fontWeight: "400" }]}>A. {_item.answer}</Text>
                        </View>
                    )}
                </View>

                <View style={styles.divider} />
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
            customHeaderHeading={'FAQs'}
            backgroundColor={colors.white}
            backnavigation={() => navigation.goBack()}>
            <View style={[styles.container]}>
                <FlatList
                    data={list}
                    renderItem={({ item, index }) => _renderItems(item, index)}
                    keyExtractor={(item, index) => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: height * 0.3,
                    }}
                    extraData={localStateChanged}
                />
            </View>
        </ScreenHOC>
    );
};

export default FAQs;
