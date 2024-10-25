import React from 'react'
import BasicExample from './nav';
import GridComplexExample from './contact';
import BasicExamples from './Content';
import TabsExample from './listgroup';
import Example from './About';
function Home() {
  return (
    <div>
        <BasicExample/>
        <GridComplexExample/>
        <Example/>
        <BasicExamples/>
        <TabsExample/>
    </div>
  )
}

export default Home;