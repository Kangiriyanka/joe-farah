import {useState, useRef} from "preact/hooks";

interface Sheet {    
  x: number;         
  y: number;        
  w: number;      
  h: number;       
  color: string;  
  opacity: number;   
}

interface DragData {
  offsetX: number;
  offsetY: number;
}

export default function SheetV2() {

  const [isDragging, setIsDragging] = useState(false);
   const [sheet, setSheet] = useState<Sheet>( 
     {
       x: 0,
       y:0,
       w: 150,
       h: 75,
       color: "#3384ed",
       opacity: 1
     }
   )

   const dragData = useRef<DragData | null>(null);

  
   const handleMouseDown = (e: MouseEvent) => {
   

       dragData.current = {
  
      offsetX: e.clientX - sheet.x,
      offsetY: e.clientY - sheet.y
    };

    setIsDragging(true)


    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
   


   }

   const handleMouseMove = (e: MouseEvent) => {
    // We defined <DragData | null>, so we make sure it's not null before we access it.
    if (dragData.current) {

      const { offsetX, offsetY } = dragData.current;
      
      setSheet( prev => ({
      
    

      ...prev,
      x: e.clientX - offsetX, 
      y: e.clientY - offsetY 
      }))
      
  }

  

   
        
    }

   const handleMouseUp = () => {
    dragData.current = null;
    setIsDragging(false)
    
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
    
    


   return (

     <div class="outer-container relative h-40 border-1 p-3"> 
     <div 

       className="sheet"
       onMouseDown = {(e) => handleMouseDown(e)}
       style = {{
         position: "absolute",
         left: sheet.x,
         top: sheet.y,
         width: sheet.w,
         height: sheet.h,
         background: sheet.color, 
         opacity: sheet.opacity,
         userSelect: "none",
         zIndex: 1,
         cursor: isDragging  ? "grabbing" : "grab",
         
         
       }}

     
     >  
    
     </div>

      <p className="relative text-lg z-50 text-center"> Drag across the <span className="text-[#3384ed]">blue text </span> </p>

   
     </div>

   )

}
