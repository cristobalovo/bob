import HDWalletProvider from "truffle-hdwallet-provider";
import { ethers } from 'ethers';
import Web3 from 'web3';
const { utils } = ethers;
require('dotenv').config();
import {getDomainSpace} from '../utils-3box';
import { getDomainDAOInstance } from "./intances";
var Tx = require('ethereumjs-tx');

export const DomainDAO = require('../../../build/contracts/DomainDAO');
export const AdvertisingDAO = require('../../../build/contracts/AdvertisingDAO');
export const DomainRegistry = require('../../../build/contracts/DomainRegistry');
export const Escrow = require('../../../build/contracts/Escrow');
export const PaymentSplitter = require('../../../build/contracts/PaymentSplitter');
export const Secondary = require('../../../build/contracts/Secondary');

const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/82c35d2e074c4021a54f6fd4c0bde238"));

export const contracts = {
  domainRegistry: DomainRegistry,
  domainDAO: DomainDAO,
  advertisingDAO: AdvertisingDAO,
  escrow: Escrow,
  paymentSplitter: PaymentSplitter,
  secondary: Secondary
};

export const getWalletProvider = () => {	
	var provider = new HDWalletProvider(`${process.env.REACT_APP_PRIVATE_KEY}`, "https://goerli.infura.io/v3/82c35d2e074c4021a54f6fd4c0bde238");
	console.log('[getWalletProvider]', { provider});
	return provider;
}

export const getWallet = (provider) => {
	return new ethers.Wallet(`${process.env.REACT_APP_PRIVATE_KEY}`, provider);
}

export const getContractInstance = (abi, address, pKey) => {
	const web3Provider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/82c35d2e074c4021a54f6fd4c0bde238')
  let ethersProvider = new ethers.providers.Web3Provider(web3Provider);
	let etherWallet = new ethers.Wallet(pKey, ethersProvider);
  let contract = new ethers.Contract(address, abi, ethersProvider);	
	console.log('====================================');
	console.log('[getContractInstance]', { web3Provider, ethersProvider, etherWallet, abi, address, pKey, contract});
	console.log('====================================');
	return contract;
}

export const strToBytes32 = (url) => {
	return ethers.utils.id(url)
}

export const isUrlInRegistry = async (registryInstance, domainString) => {
  const hexValue = strToBytes32(domainString)
	const isReigstered = await registryInstance.functions.domainExists(hexValue);
	console.log('isUrlInRegistry', { isReigstered });
  return isReigstered;
}

const setupWallet = async(wallet) => {
  const web3Provider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/82c35d2e074c4021a54f6fd4c0bde238')
  let ethersProvider = new ethers.providers.Web3Provider(web3Provider);
  let pk = wallet.privateKey;
  let ww = new ethers.Wallet(pk, ethersProvider);
  return(ww)
}

/*
	const web3Provider = new Web3.providers.HttpProvider('https://goerli.infura.io/v3/82c35d2e074c4021a54f6fd4c0bde238')
  let ethersProvider = new ethers.providers.Web3Provider(web3Provider);
  let pk = wallet.privateKey;
  let ww = new ethers.Wallet(pk, ethersProvider);
  const abi = DomainDAO.abi;
  let contractAddress = "0xAd536a7700A7f51b09A1156886fec96C2a0008C3";
  let contract = new ethers.Contract(contractAddress, abi, ethersProvider);
*/
export const deployDomainDAO = async (_wallet, url, domainRegistryAddress ) => {
	console.log('====================================');
	console.log({ url, domainRegistryAddress});
	console.log('====================================');
	const wallet = await setupWallet(_wallet);
	console.log("deploying DAO")
	try {
		let factory = new ethers.ContractFactory(DomainDAO.abi, DomainDAO.bytecode, wallet);
		let contract = await factory.deploy('0x132efA3675cd66aA2780e01C095e2337188b0F6b', ethers.utils.id(url), {gasLimit: 8000000, value: 1});
		const response = await contract.deployed();
		console.log(`domain DAO deployed at ${response.address}`)
		const domainSpace = await getDomainSpace(url);
		await domainSpace.public.set('domainDAOAddress', response.address);
		await investDomainDAO(_wallet, url, domainRegistryAddress, 1);
		return response.address;
	} catch (e) {
		console.log({ e })
	}
}

export const investDomainDAO = async (_wallet, url, domainRegistryAddress, amount) => {
	const domainSpace = await getDomainSpace(url);
	let domainDAOAddress = await domainSpace.public.get('domainDAOAddress');
	let domainDAOInstance = await getDomainDAOInstance(domainDAOAddress);
	console.log({_wallet});
	const txData = domainDAOInstance.methods
	.invest()
	.encodeABI();
	const nonce = await web3.eth.getTransactionCount(_wallet.address) + 1;
	// const gasValue = await domainDAOInstance.methods.invest().estimateGas();
	// console.log({gasValue})
	const rawTx = {
		nonce,
		data: txData,
		value: amount,
		gasPrice: '0x09184e72a000',
		gasLimit: '0x2710',
		gas: 2800000,
		to: domainDAOAddress
	}

	var tx = new Tx(rawTx);
	console.log(_wallet.privateKey)
	var privateKey = new Buffer(_wallet.privateKey.slice(2), 'hex')
	console.log({privateKey})
	tx.sign(privateKey);

	var serializedTx = tx.serialize();

	// console.log(serializedTx.toString('hex'));
	// 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

	let receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
	// console.log({txObj})
	// console.log({_wallet})
	// const rawTransaction = await web3.eth.signTransaction(tx, _wallet.privateKey);
  // const receipt = await web3.eth.sendSignedTransaction(rawTransaction);
	// console.log({receipt})
}

// const disburseFunds = async (FundsData, fromAccountAddress, token) => {
//   const web3 = Web3.connection();
//   const FundsObject = FundsData;

//   const instances = await getAccountInstance(fromAccountAddress);
//   const tx = instances.methods
//     .disburseFunds(FundsObject.amount, FundsObject.toAccountAddress, FundsObject.octTokenAddress)
//     .encodeABI();
// 	const rawTransaction = await web3.eth.signTransaction(tx, _wallet.privateKey);
//   const receipt = await web3.eth.sendSignedTransaction(rawTransaction);
// 	console.log(receipt)
//   if (receipt === null || receipt === undefined) {
//     return new Error('Failed to create new token in blockchain.');
//   }

//   FundsObject.txnHash = receipt.transactionHash;

//   return FundsObject.txnHash;
// };