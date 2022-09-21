import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: normalize(18)
    },
    quesContainer: {
       flexDirection: "row",
       justifyContent: "space-between",
       alignItems: "center",
       marginBottom: 10
    },
    questext: {
        fontFamily: fonts.Medium,
        // fontWeight: '400',
        fontSize: 14,
        lineHeight: 16.32,
        color: colors.black,
    },
    imgHcl: {
        width: normalize(120),
        height: normalize(101),
        marginTop: 30,
        alignSelf: 'center',
    },
    divider: {
        height: 1,
        backgroundColor: colors.primary,
        marginVertical: 16
    },
    answerText: {
        fontFamily: fonts.Light,
        // fontWeight: '400',
        fontSize: 14,
        lineHeight: 16.32,
        color: colors.black,
    }
});
