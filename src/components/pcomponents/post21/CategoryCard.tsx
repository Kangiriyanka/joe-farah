interface CategoryOptionProps {
  title: string;
  isSelected?: boolean;
  hasChildren?: boolean;
  onToggle?: () => void;
  onSelect?: () => void;
  isOpen?: boolean;
  depth?: number;
}

export default function CategoryCard({
  title,
  isSelected,
  hasChildren,
  onToggle,
  onSelect,
  isOpen,
  depth = 0,
}: CategoryOptionProps) {
  return (

    // TOGGLE
  <button 
  onClick={onToggle}
  className="flex items-center gap-2  bg-red-500 border-1 rounded-md">
      {hasChildren && (
        <button
  type="button"
  
  aria-label={isOpen ? "Collapse" : "Expand"}
  className="flex items-center justify-center w-7 rounded-md hover:text-white hover:bg-zinc-800 transition-colors duration-200"
>
  <span
    className={`transform transition-transform duration-200 ${
      isOpen ? "rotate-90" : ""
    }`}
  >
    ▸
  </span>
</button>
      )}

      {/* Category */}
      <button
      
        type="button"
         onClick={() => {
          onSelect?.();
          if (hasChildren) onToggle?.();
        }}
        
      
        className={`text-xl  w-30 px-2 py-1 rounded-sm transition ${
          isSelected
            ? "opacity-90  font-medium"
            : ""
        }`}
      >
        {title}
      </button>
    </button>
  );
}