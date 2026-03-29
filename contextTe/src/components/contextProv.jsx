import hulku from "./context";
import React, { useState } from "react";



  const Provider=({children})=>{
  const[text,texting]=useState("");
  return(
        
      <hulku.Provider value={{text,texting}}>
        {children}
      </hulku.Provider>
  );
      
};
export default Provider;