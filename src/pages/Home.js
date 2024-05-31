import React from 'react'

import NavComp from '../components/NavComp'
import TableComponent from '../components/TableComponent'
import CardComponent from '../components/CardComponent'

function Home() {
  return (
    <>

    {/* <Nav/> */}

    <NavComp/>
    <div class="flex  justify-center items-center my-4 ">
<CardComponent/>

    </div>
    <div class="flex  justify-center items-center p-9">
<TableComponent/>
    </div>
      
    </>
  )
}


export default Home