import React, {useEffect} from 'react'

function Shop(props) {
  useEffect(() => {
    props.leaveHome()
  }, [])
  return (
    <div className="shop">
      
    </div>
  )
}

export default Shop
