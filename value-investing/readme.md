# Value Investing

Value investing is a technique used by the majority (if not all) famous investors. It allows them to buy great companies at discounted prices.

This is important because buying companies at discounted prices may be the game-changing factor for you and many other people. If theses companies are really worth more than they're being sold for, then you could buy into them and hold profits for many and many years.

And if theses companies pay dividends, you could theorically have dividend yields over 100%, as explained [here](../growing-dividends/readme.md)

For this strategy to work we need to know first what makes companies great, what about theses companies that bring such value into people's lives. After that, we could work our way through finding out if the company is cheap or not, and finally making it a script, so we can always search the market for great companies at discounted prices.

## Finding great companies

The set of characteristics that define a great company can be separated in 2 types:

Quantitative and qualitative. Quantitative describes the company's numbers such as ROI, P/E, net worth, EBITDA and more indicators. On the other hand, qualitative describes the governance, how well structured that company is, internal processes, speed, team, value being delivered & product.

These 2 can be combined to define a really good company.

### Quantitative filters

| **Name**       | **Description**                                  | **Filter**                                                         |
| -------------- | ------------------------------------------------ | ------------------------------------------------------------------ |
| Net Income     | All the profits from a company.                  | Cannot be negative for atleast 10 (ten) years. Must be consistent. |
| P/E            | Years I'd take for earning to buy the company    | Cannot be bigger than 15.                                          |
| Debt/EBIT      | Years I'd take for EBIT to quit all debts        | Lower than 1.                                                      |
| Payout         | Profits distributed as dividends.                | Can't be higher than 80%. Must be consistent.                      |
| Dividend Yield | Dividends over price                             | Must be at least 6%. Must be consistent.                           |
| Tag Along      | How much you'd receive if the company was bought | At least 100%                                                      |
| Clients        | People who are using that company                | Consistent and growing                                             |
| Sector         | Which area of the economy that company is based  | Must be perennial and a human necessity                            |

### Qualitative filters

| **Name**    | **Description**                                              | **Filter**                                           |
| ----------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| Governance  | How well leaders guide the teams.                            | There must be some type of agile mindset.            |
| Competitors | How well is the company positioned against it's competitors. | There must be a contingency and anti-fragile concept |
| Value       | How much value does the product aggregate to people's lives  | There must be people using it daily.                 |

### Graham Number

The Graham Number is a math formula created to calculate the `intrinsic` value of a company.

By using that formula we can determine if the company is within our price-limit and if it's worth buying or not.

The fomula is the following:

$\sqrt{PE * PBV * EPS * BVPS} * {(1 - margin)}$

Substitute PE and PBV for the values I'd like to pay for the same indicators of company. Like so:

"I would like to pay at most 10 times the company's earning and at most 1.5 times the patrimonial value."

My formula would like the following:

$\sqrt{10 * 1.5 * EPS * BVPS} * {(1 - margin)}$

Now substitute the EPS and BVPS values for the actual company indicators and find out the intrisic value.

$\sqrt{10 * 1.5 * 2.46 * 41.15} = 38.96$

Now that we have the intrinsic value, we can remove our security/profit margin from it.

$38.96 * {(1 - 0.10)} = 35$

and now `US$ 35` is our stock price.

To facilitate all the math, use the `graham.js` file.

## Script

But the problem is, what are the maximum and minimum values for both of these metrics and how can we use them to come up with an ideal price for the company?

Qualitative aspects can not be defined in code, these must be read and paid attention to, we can't optimize anyhting here, but we can delay this by making an initial filter based on quantitative characteristics and only then read the papers and acquire knowledge about the company.

Enter [`index.ts`](index.ts) to get access to full code.
