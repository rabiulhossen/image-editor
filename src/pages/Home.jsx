import '../styles/main.scss';

function Home() {
   const filterElement = [
      { name: 'Brightness' },
      { name: 'Grayscale' },
      { name: 'sopia' },
      { name: 'Constrast' },
      { name: 'Vintage' },
      { name: 'Brightness' },
   ];
   return (
      <div>
         <div className="image-editor">
            <div className="card">
               <div className="card-header">
                  <h2>image editor</h2>
               </div>
               <div className="card-body">
                  <div className="sidebar">
                     <div className="side-body">
                        <div className="filter-section">
                           <span>Filter</span>
                           <div className="filter-keys">
                              {filterElement.map((filter,index) => {
                                 return (
                                    <button
                                       className="filter-key"
                                       key={index}>
                                     {filter.name}
                                    
                                    </button>
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
