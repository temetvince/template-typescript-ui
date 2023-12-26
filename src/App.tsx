import React from "react";

import { Button } from "primereact/button";

function App() {
   const [count, setCount] = React.useState(0);

   return (
      <div className="App">
         <Button
            label="Click"
            icon="pi pi-plus"
            onClick={() => {
               setCount(count + 1);
            }}
            rounded
         />
         <div className="text-2xl text-900 mt-3">{count}</div>
      </div>
   );
}

export default App;
