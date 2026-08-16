<!-- Issues I ran into: span in inline-block elevated my element -->
<!-- Sometimes it's not an CSS issue, it's the mounting and unmounting -->
<!-- Transition delay only delays when the transition starts, not when text changes -->
<script>
  export let hex = "34C759FF";
  import { fade } from 'svelte/transition';
  let display = hex;
  let command = "Tap here to parse the hex string";
  let step = 0;
  let shiftIsActive = false;
  let commandVisible = true;
  let transformVisible = true;
  let highlightRed = false;
  let mask = ["00000000", "00000000", "00000000", "00000000", "00000000", "11111111"].join(" ");

  let transform = "Shift right by 24 bits to isolate red";
  let transformStep = 0;

  

  const toBits = (n) => n.toString(2).padStart(8, "0");

  function rgbaToBits(hexString) {
    const clean = hexString.replace(/^#|^0x/, "");
    return (clean.match(/.{1,2}/g) ?? [])
      .map((p) => toBits(parseInt(p, 16)))
      .join(" ");
  }

  function paddedBits() {
    return ["00000000", "00000000", ...rgbaToBits(hex).split(" ")].join(" ");
  }

  function setCommand(text) {
  commandVisible = false;
  setTimeout(() => {
    command = text;
    commandVisible = true;
  }, 400);


}

  function setTransform(text) {
  transformVisible = false;
  
  setTimeout(() => { transform = text; transformVisible = true; }, 600);
}

  let redBits = paddedBits();

  function handleHex() {
  step++;

  if (step === 1) {
      setTimeout(() => {
      setCommand("Separate components");
    }, 300); 
    
  } 
  else if (step === 2) {
    display = hex.match(/.{1,2}/g).join(" ");
    console.log(display)
    setCommand("Convert to 64 bits");
  } 
  else if (step === 3) {
    display = paddedBits();
    setCommand("Finish. Reset");
  } 
  else {
    step = 0;
    display = hex;
    setCommand("Tap here to parse the hex string");
  }
}




  function handleTransform() {
  transformStep++;
  shiftIsActive = true;
  highlightRed = false;

  if (transformStep === 1) {
    setTransform("And with 8-bit mask (0xFF)");
    highlightRed = true
  } else if (transformStep === 2) {
    const red = parseInt(hex.slice(0, 2), 16);
    redBits = `Store in a UInt64: ${toBits(red)}, (0x${hex.slice(0, 2)}), ${red}`;
    shiftIsActive = false;
    setTransform("Finish. Tap to reset");
    transformStep = -1;
  } else {
 
    transform = ("Shift right by 24 bits to isolate red");
    redBits = paddedBits();
    shiftIsActive = false;
 
  }
}
</script>


<div class="flex flex-col text-center hex-converter">
  <button on:click={handleHex} class="command-text" class:hidden-command={!commandVisible}>
    {command}
  </button>


  {#if step === 3}
    <div class="grid grid-cols-6 gap-4 text-center text-sm mt-2">
      <span class="col-span-2">Padding</span>
      <span>R</span><span>G</span><span>B</span><span>A</span>
    </div>
    
    <div class="grid grid-cols-6 gap-4 text-center mt-1 ">
      {#each display.split(" ") as block, i}
        <span class={i < 2 ? "opacity-50" : ""}>{block}</span>
      {/each}
    </div>
    <br />

  {:else}
    <div class="flex items-center justify-center">

    <span class="hash" class:slashing={step > 0 } >#</span>

    


 {#each display.split(" ") as block, i}
       <span class:separate={step ==2 }>{block}</span>
  {/each}
</div>
  {/if}
</div>

<br />

<p>Getting red requires shifting the number right by 24 bits and using an 8-bit mask. The logic ensues for the other channels.</p>
<br/>
<div class="hex-converter flex flex-col">
  <button on:click={handleTransform} class="command-text" class:hidden-command={!transformVisible}>
  {transform}
  </button>

  <div class="zazou-container">
  <div class="zazou flex gap-4 mt-1" class:shift-active={shiftIsActive}>
    <span class="pad-zero" class:hidden={transformStep == 2} class:visible={shiftIsActive}>00000000</span>
    <span class="pad-zero" class:visible={shiftIsActive}>00000000</span>
    <span class="pad-zero" class:visible={shiftIsActive}>00000000</span>

    {#each redBits.split(" ") as block, i}
      <div class:final-step={transformStep == -1}>
        <span
          class="bit-group-{i}"
          class:red-highlight={highlightRed}
          class:isActive={transformStep === 1}
          class:opacity-50={i < 2}
          class:fade-group={shiftIsActive && i >= 3}
        >
          {block}
        </span>
      </div>
    {/each}
  </div>
 </div>

  <div class:isShown={transformStep == 1} class="zazou2 flex gap-4 mt-1">
    {#each mask.split(" ") as block, i}
      <span class={i < 5 ? "opacity-50" : ""}>{block}</span>
    {/each}
  </div>
</div>

<style>
  .hex-converter {
    padding: 1rem;
    font-size: 1.1rem;
    font-family: monospace;
    height: 7rem;
    border: 0.5px solid var(--dark-border-color);
    border-radius: 4px;
    overflow: hidden;
    box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  
  }

  .hex-display {
    font-size: 1.3rem;
    position: relative;
    display: flex;
    justify-content: center;
    opacity: 1;
    transition: opacity 200ms ease-in-out 1s;
  }

  .inactive {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .command-text {
  cursor: pointer;
  transition: color 200ms ease-in-out, opacity 200ms ease-in-out;
}

 
  .command-text.hidden-command{
    opacity: 0;
  }

  .command-text:hover {
    color: var(--soil-color-light);
  }



.hash.slashing,
.ox.slashing {
  opacity: 0;
  transition: opacity 600ms ease;
}

.hash, .ox {
  position: relative;
}





  .hash::after, .ox::after {
  content: "";
  position: absolute;
  top: 0.35em;
  left: -10%;
  height: 2px;
  width: 0%;
  background: #ff3b30;
  transform: rotate(45deg);
  transform-origin: left center;
  transition: width 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.hash.slashing::after, .ox.slashing::after 
{ width: 150%; 
}



.bit-group-2.red-highlight{

  color: red;
  transition: color ease 200ms 0.6s;
  
}




  .zazou {
    position: relative;
    transition: transform 0.6s ease-in-out;
    transform: translateX(-45%);
  }

  .zazou-container {
    transition: opacity 200ms ease;
  }

  .zazou2 {
    position: relative;
    transform: translateX(4%);
    opacity: 0;
    transition: opacity 100ms ease-in-out;
  }

  .isShown {
    opacity: 1;
    transition: opacity 200ms ease-in-out 0.6s;
  }

  .zazou.shift-active {
    transform: translateX(4%);
    transition: transform 600ms ease-in-out;
  }

  .final-step span {
    color: inherit !important;
    opacity: 1;
  }

  .fade-group {
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
  }

  .separate {
    margin: 0 0.5rem;
    transition: margin 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .pad-zero {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .pad-zero.visible {
    opacity: 0.5;
  
  }

  .invisible {
  opacity: 0;
}
</style>