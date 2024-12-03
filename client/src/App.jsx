import React from 'react'
import Banner from './components/Banner'
import Sale from './components/Sale'
import Container from './components/Container'

const App = () => {
  return (
    <main>
 <Banner/>
 <Container className="py-5 md:py-10">
 <Sale/>

 </Container>
    </main>
  )
}

export default App