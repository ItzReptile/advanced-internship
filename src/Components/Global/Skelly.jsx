import React from 'react'

export const Skelly = ({width,height,borderRadius}) => {
  return (
    <div
      className="skeleton-box"
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  )
}
