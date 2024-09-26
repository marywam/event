import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const homeStyles = StyleSheet.create({
  containeravatar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:'10%'
  },
  avatar: {
    width: wp('13%'),
    height: wp('13%'),
    borderRadius: wp('20%'),
    borderWidth: 1.5,
    borderColor: 'pink',
    marginTop: hp('2%'),
    marginLeft: wp('6%'),
  },
  name: {
    marginTop: hp('1%'),
    marginLeft: wp('0.5%'),
    fontSize: wp('5%'),
  },
  location: {
    marginTop: hp('2%'),
    marginLeft: wp('15%'),
  },
  home: {
    fontWeight: 'bold',
  },
  iconContainer: {
    marginTop: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: wp('5%'),
    borderWidth: 1,
    borderColor: '#1089B8',
    paddingHorizontal: wp('4%'),
    margin: wp('4%'),
    height: hp('6%'),
  },
  shopText: {
    fontWeight: 'bold',
    fontSize: wp('5%'),
    marginLeft: wp('2%'),
    padding: wp('1%'),
  },
  avatar1: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('20%'),
    borderWidth: 1.5,
    borderColor: 'pink',
    marginLeft: wp('1%'),
  },
  containeravatar1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detail1: {
    marginLeft: wp('1%'),
    marginTop: hp('1%'),
    fontWeight: 'bold',
    fontSize: wp('5%'),
  },
  star: {
    fontSize: wp('4%'),
    marginLeft: wp('1%'),
  },
  image: {
    width: wp('60%'),
    height: hp('10%'),
    resizeMode: 'contain',
    marginTop: hp('3%'),
    marginLeft: wp('0%'),
  },
  water1: {
    flexDirection: 'row',

    paddingHorizontal: wp('1%'),
  },
  containerCard: {
    borderWidth: 1,
    borderColor: '#1089B8',
    width: wp('45%'),
    height: hp('27%'),
    marginLeft: wp('3%'),
    marginTop: hp('2%'),
    borderRadius: wp('3%'),
    
  },
bottleimage:{
  justifyContent: 'center',   // Centering the content vertically
  alignItems: 'center',       // Centering the content horizontally

},
  cash: {
    marginLeft: wp('5%'),
    marginTop: hp('0%'),
    fontWeight: 'bold',
    fontSize: wp('5%'),
  },
  bottle: {
    marginLeft: wp('5%'),
    color: 'grey',
  },
  drop1: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('20%'),
    marginLeft: wp('5%'),
    
    marginTop:wp('1%')
  },
  token1: {
    width: wp('6%'),
    height: wp('6%'),
    borderRadius: wp('20%'),
  },
  menu1: {
    width: wp('12%'),
    height: wp('8%'),
    marginBottom:wp('4%'),
    marginTop:wp('2%'),
    borderRadius: wp('10%'),
  },
  bottombar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    backgroundColor: '#1089B8',
    width: '90%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 32,
 
    marginLeft:"5%",
    marginBottom:"1%",
   
  },
  lowerNavContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 15,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Border color
    borderWidth: 1,
    height: 60,
    borderRadius: 32,
    marginTop: 5,
    borderColor: 'white',
    marginLeft: 15,
    backgroundColor: 'transparent', //

 
    
  },
  shops: {
    marginLeft: wp('1%'),
    marginBottom:wp('4%'),
    marginTop:wp('2%')
  },
  shops1: {
    marginLeft: wp('1%'),
  },
  orders: {
    marginTop: hp('0.1%'),
  },
  cart1: {
    width: wp('13%'),
    height: wp('8%'),
    marginBottom:wp('4%'),
    marginTop:wp('2%'),
    borderRadius: wp('50%'),
  },
  carts: {
    marginTop: hp('0.1%'),
  },
  nameToken: {
    marginTop: hp('1%'),
    marginLeft: wp('3%'),
  },
  token: {
    fontWeight: 'bold',
    marginTop: hp('0.1%'),
  },
  tokenimage: {
    width: wp('12%'),
    height: wp('8%'),
    marginBottom:wp('4%'),
    marginTop:wp('2%'),
    borderRadius: wp('50%'),
    marginBottom:wp('5%')

  },
  tokenimage1: {
    marginTop: hp('0.1%'),
  },



  
    plus: {
      backgroundColor: "white",
      marginTop: hp('0.2%'),
      borderColor: "#1089B8", // Sets the border color
      borderWidth: wp("0.10%"), 
      padding: wp("0.01%"), // Optional: Adds padding inside the border
      borderRadius: wp("10.5%"), // Optional: Adds rounded corners to the border
      alignItems: "center", // Centers the icon within the view
      justifyContent: "center", // Centers the icon within the view
      
    },
  
});