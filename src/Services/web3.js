import Web3 from 'web3';

export default class Web3Service {
  get web3IsPresent() {
    return !!window.web3;
  }

  constructor() {
    if (this.web3IsPresent) {
      this.web3 = new Web3(window.web3.currentProvider);
    }
  }

  getAccount() {
    return this.web3.eth
      .getAccounts((error, accounts) => {
        const account = accounts[1];
        return error ? Promise.reject(error) : Promise.resolve(account);
      })
      .then((accounts) => this.validateAccount(accounts));
  }

  validateAccount(accounts) {
    const account = accounts[0];
    return account
      ? Promise.resolve(account)
      : Promise.reject('Locked MM');
  }

  isAddress(address) {
    return this.web3.utils.isAddress(address);
  }

  get network() {
    // TODO: Get network from web3
    return 'rinkeby';
  }
}
