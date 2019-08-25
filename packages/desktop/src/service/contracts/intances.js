import Web3 from 'web3';
import { DomainDAO, DomainRegistry, AdvertisingDAO } from '../../shared/helpers/contracts';
const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/82c35d2e074c4021a54f6fd4c0bde238'));

export const getDomainDAOInstance = address => {
  const domainDAOInstance = new web3.eth.Contract(DomainDAO.abi, address);
  return domainDAOInstance;
};