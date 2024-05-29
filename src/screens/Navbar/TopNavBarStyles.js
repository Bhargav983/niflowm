import { StyleSheet, Dimensions } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-start', 
    margin: 0,
    marginTop: responsiveHeight(8.3), // Adjusted for responsive margin top
    width: '100%', 
  },
  modalContent: {
    backgroundColor: 'black', 
    right:0,
    padding: responsiveWidth(2), // Adjusted for responsive padding
    borderRadius: 0, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%', 
    maxHeight: responsiveHeight(60), // Adjusted for responsive max height
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e91e63',
    paddingVertical: responsiveHeight(1.3),
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: 'white',
    flex: 7, 
    marginLeft: responsiveWidth(2),
  },
  dropdownIcon: {
    flex: 2,
    paddingLeft: responsiveWidth(4),
    paddingRight: responsiveWidth(4),
  },
  ellipsisIconContainer: {
    paddingLeft: responsiveWidth(13),
    paddingVertical: responsiveHeight(0.5),
    flex: 1, 
  },
  overlay: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 10, 
  },
  optionsContainer: {
    position: 'absolute',
    top: responsiveHeight(6.1),
    right: 0, 
    width: '100%',
    borderColor: '#5B595A',
    backgroundColor: '#393838',
    borderWidth: 1,
    zIndex: 15,
  },
  dropdownContainer: {
    position:'relative',
    backgroundColor: 'tomato',
  },
  flatListStyle: {
    flexGrow: 0, 
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(0.5),
    zIndex: 12,
  },
  optionText: {
    fontSize: responsiveFontSize(2.2),
    color: 'white',
    marginBottom: responsiveHeight(1),
    zIndex: 20,
  },
  selectedOptionText: {
    fontWeight: 'bold',
  },
  checkIcon: {
    marginLeft: responsiveWidth(2),
  },
  ellipsisOptionsContainer: {
    position: 'absolute',
    top: responsiveHeight(0.6), 
    left: screenWidth * 0.4, // Adjusted for responsive left position
    backgroundColor: '#393838',
    borderWidth: 1,
    zIndex: 20,
    borderColor: '#393838',
    padding: responsiveWidth(2), 
  },
  ellipsisOptionText: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    marginBottom: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(1),
  },
});

export default styles;
