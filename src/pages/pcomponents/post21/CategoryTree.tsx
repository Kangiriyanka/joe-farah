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
  
  onSelect: (category: Category | null) => void;
  selectedID: number | null;

}


interface TreeNodeProps {
  cat: Category;
  depth: number;
  selectedID: number | null;
  onSelect: (category: Category | null) => void;
}



// Tree node has 2 important properties: 
function TreeNode( {cat, depth, selectedID, onSelect}: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState(false)

  const hasChildren = cat.children?.length > 0
  const isSelected = selectedID == cat.id


  return (

    // Render the children if it has any and if we click it.
    <div className=" ">
    <CategoryCard
        title={cat.name}
        isSelected={isSelected}
        hasChildren={hasChildren}
        isOpen={isOpen}
        onToggle={() => setIsOpen(prev => !prev)}
        onSelect={() => onSelect(cat)}
      />

    {hasChildren && isOpen && (
        <div className="flex">
          {cat.children.map(child => (
            <TreeNode
              key={child.id}
              cat={child}
              depth={depth + 1}
              selectedID={selectedID}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
      
  </div>
    
  )
  
}

export default function CategoryTree({onSelect, selectedID}: CategoryTreeProps) {
  return (
    <div className="flex justify-around bg-blue-100 h-50  p-4 rounded-md border-1">
      {categorydata.map(cat => (
  
        <TreeNode
          key={cat.id}
          cat={cat}
          depth={0}
          selectedID={selectedID}
          onSelect={onSelect}
       
        />

      ))}
    </div>


  );


}