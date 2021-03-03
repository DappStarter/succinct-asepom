require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remain common grace lock swap giggle'; 
let testAccounts = [
"0x615bc212b5290f0d8996536bbe86f1b43f92a76704fbc9f09e183af51609a0f6",
"0x42f705e2b70f0d1fc47cb4518cc4274132a03f45e5731a3e3510c2559c8a0340",
"0x1c913beada8ee8f7aea97dc0d991fc8bfd3a9df683e66b6bce2ca5d52aff1800",
"0xc2f4c0f1e19ed60630eff59b5ec9cc73db5770bab48592b06c6263ad7cff7b68",
"0x6ad0a821c3908a8647d4bb211cfe548d14e344039c5b5a523b3f213494d7abf1",
"0xbb68c6b14ef33e76899c83137e982787e72f872fc56dd8d07c50f0f066fd6654",
"0x485b71755095e9add250a6b678ce89cb244e0e1ed1f2e57f2d2ac450d7174577",
"0x847318278dad8d2365d136d4df312fb9fd87e1514115f25fe09a895e249db9d1",
"0x513f04c72a1b39b57629218f8d170f7ee38e17142cfea1831d2b2fc30164c86e",
"0x0c1a9c7b07ed82c8430b94a81802593b86f1eff18a66d2d0e5b3177162f1fa36"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
