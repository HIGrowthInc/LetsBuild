var express = require('express');
var router = express.Router();
var User = require('../models/User')
var bcrypt = require('bcrypt');
var moment = require('moment');
var bodyParser = require('body-parser')
const contractAddress = require('../web3/JJT/contractAddress/contractAddress')
const contractABI = require('../web3/JJT/contractABI/contractABI.json')
var Membership = require('../models/Membership')
const Web3 = require('web3');
const Transaction = require('../models/Transaction');
const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')





router.get('/', (req, res) => {
    res.send("Register Here")
});

//Body-Parser
var jsonParser = bodyParser.json()

router.post('/update', async (req, res) => {
	//Hash Password 
	
		
	try {

		const { userId, membershipName,paymentMethod } = req.body;
const contractInstance = new web3.eth.Contract(
	contractABI,contractAddress
	)
	
    const getMember = await Membership.findOne({name:membershipName});

	const getUserAddress = await User.findById({_id:userId})


	const AdminNonce = await web3.eth.getTransactionCount(getUserAddress.publicKey, 'pending')

	const AdminSignTx = await web3.eth.accounts.signTransaction(
		{
		  from: toAddress,
		  to: fromAddress,
		  gas: await contractInstance.methods.transfer(getUserAddress.publicKey,getMember.bids)
			.estimateGas({
				//admin address
			  from: adminAddress,
			}),
		  nonce: AdminNonce,
		  data:await contractInstance.methods.transfer(getUserAddress.publicKey,getMember.bids).encodeABI()
		},
		//adminprivatekey
		adminPrivateKey,
	  )
	  await web3.eth.sendSignedTransaction(
		AdminSignTx.rawTransaction,
		async function (error, hash) {
		  if (!error) {

			const updateTransaction = await Transaction.findOneAndUpdate({number:paymentMethod?.id},{
				$set:{
					tokenTransactionHash:hash
				}
			},{new:true})

			

			const updatedUser = await User.findByIdAndUpdate(userId,{
				$set:{
					membership:getMember._id,
					dop: moment().format('YYYY-MM-DD'),
					isActive:true,
                    number:getMember?.bids,
					
				}
			},{new:true})
		
		
		
			res.status(200).json(updatedUser)

		  }})



	} catch (error) {
		console.log(error);
	}

});



module.exports = router;
