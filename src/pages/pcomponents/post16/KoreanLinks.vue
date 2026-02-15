<!-- If your component isn't reactive, check if you have : -->
<template>
  
    <div v-if="debug" class="debug-controls">
    <div>
      <label>viewBoxX: {{ viewBoxX }}</label>
      <input type="range" v-model.number="viewBoxX" min="100" max="600" step="10">
    </div>
    <div>
      <label>viewBoxY: {{ viewBoxY }}</label>
      <input type="range" v-model.number="viewBoxY" min="100" max="500" step="10">
    </div>
    <div>
      <label>viewPortX: {{ viewPortX }}</label>
      <input type="range" v-model.number="viewPortX" min="100" max="600" step="10">
    </div>
    <div>
      <label>viewPortY: {{ viewPortY }}</label>
      <input type="range" v-model.number="viewPortY" min="100" max="500" step="10">
    </div>
    <div>
      <label>minX: {{ minX }}</label>
      <input type="range" v-model.number="minX" min="-200" max="100" step="5">
    </div>

     <div>
      <label>textSize: {{ textSize }}</label>
      <input type="range" v-model.number="textSize" min="-200" max="100" step="5">
    </div>
  
  </div>

  <button
  v-if="showDebug"
  class="absolute text-5xl top-[50%] right-[10%]"
  @click="debug = !debug"
>
  {{ debug ? 'Hide Debug' : 'Show Debug' }}
</button>
  &nbsp;
  

  <div class=" text-center  grid sm:grid-cols-1 p-2 gap-10">
    
  <div class="word-box" v-for="word in koreanWords" :key="word.id">
    
   
    <p  class=" worddefo absolute left-1/2 -translate-x-1/2 text-center">{{  word.definition }}</p>
    <div></div>
      
    <!-- Viewbox: If you have an SVG element with width X and height Y, your elements will scale by ( X / Viewbox X ) and ( Y / Viewbox Y ) -->
    <!-- Your x and y's inside the svg are based on the viewbox, 0 0 100 100 means your X goes from 0 to 100 and Y goes from to 100 -->
  <svg  :class="{ 'debug-border': debug }" class="preceding-svg" :viewBox="`${minX-10} ${minY } ${viewBoxX} ${viewBoxY}`" :width="viewPortX" :height="viewPortY">
      
  <!-- Diagonal -->
   <!-- xy, y2 is the center of the ViewBox -->
   <!-- You only have to control y1 -->
  <line v-for="(preceding_word,index) in word.preceding_words" :key="preceding_word" :style="{ animationDelay: (index * 0.1) + 's' }" :class="['connector-line-svg']" v-if="word.showPreceding" 
 
       :x1= "viewBoxX/3 "
      :y1="((viewBoxY  / (word.preceding_words.length - 1)) * (index ))  "
      :x2="viewBoxX - 12"
      :y2="viewBoxY / 2"
      stroke="var(--soil-color-light)"
      
  
      stroke-linecap="round"
      :stroke-width="strokeWidth" />

  
  <text
  v-for="(preceding_word, index) in word.preceding_words"
  :key="'text-' + preceding_word"
  :x="viewBoxX / 3 - 10"
  :y="(viewBoxY / (word.preceding_words.length - 1)) * index"
  class="preceding-word"
  :style="{ animationDelay: (index * 0.1) + 's' }"
  :font-size="textSize"
  text-anchor="end"
  dominant-baseline="middle"
  v-if="word.showPreceding"
>
  {{ preceding_word }}
</text>

  

</svg>

 <div :class="{ 'debug-border': debug }" class="actions-menu">
         <div :class="{ 'debug-border': debug }" class="anchor-word">

           <button :class="{buttonIsActive: word.showPreceding}" class="preceding-button" @click="word.showPreceding = !word.showPreceding">
            P
          </button>
        
          {{ word.word }}

          <button :class="{buttonIsActive: word.showFollowing}" class="following-button" @click="word.showFollowing = !word.showFollowing">
            F
          </button>
     
        </div>

      </div>



        <svg  :class="{ 'debug-border': debug }" class="following-svg" :viewBox="`${minX} ${minY } ${viewBoxX} ${viewBoxY}`" :width="viewPortX" :height="viewPortY">
      
  <!-- Diagonal -->
   <!-- xy, y2 is the center of the ViewBox -->
   <!-- You only have to control y1 -->
  <line v-for="(following_word,index) in word.following_words" :key="following_word" :style="{ animationDelay: (index * 0.1) + 's' }" :class="['connector-line-svg']" v-if="word.showFollowing" 
 
       :x1= "viewBoxX * 2/3"
      :y1="((viewBoxY  / (word.following_words.length - 1)) * (index ))  "
      :x2="2"
      :y2="viewBoxY / 2"
      stroke="var(--soil-color-light)"
    
      stroke-linecap="round"
      :stroke-width="strokeWidth" />

  
  <text
  v-for="(following_word, index) in word.following_words"
  :key="'text-' + following_word"
  :x="viewBoxX * 2 /3  + 10"
  :y="(viewBoxY / (word.following_words.length - 1)) * index"
  class="following-word"
  :style="{ animationDelay: (index * 0.1) + 's' }"
  :font-size="textSize"
  text-anchor="start"
  dominant-baseline="middle"
  v-if="word.showFollowing"
>
  {{ following_word }}
</text>

  

</svg>
 
   
    

    <!-- Right column: following words -->
  

  </div>
  </div>
</template>

<script setup lang="ts">
import { ref,watchEffect } from 'vue';

const debug = ref(false)
const showDebug = ref(false)
const textSize = ref(45)
const minX = ref(0)
const strokeWidth = ref(5)
const minY = ref(0)
const viewBoxX = ref(490)
const viewBoxY= ref(270)
const viewPortX = ref(250)
const viewPortY = ref(200)

const koreanWords = ref([
  {
    id: 1,
    word: '시대',
    definition: "times, 時代",
    preceding_words: ["급변하는", "산업혁명", "고대", "석기", "정보화"],
    following_words: ["바꾸다", "변하다", "당도하다"],
    showPreceding: false,
    showFollowing: false
  },

   {
    id: 2,
    word: '문제',
     definition: "problem, 問題",
    preceding_words: ["어려운", "쉬운", "복잡한", "개인적인", "공공의"],
    following_words: ["풀다", "해결하다", "생기다", "발현되다"],
    showPreceding: false,
    showFollowing: false
  },

   {
    id: 3,
    word: '경험',
    definition: "experience, 経験",
    preceding_words: ["아름다운", "감정적인", "끔찍한"],
    following_words: ["하다", "겪다", "주다", "선사하다"],
    showPreceding: false,
    showFollowing: false
  },

  {
    id: 4,
    word: '정책',
    definition: "policy, 政策",
    preceding_words: ["환경", "정부", "경제",  "사회", ],
    following_words: ["변경하다", "평가하다", "수립하다", "개정되다"],
    showPreceding: false,
    showFollowing: false
  },
]);


watchEffect(() => {
  
}
)

</script>

<style>


/* Remember by default: flex is no-wrap */
.word-box {
   position: relative;
  display: flex;
  
 
  border: 1px ridge var(--dark-border-color);
  border-radius: 4px;
  padding: 0.1rem;
  flex-wrap: wrap;


}

@media screen and (max-width: 635px) {
  .preceding-svg,
  .preceding-button,
  .following-button,
  .following-svg {
    display: none;
  }
  .actions-menu {
    padding: 1rem;
  }
  .worddefo {
    top: 30%;
 
  }
  
}

/* Line turns into 1000 lines separated by 1000 units */
/* Dash array makes the stroke extremly long, and you offset it so you don't see the SVG anymore */
/* When you reduce the offset to 0, the line shows */
.connector-line-svg {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 0.8s cubic-bezier(0.5, -0.71, 0.7, 0.34) forwards;

}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}


.preceding-svg {
  
  position: relative;
  z-index: -2;

}

.following-svg {


  position: relative;
  z-index: -2;


}



.word-container {
  width: 100%;
}
.actions-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 1.7rem;
  padding: 
  
}

.preceding-button, .following-button {
  position: relative;
  width: 2rem;
  height: 2rem;
  font-size: 0.9rem;
  border-radius: 50%;
  border: 2px solid var(--soil-color-light);
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 


}

.preceding-button:hover, .following-button:hover {
  transform: scale(0.8);
}

.preceding-button:hover::after, .following-button:hover::after {
  transform: translate(0,0);
  
}

.preceding-button:hover::before, .following-button:hover::before {
  transform: translate(0,0);
  
}

/* Leave the before and after on active */

.following-button.buttonIsActive::before,
.following-button.buttonIsActive::after,
.preceding-button.buttonIsActive::before,
.preceding-button.buttonIsActive::after {
  transform: translate(0,0);
}



/* You need top and bottom, otherwise the browser places it where it wants to */
.preceding-button::after, .following-button::after{
  position: absolute;
  content: "";
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transform: translate(1.5rem,1.5rem);
  border-radius: 50%;
  background-color: var(--soil-color-light);
  opacity: 0.2;
  transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1) 


}

.preceding-button::before, .following-button::before{
  position: absolute;
  content: "";
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translate(-1.5rem,-1.5rem);
  border-radius: 100%;
  background-color: var(--soil-color-light);
  opacity: 0.3;
  transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 
  
}

.debug-border {

  border: 1px solid gray;
  
}

.preceding-word {
  opacity: 0;
  transform: translateX(-10px);
  animation: fadeInSlide 0.4s cubic-bezier(0.5, -0.71, 0.7, 0.34) forwards;
}

.following-word {
  opacity: 0;
  transform: translateX(10px);
  animation: fadeInSlide 0.2s cubic-bezier(0.5, -0.71, 0.7, 0.34) forwards;
}

@keyframes fadeInSlide {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

html.dark .preceding-word, .following-word {
  fill: #f9f9f4;
}


.preceding-word.show {
    opacity: 1;
    transform: translateX(0);
}

html.dark .preceding-word {
   fill: #f9f9f4;

}



.anchor-word {


  display: flex;
  align-items: center;
  gap: 0.5rem;

  
}




.word-pop-enter-active,
.word-pop-leave-active {
  transition: opacity 0.5s ease;

}

.word-pop-enter-from,
.word-pop-leave-to {
  opacity: 0;
}




</style>