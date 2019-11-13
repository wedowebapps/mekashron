import { StyleSheet } from 'react-native';
import appstyles from '../../config/styles';

const styles = StyleSheet.create({
  appbg: {
    flex: 1,
    backgroundColor: appstyles.color.COLOR_BG,
  },
  content: {
    padding: 16,
  },
  cartInfoWrap: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 4
  },
  cartInfoText: {
    fontSize: 12,
    color: appstyles.color.COLOR_PRIMARY,
    lineHeight: 16,
    fontFamily: appstyles.fonts.FONT_REGULAR,
  },
  cartItemsNumber: {
    fontSize: 12,
    color: appstyles.color.COLOR_PRIMARY,
    fontWeight: 'bold',
    lineHeight: 16,
  },
  orderSummary: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  summaryLabel: {
    color: '#00000060',
    fontSize: appstyles.fontsize.s,
    fontFamily: appstyles.fonts.FONT_REGULAR,
  },
  textL: {
    fontFamily: appstyles.fonts.FONT_REGULAR,
  },
  textDanger: {
    color: appstyles.color.COLOR_DANGER,
    fontFamily: appstyles.fonts.FONT_REGULAR,
  },
  textPrimary: {
    color: appstyles.color.COLOR_PRIMARY,
    fontSize: appstyles.fontsize.l,
    fontWeight: 'bold',
    fontFamily: appstyles.fonts.FONT_REGULAR,
  },
  cancelButton: {
    color: '#00000060', 
    fontWeight: '400',
    fontFamily: appstyles.fonts.FONT_REGULAR,
    fontSize: 14,
  }
});

export default styles;
