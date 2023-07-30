const xrpl = require("xrpl")

// In browsers, use a <script> tag. In Node.js, uncomment the following line:
// const xrpl = require('xrpl')

// Wrap code in an async function so we can use await
async function main() {

    // Define the network client
    const client = new xrpl.Client("wss://s.altnet.rippletest.net:51233")
    await client.connect()

    const fund_result = await client.fundWallet()
    const test_wallet = fund_result.wallet

    // Get info from the ledger about the address we just funded
    const response = await client.request({
        "command": "account_info",
        "account": test_wallet.address,
        "ledger_index": "validated"
    })
    console.log(response)
    console.log(fund_result)

    // Disconnect when done (If you omit this, Node.js won't end the process)
    client.disconnect()
}

main();