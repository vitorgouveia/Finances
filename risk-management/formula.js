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
    .reduce((acc, answer) => answer ? acc + 1 : acc - 1, 0)
}

const grades = generateGradeForStock([
  "Has a dividend yield bigger or equal to 5%",
  "Is in a essential economy field",
  "EBITDA CAGR is growing for at least 10 years",
  "P/E is less than 10"
])

const stocks = [
  {
    ticker: "APPL",
    grade: grades([true, true, true, true]),
  },
  {
    ticker: "MSFT",
    grade: grades([true, false, true, true]),
  },
  {
    ticker: "KO",
    grade: grades([false, false, false, true]),
  },
  {
    ticker: "META",
    grade: grades([false, true, true, false]),
  },
]

const groups = {
  "low-risk": [],
  "medium-risk": [],
  "high-risk": [],
}

stocks.forEach(({ ticker, grade }) => {
  if(grade > 1) {
    groups["low-risk"].push(ticker)
  } else if (grade < 0) {
    groups["high-risk"].push(ticker)
  } else {
    groups["medium-risk"].push(ticker)
  }
})

console.log("Asset risk classification")
console.log(groups)