import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react'
import { pricePerItem } from '../constants'
import formatPrice from '../util'

const OrderDetails = createContext()

//* create custom hook to check whether we're inside a provider
const useOrderDetails = () => {
  const context = useContext(OrderDetails)

  if (!context) {
    throw new Error(
      'useOrderDetails must be used within an OrderDetails provider',
    )
  }
  return context
}

const calculateSubtotal = (optionType, optionCounts) => {
  let optionCount = 0
  for (const count of optionCounts[optionType].values()) {
    optionCount += count
  }
  return optionCount * pricePerItem[optionType]
}

const OrderDetailsProvider = (props) => {
  const [optionCounts, setOptionCounts] = useState({
    scoops: new Map(),
    toppings: new Map(),
  })
  const zeroCurrency = formatPrice(0)
  const [totals, setTotals] = useState({
    scoops: zeroCurrency,
    toppings: zeroCurrency,
    grandTotal: zeroCurrency,
  })

  useEffect(() => {
    const scoopsSubtotal = calculateSubtotal('scoops', optionCounts)
    const toppingsSubtotal = calculateSubtotal('toppings', optionCounts)
    const grandTotal = scoopsSubtotal + toppingsSubtotal
    setTotals({
      scoops: formatPrice(scoopsSubtotal),
      toppings: formatPrice(toppingsSubtotal),
      grandTotal: formatPrice(grandTotal),
    })
  }, [optionCounts])

  const value = useMemo(() => {
    const updateItemCount = (itemName, newItemCount, optionType) => {
      const newOptionCounts = { ...optionCounts }

      const optionCountsMap = optionCounts[optionType]
      optionCountsMap.set(itemName, parseInt(newItemCount))

      setOptionCounts(newOptionCounts)
    }

    return [{ ...optionCounts, totals }, updateItemCount]
  }, [optionCounts, totals])
  return (
    <OrderDetails.Provider value={value} {...props}></OrderDetails.Provider>
  )
}
export { OrderDetailsProvider, useOrderDetails }
