import Web3Service from './web3';
import hackathonFacAbi from '../contracts/hackFactory.json';


export const web3Service = new Web3Service();

export const HackFactory = new web3Service.web3.eth.Contract(hackathonFacAbi, '0xac18daccae566822eab333c5c753b7edc523903c')