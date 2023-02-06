const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd"
})

const percent = number => number / 100

const MONTHLY_CONTRIBUTION = 1000;
const STOCK_MARKET_PERFORMANCE = percent(9)
const SIMULATION_TIME = 16 // years
const MONTHS = SIMULATION_TIME * 12;
const DIVIDEND_YIELD = percent(6);

const MONTHLY_STOCK_MARKET_PERFORMANCE = (() => {
    return Math.pow(STOCK_MARKET_PERFORMANCE + 1, 1 / 12) - 1
})();
const MONTHLY_INTEREST_RATE = (() => {
    return Math.pow(DIVIDEND_YIELD + 1, 1 / 12) - 1
})();

let wallet = 0
let totalInvested = 0
let dividends = 0
let inflexion_point = 0
let yearly_dividends = 0
let stock_market_gain = 0

for (var month = 1; month <= MONTHS; month++) {
    const performance = wallet * MONTHLY_STOCK_MARKET_PERFORMANCE
    stock_market_gain += performance
    wallet += performance

    const dividend = wallet * MONTHLY_INTEREST_RATE;
    dividends += dividend
    yearly_dividends += dividend

    wallet = wallet + dividend
    wallet += MONTHLY_CONTRIBUTION

    totalInvested += MONTHLY_CONTRIBUTION

    const dividend_over_invested = (dividends / totalInvested) * 100

    if(dividend_over_invested >= 100 && !inflexion_point) {
        inflexion_point = true
        console.log("Inflexion point hit")
    }

    if(month % 12 === 0) {
        console.log(`YEAR ${month / 12}`)
        console.log("Montly dividends     \t", formatter.format(yearly_dividends / 12))
        console.log("Yearly dividends     \t", formatter.format(yearly_dividends))
        console.log("Dividends Value      \t", formatter.format(dividends))
        console.log(`Dividends Percentage \t ${dividend_over_invested.toFixed(2)}%`)
        console.log("Stock market gain    \t", formatter.format(stock_market_gain))
        console.log("Gross Investment     \t", formatter.format(totalInvested))
        console.log("Total Invested       \t", formatter.format(wallet))
        console.log("================================================")

        yearly_dividends = 0
    }
}