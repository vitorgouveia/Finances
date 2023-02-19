const percent = (number: number) => number / 100

type Filter = {
  consistent: boolean
  map: (item: number) => boolean
}

const valueInvesting =
  <T extends Record<string, Filter>>(config: T) =>
  (data: Record<keyof T, number>) => {
    // @TODO implement consistent with series data

    // prettier-ignore
    return Object
      .entries(data)
      .map(([key, value]) => config[key].map(value))
      .every(value => value === true)
  }

const isWorthBuy = valueInvesting({
  netIncome: {
    consistent: true,
    map: (item) => item > 0,
  },
  "P/E": {
    consistent: false,
    map: (item) => item < 15,
  },
  "DEBT/EBIT": {
    consistent: false,
    map: (value) => value < 1,
  },
  payout: {
    consistent: true,
    map: (value) => value < percent(80),
  },
  DY: {
    consistent: true,
    map: (value) => value >= percent(6),
  },
  tagAlong: {
    consistent: false,
    map: (value) => value === 100,
  },
})

const appl = isWorthBuy({
  netIncome: 100,
  "P/E": 10,
  "DEBT/EBIT": 0.8,
  DY: percent(10),
  payout: percent(30),
  tagAlong: 100,
})

console.log(appl ? "Worth buying" : "Not worth")
