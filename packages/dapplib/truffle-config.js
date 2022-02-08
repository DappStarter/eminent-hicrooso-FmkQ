require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth payment cluster include kiwi system thank'; 
let testAccounts = [
"0x34ed2f5706b453a99ce11411f676453154e85a18571dc61859cfe7f05288d4a8",
"0x07061b607f6c6f86bd1fcec4d038286c30021f94cd2282319274e9d62cb11b77",
"0xccd7e9d1a87dc47a4a07173da574cf61c6374ae1e8818b2794ec063517e42446",
"0xda3fd09ed4603805dea351bee9d2d1fa30a42217307d900f23464911d6083b8d",
"0x6a9efad46a6f745492e1d1754fe8f0bbf529350d6aa516340c60bed5e7cf795c",
"0x518621c47cf84340d97cd857f8e477d7786161af29872da1906975dae03c7157",
"0x389e340322530f6e2b94ea494930350d8eaa4d4db50b80abbfae71bfd235d66f",
"0x6aa9d2ce8ae52bd7d7f90a547efc73af573738d9537d6c31d32a4c48bbf0ddb8",
"0x29f6e9a528f110d929a0a23d62426bf6bcc9370073c6ac04fc66ff7b872238a0",
"0xac41fc31b3124d4d4d02aed1a776584d1291cf6ad603ae6cf872ef516714211c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

