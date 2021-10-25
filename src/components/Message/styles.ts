import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 36
    },
    message: {
        color: COLORS.WHITE,
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        lineHeight: 20,
        marginBottom: 12
    },
    
    footer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },


    userNameText: {
        fontSize: 15,
        fontFamily: FONTS.REGULAR,
        color: COLORS.WHITE,
        marginLeft: 16
    }
})