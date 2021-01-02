import React from 'react'

const Data = ({ dataId }) => {
  return (
    <>
      <h2>Data View for {dataId.toUpperCase()}</h2>
      <h3>Nested Client-Only Route</h3>
    </>
  )
}

export default Data