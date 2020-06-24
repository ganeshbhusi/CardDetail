import {StyleSheet} from 'react-native';

const CommonStyles = StyleSheet.create({
  ActionButton: {
    backgroundColor: 'green',
    width: 100,
    display: 'flex',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
    // minWidth: 100,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonColor: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardStyle: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    margin: 7,
    shadowColor: 'silver',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
  dataViewStyle: {flexDirection: 'row', alignItems: 'center'},
  titleText: {
    fontSize: 18,
  },
  detailsText: {
    fontSize: 16,
  },
  cardDetailsContainer: {
    marginLeft: 10,
  },
  singlePageDataContainer: {
    margin: 6,
    flex: 1,
    backgroundColor: '#fff',
  },
  innerCardDetailsView: {
    marginTop: 15,
  },
});

export default CommonStyles;
