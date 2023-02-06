const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "usd"
})
const percent = number => number / 100

const yearly_to_monthly = number => Math.pow(number + 1, 1 / 12) - 1

const MONTHLY_CONTRIBUTION = 100;
const SIMULATION_TIME = 20 // years
const MONTHS = SIMULATION_TIME * 12;
const STOCK_MARKET_PERFORMANCE = percent(20)

const stock = {
    price: 50,
    dividend_yield: percent(5)
}

const MONTHLY_STOCK_MARKET_PERFORMANCE = yearly_to_monthly(STOCK_MARKET_PERFORMANCE)
const MONTHLY_DIVIDEND_YIELD = yearly_to_monthly(stock.dividend_yield)


let stocks = []
let yearly_stocks = []
let wallet = 0
let dividends = 0
let yearly_dividends = 0

for (let month = 1; month <= MONTHS; month++) {    
    const stock_buying_qtd = Math.floor((MONTHLY_CONTRIBUTION) / stock.price)

    for(let i = 0; i < stock_buying_qtd; i++) {
        stocks.push({
            price: stock.price,
        })
        
        yearly_stocks.push({
            price: stock.price,
        })
    }

    stock.price += MONTHLY_STOCK_MARKET_PERFORMANCE * stock.price

    wallet = 0

    const dividend = MONTHLY_DIVIDEND_YIELD * stock.price

    dividends += dividend
    yearly_dividends += dividend
    wallet = stocks.length * dividend

    if(month % 12 === 0) {
        const average_stock_paid_price = yearly_stocks.length === 0 ? 0 :(yearly_stocks
            .map(item => item.price)
            .reduce((acc, curr) => acc + curr, 0)) / yearly_stocks.length
        const yield_on_cost = yearly_dividends / (stocks
            .reduce((acc, curr) => acc + curr.price, 0) / stocks.length) * 100

        console.log(`YEAR ${month / 12}`)
        console.log("Price Paid           \t", formatter.format(average_stock_paid_price))
        console.log("Stock Price          \t", formatter.format(stock.price))
        console.log("Net Worth            \t", formatter.format(stocks.length * stock.price))
        console.log("Stocks QTD           \t", stocks.length)
        console.log("Yearly dividends     \t", formatter.format(yearly_dividends))
        console.log("Dividend Yield       \t", `${stock.dividend_yield * 100}%`)
        console.log(`Yield on cost        \t`, `${yield_on_cost.toFixed(2)}%`)
        console.log("================================================")

        yearly_dividends = 0
        yearly_stocks = []
    }
}
