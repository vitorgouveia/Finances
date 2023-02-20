/**
 * 
 * @param {*} questions 
 * @returns {(arrayOfAnswers: Array<boolean>) => void}
 */
const generateGradeForStock = (questions = []) => (arrayOfAnswers) => {
  if(arrayOfAnswers.length < questions.length) {
    throw new Error("Not enough answers")
  }

  return arrayOfAnswers
    .reduce((acc, answer) => answer ? acc + 1 : acc, 0)
}

const grades = generateGradeForStock([
  "Has a dividend yield bigger or equal to 5%",
  "Is in a essential economy field",
  "EBITDA CAGR is growing for at least 10 years",
  // "P/E is less than 10"
])

const stocks = [
  {
    ticker: "APPL",
    grade: grades([true, true, true]),
  },
  {
    ticker: "MSFT",
    grade: grades([true, false, true]),
  },
  {
    ticker: "KO",
    grade: grades([false, false, true]),
  },
  {
    ticker: "META",
    grade: grades([false, true, true]),
  },
]

const sum = (a, b) => a + b

const gradesSum = stocks
    .map(({ grade }) => grade)
    .reduce(sum, 0)

const stocksClassification = stocks
    .map(({ ticker, grade }) => `${ticker} should be ${Math.floor(grade / gradesSum * 100)}%`)

console.log(stocks)
console.log(stocksClassification)
