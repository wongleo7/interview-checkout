import { OrderLine } from '../models/OrderLine'
import { calculate } from '../util/calculate-orders'

const SampleOrder: OrderLine[] = [
  {
    orderId: 123,
    productId: 2,
    quantity: 6,
    unitPrice: 1
  },
  {
    orderId: 234,
    productId: 3,
    quantity: 2,
    unitPrice: 3
  },
  {
    orderId: 234,
    productId: 4,
    quantity: 15,
    unitPrice: 3
  },
  {
    orderId: 234,
    productId: 4,
    quantity: 5,
    unitPrice: 2 //Price is different than the previous line. Cheaper units should always be discounted first
  }
]

const SampleResult = [
  {
    orderId: 123,
    total: 6,
    buy2Get1FreeTotal: 4 //This should be the total after the discount, not the discount
  },
  {
    orderId: 234,
    total: 61,
    buy2Get1FreeTotal: 48
  }
]

test('calculate order sum', () => {
  expect(calculate(SampleOrder)).toEqual(SampleResult)
})
