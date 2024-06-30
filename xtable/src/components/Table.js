import React from 'react'
import styles from "./Table.module.css"
import { useState } from 'react'


function Table() {

    const tableData = 
    [
    
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" },

        { date: "2020-09-03", views: 500, article: "Article 4" }
    
    ]

  const [formattedDateTOSort,setFormattedDate] = useState(tableData)



  


  const handleDateSort = ()=>{

    const sorted = [...tableData].sort((a, b) => {
      
      const dateA = new Date(a.date)
      
      const dateB = new Date(b.date);

      if(dateB>dateA){
        return 1
      }
      if(dateB<dateA){
        return -1
      }
   else{
        return b.views-a.views
      }
    })
    setFormattedDate(sorted);

  }
  

  const handleViewSort = () =>{
    const sorted1 = [...formattedDateTOSort].sort((a, b) => {

      if(a.views>b.views){
        return -1
      }

      if(b.views>a.views){
        return 1
      }
      else 
      {
        return b.date - a.date
      }
    })

      setFormattedDate(sorted1);

  }
  
  return (
    <div>
 

 <h1> Date and Views Table</h1>

 <button onClick={handleDateSort}> Sort by Date</button>

 <button onClick={handleViewSort}> Sort by Views</button>

{
<table className={styles.table}> 

<tr>
<th>Date</th>
<th>Views</th>
<th>Article</th>
  </tr>

{formattedDateTOSort.map((item)=>{

return( 
<tr>
<td>{item.date}</td>
<td>{item.views}</td>
<td>{item.article}</td>

</tr>
)
})
}

</table>


}

    </div>
  )
}

export default Table