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
    <div className="flex items-center gap-2 py-1">
      {hasChildren && (
        <button
  type="button"
  onClick={onToggle}
  aria-label={isOpen ? "Collapse" : "Expand"}
  className="flex items-center justify-center w-7 h-7 rounded-md bg-[var(--month-active)] hover:text-white hover:bg-zinc-800 transition-colors duration-200"
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
        
      
        className={`text-xl text-zinc-100  bg-[var(--nav-bg)] px-2 py-1 rounded-sm transition ${
          isSelected
            ? "opacity-90 bg-[var(--quill-bg)] font-medium"
            : ""
        }`}
      >
        {title}
      </button>
    </div>
  );
}