<script>
  let r = 0;
  let g = 0;
  let b = 0;
  let alpha = 0;

  // Converts the number to binary and adds the appropriate padding
  // Pad start always matches the length you want (it's not adding 8 zeros)
  const toBinary = (n) => n.toString(2).padStart(8, "0");
  const toHex = (n) => n.toString(16).toUpperCase().padStart(2, "0");
  const toRGBA = (v) => Math.round(v * 255);
</script>

<div class="grid p-5 gap-4 grid-cols-4">

  <!-- Slider -->
  <div class="box">
    <div class="box-title">Slider</div>
    <div class="numeric-box">
      <label>R: {r}<input type="range" bind:value={r} min="0" max="255" /></label>
      <label>G: {g}<input type="range" bind:value={g} min="0" max="255" /></label>
      <label>B: {b}<input type="range" bind:value={b} min="0" max="255" /></label>
      <label>Alpha: {alpha}<input type="range" bind:value={alpha} min="0" max="1" step="0.01" /></label>
    </div>
  </div>

  <!-- Binary -->
  <div class="box">
    <div class="box-title">Binary</div>
    <div
      class="numeric-box"
      style="background-color: rgba({r}, {g}, {b}, {alpha});"
    >
      <span>R: {toBinary(r)}</span>
      <span>G: {toBinary(g)}</span>
      <span>B: {toBinary(b)}</span>
      <span>A: {toBinary(toRGBA(alpha))}</span>
    </div>
  </div>

  <!-- Hex -->
  <div class="box">
    <div class="box-title">Hex</div>
    <div
      class="numeric-box"
      style="background-color: rgba({r}, {g}, {b}, {alpha});"
    >
      <span>R: {toHex(r)}</span>
      <span>G: {toHex(g)}</span>
      <span>B: {toHex(b)}</span>
      <!-- Alpha varies from 0 to 1, we must multiply it by 255 -->
      <span>A: {toHex(toRGBA(alpha))}</span>
    </div>
  </div>

  <!-- SwiftUI -->
  <div class="box">
    <div class="box-title">SwiftUI</div>
    <div
      class="numeric-box"
      style="background-color: rgba({r}, {g}, {b}, {alpha});"
    >
      <!-- toFixed: returns a String of decimal number with the desired amount in fixed point notation -->
      <span>Color(red: {(r / 255).toFixed(2)},</span>
      <span>green: {(g / 255).toFixed(2)},</span>
      <span>blue: {(b / 255).toFixed(2)},</span>
      <span>opacity: {alpha.toFixed(2)})</span>
    </div>
  </div>

</div>

<style>
  .grid {
    align-items: stretch;
  }

  .box {
    display: flex;
    flex-direction: column;
  }

  .box-title {
    font-weight: 600;
    margin-bottom: 8px;
    text-align: center;
  }

  .numeric-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    font-size: 1.2rem;
    border: 0.5px solid var(--dark-border-color);
    border-radius: 4px;
    min-height: 200px;
    box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    gap: 4px;
  }

  input[type="range"] {
    width: 100%;
  }
</style>