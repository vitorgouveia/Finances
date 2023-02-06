# Growing Dividends

## Dividend x Monthly contribution
You can find the example inside `dividends-vs-monthly_value.js`
The basic logic here is that dividends outpace your monthly investing overtime and will make up for majority of your net worth.

The script is very simple, it just applies the `DIVIDEND_YIELD` variable to your total net worth, and runs some analytics.

So let's imagine you invest US$ 100 per month into your wallet that makes a litte over 5% of dividends a year. Let's consider too that the stock market goes up in average 8% an year.

### Year 1
In the first year you'd have the result below:

| **Name**             | **Description** |
|----------------------|-----------------|
| Montly dividends     | $2.34           |
| Yearly dividends     | $28.04          |
| Dividends Value      | $28.04          |
| Dividends Percentage | 2.34%           |
| Stock market gain    | $43.99          |
| Gross Investment     | $1,200.00       |
| Total Invested       | $1,272.03       |

Your dividends would only make up 2.34% of all your net worth, it didn't realy change anything, right?

### Year 5
When we go to the 5th year things start to change:

| **Name**             | **Description** |
|----------------------|-----------------|
| Montly dividends     | $29.31          |
| Yearly dividends     | $351.68         |
| Dividends Value      | $898.65         |
| Dividends Percentage | 14.98%          |
| Stock market gain    | $1,410.12       |
| Gross Investment     | $6,000.00       |
| Total Invested       | $8,308.77       |

Now we can see that the percentage that dividends occupy is definitely larger than before.

### Year 11
When we get to year 11, something interesting happens. Your monthly dividends are bigger than your monthly contribution. So now you could theorically stop investing with your own money.

| **Name**             | **Description** |
|----------------------|-----------------|
| Montly dividends     | $106.17         |
| Yearly dividends     | $1,274.08       |
| Dividends Value      | $5,902.08       |
| Dividends Percentage | 44.71%          |
| Stock market gain    | $9,261.22       |
| Gross Investment     | $13,200.00      |
| Total Invested       | $28,363.30      |

### Year 18
At year 18 we hit the inflexion point, where your dividends have outpaced your monthly contribution.

| **Name**             | **Description** |
|----------------------|-----------------|
| Montly dividends     | $310.98         |
| Yearly dividends     | $3,731.76       |
| Dividends Value      | $23,431.11      |
| Dividends Percentage | 108.48%         |
| Stock market gain    | $36,766.85      |
| Gross Investment     | $21,600.00      |
| Total Invested       | $81,797.96      |

### Increasing the contribution
We can make the process of dividends outpacing our own contribution by investing more and reaching for better market performance.

If you were to invest US$ 1,000 a month, with a dividend_yield of 6% and an average market performance of 9, you'd reach the inflexion point at year 15 with the following stats:

| **Name**             | **Description** |
|----------------------|-----------------|
| Montly dividends     | $2,866.06       |
| Yearly dividends     | $34,392.67      |
| Dividends Value      | $185,527.45     |
| Dividends Percentage | 103.07%         |
| Stock market gain    | $272,742.52     |
| Gross Investment     | $180,000.00     |
| Total Invested       | $638,269.97     |

Investing more granted you US$ 160,000 more of dividends 3 years ealy. That's the power of compound interest rates.

## 50%, 100%, 300% Dividend Yields
Following the example above, I'll show you how it's possible to achieve dividend yields way higher than any other metric you will ever see.
For this, we'll use the DAC (Dollar Cost Average) metric to define how much we've paid for stocks and then calculate the dividend yield.

### How it works.

The dividend yield formula is the following:

dividend_yield = dividend / price

The thing is, if I have a stock which I paid US$ 10 for, and it distributes US$ 1 in dividends, then I have a dividend yield of 10%. But, what if I bought that stock 5 years in the past for US$ 5? The dividend yield would be of 20%.

That's how you can make a lot of money with dividend investing. You can buy stocks at really cheap prices and then after they grow up in price receive 100%, 200% or even 300% off of dividends.


### Example

For example purposes, I cranked up the stock market performance variable to better demonstrate the yield on cost example.
You can find the example inside `dividend_yield.js`