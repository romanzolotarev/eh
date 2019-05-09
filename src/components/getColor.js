const colors = opacity => [
  { name: 'blue', bg: `rgb(0,116,217,${opacity})` },
  { name: 'navy', bg: `rgb(0,31,63,${opacity})` },
  { name: 'lime', bg: `rgb(1,255,112,${opacity})` },
  { name: 'teal', bg: `rgb(57,204,204,${opacity})` },
  { name: 'olive', bg: `rgb(61,153,112,${opacity})` },
  { name: 'fuchsia', bg: `rgb(240,18,190,${opacity})` },
  { name: 'red', bg: `rgb(255,65,54,${opacity})` },
  { name: 'green', bg: `rgb(46,204,64,${opacity})` },
  { name: 'orange', bg: `rgb(255,133,27,${opacity})` },
  { name: 'maroon', bg: `rgb(133,20,75,${opacity})` },
  { name: 'purple', bg: `rgb(177,13,201,${opacity})` },
  { name: 'yellow', bg: `rgb(255,220,0,${opacity})` },
  { name: 'aqua', bg: `rgb(127,219,255,${opacity})` }
]

const hashString = str => {
  const hashInt32 = str.split('').reduce((acc, cur) => {
    const hash = (acc << 5) - acc + cur.charCodeAt(0)
    return hash & hash // Convert to int32
  }, 0)
  return hashInt32 > 0 ? hashInt32 : -hashInt32
}

const getColor = (opacity, label) => {
  const opaqueColors = colors(opacity)
  return opaqueColors[hashString(label) % opaqueColors.length].bg
}

export default getColor
