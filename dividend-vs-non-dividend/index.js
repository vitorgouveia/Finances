let dividend_investor_wallet = 0
let non_dividend_investor_wallet = 0

const percentage = number => number / 100

const AVERAGE_STOCK_DIVIDEND_YIELD = percentage(4)
const AVERAGE_STOCK_PERFORMANCE = percentage(9) // in percentage
const MONTHLY_INVESTMENT = 100
const SIMULATION_TIME = 40 // in years

for(let i = 1; i <= SIMULATION_TIME * 12; i++) {
    dividend_investor_wallet += MONTHLY_INVESTMENT 
    non_dividend_investor_wallet += MONTHLY_INVESTMENT

    dividend_investor_wallet += dividend_investor_wallet * (AVERAGE_STOCK_DIVIDEND_YIELD / 12)
    
    dividend_investor_wallet += dividend_investor_wallet * (AVERAGE_STOCK_PERFORMANCE / 12)
    non_dividend_investor_wallet += non_dividend_investor_wallet * (AVERAGE_STOCK_PERFORMANCE / 12)
}

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd"
})

console.log(`SIMULATION RAN FOR ${SIMULATION_TIME} years`)
console.log(`Dividend investor ${formatter.format(dividend_investor_wallet)}`)
console.log(`Normal investor ${formatter.format(non_dividend_investor_wallet)}`)
