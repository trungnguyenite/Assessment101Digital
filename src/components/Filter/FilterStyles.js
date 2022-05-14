import {
    StyleSheet,
	Dimensions
} from 'react-native';

var scrW = Math.round(Dimensions.get('window').width)

module.exports = StyleSheet.create({
	
	filter: {
		position: 'absolute',
		alignSelf: 'center',
		alignItems: 'center',
		top: 50,
		width: scrW - 20,
		padding: 10,
		borderRadius: 5,
		borderRadius: 8,
		shadowColor: "rgba(0, 0, 0, 1)",
		shadowOffset: {
		  width: 0,
		  height: 3
		},
		shadowOpacity: 0.1,
		elevation: 3,
		backgroundColor: 'white'
	  },
	  status: {
		marginLeft: 10,
		backgroundColor: "transparent",
		color: "rgba(112,112,112,1)",
		fontSize: 16,
		fontFamily: "roboto-700",
		fontWeight: '700'
	  },
	statusValue: {
		marginLeft: 10,
		backgroundColor: "transparent",
		color: "rgba(112,112,112,1)",
		fontSize: 16,
		fontFamily: "roboto-700",
	},
	button: {
		color: "white",
		fontSize: 16,
		fontFamily: "roboto-700"
	},
	btnApply: {
		width:70, 
		height:30, 
		borderRadius:10, 
		backgroundColor:'#0AB2A8', 
		justifyContent:'center', 
		alignItems:'center'
	},
	btnCancel: {
		marginLeft:20, 
		width:70,
		height:30, 
		borderRadius:10, 
		backgroundColor:'#0AB2A8', 
		justifyContent:'center', 
		alignItems:'center'
	}
});