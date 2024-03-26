import { ReactNode, useState } from "react"

import { DownCog, Button } from "@/lib/components"

type Cryptocurrency = {
  name: string
  description: string
  opportunity: string
  ticker: string
  icons: JSX.Element
  indicators: {
    mvrv: Indicator
    mayerMultiple: Indicator
    fearAndGreed: Indicator
    dominance: Indicator
    liquidity: Indicator
    marketcap: Indicator
  }
}

type Indicator = {
  name: string
  description: string

  value: string
  context: string

  meaning: "positive" | "negative"
}

const uppercaseFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const bitcoin: Cryptocurrency = {
  name: uppercaseFirstLetter("bitcoin"),
  ticker: "btc",
  description: "Bitcoin is the first crytocurrency that worked.",
  opportunity: "300%+ Growth potential.",
  icons: <BitcoinIcon />,
  indicators: {
    mvrv: {
      name: "MVRV",
      description: "Market Value / Realized Value",
      value: "2.3",
      context: "Bitcoin is 2.3x more expensive than the average of holdings.",
      meaning: "negative",
    },
    mayerMultiple: {
      name: "Mayer Multiple",
      description: "Market Value / 200 day average",
      value: "1.5",
      context:
        "Bitcoin is 1.5x than the average of the last 200 days. Indicates uptrend.",
      meaning: "negative",
    },
    fearAndGreed: {
      name: "Fear and Greed Index",
      description: "0 = Total Fear, 100 = Total Greed",
      value: "73",
      context: "People are overly greedy, think it's going to the moon.",
      meaning: "negative",
    },
    dominance: {
      name: "Bitcoin Dominance",
      description: "Below 50% = Bitcoin Cycle upcoming",
      value: "49.4%",
      context:
        "Bitcoin has half of market dominance. Indicates it's price has already moved.",
      meaning: "negative",
    },
    liquidity: {
      name: "Liquidity",
      description: "Below 50% = Bitcoin Cycle upcoming",
      value: "US$ 29.4 B",
      context:
        "Bitcoin has half of market dominance. Indicates it's price has already moved.",
      meaning: "positive",
    },
    marketcap: {
      name: "Market cap",
      description: "Below 50% = Bitcoin Cycle upcoming",
      value: "US$ 1.2 T",
      context:
        "Bitcoin has half of market dominance. Indicates it's price has already moved.",
      meaning: "positive",
    },
  },
}

const ethereum: Cryptocurrency = {
  name: uppercaseFirstLetter("ethereum"),
  ticker: "eth",
  description: "Applications and services on the blockchain.",
  opportunity: "300%+ Growth potential.",
  icons: <EtherIcon />,
  indicators: {
    mvrv: {
      name: "MVRV",
      description: "Market Value / Realized Value",
      value: "2.3",
      context: "Bitcoin is 2.3x more expensive than the average of holdings.",
      meaning: "negative",
    },
    mayerMultiple: {
      name: "Mayer Multiple",
      description: "Market Value / 200 day average",
      value: "1.5",
      context:
        "Bitcoin is 1.5x than the average of the last 200 days. Indicates uptrend.",
      meaning: "positive",
    },
    fearAndGreed: {
      name: "Fear and Greed Index",
      description: "0 = Total Fear, 100 = Total Greed",
      value: "73",
      context: "People are overly greedy, think it's going to the moon.",
      meaning: "positive",
    },
    dominance: {
      name: "Bitcoin Dominance",
      description: "Below 50% = Bitcoin Cycle upcoming",
      value: "49.4%",
      context:
        "Bitcoin has half of market dominance. Indicates it's price has already moved.",
      meaning: "positive",
    },
    liquidity: {
      name: "Liquidity",
      description: "Below 50% = Bitcoin Cycle upcoming",
      value: "US$ 29.4 B",
      context:
        "Bitcoin has half of market dominance. Indicates it's price has already moved.",
      meaning: "positive",
    },
    marketcap: {
      name: "Market cap",
      description: "Below 50% = Bitcoin Cycle upcoming",
      value: "US$ 1.2 T",
      context:
        "Bitcoin has half of market dominance. Indicates it's price has already moved.",
      meaning: "positive",
    },
  },
}

const solana: Cryptocurrency = {
  name: uppercaseFirstLetter("solana"),
  description: "Very fast transaction speeds.",
  ticker: "sol",
  opportunity: "300%+ Growth potential.",
  icons: <SolanaIcon />,
  indicators: {
    mvrv: {
      name: "MVRV",
      description: "Market Value / Realized Value",
      value: "2.3",
      context: "Bitcoin is 2.3x more expensive than the average of holdings.",
      meaning: "positive",
    },
    mayerMultiple: {
      name: "Mayer Multiple",
      description: "Market Value / 200 day average",
      value: "1.5",
      context:
        "Bitcoin is 1.5x than the average of the last 200 days. Indicates uptrend.",
      meaning: "positive",
    },
    fearAndGreed: {
      name: "Fear and Greed Index",
      description: "0 = Total Fear, 100 = Total Greed",
      value: "73",
      context: "People are overly greedy, think it's going to the moon.",
      meaning: "negative",
    },
    dominance: {
      name: "Bitcoin Dominance",
      description: "Below 50% = Bitcoin Cycle upcoming",
      value: "49.4%",
      context:
        "Bitcoin has half of market dominance. Indicates it's price has already moved.",
      meaning: "negative",
    },
    liquidity: {
      name: "Liquidity",
      description: "Below 50% = Bitcoin Cycle upcoming",
      value: "US$ 29.4 B",
      context:
        "Bitcoin has half of market dominance. Indicates it's price has already moved.",
      meaning: "positive",
    },
    marketcap: {
      name: "Market cap",
      description: "Below 50% = Bitcoin Cycle upcoming",
      value: "US$ 1.2 T",
      context:
        "Bitcoin has half of market dominance. Indicates it's price has already moved.",
      meaning: "positive",
    },
  },
}

async function getCryptocurrency(ticker: string): Promise<Cryptocurrency> {
  return bitcoin
}

async function getCoins() {
  return [
    bitcoin,
    ethereum,
    solana,
    solana,
    solana,
    solana,
    solana,
    solana,
    solana,
    solana,
  ]
}

async function getBestCoins() {
  const coins = await getCoins()

  const sortedCoins = coins
    .map(({ name, indicators, icons }) => {
      const positiveIndicators = Object.values(indicators).reduce(
        (count, { meaning }) => (meaning === "positive" ? count + 1 : count),
        0
      )

      return {
        name,
        icons,
        positiveIndicators,
        height: scale(positiveIndicators, [0, 7], [0, 250]),
      }
    })
    .sort((a, b) => b.positiveIndicators - a.positiveIndicators)
    .slice(0, 3)

  return sortedCoins
}

async function getLongTermCoins() {
  return [bitcoin, ethereum, solana]
}

export default async function Page() {
  const crypto = await getCryptocurrency("BTC")
  const coins = await getCoins()
  const bestCoins = await getBestCoins()
  const longTermCrypto = await getLongTermCoins()

  return (
    <main className="flex w-full flex-col">
      <section>
        <div className="max-width items-center">
          <h3 className="!text-theme-paragraph">CryptoCurrency Analyzer</h3>

          <h1 className="flex items-center gap-2">
            Should You Buy <CryptoSelect crypto={crypto} /> Today?
          </h1>

          <Pill>NO! Do you want to lose money?</Pill>

          {/* <Button>Access the best 10 cryptocurrency worth buying</Button> */}

          <p>
            Only 3 out 7 indicators are positive. This is not a good moment to
            buy bitcoin.
          </p>

          <ul className="flex w-full flex-wrap items-center justify-center gap-6">
            {Object.values(crypto.indicators).map((props) => (
              <IndicatorCard key={props.name} {...props} />
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-width bg-theme-accent-base items-center rounded p-16">
          <header className="flex flex-col items-center gap-2">
            <h2 className="text-theme-primary-lighter">
              What Crypto to Buy Now
            </h2>
            <p className="text-theme-primary-light">
              See the best crypto to buy now (25/03/2024) based on 7 indicators.
            </p>
          </header>

          <span className="flex items-center gap-2">
            {crypto.icons}
            <h3 className="text-theme-primary-lighter text-4xl">
              {crypto.name}
            </h3>
          </span>

          <Rank coins={bestCoins} />
        </div>
      </section>

      <section>
        <div className="max-width items-center">
          <header className="flex flex-col items-center gap-2">
            <h2>Which crypto to buy today for long-term</h2>
            <p>
              The best crypto for long term are those crypto that have the best
              functionality.
            </p>
          </header>

          <ul className="flex w-full items-center gap-6">
            {longTermCrypto.map((crypto) => (
              <li
                key={crypto.name}
                className="border-theme-placeholder flex w-full flex-col gap-2 rounded-sm border p-6"
              >
                <span className="flex items-center gap-2">
                  {crypto.icons}
                  <h3>{crypto.name}</h3>
                </span>

                <p>{crypto.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-width items-center">
          <header className="flex flex-col items-center gap-2">
            <h2>Which crypto to buy today for short-term</h2>
            <p>How to find the best opportunities in the market.</p>
          </header>

          <ul className="flex w-full items-center gap-6">
            {longTermCrypto.map((crypto) => (
              <li
                key={crypto.name}
                className="border-theme-placeholder flex w-full flex-col gap-2 rounded-sm border p-6"
              >
                <span className="flex items-center gap-2">
                  {crypto.icons}
                  <h3>{crypto.name}</h3>
                </span>

                <p>{crypto.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-width items-center">
          <header className="flex flex-col items-center gap-2">
            <h2>Top cryptocurrency to buy</h2>
            <p>The ultimate list for cryptocurrency.</p>
          </header>

          <ul className="flex w-full flex-wrap items-center gap-6">
            {coins.map((crypto) => (
              <li
                key={crypto.name}
                className="border-theme-placeholder flex w-[calc(50%-12px)] flex-col gap-2 rounded-sm border p-6"
              >
                <span className="flex items-center gap-2">
                  {crypto.icons}
                  <h3>{crypto.name}</h3>
                </span>

                <p>{crypto.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="max-width items-start">
          <h2>How to use the Cryptocurency Analyzer</h2>

          <div className="border-theme-primary-light flex w-full flex-col gap-2 rounded-sm border p-6">
            <h3>Step 1</h3>
            <p>Choose the cryptocurrency you want analyzed.</p>
          </div>

          <div className="border-theme-primary-light flex w-full flex-col gap-2 rounded-sm border p-6">
            <h3>Step 2</h3>
            <p>
              Check out for the indicators presented for that cryptocurrency.
              All cryptocurrency share the following indicators:
            </p>

            <span className="flex flex-col items-start gap-0.5">
              <h4>Liquidity</h4>
              <p>How much that cryptocurrency was traded in 24 hours.</p>
            </span>

            <span className="flex flex-col items-start gap-0.5">
              <h4>Market Cap</h4>
              <p>
                The total market value of a {"cryptocurrency's"} circulating
                supply. It is analogous to the free-float capitalization in the
                stock market. Market cap = Current price x Circulating supply
              </p>
            </span>
          </div>

          <div className="border-theme-primary-light flex w-full flex-col gap-2 rounded-sm border p-6">
            <h3>Step 3</h3>
            <p>
              DYOR on the cryptocurrency you chose, read articles, watch videos.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="max-width items-center">
          <h2>What is the Cryptocurrency Analyzer?</h2>

          <p>
            It’s a tool to help people identify the right moment to buy
            cryptocurrency. It supports bitcoin, ethereum, solana, xrp and more.
          </p>
          <p>
            It uses a set of on-chain indicators and traditional stock market
            indicators to identify price trends and the value of the
            cryptocurrency overall.
          </p>
          <p>
            The tool is also updated constantly to include new market movements
            and innovations.
          </p>
        </div>
      </section>

      <section>
        <div className="max-width items-start">
          <h2>Get Even More With The 10 BEST Cryptocurrency to buy in 2024</h2>

          <p>
            Get access to the list that will change your life in 2024. Invest in
            these cryptocurrency before anyone does and get the most out of this
            bull rull.
          </p>

          <Button>Get access</Button>
        </div>
      </section>

      <section>
        <div className="max-width items-start">
          <h2>Check your Financial Thermostat</h2>

          <p>Create your account and start using the expense tracker.</p>
          <p>Work in progress</p>

          <Button>Login</Button>
        </div>
      </section>
    </main>
  )
}

const scale = (
  inputY: number,
  yRange: [number, number],
  xRange: [number, number]
) => {
  const [xMin, xMax] = xRange
  const [yMin, yMax] = yRange

  const percent = (inputY - yMin) / (yMax - yMin)
  const outputX = percent * (xMax - xMin) + xMin

  return outputX
}

function Rank(props: {
  coins: Array<{
    name: string
    icons: JSX.Element
    positiveIndicators: number
    height: number
  }>
}) {
  return (
    <div className="flex items-end gap-2">
      {props.coins.map((column, index) => {
        return (
          <div key={column.name} className="flex flex-col gap-4">
            <span className="flex items-center gap-2">
              {column.icons}
              <h4 className="text-theme-primary-lighter text-xl">
                {column.name}
              </h4>
            </span>

            <div
              className={`${index === 0 ? "bg-theme-primary-lighter" : "bg-theme-accent-light"} w-[150px]`}
              style={{
                height: `${column.height}px`,
              }}
            />

            <small className="text-theme-primary-light">
              {column.positiveIndicators} out of 7 indicators
            </small>
          </div>
        )
      })}
    </div>
  )
}

function IndicatorCard(props: Indicator) {
  return (
    <li
      className={`${props.meaning === "positive" ? "border-theme-accent" : "border-theme-primary-light"} flex h-[240px] w-[350px] flex-col justify-between gap-6 rounded border p-6`}
    >
      <header className="flex flex-col gap-0.5">
        <h3>{props.name}</h3>
        <small>{props.description}</small>
      </header>

      <div className="flex flex-col gap-1">
        <h4 className="text-theme-title text-3xl font-bold">{props.value}</h4>
        <p>{props.context}</p>
      </div>
    </li>
  )
}

function Pill(props: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-red-200 px-6 py-1.5 text-4xl text-red-500">
      <strong className="font-semibold">NO! Do you want to lose money?</strong>
    </span>
  )
}

function CryptoSelect(props: { crypto: Cryptocurrency }) {
  return (
    <button className="text-theme-primary-lighter bg-theme-accent-base inline-flex items-center gap-3 rounded-full p-1.5 shadow-2xl shadow-blue-500/20">
      <span className="flex items-center gap-2">
        {props.crypto.icons}
        <h2 className="text-inherit">{props.crypto.name}</h2>
      </span>

      <DownCog />
    </button>
  )
}

function BitcoinIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_25_672)">
        <path
          d="M31.5202 19.8718C29.3832 28.4433 20.7017 33.6598 12.1292 31.5223C3.56017 29.3853 -1.65633 20.7033 0.481672 12.1323C2.61767 3.55977 11.2992 -1.65723 19.8692 0.479774C28.4412 2.61677 33.6572 11.2998 31.5202 19.8718Z"
          fill="#F7931A"
        />
        <path
          d="M23.0551 13.7207C23.3736 11.5917 21.7526 10.4472 19.5361 9.6837L20.2551 6.7997L18.4996 6.3622L17.7996 9.1702C17.3381 9.0552 16.8641 8.9467 16.3931 8.8392L17.0981 6.0127L15.3436 5.5752L14.6241 8.4582C14.2421 8.3712 13.8671 8.2852 13.5031 8.1947L13.5051 8.1857L11.0841 7.5812L10.6171 9.4562C10.6171 9.4562 11.9196 9.7547 11.8921 9.7732C12.6031 9.9507 12.7316 10.4212 12.7101 10.7942L11.8911 14.0797C11.9401 14.0922 12.0036 14.1102 12.0736 14.1382C12.0151 14.1237 11.9526 14.1077 11.8881 14.0922L10.7401 18.6947C10.6531 18.9107 10.4326 19.2347 9.93559 19.1117C9.95309 19.1372 8.65959 18.7932 8.65959 18.7932L7.78809 20.8027L10.0726 21.3722C10.4976 21.4787 10.9141 21.5902 11.3241 21.6952L10.5976 24.6122L12.3511 25.0497L13.0706 22.1637C13.5496 22.2937 14.0146 22.4137 14.4696 22.5267L13.7526 25.3992L15.5081 25.8367L16.2346 22.9252C19.2281 23.4917 21.4791 23.2632 22.4266 20.5557C23.1901 18.3757 22.3886 17.1182 20.8136 16.2982C21.9606 16.0337 22.8246 15.2792 23.0551 13.7207ZM19.0441 19.3452C18.5016 21.5252 14.8311 20.3467 13.6411 20.0512L14.6051 16.1867C15.7951 16.4837 19.6111 17.0717 19.0441 19.3452ZM19.5871 13.6892C19.0921 15.6722 16.0371 14.6647 15.0461 14.4177L15.9201 10.9127C16.9111 11.1597 20.1026 11.6207 19.5871 13.6892Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_672">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function SolanaIcon() {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_39_91)">
        <path
          d="M14.9772 1.36816H15.0005C22.8492 1.36816 29.2143 7.73325 29.2143 15.582V16.3733C29.2143 24.222 22.8492 30.5871 15.0005 30.5871H14.9772C7.12852 30.5871 0.763428 24.222 0.763428 16.3733V15.582C0.763428 7.73325 7.12852 1.36816 14.9772 1.36816Z"
          fill="#232323"
        />
        <path
          d="M21.0689 12.3648C21.0224 12.4172 20.9642 12.4579 20.9002 12.4812C20.8362 12.5102 20.7664 12.5219 20.6966 12.5219H7.5184C7.05295 12.5219 6.8144 11.9401 7.14022 11.591L9.30458 9.29279C9.35113 9.24043 9.40931 9.1997 9.47913 9.17061C9.54313 9.14152 9.61295 9.12988 9.68276 9.12988H22.9133C23.3846 9.12988 23.6173 9.71752 23.2857 10.0666L21.0689 12.3648ZM21.0689 22.6397C20.97 22.7386 20.8362 22.7968 20.6966 22.7968H7.5184C7.05295 22.7968 6.8144 22.2266 7.14022 21.8892L9.30458 19.6433C9.35113 19.591 9.41513 19.5502 9.47913 19.527C9.54313 19.4979 9.61295 19.4862 9.68276 19.4862H22.9133C23.3846 19.4862 23.6173 20.0622 23.2857 20.3997L21.0689 22.6397ZM21.0689 14.4652C20.97 14.3662 20.8362 14.3081 20.6966 14.3081H7.5184C7.05295 14.3081 6.8144 14.8782 7.14022 15.2157L9.30458 17.4615C9.35113 17.5139 9.41513 17.5546 9.47913 17.5779C9.54313 17.607 9.61295 17.6186 9.68276 17.6186H22.9133C23.3846 17.6186 23.6173 17.0426 23.2857 16.7052L21.0689 14.4652Z"
          fill="url(#paint0_linear_39_91)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_39_91"
          x1="7.99573"
          y1="22.9674"
          x2="22.3919"
          y2="8.95147"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#CF41E8" />
          <stop offset="1" stopColor="#10F2B0" />
        </linearGradient>
        <clipPath id="clip0_39_91">
          <rect
            width="29.0909"
            height="32"
            fill="white"
            transform="translate(0.45459)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

function EtherIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_24_428)">
        <path
          d="M16 32.001C24.8366 32.001 32 24.8375 32 16.001C32 7.16442 24.8366 0.000976562 16 0.000976562C7.16344 0.000976562 0 7.16442 0 16.001C0 24.8375 7.16344 32.001 16 32.001Z"
          fill="#627EEA"
        />
        <path
          d="M16.498 4.00098V12.871L23.995 16.221L16.498 4.00098Z"
          fill="white"
          fillOpacity="0.602"
        />
        <path
          d="M16.498 4.00098L9 16.221L16.498 12.871V4.00098Z"
          fill="white"
        />
        <path
          d="M16.498 21.9692V27.9962L24 17.6172L16.498 21.9692Z"
          fill="white"
          fillOpacity="0.602"
        />
        <path
          d="M16.498 27.9962V21.9682L9 17.6172L16.498 27.9962Z"
          fill="white"
        />
        <path
          d="M16.498 20.574L23.995 16.221L16.498 12.873V20.574Z"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          d="M9 16.221L16.498 20.574V12.873L9 16.221Z"
          fill="white"
          fillOpacity="0.602"
        />
      </g>
      <defs>
        <clipPath id="clip0_24_428">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
