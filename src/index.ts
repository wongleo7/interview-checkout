import getOrderLines from './api/order-lines'
import submitResults from './api/submit-results'
import { calculate } from './util/calculate-orders'
import { calculateProblem1 } from './util/calculate-orders-p1'

export type Problems = 'problem1' | 'problem2' | 'problem3' | 'problem1/sample' | 'problem2/sample' | 'problem3/sample'

async function problem1Sample() {
  const orderLines = await getOrderLines('problem1/sample')
  const results = calculateProblem1(orderLines)
  await submitResults('problem1/sample', results)
}

async function problem2Sample() {
  const orderLines = await getOrderLines('problem2')
  const results = calculate(orderLines)
  await submitResults('problem2', results)
}

async function problem3Sample() {
  const orderLines = await getOrderLines('problem3')
  const results = calculate(orderLines)
  await submitResults('problem3', results)
}

async function Main() {
  console.log('\n\n-------------------- Problem 1 --------------------')
  await problem1Sample()
  console.log('\n\n-------------------- Problem 2 --------------------')
  await problem2Sample()
  console.log('\n\n-------------------- Problem 3 --------------------')
  await problem3Sample()
}

Main()
