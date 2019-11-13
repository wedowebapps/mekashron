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
  },
  textL: {

  },
  textDanger: {
    color: appstyles.color.COLOR_DANGER,
  },
  textPrimary: {
    color: appstyles.color.COLOR_PRIMARY,
    fontSize: appstyles.fontsize.l,
    fontWeight: 'bold',
  }
});

export default styles;
