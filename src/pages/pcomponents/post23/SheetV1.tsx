import {useState} from "preact/hooks";

interface Sheet {    
  x: number;         
  y: number;        
  w: number;      
  h: number;       
  color: string;  
  opacity: number;   
}


export default function Sheet() {

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
    

   return (
     <div class="outer-container relative h-40 border-1 "> 
     <div 
        

       className="sheet "
       // Copy paste the Sheet object's properties inside the Style attribute
       style = {{
         position: "absolute",
         left: sheet.x,
         top: sheet.y,
         width: sheet.w,
         height: sheet.h,
         background: sheet.color, 
         opacity: sheet.opacity,
       }}
     >
       <p className="text-lg text-center">
         Cannot be dragged.
       </p>
     </div>
     </div>
     

   )

}