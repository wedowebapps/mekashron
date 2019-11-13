import {Platform} from 'react-native'
const AppStyles = {
  color: {
    COLOR_PRIMARY: '#151515',
    COLOR_SECONDARY: '#28A745',
    COLOR_WHITE: '#FEFEFE',
    COLOR_BLACK: '#000000',
    COLOR_GREY: '#999999',
    COLOR_BG: '#F5F5F5',
    COLOR_DANGER: '#FF2929',
    COLOR_SUCCESS: '#28A745',
    INPUT_BG: '#FEFEFE',
    PRODUCT_IMAGE_PLCEHOLDER_BG: '#DFDFDF',
  },
  fonts: {
    FONT_REGULAR:  Platform.OS == 'ios' ? 'OpenSans-Regular' : 'OpenSans',
    FONT_BOLD:  Platform.OS == 'ios' ? 'OpenSans-Bold' : 'OpenSans-Bold',
  },
  fontsize: {
    xl: 20,
    l: 18, 
    m: 14,
    s: 13,
    xs: 12,
  },
  headerShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.62,
    elevation: 5,
  },
  inputShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.10,
    shadowRadius: 2.62,
    elevation: 5,
  },
  buttonShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.20,
    shadowRadius: 2.62,
    elevation: 4,
  },
};
export default AppStyles;
