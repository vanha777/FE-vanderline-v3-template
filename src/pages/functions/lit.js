import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { LitNetwork } from "@lit-protocol/constants";

class Lit {
    litNodeClient;
    chain;

    constructor(chain) {
        this.chain = chain;
    }

    async connect() {
        this.litNodeClient = new LitJsSdk.LitNodeClient({
            litNetwork: LitNetwork.Cayenne,
        });
        await this.litNodeClient.connect();
    }

    async encrypt(message) {
        // Encrypt the message
        const { ciphertext, dataToEncryptHash } = await LitJsSdk.encryptString(
            {
                accessControlConditions,
                dataToEncrypt: message,
            },
            this.litNodeClient,
        );

        // Return the ciphertext and dataToEncryptHash
        return {
            ciphertext,
            dataToEncryptHash,
        };
    }

}

const chain = "ethereum";

let myLit = new Lit(chain);
await myLit.connect();

const accessControlConditions = [
    {
        contractAddress: "",
        standardContractType: "",
        chain: "ethereum",
        method: "eth_getBalance",
        parameters: [":userAddress", "latest"],
        returnValueTest: {
            comparator: ">=",
            value: "1000000000000", // 0.000001 ETH
        },
    },
];

// to disconnect 
// await this.litNodeClient.disconnect();
// LitJsSdk.disconnectWeb3();
export default Lit;