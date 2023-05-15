export function date(str: string) {
  const date = new Date(str)
  return { month: date.getMonth() + 1, date: date.getDate() }
}
