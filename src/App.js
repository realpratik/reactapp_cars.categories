import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items  from './data';

function App() {

const [menuItems, setMenuItems] = useState(items);
const [categories, setCategories ] = useState([]); 

const 


  return (
  <main>
    <section className="menu section">
      <div className = "title">
        <h2>Cars</h2>
        <div className = "underline">
        </div>
      </div>
      <Categories />
      <Menu items={menuItems} />
      
    </section>
  </main>
  
  );


}
export default App;
 