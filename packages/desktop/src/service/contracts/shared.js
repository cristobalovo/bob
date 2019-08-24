import HDWalletProvider from "truffle-hdwallet-provider";
import { ethers } from 'ethers';
import Web3 from 'web3';
const { utils } = ethers;
require('dotenv').config()

export const DomainDAO = require('../../../build/contracts/DomainDAO');
export const AdvertisingDAO = require('../../../build/contracts/AdvertisingDAO');
export const DomainRegistry = require('../../../build/contracts/DomainRegistry');
export const Escrow = require('../../../build/contracts/Escrow');
export const PaymentSplitter = require('../../../build/contracts/PaymentSplitter');
export const Secondary = require('../../../build/contracts/Secondary');

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