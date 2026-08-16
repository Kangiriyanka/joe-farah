<script lang="ts">



import { fly,slide,fade, scale} from 'svelte/transition';
    import { isLeftHandSideExpression } from 'typescript';
 

let funkyWords: Record<string, string> = {

  petrichor: "The pleasant smell after rain on dry earth.",
  sempiternal: "Something eternal or everlasting.",
  numinous: "A feeling of spiritual awe or the divine.",
  fugacious: "Something fleeting or short-lived.",
  velleity: "A wish so slight it leads to no action.",
  lacuna: "A gap or missing part.",
  susurrus: "A soft whispering sound.",
  ineffable: "Something beyond description.",
  munificent: "Exceedingly generous.",
  scintilla: "A tiny spark or trace.",
  recondite: "Hard to understand; obscure.",
  ululation: "A long, wavering cry or howl.",
  pandiculation: "Stretching and yawning.",
  noctilucent: "Clouds that glow at night.",
  crepuscular: "Relating to twilight.",
  anfractuous: "Twisting and complicated.",
  cacoethes: "An uncontrollable urge.",
  effluvium: "An unpleasant smell or vapor.",
  frowzy: "Muddy or untidy.",
  gamboge: "A deep yellow pigment.",
  hypnagogic: "Between wakefulness and sleep.",
  incunabula: "Early printed books.",
  labyrinthine: "Like a maze.",
  nacreous: "Iridescent like mother-of-pearl.",
  objurgation: "A harsh reprimand.",
  palimpsest: "Something reused but still bearing traces.",
  quiddity: "The essence of something.",
  ruminant: "Chewing the cud; pondering.",
  saturnine: "Slow and gloomy.",
  umbrageous: "Shady or shadowy.",
  xenial: "Friendly to strangers.",
  zeugma: "A figure of speech using one word for two effects.",
  bathetic: "Overly sentimental, gushy.",
  cachinnate: "To laugh loudly.",
  daedal: "Skilled and intricate.",
  eidetic: "Having vivid visual memory.",
  famulus: "A personal attendant.",
  gelid: "Cold and icy.",
  hallux: "The big toe.",
  katzenjammer: "unpleasantly loud, confused, and dissonant sound.",
  mephitic: "Smelling foul or poisonous.",
  nugatory: "Of little value.",
  oscitant: "Yawning or inattentive.",
  pavonine: "Resembling a peacock.",
  rodomontade: "Boastful talk.",
  taciturn: "Quiet and reserved.",
  wamble: "Move unsteadily",
  absquatulate: "To make off with something or someone.",
  blatherskite: "One who talks nonsense.",
  collywobbles: "A stomach uneasiness.",
  dragoon: "To force someone into action.",
  estivate: "Sleep during summer.",
  flibbertigibbet: "Very silly chatterbox.",
  hircine: "Goat-like.",
  irenic: "Promoting peace.",
  kerfuffle: "A commotion or fuss.",
  lollygag: "To be slow or idle or lazy. ",
  mumpsimus: "A stubbornly held incorrect belief.",
  nidificate: "To build a nest.",
  obnubilate: "To obscure or cloud.",
  pettifog: "To argue over trivial matters.",
  tergiversate: "Beat around the bush",
  zugzwang: "A situation where every move is bad."
};

let rowCount = 6
let columnCount = 6
// 0 1 2 3 4  (+2 for min value)
let maxRows = 5 
let maxColumns = 5
let minRows = 2
let minColumns = 2
let streak = 0
let correctWord = "";
let definition = ""
let animKey = 0;
let failed = false;
let failTimeout: ReturnType<typeof setTimeout>;
let i = 0
let j = 0
let w = "8rem";
let h = "8rem";
let colUnit =  "1fr";
let rowUnit = "1fr";

function handleClick(idx: number, word: string, tip: string) {
  const row = Math.floor(idx / columnCount);
  const col = idx % columnCount;
 
  if (row === i && col === j) {
    streak += 1;
    animKey += 1;
    correctWord = word;
    definition = tip;


    generateEntry();
  } else {
    streak = 0;
    animKey = 0;
    failed = true;
    clearTimeout(failTimeout);
    failTimeout = setTimeout(() => {
      failed = false;
    }, 300);

  }
}

let tiles: { word: string; tip: string }[] = [];



function randomWord() {
  let words = Object.keys(funkyWords)
  return words[Math.floor(Math.random() * words.length)];
}

// mapFn -> randomLetter
function loadWords() {
  tiles = Array.from({ length: rowCount * columnCount }, () => {
    const word = randomWord();
    return {
      word,
      tip: funkyWords[word]
    };
  });
}

function generateEntry() {
  i = Math.floor(Math.random() * rowCount);
  j = Math.floor(Math.random() * columnCount);
  loadWords();
}

$: if (rowCount && columnCount) {
  loadWords();
  generateEntry()
}
</script>

<div>
<div class="matrix-options">

  
  <div class="question-section"> 
  Select the word at ({i},{j}):
  <div class="selected-word"> <a class="secondary-a "href= "https://www.vocabulary.com/dictionary/{correctWord}">{correctWord}</a></div>
  </div>



 
  
  </div>
</div>

 

  




  <div class="matrix-wrapper">
  <div class="matrix grid"
    style="grid-template-columns: repeat({columnCount}, {colUnit}); grid-template-rows: repeat({rowCount}, {rowUnit});"
  >
    {#each tiles as tile,idx}
  <button
    class="matrix-tile"
    data-tooltip={tile.tip}
    on:click={() => handleClick(idx, tile.word, tile.tip)}
  >
    {tile.word}
  </button>
{/each}
  </div>

  <div class="flex flex-col">
    <div class="matrix-selectors ">
   
      <span class=" pointer pr-3">Change Dimensions:</span>
     <div class=" row-selector">
      
       <select class="cursor-pointer" bind:value={rowCount}>
         {#each Array(maxRows) as _, i}
         <!-- 2 is the minimum value rows and cols can have -->
           <option value={i+minRows}>{i+minRows}</option>
         {/each}
       </select>
       
     </div>
     <span class="pr-3">by</span>
     <div class="column-selector">
     
      <select class="cursor-pointer" bind:value={columnCount}>
         {#each Array(maxColumns) as _, i}
           <option value={i+minColumns}>{i+minColumns}</option>
         {/each}
       </select>
     </div>
 
   </div>
   <div class="streak-box" >Streak: 
     
     {#key animKey}
      <span class="streak-nb" class:pop={animKey > 0} class:failed={failed}>{streak}</span>
    {/key}

  </div>

</div>
</div>



<br/>


<style>
.matrix-selectors {
  display: flex;
  font-style: italic;
  
  align-items: center;
  justify-content: center;

 

  

  font-size: 1rem;
  margin: 1.6rem 0;
  
 
  div {
    display: inline-block;
    border: 1px solid var(--dark-border-color);
    padding: 0.1rem;
 
    border-radius: 4px;
    margin-right: 0.6rem;
  
  }
}

.matrix {

  

  height: 100%;
  z-index: 3;
  border-bottom: 1px solid var(--dark-border-color);
  border-right: 1px solid var(--dark-border-color);
 

 


}


.question-section {
  display: flex;
  gap: 1rem;
  align-items: baseline;
 
  font-size: 1.2rem;
  

}

.matrix-options {
  position: relative;
  display: flex;
   justify-content: center;




    font-size: 1.3rem;
    width: 100%;
  
    padding: 0.6rem;
    margin: -0.5rem 0 1rem 0rem;
 
   
 
    border-radius: 4px;
 
}




/* Make sure the matrix-tile stays above everything when hovered or active */
.matrix-tile:hover,
.matrix-tile:active {
  z-index: 1;
}


.matrix-tile {
    position: relative;

    width: 100%;
    height: 100%;

    padding: 0.5rem;
   
   
    border-top: 1px solid var(--dark-border-color);
    border-left: 1px solid var(--dark-border-color);
  

   

  


    align-content: center;
    text-align: center;
    
    box-shadow: var(--n-shadow);
    transition: box-shadow 200ms ease-in-out,  background-color 200ms ease-in-out, transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1);

}


.matrix-tile:hover {
 background: rgba(0, 128, 0, 0.422);
 box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18),
    0 4px 30px rgba(0, 0, 0, 0.12);

}

.matrix-tile:active {
  transform: scale(0.97);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}
.matrix-tile:hover::after  {
  opacity: 1;
}

.streak-box {

  font-size: 1.2rem;
  padding-right: 0.5rem;
  margin-top: -1rem;
  font-weight: bold;
  padding: 0.6rem;
  text-align: center;
  
 
 
}

.selected-word {
  display: inline-flex;     /* keeps it aligned with text */
  align-items: baseline;   
  width: 12rem;
  line-height: 1.2rem;
  
  border-bottom: 2px solid var(--dark-border-color);

}

.matrix {
 justify-content: center;
 height: 100%;
 width: 100%;



}

.matrix-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;


 
}

.matrix-tile::after {
  position: absolute;
  content:  attr(data-tooltip);
  background: rgba(14, 14, 14, 0.922);
  border-radius: 4px;
  box-shadow: var(--n-shadow);
  width:  10rem;
  color: white;
  bottom: -50%;

 
  padding: 1rem;

  z-index: 10;
 
  
  transition: opacity 120ms ease-in-out;
  opacity: 0;

  pointer-events: none;    


}

.streak-nb {
  display: inline-block;
  font-weight: bolder;
 

}



.failed {
  animation: shakeRed 300ms ease;
  color: red;
}

.pop {
  animation: pop 200ms ease-out;
  color: green;
}


@keyframes pop {
  0% {
    transform: scale(0.7);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes shakeRed {
  0%   { transform: translateX(0); }
  20%  { transform: translateX(-3px); }
  40%  { transform: translateX(3px); }
  60%  { transform: translateX(-4px); }
  80%  { transform: translateX(4px); }
  100% { transform: translateX(0); }
}


@media screen and (max-width: 636px) {
  
  .question-section {
    font-size: 1rem;
    
  }

  .matrix-tile {
    font-size: 0.8rem;

  }

  .matrix-tile::after {
    font-size: 0.7rem;
    right: -40%;

  }

   transform: scale(1);
}



</style>