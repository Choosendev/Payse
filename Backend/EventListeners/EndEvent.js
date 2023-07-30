//Record event for logs and notification purposes

const xrpl = require("xrpl")

function endEvent() {
    client.request({
        "command": "subscribe",
        "streams": ["ledger"]
    })
    client.on("ledgerClosed", async (ledger) => {
        console.log(`Ledger #${ledger.ledger_index} validated with ${ledger.txn_count} transactions!`)
    })
}
endEvent();