const percentage = (number) => number / 100

/**
 *
 * @param {{ PE: number; PBV: number; margin: number }} config
 * @returns {(indicators: { EPS: number; BVPS: number }) => number}
 */
const intrinsicValue = (config) => (indicators) => {
  return (
    Math.sqrt(config.PE * config.PBV * indicators.BVPS * indicators.EPS) *
    (1 - config.margin)
  )
}

const DEFAULT_GRAHAM_CONFIG = {
  PE: 15,
  PBV: 1.5,
  margin: percentage(10),
}

const UPDATED_GRAHAM_CONFIG = {
  PE: 20,
  PBV: 1.3,
  margin: percentage(5),
}

const STOCK = { EPS: 2.46, BVPS: 41.15 }
const STOCK_DEFAULT = intrinsicValue(DEFAULT_GRAHAM_CONFIG)(STOCK)
const STOCK_UPDATED = intrinsicValue(UPDATED_GRAHAM_CONFIG)(STOCK)

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "usd",
})

console.log(
  "Stock Price by Graham's standart's",
  formatter.format(STOCK_DEFAULT)
)
console.log("Stock Price by my standart's", formatter.format(STOCK_UPDATED))
