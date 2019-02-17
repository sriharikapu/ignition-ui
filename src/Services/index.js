import Web3Service from './web3';
import hackathonAbi from '../contracts/hackathon.json';
import hackathonFacAbi from '../contracts/hackFactory.json';


export const web3Service = new Web3Service();

export const HackContract = new web3Service.web3.eth.Contract(hackathonAbi, '0xF47c326cf9a8D80BFd7Abe3cEC8a56C7302cC957')
export const HackFactory = new web3Service.web3.eth.Contract(hackathonFacAbi, '0xac18daccae566822eab333c5c753b7edc523903c')