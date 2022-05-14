import React, { Component } from "react";

import {
	View, Text, Dimensions,
	TouchableOpacity, ActivityIndicator
} from "react-native";

import styles from './NewInvoiceStyles';
import RESTClient from '../RESTClient';

import moment from 'moment';


var scrW = Math.round(Dimensions.get('window').width)
var scrH = Math.round(Dimensions.get('window').height)


export default class NewInvoice extends React.Component {
	
	constructor(props) {
		
		super(props)
		
		this.state = {

		}
	}

	randomNumber = Math.floor(Math.random() * (99999999 - 10000000) + 10000000)
	customerName = 'Trung Nguyen ' + this.randomNumber
	invoiceReference = '#' + this.randomNumber
	invoiceNumber = 'INV' + this.randomNumber
	invoiceDate = moment().format("YYYY-MM-DD")
	description = 'Motor invoice ' + this.randomNumber
	rate1 = Math.floor(Math.random() * (999 - 100) + 100)
	rate2 = Math.floor(Math.random() * (999 - 100) + 100)
	quantity1 = Math.floor(Math.random() * (99 - 10) + 10)
	quantity2 = Math.floor(Math.random() * (99 - 10) + 10)
	amount = this.rate1*this.quantity1 + this.rate2*this.quantity2
	tax = Math.floor(Math.random() * (99 - 10) + 10)
	discount = Math.floor(Math.random() * (99 - 10) + 10)
	total = this.amount + this.tax - this.discount

	body = `{
		"listOfInvoices": [
			{
				"bankAccount": {
					"bankId": "",
					"sortCode": "09-01-01",
					"accountNumber": "12345678",
					"accountName": "Trung Nguyen"
				},
				"customer": {
					"firstName": "Nguyen ${this.randomNumber}",
					"lastName": "Trung",
					"contact": {
						"email": "nguyendung2@101digital.io",
						"mobileNumber": "+6597594971"
					},
					"addresses": [
						{
							"premise": "CT11",
							"countryCode": "VN",
							"postcode": "1000",
							"county": "hoangmai",
							"city": "hanoi"
						}
					]
				},
				"documents": [
					{
						"documentId": "96ea7d60-89ed-4c3b-811c-d2c61f5feab2",
						"documentName": "Bill",
						"documentUrl": "http://url.com/#123"
					}
				],
				"invoiceReference": "${this.invoiceReference}",
				"invoiceNumber": "${this.invoiceNumber}",
				"currency": "GBP",
				"invoiceDate": "${this.invoiceDate}",
				"dueDate": "2021-06-04",
				"description": "${this.description}",
				"customFields": [
					{
						"key": "invoiceCustomField",
						"value": "value"
					}
				],
				"extensions": [
					{
						"addDeduct": "ADD",
						"value": ${this.tax},
						"type": "PERCENTAGE",
						"name": "tax"
					},
					{
						"addDeduct": "DEDUCT",
						"type": "FIXED_VALUE",
						"value": ${this.discount},
						"name": "discount"
					}
				],
				"items": [
					{
						"itemReference": "itemRef",
						"description": "Honda Winner",
						"quantity": ${this.quantity1},
						"rate": ${this.rate1},
						"itemName": "Honda",
						"itemUOM": "KG",
						"customFields": [
							{
								"key": "taxiationAndDiscounts_Name",
								"value": "VAT"
							}
						],
						"extensions": [
							{
								"addDeduct": "ADD",
								"value": 10,
								"type": "FIXED_VALUE",
								"name": "tax"
							},
							{
								"addDeduct": "DEDUCT",
								"value": 10,
								"type": "PERCENTAGE",
								"name": "tax"
							}
						]
					},
					{
						"itemReference": "itemRef",
						"description": "Raider",
						"quantity": ${this.quantity2},
						"rate": ${this.rate2},
						"itemName": "Suzuki",
						"itemUOM": "KG",
						"customFields": [
							{
								"key": "taxiationAndDiscounts_Name",
								"value": "VAT"
							}
						],
						"extensions": [
							{
								"addDeduct": "ADD",
								"value": 10,
								"type": "FIXED_VALUE",
								"name": "tax"
							},
							{
								"addDeduct": "DEDUCT",
								"value": 10,
								"type": "PERCENTAGE",
								"name": "tax"
							}
						]
					}
				]
			}
		]
	}`

	async newInvoice() {
		try
		{
			this.setState({ updating: true })

			await RESTClient.newInvoice(this.body)
			
			this.setState({ updating: false })

			this.props.navigation.push('InvoicesList')
		}
		catch (error) {
			
			alert('Insert record fail')
			console.log('Insert record fail: ' + error)

			this.setState({ updating: false })
		}
	}

	render() {

		return (
			
			<View style={styles.newInvoice}>

				<View style={{alignSelf:'center'}}>
					<Text style={styles.text3}>(Random every reload)</Text>
				</View>

				<View style={{flexDirection:'row'}}>
					<Text style={styles.text}>Customer Name: </Text>
					<Text style={styles.text2}>{this.customerName}</Text>
				</View>

				<View style={{flexDirection:'row'}}>
					<Text style={styles.text}>Invoice Reference: </Text>
					<Text style={styles.text2}>{this.invoiceReference}</Text>
				</View>

				<View style={{flexDirection:'row'}}>
					<Text style={styles.text}>Invoice Number: </Text>
					<Text style={styles.text2}>{this.invoiceNumber}</Text>
				</View>

				<View style={{flexDirection:'row'}}>
					<Text style={styles.text}>Invoice Date: </Text>
					<Text style={styles.text2}>{this.invoiceDate}</Text>
				</View>

				<View style={{flexDirection:'row'}}>
					<Text style={styles.text}>Description: </Text>
					<Text style={styles.text2}>{this.description}</Text>
				</View>

				<View style={{flexDirection:'row'}}>
					<View style={{width:100}}>
						<Text style={styles.text}>Item Name</Text>
					</View>
					<View style={{width:120}}>
						<Text style={styles.text}>Desc.</Text>
					</View>
					<View style={{width:50}}>
						<Text style={styles.text}>Rate</Text>
					</View>
					<View style={{width:50}}>
						<Text style={styles.text}>Qu.</Text>
					</View>
				</View>

				<View style={{flexDirection:'row'}}>
					<View style={{width:100}}>
						<Text style={styles.text2}>Honda</Text>
					</View>
					<View style={{width:120}}>
						<Text style={styles.text2}>Honda Winner</Text>
					</View>
					<View style={{width:50}}>
						<Text style={styles.text2}>{this.rate1}</Text>
					</View>
					<View style={{width:50}}>
						<Text style={styles.text2}>{this.quantity1}</Text>
					</View>
				</View>

				<View style={{flexDirection:'row'}}>
					<View style={{width:100}}>
						<Text style={styles.text2}>Suzuki</Text>
					</View>
					<View style={{width:120}}>
						<Text style={styles.text2}>Suzuki Raider</Text>
					</View>
					<View style={{width:50}}>
						<Text style={styles.text2}>{this.rate2}</Text>
					</View>
					<View style={{width:50}}>
						<Text style={styles.text2}>{this.quantity2}</Text>
					</View>
				</View>

				<View style={{flexDirection:'row'}}>
					<View style={{width:220}}/>
					<View style={{width:100, flexDirection:'row'}}>
						<Text style={styles.text}>Amount: </Text>
						<Text style={styles.text2}>{this.amount}</Text>
					</View>
				</View>

				<View style={{flexDirection:'row'}}>
					<View style={{width:220}}/>
					<View style={{width:100, flexDirection:'row'}}>
						<Text style={styles.text}>Tax: </Text>
						<Text style={styles.text2}>{this.tax}</Text>
					</View>
				</View>

				<View style={{flexDirection:'row'}}>
					<View style={{width:220}}/>
					<View style={{width:100, flexDirection:'row'}}>
						<Text style={styles.text}>Disc.: </Text>
						<Text style={styles.text2}>{this.discount}</Text>
					</View>
				</View>

				<View style={{flexDirection:'row'}}>
					<View style={{width:220}}/>
					<View style={{width:100, flexDirection:'row'}}>
						<Text style={styles.text}>Total: </Text>
						<Text style={styles.text}>{this.total}</Text>
					</View>
				</View>

				<View style={{flexDirection:'row', marginTop:20, justifyContent:'center'}}>
					<View style={{alignSelf:'center'}}>
						<TouchableOpacity
							style={{width:70, height:30, borderRadius:10, backgroundColor:'#0AB2A8', justifyContent:'center', alignItems:'center'}}
							onPress={()=>this.props.navigation.goBack(null)}
						>
							<Text style={styles.button}>Back</Text>
						</TouchableOpacity>
					</View>
					{!this.state.updating ? (<>
						<View style={{marginLeft:40}}>
							<TouchableOpacity
								style={{width:70, height:30, borderRadius:10, backgroundColor:'#0AB2A8', justifyContent:'center', alignItems:'center'}}
								onPress={()=>this.newInvoice()}
							>
								<Text style={styles.button}>Create</Text>
							</TouchableOpacity>
						</View>
					</>) : (
						<ActivityIndicator size='large' color='#999999' style={{marginLeft:50}} />
					)}
				</View>

			</View>
		);
	}
}
