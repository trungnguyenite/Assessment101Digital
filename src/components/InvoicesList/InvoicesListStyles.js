import {
    StyleSheet,
	Dimensions
} from 'react-native';


var scrW = Math.round(Dimensions.get('window').width)
var scrH = Math.round(Dimensions.get('window').height)


module.exports = StyleSheet.create({
	
	container: {
		backgroundColor: "rgba(249,249,249,1)",
		flex: 1
	},


	SectionStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderWidth: 0.5,
		borderColor: '#000',
		//height: 40,
		borderRadius: 5,
		margin: 10,
	},
	ImageStyle: {
		padding: 10,
		margin: 5,
		height: 25,
		width: 25,
		resizeMode: 'stretch',
		alignItems: 'center',
	},
	search: {
		//height: 50,
		flex: 1, textAlign: 'right', fontStyle: 'italic',
		//borderWidth: 0,
		//borderRadius: 9,

		//shadowColor: "rgba(0,0,0,0.1215686274509804)",
		//shadowOffset: {
		//  height: 3,
		//  width: 3
		//},
		//shadowRadius: 4,
		//shadowOpacity: 1,

		//backgroundColor: "rgba(248,248,248,1)",
		//flexDirection: "row",
		//marginLeft: 15,
		//marginRight: 15
	},


	headerTabs: {
		height: 48,
		backgroundColor: "rgba(255,255,255,1)",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		//marginTop: 6
	},
	homeTab: {
		width: 80,
		height: 48,
		borderColor: 'rgb(10,178,168)',
		borderWidth: 0,
		borderBottomWidth: 7,
		borderBottomLeftRadius: 5,
		borderBottomRightRadius: 5,
		//justifyContent: "center"
	},
	homeText: {
		color: "rgba(112,112,112,1)",
		fontSize: 18,
		fontFamily: "roboto-500",
		fontWeight: "bold",
		alignSelf: "center",
		bottom: -12
	},
	button: {
		marginLeft: 20,//width: 100,
		alignSelf: "stretch",
		justifyContent: "center", //	backgroundColor:'cyan'
	},
	popularText: {
		color: "rgba(112,112,112,1)",
		fontSize: 18,
		fontFamily: "roboto-300",
		//fontWeight: "bold",
		//alignSelf: "center"
	},


	fb0Ea2036Ccd45618B0CFe70Ce660Fa5: {
		position: "absolute",
		height: 21,
		top: 0,
		left: 0,
		right: 2,
		backgroundColor: "transparent",
		borderColor: "transparent"
	},
	path382: {
		position: "absolute",
		height: 10,
		width: 9,
		right: 0,
		bottom: 0,
		backgroundColor: "transparent",
		borderColor: "transparent"
	},
	fb0Ea2036Ccd45618B0CFe70Ce660Fa5Stack: {
		height: 24,
		marginRight: 1
	},
	group221: {
		height: 25,
		width: 22,
		marginRight: 10,
		marginTop: 10
	},
	searchTicketInformationFiller: {
		flex: 1,
		flexDirection: "row"
	},


	TicketItem: {
		//marginTop: 20,
		marginLeft: '2%',
		marginRight: '2%'
	},
	Menu2: {
		marginTop: 50,
	},
	cupertinoFooter2: {
		height: 49,
		width: scrW
	},
	postSection_contentContainerStyle: {
		height: 1000,
		justifyContent: "flex-start",
		backgroundColor: "black"
	},


	container2: {
		width: scrW,//163,
		height: 30,//18,
		marginRight: 10
	},
	sortedByLastActivity: {
		/*backgroundColor: "transparent",
		color: "rgba(112,112,112,1)",
		fontSize: 15,
		fontFamily: "roboto-300",
		marginRight: '11%'*/


		//width: '10%',//339,
		height: 42,

		color: "#1da1f2",
		borderColor: "rgb(10,178,168)",
		borderWidth: 0,
		borderBottomWidth: 2,
		fontSize: 18,
		lineHeight: 20,

		//marginTop: 320,
		//marginLeft: '11%',
		marginRight: '11%',
		//flexDirection: 'row'
	},
	icKeyboardArrowDown24Px: {
		height: 7,
		width: 11,
		backgroundColor: "transparent",
		borderColor: "transparent",
		alignSelf: "flex-end",
		//marginTop: -10
	},


	container2: {
		flexDirection: 'row',
		width: scrW,
		height: 63,
		backgroundColor: "rgba(10,178,168,1)",
		//marginTop: 50
		alignItems: 'center'
	},
	title: {
		backgroundColor: "transparent",
		color: "rgba(255,255,255,1)",
		fontSize: 20,
		fontFamily: "roboto-300",
		marginLeft: 13
	},
	textInput2: {
		width: '70%',//339,
		height: 42,

		color: 'white',
		borderColor: "white",
		borderWidth: 0,
		borderBottomWidth: 2,
		fontSize: 18,
		lineHeight: 20,

		//marginTop: 40,
		marginLeft: '5%',
		//marginRight: '90%',
		//flexDirection: 'row'
	},

	group9392Row: {
		height: 30,
		flexDirection: "row",
		marginTop: 10,
		marginLeft: 13,
		marginRight: 9,
	},
	group9392: {
		height: 30,
		width: 150//127
	},
	rectangle2003: {
		height: 30,
		width: 150,//127,
		borderWidth: 0.2000000029802322,
		borderColor: "rgba(112,112,112,1)",
		borderRadius: 18,
		shadowColor: "rgba(0,0,0,0.0784313725490196)",
		shadowOffset: {
			height: 0,
			width: 0
		},
		shadowRadius: 13,
		shadowOpacity: 1,
		backgroundColor: "rgba(255,255,255,1)",
		flexDirection: "row"
	},
	allTicketsRow: {
		height: 18,
		flexDirection: "row",
		flex: 1,
		marginRight: 18,
		marginLeft: 13,
		marginTop: 4//7
	},
	allTickets: {
		backgroundColor: "transparent",
		color: "rgba(112,112,112,1)",
		fontSize: 15,
		fontFamily: "roboto-300"
	},
	style10: {
		backgroundColor: "transparent",
		color: "rgba(112,112,112,1)",
		fontSize: 15,
		fontFamily: "roboto-500",
		marginLeft: 7
	},
	group9396: {
		height: 18,
		width: 163,
		flexDirection: "row",
		marginLeft: 48,
		marginTop: 4//7
	},
	sortedByLastActivity: {
		backgroundColor: "transparent",
		color: "rgba(112,112,112,1)",
		fontSize: 15,
		fontFamily: "roboto-300"
	},
	sortedByLastActivityFiller: {
		flex: 1,
		flexDirection: "row"
	},
	icKeyboardArrowDown24Px: {
		height: 7,
		width: 11,
		backgroundColor: "transparent",
		borderColor: "transparent",
		marginTop: 5
	},
	

	sortMode: { 
		position: 'absolute', 
		backgroundColor: 'rgba(0,0,0,.2)', 
		width: scrW, 
		height: scrH, 
		marginLeft: 0 
	},
	filterMode: { 
		position: 'absolute', 
		backgroundColor: 'rgba(0,0,0,.2)', 
		width: scrW, 
		height: scrH, 
		marginLeft: 0 
	},
	btnNewInvoice: { 
		position: 'absolute', 
		right: 20, 
		bottom: 30 
	},
	btnSort: { 
		marginLeft:30, 
		marginTop: 10, 
		width:30, 
		height:30 
	},
	btnFilter: { 
		marginLeft:30, 
		marginTop: 10 
	},
	txtSearch: { 
		marginLeft:5, 
		width:200, 
		height:20, 
		padding:0, 
		fontSize:16, 
		color:'grey'
	},
	searchBox: {
		flexDirection:'row', 
		marginLeft:10, 
		marginTop:10, 
		alignSelf:'flex-start', 
		padding:5,
		alignItems:'center', 
		borderWidth:1, 
		borderColor:'#0AB2A8', 
		borderRadius:15
	},
	actionBar: {
		flexDirection:'row', 
		alignItems:'center'
	}

});