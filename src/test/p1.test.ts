import { OrderLine } from '../models/OrderLine'
import { calculateProblem1 } from '../util/calculate-orders-p1'

const SampleOrder: OrderLine[] = [
  {
    orderId: 123,
    productId: 2,
    quantity: 5,
    unitPrice: 2
  },
  {
    orderId: 234,
    productId: 3,
    quantity: 2,
    unitPrice: 1
  },
  {
    orderId: 234,
    productId: 4,
    quantity: 5,
    unitPrice: 2
  }
]

const SampleResult = [
  {
    orderId: 123,
    total: 10
  },
  {
    orderId: 234,
    total: 12
  }
]

test('calculate order sum', () => {
  expect(calculateProblem1(SampleOrder)).toEqual(SampleResult)
})
