const xrpl = require("xrpl")

// In browsers, use a <script> tag. In Node.js, uncomment the following line:
// const xrpl = require('xrpl')

// Wrap code in an async function so we can use await
async function main() {

    // Define the network client
    const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233")
    await client.connect()

    const fund_result = await client.fundWallet()
    const newamount = fund_result.balance * 2
    const test_wallet = fund_result.wallet
    console.log(newamount)

    // Disconnect when done (If you omit this, Node.js won't end the process)
    client.disconnect()
}

main();