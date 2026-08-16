<!-- Logic: Roll and Pick -->

<!-- Edge cases:
 1. Clicking the correct tile multiple times
 2. Removing wrong class 
 
 -->
 


<script  lang="ts">

  import { onMount } from "svelte";
  import {
	slide,
	fade,

} from 'svelte/transition';
  function handleKeydown(e: KeyboardEvent) {
    if (e.key.toLowerCase() === "r") {
      generateRolls();
    }
  }
      // Doesn't run during SSR, so safe to access window
      onMount(() => {
      window.addEventListener("keydown", handleKeydown);
      return () => window.removeEventListener("keydown", handleKeydown);
    });

  let tileWidth = "3rem";
  let tileHeight = "5rem";
  let cornerWidth = "5rem"
  let cornerHeight = "5rem";
  let diceCount = 1;
  let nextTile = 0;
  let answer = 0;
  let streak = 0;
  let rollKey = 0;

  let isRollActive = false;
  let answerTimer: ReturnType<typeof setTimeout>;
  let prevPosition = 0;
  let feedbackIndex: number | null = null;
  let feedbackCorrect = false;
  var debug = false
  let showAnswer = false
  var rolls: number[] = []
  let animKey = 0;
  let failed = false;
  let failTimeout: ReturnType<typeof setTimeout>;

  async function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const tile = target.closest('.tile') as HTMLElement;
    if (!tile) return;

    const index = Number(tile.dataset.index);


    feedbackIndex = index;
    feedbackCorrect = index === nextTile;


    // We don't want the user to click the correct tile many times.
    if (prevPosition == index) {
      feedbackIndex = null
      return
    }
    if (feedbackCorrect) {
 
      showAnswer = true;
      animKey +=1
      clearTimeout(answerTimer)

      answerTimer = setTimeout(() => {
     
      feedbackIndex = null
      showAnswer = false;
       }, 600);

      prevPosition = index
      streak += 1
  
   } else {
      streak = 0
      animKey = 0;
      failed = true;
      clearTimeout(failTimeout);
      failTimeout = setTimeout(() => {
        failed = false;
      }, 300);
      // missing this:
      answerTimer = setTimeout(() => {
        feedbackIndex = null
      }, 600);
}

}
  
  function resetBoard() {
    nextTile = 0;
    prevPosition = 0;
    feedbackIndex = null;
    animKey = 0;
    feedbackCorrect = true;
    streak = 0;
    isRollActive = false;
    
  }


  function rollDie() {
    return Math.floor(Math.random() * 6) + 1
  }

  function generateRolls() {
    rollKey +=1 
    if (isRollActive) {
      prevPosition = nextTile

    }
    rolls = []
    showAnswer = false;
    isRollActive = true;
   
    for (let i = 0; i < diceCount; i++) {
        let currentRoll = rollDie()
        rolls.push(currentRoll);
        nextTile += currentRoll 
        nextTile %= 40;
    
    }

}


  
</script>



<div
  class="board"
  role="button"
  tabindex="0"
  on:click={handleClick}
    on:keydown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
        handleClick(e);
    }
    }}
>

  <!-- TOP ROW -->
  <!-- TILES 0 TO 10 (11 TOTAL) -->
  <div class="row top">
    <!-- Tile 0 -->
    <div class="tile corner" 
  
    data-index=0 
    
    class:dot-top= {prevPosition == 0}
    class:dot= {prevPosition == 0}
    class:correct={feedbackIndex === 0 && feedbackCorrect}
    class:wrong={feedbackIndex === 0 && !feedbackCorrect}
    class:active-tile={nextTile==0 && debug} style="width:{cornerWidth}; height:{cornerHeight};"></div>

    <!-- Control tiles 1-9 -->
    {#each Array(9) as _, i}
 
        <div data-index={i+1}
        
         class:dot-top= {prevPosition == i+1}
         class:dot= {prevPosition == i+1}
         class:correct={feedbackIndex === i+1 && feedbackCorrect}
         class:wrong={feedbackIndex === i+1 && !feedbackCorrect}
         class:active-tile={nextTile==i+1 && debug}  
         style="width:{tileWidth}; height: {tileHeight}" class="tile"></div>
    {/each}

     <!-- Tile 10 -->
    <div data-index=10 
     class:dot-top= {prevPosition == 10}
     class:dot= {prevPosition == 10}
     class:correct={feedbackIndex === 10 && feedbackCorrect}
    class:wrong={feedbackIndex === 10 && !feedbackCorrect}
    class="tile corner" class:active-tile={nextTile==10 && debug}  style="width:{cornerWidth}; height:{cornerHeight};"></div>
  </div>

  

  <!-- MIDDLE -->
  <div class="middle">

 
  

  


    <div class="column left">

      <!-- Control tiles 31-39 -->
      {#each Array(9) as _, i}
          <div data-index={39-i} 
           
          class:dot-left= {prevPosition == 39-i}
           class:dot= {prevPosition == 39-i}
           class:correct={feedbackIndex === 39-i && feedbackCorrect}
           class:wrong={feedbackIndex === 39-i && !feedbackCorrect}
          class:active-tile={nextTile==39-i && debug}  style="width:{tileHeight}; height: {tileWidth}" class="tile"></div>
      {/each}

      
    </div>

    

    <div class="center">
 
  <div class="die-instructions">
     
   
    {#if isRollActive}
    <div class="dice-grid">
       {#each rolls as roll,i}
                {#key rollKey}
        <div style="animation-delay: {i * 0.05}s" class="dice-box"in:slide|global={{axis:'y' , duration: 300, delay: 50 + i * 50 }}  >
        <!-- Have to check why I needed global here -->
          <span >{roll}</span>
        </div>
      {/key}
           
       {/each}
      
    </div>
    {/if}

      

   
    </div>
    </div>

   
    


    <div class="column right">
      <!-- Control tiles 11-19 -->
      {#each Array(9) as _,i}

        
        <div 
        class:dot-right = {prevPosition == i+11}
        class:dot= {prevPosition == i+11}
        class:correct={feedbackIndex === i+11 && feedbackCorrect}
        class:wrong={feedbackIndex === i+11 && !feedbackCorrect}
        data-index={i+11} class:active-tile={nextTile==i+11 && debug}  style="width:{tileHeight};  height: {tileWidth}" class="tile"></div>
      {/each}
    
    </div>

  </div>

  <!-- BOTTOM ROW -->
   <!-- Tricky part here is that the directions are in the opposite directiom because HTML thinks it's -> -->
  <div class="row bottom">
    <div class="tile corner"
     class:dot-bottom = {prevPosition == 30}
     class:dot= {prevPosition == 30}
     class:correct={feedbackIndex === 30 && feedbackCorrect}
    class:wrong={feedbackIndex === 30 && !feedbackCorrect}
     data-index=30 class:active-tile={nextTile==30 && debug}   style="width:{cornerWidth}; height:{cornerHeight};"></div>

    {#each Array(9) as _, i}
          <!-- Control tiles 21-29 -->
        <div

         class:dot-bottom = {prevPosition == 29-i}
         class:dot= {prevPosition == 29-i}
         class:correct={feedbackIndex === 29-i && feedbackCorrect}
         class:wrong={feedbackIndex === 29-i && !feedbackCorrect}
         data-index={29-i} class:active-tile={nextTile==29-i && debug}  style="width:{tileWidth}; height: {tileHeight}" class="tile"></div>
    {/each}

    
    <div class="tile corner"
     class:dot-bottom = {prevPosition == 20}
     class:dot= {prevPosition == 20}
     class:correct={feedbackIndex === 20 && feedbackCorrect}
    class:wrong={feedbackIndex === 20 && !feedbackCorrect}
     data-index=20  class:active-tile={nextTile==20 && debug}  style="width:{cornerWidth}; height:{cornerHeight};"></div>
  </div>

</div>


  <div class="flex gap-2 justify-center mt-5">
  <button id="roll-btn" on:click={generateRolls}> Roll </button>
 <button id="reset-btn" on:click={resetBoard}> Reset </button>
  </div>

    <div class="flex justify-center  p-2">
        Select number of dice:
        <select class="select-box" bind:value={diceCount}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        </select>
        </div>

 <div class="streak-box" >Streak: 
     
      {#key animKey}
      <span class="streak-nb" class:pop={animKey > 0} class:failed={failed}>{streak}</span>
       {/key}
  </div>
<style>



.board {
  display: flex;
  /* This is the magic, why didn't 100% work */
  width: fit-content;
  flex-direction: column;
 

  border: 1px solid var(--dark-border-color);
 

}

.row {
  display: flex;
  flex-grow: 3;


 

}


.center {
  width: 100%;

}

.middle {
  display: flex;
  justify-content: space-between;
  
  

}



.column {
  display: flex;
  flex-direction: column;

}


.tile {

  transition: transform 100ms ease-in-out, background-color 100ms ease-in-out;
}

.top .tile {
  border-right: 1px solid var(--dark-border-color);
  border-bottom: 1px solid var(--dark-border-color);

}

.top .tile:last-child {
  border-right: none;
}

.bottom .tile:last-child {
  border-right: none;
}

.right .tile {
  border-left: 1px solid var(--dark-border-color);
  border-bottom: 1px solid var(--dark-border-color);

}

.right .tile:last-child {
  border-bottom: none;
}

.left .tile:last-child {
  border-bottom: none;
}

.left .tile {
  border-right: 1px solid var(--dark-border-color);
  border-bottom: 1px solid var(--dark-border-color);

}

.bottom .tile {
  border-right: 1px solid var(--dark-border-color);
  border-top: 1px solid var(--dark-border-color);

}



#roll-btn , #reset-btn{
    margin: 1rem 0;
     padding: 0.5rem 1rem;
     background-color: var(--light-soil-color);
     color: white;
     border-radius: 4px;
     width: 6rem;
     align-self: center;
   
     cursor: pointer;
     box-shadow: var(--n-shadow);
     transition: all 300ms cubic-bezier(0.215, 0.610, 0.355, 1);
}

.dice-grid {
  display: flex;
  justify-content: center;
  height: 100%;
  
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;


  
}

.select-box {
  
    border: 1px solid var(--dark-border-color);
    padding-left: 0.1em;
    border-radius: 4px;
    margin-left: 0.4rem;
}

.die-instructions {

  width: 100%;
  height: 100%;

  justify-content: center ;
  display: flex;
  flex-direction: column;



}


.streak-nb {
  display: inline-block;
  font-weight: bolder;
 

}

.dice-box {
  width: 3.5rem;
  height: 3.5rem;
  font-size: 1.4rem;
  margin-top: 1rem;
  align-content: center;
  text-align: center;
  border:  2px solid var(--dark-border-color);
  box-shadow: var(--n-shadow);  
  border-radius: 4px;
  animation: diceroll 300ms cubic-bezier(0.215, 0.610, 0.355, 1);

}

.active-tile {
  position: relative;
    background-color: var(--soil-color-light);
}
.active-tile::after {
    content: "";
    position: absolute;
    top: 0.35em;
    left: -10%;
    height: 2px;
    width: 120%;
    background: rgba(255, 59, 48, 0.8);
    transform: rotate(45deg);
}

.correct {
position: relative;
background-color: #4CAF50;
transition: all 100ms cubic-bezier(0.215, 0.610, 0.355, 1);
}

.correct::after {
    content: "";
    position: absolute;
}

.wrong{

  background-color: #F44336;
  transition: all 300ms cubic-bezier(0.215, 0.610, 0.355, 1);
}

.dot{

  position: relative;
  transition: all 300ms cubic-bezier(0.215, 0.610, 0.355, 1);

}


/* TOP TILES */
/* Circle in the middle (T-50, L-50) and body (15 units apart, and aligned) */

/* LEFT TILES */
/* Circle stays the same but the body has to move*/




.dot:after {
    content: "";
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: var(--dark-border-color);
    border-radius: 50%;
}



.dot:before {
    content: "";
    position: absolute;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 13px;
    background-color: var(--dark-border-color);
    border-radius: 2px 2px 0 0;
}




/* Top becomes the measurement for centering */
.dot.dot-left::after {
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.dot.dot-left::before {
  top: 50%;
  left: 57%;
  width: 13px;
  height: 10px;
  transform: translate(-50%, -50%);
  border-radius: 2px 0 0 2px;
}

.dot.dot-right::after {
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
}

.dot.dot-right::before {
  top: 50%;
  left: 43%;
  width: 13px;
  height: 10px;
  transform: translate(-50%, -50%);
  border-radius: 0px 2px 2px 0px;
}

.dot.dot-bottom::after {
  top: 60%;
  transform: translate(-50%, -50%);
}

.dot.dot-bottom::before {
  top: 43%;
  transform: translate(-50%, -50%);
  border-radius: 0px 0px 2px 2px;
}


/* What a beast code */
/* Hover effect only if the tile is neither correct nor wrong. */
.tile:not(.correct):not(.wrong):hover {
   background: rgba(0, 128, 0, 0.422);
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18),
    0 4px 30px rgba(0, 0, 0, 0.12);
}

.streak-box {

    text-align: center;
    font-weight: bolder;
     font-size: 1.2rem;
}


#reset-btn {
  
   transition: color 200ms ease-in-out;

}


#roll-btn:hover, #reset-btn:hover {
    color: var(--soil-hover-color);
}

#roll-btn:active, #reset-btn:active {
  transform: scale(0.97);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);

}
.tile:active {
  transform: scale(0.97);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}


.failed {
  animation: shakeRed 300ms ease;
  color: red;
}

.pop {
  animation: pop 200ms ease-out;
  color: green;
}

/* I needed the global, to scope both */
:global(html.dark) .dot::after,
:global(html.dark) .dot::before {
  background-color: rgba(255, 255, 255, 0.727);
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


@keyframes diceroll {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-3px); }
  100% { transform: translateY(0px); }

}





</style>