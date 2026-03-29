
<!-- Cool Edge Cases: Thinking about overlapping borders -->

<script  lang="ts">
    import { normalizeStyle } from "vue";


let entries = 2;
let animKey = 0;
let streak = 0
let currentIndex = 0;
let failed = false;
let failTimeout: ReturnType<typeof setTimeout>;

let isFlat = false
let notes = [
 "C",
 "C#",
 
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
]

let intervals = [
  "Unison",
  "Minor Second",
  "Major Second",
  "Minor Third",
  "Major Third",
  "Perfect Fourth",
  "Tritone",
  "Perfect Fifth",
  "Minor Sixth",
  "Major Sixth",
  "Minor Seventh",
  "Major Seventh"
]


// Get the last n elements 
// Concatenate them to the length - n elements
// [1,2,3,4,5] n = 1
// arr.slice(-1) -> [5]
// arr.slice(0, -1) -> [1,2,3,4]
// Result: [5,1,2,3,4]

function shiftLeft() {
  const first = notes[0];

  for (let i = 0; i < notes.length; i++) {
    notes[i] = notes[i + 1];
  }

  notes[notes.length - 1] = first;
}

function toggleAccidentals() {
  isFlat = !isFlat;
}

function formatNote(note: string, isFlat: boolean) {
  if (!isFlat) return note;

  switch (note) {
    case "C#": return "D♭";
    case "D#": return "E♭";
    case "F#": return "G♭";
    case "G#": return "A♭";
    case "A#": return "B♭";
    default: return note;
  }
}


function shiftRight() {
  const last = notes[notes.length - 1];

  for (let i = notes.length - 1; i > 0; i--) {
    notes[i] = notes[i - 1];
  }

  notes[0] = last;
}

function handleClick(idx: number) {
  if (idx === currentIndex) {
    streak += 1;
    animKey += 1;
    generateIndex();
  } else {
    streak = 0;
    failed = true;
    animKey = 0;
    clearTimeout(failTimeout);
    failTimeout = setTimeout(() => {
      failed = false;
    }, 300);
  }
}

// 12 notes, from  0 to 11 -> offset by 1 -> 1 to 11
// index 1 to length-1
function generateIndex() {
  currentIndex = Math.floor(1 + Math.random() * (notes.length - 1));

}

// Track anything used inside generateIndex
$: generateIndex();
// isFlat has to be watched for toggling
$: displayNotes = notes.map(note => formatNote(note, isFlat))

</script>





<div class="question-section">

Select the note at index {currentIndex}, a {intervals[currentIndex]} above {formatNote(notes[0], isFlat)}
</div>

<div class="array-wrapper">

<div class="array">

    
 
    <div class="music-container flex">
    {#each displayNotes as note, idx}
          <button on:click= {() =>handleClick(idx)} class="music-block">{note} </button>
    {/each}
    </div>

   

</div>

</div>


<div class="flex items-center justify-center mt-5">
 <button class="shift-btn " on:click={() => shiftLeft()}>←</button>
 <button class="accidentals-btn" on:click = {() => toggleAccidentals()} > {isFlat ? "Toggle Sharps" : "Toggle Flats"}</button>
 <button  class="shift-btn " on:click={() => shiftRight()}>→</button>
</div>
 
 <div class="streak-box" >
    
    Streak: 
    
      {#key animKey}
      <span class="streak-nb" class:pop={animKey > 0} class:failed={failed}>{streak}</span>
    {/key}

  </div>

<style>

.streak-nb {
  display: inline-block;
  font-weight: bolder;


}


.accidentals-btn{
       transition: color 200ms ease-in-out;
       cursor: pointer;
       transition: all 300ms cubic-bezier(0.215, 0.610, 0.355, 1);
}

.accidentals-btn:active, .shift-btn:active {
  transform: scale(0.97);

}
.shift-btn {
    font-size: 1.2rem;
    color: var(--light-soil-color);
    padding-right: 0.9rem;
    padding-left: 0.9rem;
    cursor: pointer;
    transition: all 300ms cubic-bezier(0.215, 0.610, 0.355, 1);

}

.shift-btn:hover, .accidentals-btn:hover {
    color: var(--soil-hover-color);
 

}
.array {
    display: flex;
   
    align-items: center;
  
    margin-top: 1rem;
    margin-right: 2rem;
}

.question-section {
  display: flex;
  gap: 1rem;
  align-items: baseline;
  justify-content: center;
  margin-top: 1rem;

  font-size: 1.2rem;
  

}

.failed {
  animation: shakeRed 300ms ease;
  color: red;
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


/* Pop is for success */

.pop {
  animation: pop 200ms ease-out;
  color: green;
}

.streak-box {
    margin-top: 1rem;
    font-weight: bold;
    color: var(--text-color);
    text-align: center;
     font-size: 1.2rem;
}
.music-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  
  button {
       box-shadow: var(--n-shadow);
  }
 

}


.music-block {

    width: 3rem;
    height: 3rem;
    align-content: center;
    text-align: center;
    border-top: 1px solid var(--dark-border-color);
    border-right: 1px solid var(--dark-border-color);
    border-bottom: 1px solid var(--dark-border-color);
    transition: box-shadow 200ms ease-in-out,  background-color 200ms ease-in-out, transform 0.12s cubic-bezier(0.34, 1.56, 0.64, 1);

    
  
}
.music-container .music-block:first-child {
  border-left: 1px solid var(--dark-border-color);
}


.music-block:hover {
 background: rgba(0, 128, 0, 0.422);
 box-shadow: 0 10px 30px rgba(0, 0, 0, 0.18),
    0 4px 30px rgba(0, 0, 0, 0.12);

}

.music-block:active {
  transform: scale(0.97);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

@keyframes shakeRed {
  0%   { transform: translateX(0); }
  20%  { transform: translateX(-3px); }
  40%  { transform: translateX(3px); }
  60%  { transform: translateX(-4px); }
  80%  { transform: translateX(4px); }
  100% { transform: translateX(0); }
}

.accidentals-btn {
    padding: 0.5rem 1rem;
    background-color: var(--light-soil-color);
     color: white;
     border-radius: 4px;
}


@media screen and (max-width: 636px) {
  
  .question-section {
    font-size: 1rem;

    
   
  
    
  }
}




</style>