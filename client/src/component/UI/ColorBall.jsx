import React from 'react'

const ColorBall = ({width,height,zIndex ,position ,color}) => {
  return (
    <span
      className={`absolute rounded-full ${width} ${height} ${zIndex} ${position}`}
      style={{
        backgroundImage: `radial-gradient(${color}, #fff)`,
        filter: 'blur(8px)',
        boxShadow: `0 0 20px ${color}`,
      }}
    />
  )
}

export default ColorBall