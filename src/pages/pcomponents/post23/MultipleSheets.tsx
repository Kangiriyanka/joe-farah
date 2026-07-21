import {useState, useRef} from "preact/hooks";

interface Sheet { 
  id: number;   
  x: number;         
  y: number;        
  w: number;      
  h: number;       
  color: string;  
  opacity: number;   
}

interface DragData {
  id: number;
  startMouseX: number;
  startMouseY: number;
}

export default function MultiSheets() {


  const [activeSheet, setActiveSheet] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sheets, setSheets] = useState<Sheet[]>([
     {
       id: 1,
       x: 0,
       y: 0,
       w: 150,
       h: 75,
       color: "#3384ed",
       opacity: 1
     }



  ])
  const dragData = useRef<DragData | null>(null);
  
  const handleMouseDown = (e: MouseEvent, id: number) => {

    e.preventDefault()
    if (!containerRef.current) return;

      dragData.current = {
      
      id: id,
      startMouseX: e.clientX,
      startMouseY: e.clientY
    };

    setActiveSheet(id)


    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
   


   }

   const handleMouseMove = (e: MouseEvent) => {
    // We defined <DragData | null>, so we make sure it's not null before we access it.
    // We also need to check if the container ref because we declared in the type that it could be null.
    if (dragData.current && containerRef.current ) {

      const { id, startMouseX, startMouseY } = dragData.current;
      const rect = containerRef.current.getBoundingClientRect();
      const sheet = sheets.find (sheet => sheet.id === id)
      if (!sheet) return;
      const rawX = sheet.x + e.clientX - startMouseX 
      const rawY = sheet.y + e.clientY - startMouseY 
      const clampedX = Math.max(0, Math.min(rawX, rect.width - sheet.w));
      const clampedY = Math.max(0, Math.min(rawY, rect.height - sheet.h))

      setSheets(prevSheets => 
       
        prevSheets.map(sheet => 
          sheet.id === id
            ? { ...sheet, x: clampedX,
                y: clampedY }
            : sheet // Leave it as is
        )
      );
    }

     
   
        
    }

   const handleMouseUp = () => {
    dragData.current = null;
    setActiveSheet(null)
    
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };


   const addSheet = () => {

    
   }
    


   return (

     <div 
     ref={containerRef}
     class="outer-container flex flex-col justify-between relative h-100 border-1 "> 

   
     {sheets.map((sheet: Sheet) => {

        return (
     <div 

       className="sheet"
       onMouseDown = {(e) => handleMouseDown(e, sheet.id)}
       style = {{
        // Relative only works if there's nothing before the element
         position: "absolute",
         left: sheet.x,
         top: sheet.y,
         width: sheet.w,
         height: sheet.h,
         background: sheet.color, 
         opacity: sheet.opacity,
         userSelect: "none",
         zIndex: 1,
        
       }}
        >  
    
    
     </div>
        )})}

     

      <button  className="cursor-pointer hover:bg-gray-200 transition-colors border-1 p-1 mt-auto ml-auto rounded-md" onClick ={() => addSheet}> Add Sheet</button>

   
     </div>

   )

}
