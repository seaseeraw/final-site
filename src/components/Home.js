import React from 'react'
import BasicExample from './nav';
import GridComplexExample from './contact';
import BasicExamples from './Content';

import Example from './About';
function Home() {
  return (
    <div>
        <BasicExample/>
        <GridComplexExample/>
        <Example/>
        <BasicExamples/>
    </div>
  )
}

export default Home;