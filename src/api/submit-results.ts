import axiosClient from './axios-client'
import { OrderCalculationResult } from '../models/OrderCalculationResult'
import { SubmissionResponse } from '../models/SubmissionResponse'
import { Submission } from '../models/Submission'
import { Problems } from '..'

const YourEmail = 'resume@leoo.dev'

async function submitResults(problems: Problems, results: OrderCalculationResult[]) {
  const submission: Submission = {
    email: YourEmail,
    results
  }

  const response = await axiosClient.post<SubmissionResponse>(`/results/${problems}`, submission)
  console.log(response.data)
  console.log(
    response.data.allBuyTwoGetOneFreeTotalsAreCorrect
      ? 'Buy 2 get 1 free totals are correct'
      : 'Buy 2 get 1 free totals are not correct'
  )
  console.log(response.data.allOrderTotalsAreCorrect ? 'Totals are correct' : 'Totals are not correct')
  for (const hint of response.data.hints) {
    console.log(hint)
  }
}

export default submitResults
