import React, { useEffect, useState } from 'react'
import './Table.css'

function Pagination() {
  const pages = 10

  const numberOfPages = []
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i)
  }

  const [currentButton, setCurrentButton] = useState(1)
  const [arrOfCurrentButtons, setArrOfCurrentButtons] = useState([])

  useEffect(() => {
    let tempNumbersOfPages = [...numberOfPages]
    
    if (currentButton >= 1 && currentButton <= 3) {
      tempNumbersOfPages = [1, 2, 3, 4, '...', numberOfPages.length]
    }
    else if (currentButton === 4) {
      const sliced =numberOfPages.slice(0, 5)
      tempNumbersOfPages = [...sliced, '...', numberOfPages.length]
    }
    
    setArrOfCurrentButtons(tempNumbersOfPages)
  }, [currentButton])

  return (
    <div className="pagination">
      <a href="!#" className="" onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}>Prev</a>
      {arrOfCurrentButtons.map(page => {
        return (
          <a href="!#" className={currentButton === page && 'active'}>{page}</a>
        )
      })}
      <a href="!#" onClick={() => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev + 1)}>Next</a>
    </div>
  )
}

export default Pagination