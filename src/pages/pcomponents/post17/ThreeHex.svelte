<script>
  export let hex = "ABC";

  const toBits = (n) => n.toString(2).padStart(8, "");

  function rgbaToBits(hexString) {
    const clean = hexString.replace(/^#|^0x/, "");
    
    return (clean.match(/.{1,1}/g) ?? [])
      .map((p) => toBits(parseInt(p, 16)))
      .join(" ");
  }

  function paddedBits() {
    return ["0000", "0000", "0000", "0000", "0000", "0000", "0000", "0000", "0000", ...rgbaToBits(hex).split(" ")].join(" ");
  }
</script>

<div class="hex-converter">
    <div class="grid grid-cols-12 gap-4 text-center text-sm mt-2">
  <span></span> <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span><span></span><span></span></span><span>R</span><span>G</span><span>B</span>
    </div>
 <div class="grid grid-cols-12 gap-4 text-center text-sm mt-2">
   {#each paddedBits().split(" ") as block, i}
      <span class="three-hex-bits">{block}</span>
    {/each}
  </div>
</div>

<style>
 .hex-converter {
    padding: 1rem;
    font-size: 1.0rem;
    font-family: monospace;
    height: 7rem;
    text-align: center;
    align-content: center;
    border: 0.5px solid var(--dark-border-color);
    border-radius: 4px;
    overflow: hidden;
    box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  
  }

  .three-hex-bits {

    margin-right: 0.5rem;

  }
  </style>