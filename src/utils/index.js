export const normalize = (value = '') =>
  `${value}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export const formatNumber = (value = '', withDecimal = false) => {
  const rg = /(\d)(?=(\d{3})+$)/g
  if(withDecimal) {
    const stringNumber = value?.toFixed(2)
    const decimal = stringNumber.slice(-2)
    const integer = stringNumber.slice(0, -3)
    return `${integer.replace(rg, '$1.')},${decimal}`
  }
  return `${value}`.replace(rg, '$1.')
}

export const range2Value = (range, percent) => {
  const [min, max] = range
  const rangeValue = max - min
  return (rangeValue * percent) + min
}

export const value2Range = (range, value) => {
  const [min, max] = range
  if(value <= min) return 0
  if(value >= max) return 1
  const rangeValue = max - min
  return (value - min) / rangeValue
}


export const dot2Comma = (value = 0) => {
  const stringNumber = value.toFixed(2)
  return stringNumber.replace('.', ',')
}
