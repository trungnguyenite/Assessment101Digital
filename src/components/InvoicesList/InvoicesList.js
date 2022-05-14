import React, { Component } from "react";
import {
	View, Dimensions, FlatList, Image,
	TouchableOpacity, ActivityIndicator, RefreshControl, TextInput
} from "react-native";

import styles from './InvoicesListStyles';
import RESTClient from '../RESTClient';
import { getAccessToken, setAccessToken, getOrgToken, setOrgToken } from '../Config';
import InvoiceItem from "../InvoiceItem/InvoiceItem"
import Filter from '../Filter/Filter';
import Sort from "../Sort/Sort";

import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

var scrW = Math.round(Dimensions.get('window').width)
var scrH = Math.round(Dimensions.get('window').height)

var i = 0, keyPressed, itemKey = 0


export default class InvoicesList extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			headerShown: false
		};
	};

	constructor(props) {

		super(props)

		keyPressed = false

		this.state = {

			data: [],
			dataFilter: [
				{
					key: "Paid",
					checked: true,
					valueTrue: true,
					valueFalse: true
				},
				{
					key: "Overdue",
					checked: true,
					valueTrue: true,
					valueFalse: true
				},
				{
					key: "Due",
					checked: true,
					valueTrue: true,
					valueFalse: true
				}
			],

			loadMore: false,

			mode: '',
			sortType: false,

			reload: false,

			currentPage: 1,
			
			totalPage: 1,
			totalRecord: 0,
			
			searchText:'',

			wait: false,
		}
	}

	async componentDidMount() {

		if(getAccessToken() == ''){
			this.setState({wait: true})
			var token = await RESTClient._getAccessToken()
			setAccessToken(token.access_token)
			token = await RESTClient._getOrgToken()
			setOrgToken(token.data.memberships[0].token)
			this.setState({wait: false})
		}

		await this.load(this.state.currentPage)
	}
	
	async onRefresh(){

		if(this.state.wait)
			return
		
		this.setState({

			data: [],

			loadMore: false,

			mode: '',
			sortType: this.state.sortType,

			//reload: false,

			currentPage: 1,
			totalPage: 1,
			totalRecord: 0,
			searchText: this.state.searchText,

			wait: false,
			waitToLoadDetailView: false,
		
		}, async ()=>{
			
			await this.load(1)
		})
	}

	async load(currentPage) {

		this.setState({wait: true})
		
		if (this.state.totalPage < currentPage) {
			this.setState({wait: false})
			return
		}
		
		try {

			let result = {}, result_data = []

			if(!keyPressed){
			
				result = await RESTClient.getInvoicesList(currentPage, this.state.sortType ? 'ASCENDING' : 'DESCENDING', this.state.searchText)

				result_data = result.data

				this.state.totalPage = Math.floor(result.paging.totalRecords / result.paging.pageSize) + 1

				for (i = 0; i < result_data.length; i++) {
	
					var add = false

					for(var j=0; j<this.state.dataFilter.length; j++)
						if(result_data[i].status[0].key == this.state.dataFilter[j].key){
							if(this.state.dataFilter[j].checked){
								if(result_data[i].status[0].value){
									if(this.state.dataFilter[j].valueTrue)
										add = true
								}
								else{
									if(this.state.dataFilter[j].valueFalse)
										add = true
								}
							}
						}

					if(add)
						this.state.data.push(
						{
							itemKey: itemKey++,
							field1: result_data[i].invoiceNumber,
							field2: result_data[i].createdAt,
							field3: result_data[i].status[0].key + ': ' + result_data[i].status[0].value,
						})
				}

				this.state.wait = false
				this.forceUpdate()
			}
			else{
				keyPressed = false
				await this.onRefresh()
			}
		}
		catch (error) {

			console.log('\n# # # # Exception: InvoicesList / load(): ' + error)
			//this.setState({wait: false})
		
			return error
		}
	}

	async loadMore() {
		this.setState({ loadMore: true })

		await this.load(++this.state.currentPage)

		this.setState({ loadMore: false })
	}

	renderItems = (item, index) => {
		return (
			<InvoiceItem
				field1={item.field1}
				field2={item.field2}
				field3={item.field3}
			/>
		);
	}

	handlerFilterSelectStatus = (i)=>{
		this.state.dataFilter[i].checked = !this.state.dataFilter[i].checked
		this.forceUpdate()
	}

	handlerFilterSelectStatusValue = (i, statusValue)=>{
		if(statusValue)
			this.state.dataFilter[i].valueTrue = !this.state.dataFilter[i].valueTrue
		else
			this.state.dataFilter[i].valueFalse = !this.state.dataFilter[i].valueFalse
		this.forceUpdate()
	}

	handlerFilterApply = ()=>{
		this.setState({filterMode: false})
		this.onRefresh()
	}

	handlerFilterCancel = ()=>{
		this.setState({filterMode: false})
	}

	handlerSortSelect = ()=>{
		this.state.sortType = !this.state.sortType
		this.state.sortMode = false
		this.onRefresh()
	}


	render() {

		return (
			<View style={styles.container}>
				
				{/* Action bar */}
				<View style={styles.actionBar}>
					
					{/* Search box */}
					<View style={styles.searchBox}>
						
						{/* Search icon */}
						<TouchableOpacity onPress={()=> {
							this.onRefresh()
						}}>
							<Image source={require("../../images/kindpng_1433710.png")} style={{width:20, height:20}} />
						</TouchableOpacity>
						
						{/* Search input */}
						<TextInput
							style={styles.txtSearch}
							fontStyle={this.state.searchText == '' ? 'italic' : 'normal'}
							placeholder={'Search'}
							value={this.state.searchText}
							onChangeText={async (text) => {
								keyPressed = true
								this.setState({ searchText: text }, async ()=>
									await this.onRefresh()
								)
							}}
						/>

						{/* Clear text button */}
						{this.state.searchText != '' ? (
						<TouchableOpacity
							style={{marginLeft:5}}
							onPress={()=>{
								this.setState({ searchText: '' }, async ()=>
									await this.onRefresh()
								)
							}}
						>
							<Entypo name='circle-with-cross' size={22} color='#00C4F5'/>
						</TouchableOpacity>
						) : null }
					</View>

					{/* Filter button */}
					<TouchableOpacity
						style={styles.btnFilter}
						onPress={() => this.setState({ filterMode: true }) }
					>
						<SimpleLineIcons name='equalizer' size={22} color='#00C4F5'/>
					</TouchableOpacity>

					{/* Sort button */}
					<TouchableOpacity
						style={styles.btnSort}
						onPress={() => this.setState({ sortMode: true }) }
					>
						<MaterialIcons name='sort' size={22} color='#00C4F5'/>
					</TouchableOpacity>
				</View>


				{/* Invoices list */}
				<View style={{ marginTop: 20 }}>
					<FlatList
						refreshControl={
							<RefreshControl
								refreshing={false}
								tintColor="transparent"
								onRefresh={() => this.onRefresh()}//this.onRefresh.bind(this)}
							/>
						}
						ListFooterComponent={() => <View>
							{!this.state.loadMore ? (
								<View></View>
							) : (
								<ActivityIndicator size='small' color='#999999' style={{ alignSelf: 'center' }} />
							)}
							<View style={{ height: 170 }}/>
						</View>}
						
						data={this.state.data}
						renderItem={({ item, index }) => this.renderItems(item, index)}
						keyExtractor={(item, index) => item.itemKey + ''}
						
						onEndReachedThreshold={.7}
						onEndReached={this.loadMore.bind(this)}
					/>
				</View>


				{/* Button New Invoice */}
				<TouchableOpacity style={styles.btnNewInvoice} onPress={() => this.props.navigation.push('NewInvoice')}>
					<Image source={require("../../images/Group1.png")} />
				</TouchableOpacity>
				
				{/* Filter box */}
				{this.state.filterMode ? (
					<View style={styles.filterMode}>
						<TouchableOpacity style={{ width: scrW, height: scrH }} onPress={() => this.setState({ filterMode: false }) /* this.onRefresh(false) */ } />
						
						<Filter
							data={this.state.dataFilter}
							handlerSelectStatus={this.handlerFilterSelectStatus}
							handlerSelectStatusValue={this.handlerFilterSelectStatusValue}
							handlerApply={this.handlerFilterApply}
							handlerCancel={this.handlerFilterCancel}
						/>
					</View>
				) : null}

				{/* Sort box */}
				{this.state.sortMode ? (
					<View style={styles.sortMode}>
						<TouchableOpacity style={{ witdth: scrW, height: scrH }} onPress={() => this.setState({ sortMode: false }) /* this.onRefresh(false) */ } />
						
						<Sort
							sortType={this.state.sortType}
							handlerSortSelect={this.handlerSortSelect}
						/>
					</View>
				) : null}

				{/* Waiting animation */}
				{this.state.wait ? (
					
					<ActivityIndicator size='large' color='#999999' />
					
				) : null}

			</View>
		);
	}
}
