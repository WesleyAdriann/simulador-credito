export const normalize = (value = '') =>
  `${value}`.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export const formatNumber = (value = '') =>
  `${value}`.replace(/(\d)(?=(\d{3})+$)/g, '$1.')

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
