import categorydata from "./categorydata.json";
import CategoryCard from "./CategoryCard";
import {useState} from "preact/hooks";


interface Category {
  id: number;
  name: string;
  parent_id: number | null;
  children: Category[];
}

interface CategoryTreeProps {
  


}


interface TreeNodeProps {
  cat: Category;

}



// Tree node has 2 important properties: 
function TreeNode( {}: TreeNodeProps) {
 


  return (

    // Render the children if it has any and if we click it.
    <div className=" ">
   

       </div>
      
      

    
  )
  
}

export default function CategoryTreeA({}: CategoryTreeProps) {
  return (
    <div className="flex justify-around bg-blue-100 h-50  p-4 rounded-md border-1">
      {categorydata.map(cat => (
  
        <TreeNode
          key={cat.id}
          cat={cat}
         
       
        />

      ))}
    </div>


  );


}