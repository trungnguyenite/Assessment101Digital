import {
    StyleSheet,
	Dimensions
} from 'react-native';

var scrW = Math.round(Dimensions.get('window').width)
var scrH = Math.round(Dimensions.get('window').height)

module.exports = StyleSheet.create({
	
	newInvoice: {
		position: 'absolute',
		alignSelf: 'center',
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
	text: {
		marginTop: 10,
		backgroundColor: "transparent",
		color: "rgba(112,112,112,1)",
		fontSize: 16,
		fontFamily: "roboto-700",
		fontWeight: '700'
	},
	text2: {
		marginTop: 10,
		backgroundColor: "transparent",
		color: "rgba(112,112,112,1)",
		fontSize: 16,
		fontFamily: "roboto-700",
		fontWeight: '500'
	},
	text3: {
		marginTop: 10,
		backgroundColor: "transparent",
		color: "#00C4F5",
		fontSize: 16,
		fontFamily: "roboto-700",
		fontWeight: '500'
	},
	button: {
		color: "white",
		fontSize: 16,
		fontFamily: "roboto-700"
	},

});