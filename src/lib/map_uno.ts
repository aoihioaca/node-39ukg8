export function mapUnoProps(props: { [index: string]: any }) {
  return Object.fromEntries(
    Object.entries(props).map(entry => {
      return [entry[0], entry[1] === true ? '' : entry[1]]
    })
  )
}
