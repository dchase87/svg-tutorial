import React from 'react'

function Triangle ({vertices, color, styles, handleClick}) {
  const pathData = [
    'M', vertices[0][0], vertices[0][1],
    'L', vertices[1][0], vertices[1][1],
    'L', vertices[2][0], vertices[2][1],
    'Z'
  ].join(' ')

  return (
    <path style={styles} d={pathData} fill={color} onClick={handleClick} />
  )
}

export default Triangle
