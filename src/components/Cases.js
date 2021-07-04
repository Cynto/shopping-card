import React, {useEffect} from 'react'

function Cases(props) {
  const {setCategory} = props
  useEffect(() => {
    setCategory('Cases')
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Cases
