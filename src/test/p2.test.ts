import { OrderLine } from '../models/OrderLine'
import { calculate } from '../util/calculate-orders'

const SampleOrder: OrderLine[] = [
  {
    orderId: 123,
    productId: 2,
    quantity: 6,
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
    quantity: 15,
    unitPrice: 2
  },
  {
    orderId: 234,
    productId: 4, //same product as previous line
    quantity: 5,
    unitPrice: 2 //price is always the same (for now!)
  }
]

const SampleResult = [
  {
    orderId: 123,
    total: 12,
    buy2Get1FreeTotal: 8 //This should be the total after the discount, not the discount
  },
  {
    orderId: 234,
    total: 42,
    buy2Get1FreeTotal: 30
  }
]

test('calculate order sum', () => {
  expect(calculate(SampleOrder)).toEqual(SampleResult)
})
