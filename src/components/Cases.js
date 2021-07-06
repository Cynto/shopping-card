import React, {useEffect} from 'react'

function Cases(props) {
  const {setCategory} = props
  useEffect(() => {
    setCategory('Cases')
  }, [])
  return (
    <div className="products-container">
      
    </div>
  )
}

export default Cases
