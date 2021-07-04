import React, {useEffect} from 'react'

function AllItems(props) {
  useEffect(() => {
    props.setCategory('All Products')
    console.log('hi')
  }, [])
  return (
    <div className="all-items">
      
    </div>
  )
}

export default AllItems
