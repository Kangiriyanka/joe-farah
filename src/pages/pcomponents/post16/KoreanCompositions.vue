
<template>



 <div class="text-picker ">

  <!-- Picker -->
   <div class="">
  <label class="text-lg " for="koreanCompoSelect">Select a text:
  </label>
  
  <select  id="koreanCompoSelect" v-model="currentID">
    <option  v-for="t in texts" :key="t.id" :value="t.id">
      {{ t.title }}
    </option>
  </select>
  </div>

  <!-- Buttons -->
  <div class="ml-auto">
    <button id="zoom-btn" @click="decreaseZoom">

      <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     width="24"
     height="24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <!-- glass -->
  <circle cx="11" cy="11" r="7"/>
  <!-- handle -->
  <line x1="16.65" y1="16.65" x2="21" y2="21"/>
  <!-- minus sign -->
  <line x1="8" y1="11" x2="14" y2="11"/>
</svg>
    </button>
    <button id="unzoom-btn" @click="increaseZoom"><svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     width="24"
     height="24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <circle cx="11" cy="11" r="7"/>

  <line x1="16.65" y1="16.65" x2="21" y2="21"/>

  <line x1="11" y1="8" x2="11" y2="14"/>
  <line x1="8" y1="11" x2="14" y2="11"/>
</svg></button>
  </div>
</div>

<!-- What a sick method to highlight words -->
<!-- Mode out-in makes the div completely leave before animating again  -->
 <Transition name="textchange" mode="out-in">
  <div :key="currentID" class="text-wrapper">
 <p  :style="{ fontSize: fontSize + 'rem' }" class="korean-compo">
  <span 
    v-for="(wordObj, index) in processedWords" 
    :key="index"
    :class="[colorDict[index]]"
  >
    {{ wordObj.text }}
  </span>

</p>
</div>
</Transition>

  <div class="word-dashboard">

    <button 
  @click="toggleNouns" 
  :class="['word-button', { active: nounsToggled }]" 
  id="nouns-button"
>
  Nouns
</button>

<button 
  @click="toggleAdjectives" 
  :class="['word-button', { active: adjectivesToggled }]" 
  id="adjectives-button"
>
  Adjectives
</button>

<button 
  @click="toggleVerbs" 
  :class="['word-button', { active: verbsToggled }]" 
  id="verbs-button"
>
  Verbs
</button>


<button 
  @click="toggleAdverbs" 
  :class="['word-button', { active: adverbsToggled }]" 
  id="adverbs-button"
>
  Adverbs
</button>






  </div>
 
     

</template>




<script setup lang="ts">




import { ref, computed, watch } from 'vue'


// Backticks for multiline
const texts = ref([{
  id: "1",
  title: "Can robots replace us?",
  text: `급변하는 현대사회에서는 기술의 발전 덕분에 일의 효율성이 높아졌다. 그 중에 로봇이 중요한 역할을 가지고 있다. 로봇은 어렵고 복잡한 일을 효율적이고 정확하게 처리할 수 있기 때문이다. 이러한 특성으로 인해 사회의 많은 부분과 직업들이 로봇으로 대체되어 왔다. 예를 들어 계산원이나 은행원 같이 단순한 계산 업무들은 무인 기계들로 대체되며 사라지고 있는 대표적인 직업이다. 로봇이 인간을 대신 못하는 직업이 무엇일까?

로봇은 감정이 없기 때문에 감정을 느끼고 공감이 필요한 직업은 대체하기 어렵다. 이와 같은 직업은 대표적으로 간호사와 선생님이 대표적이다. 예를 들어 학생들은 어려움이 있을 때 선생님과 상담을 통해 공감을 받고 조언을 얻을 수 있다. 게다가 환자들은 치료를 받을 때 건강상태에 대해 간호사에게 위로와 공감을 받을 수 있다.

로봇 기술이 사회의 많은 부분을 대체하고 있는 시대에서 경쟁력을 갖추기 위하여 우리는 로봇 기술과 특성에 대해 많이 배우고 이해해야 한다. 특히 로봇이 대체할 수 없는 특성인 공감이라는 인간만의 특성을 발전시켜야 할 것이다. 또한, 로봇 기술과 인간이 공존하기 위해서 로봇을 어떻게 활용할 것인지와 로봇과 어떻게 협력할 지 고려해야 한다.`



}
, {id: "2",
  title: "The consequences of focusing on results",
  text: `일을 할 때 결과만 얻는 것이 좋은 것이라고 생각하는 사람이 있는 반면에 결과만에 집중하는 것이 안 된다고 생각하는 사람도 있다. 결과에 집착하는 사람들이 돈이나 칭찬 같은 외전적인 동기가 많다. 또 경쟁적인 사회에서는 최대한 이익이나 성과를 얻기위해 과정에 집중한다는 시간을 단축하여 결과를 중시한다. 그러나 이렇게 하면 어떤 문제를 초래할까?
  
결과만을 집중하는 사람들은 무엇보다 스트레스를 많이 축적하고 몸을 해로울 수 있는 위험이 있다. 주변의 기대를 부응하는 것이 좋지만 일을 하면서 반드시 바람직한 결과를 얻을 수 없다. 나쁜 결과에 직면한다면 과정을 더 대충하고 결국 결과하고 과정이 니빠지고 된다. 따라서 결과를 중시하는 사람들은 불안하게 된다. 그래서 가치관을 바꾸는 것이 좋은 방법이다. 일이나 문제를 할때 외전적인 동기뿐만 아니라 내전적인 동기를 갖게 되는 것이 큰 도움이 된다. 이런 동기중에는 만족감이 가장 중요하는 것이다. 꾸체적으로 바람직한 결과를 못 보장할 때 실패에 불과하고 그 일의 과정으로 배우는 것을 만족하는 것이 좋은 해결법이다.

이처럼 결과만에 집중하는 것이 사람에 부정적인 영향을 기치는데 우리는 노력하면 가치관을 바꿀 수 있다. 이프로 사람들이 더 효율적으로 일을 하기 바란다.
  `

}, 

{id: "3",
  title: "The role of university",
  text: `요즘 대학교에 가는 사람들이 많아지고 있다. 사람마다 대학에 진학하는 이유나 목표가 다양하다. 일부 사람들은 학문 자체를 좋아하거나 특별한 분야의 전문가가 되기 위하여 대학에 진학한다. 다른 사람들은 사회에서의 취업의 기회를 갖기 위해 대학교육을 받는다. 구체적으로 대학의 역할 무엇일까? 

대학의 중요한 역할은 고등 교육을 한 긍정적인 환경을 제공한다. 즉 대학 수업을 통해서 높은 지혜를 배움으로써 전문성을 기를 수 있다. 더불어 교수나 전문가가 있기 때문에 학생들의 진로 결정에 큰 도움을 줄 수 있다. 학생들은 대학에서 얻는 지혜를 활용하여 복잡하거나 고차원적인 문제를 해결할 수 있다. 그 결과 대학교육 덕분에 학생들은 사회에서 요구하는 능력을 갖추어 취업의 기회를 갖는다.

그러나 대학은 그 역할을 원활하게 수행하기 위해서는 무엇보다 학습을 의한 건강한 환경을 유지해야 한다. 예를 들어 대학생의 과도한 경쟁을 제한하거나 대학생에게 학문적 조언 또는 취업을 위한 상담 서비스를 제공해야 한다. 또한 모든 학생에게 평등한 교육을 제공해야 한다.
  `

}



])


const currentID = ref("3")
const colorDict = ref<Record<number, string>>({})
const nounsToggled = ref(false)
const adjectivesToggled = ref(false)
const verbsToggled = ref(false)
const particlesToggled = ref(false)
const adverbsToggled = ref(false)


// Instead of @change
watch(currentID, () => {
  highlightedIndices.value = new Set()
  colorDict.value = {}  // clear all previous highlights
  nounsToggled.value = false
  adjectivesToggled.value = false
  verbsToggled.value = false
  adverbsToggled.value = false
})

const fontSize = ref(1.2)
const highlightedIndices = ref(new Set())

// const highlightSelection = () => {
//   const selection = window.getSelection()
//   if (selection && selection.toString().trim()) {
//     const range = selection.getRangeAt(0)
//     const span = document.createElement('span')
//     span.className = 'highlighted'
//     range.surroundContents(span)
//   }
// }





const kDict = {
    nouns: { words: [{noun: "대학"}, {noun: "대학"}, {noun: "이유"}, {noun: "전문가"}, {noun: "전문성"}, {noun: "취업"}, {noun: "대학"}, {noun: "결과"}, {noun: "지혜"}, {noun: "능력"},  {noun: "주변"}, {noun: "스트레스"}, {noun: "해결법"}, {noun: "일"}, {noun: "기대"}, {noun: "만족감"}, {noun: "동기"}, {noun: "도움"}, {noun: "이익" }, {noun: "실패" }, {noun: "문제" }, {noun: "가치관" }, {noun: "사람" }, {noun: "과정" },{noun: "결과" },{noun: "결과" }, {noun: "기술"}, {noun: "어려움"}, {noun: "특성"}, {noun: "부분"}, {noun: "사회"}, {noun: "상담"}, {noun: "직업"}, {noun: "로봇"},{noun: "간호사"}, {noun: "공감"}, {noun: "건강상태"}, {noun: "계산"}, {noun: "기계"}, {noun: "기술"}, {noun: "조언"}, {noun: "효율성"}]},
    adjectives: {words: [{adjective: "중요"}, {adjective: "다른"}, {adjective: "다양하다"}, {adjective: "과도한"},  {adjective: "중요"}, {adjective: "과조한"}, {adjective: "높은"}, {adjective: "경쟁적인"}, {adjective: "최대한"}, {adjective: "내전적인"},  {adjective: "좋은"}, {adjective: "바람직한"}, {adjective: "내번적인"}, {adjective: "큰"},{adjective: "최대한"}, {adjective: "부정적인"}, {adjective: "많은"}, {adjective: "급변하는"},  {adjective: "정확하게"}, {adjective: "선생님"}, {adjective: "대표적인"}, {adjective: "어렵다"},{adjective: "복잡한"}, {adjective: "효율적"}, {adjective: "단순한"},],},
    verbs: {words: [{verb: "부응"}, {verb: "진학한다"}, {verb: "있다"}, {verb: "갖는다"}, {verb: "받는다"}, {verb: "해결할"},  {verb: "유지해야"}, {verb: "기를"}, {verb: "제공"}, {verb: "대충"}, {verb: "축적하고"}, {verb: "직면"}, {verb: "햐로울"}, {verb: "집중"}, {verb: "불과하고"}, {verb: "기치는데"}, {verb: "바꾸는"}, {verb: "노력"}, {verb: "보장"}, {verb: "초래"}, {verb: "집착"}, {verb: "단축"}, {verb: "높아졌다"},{verb: "발전시켜야"}, {verb: "활용"}, {verb: "할"}, {verb: "높아졌다"}, {verb: "고려"}, {verb: "대체"}],},
    particles: {
  words: [
    { particle: "을" }, { particle: "를" },
    { particle: "이" }, { particle: "가" },
    { particle: "은" }, { particle: "는" },
    { particle: "에" }, { particle: "에서" },
    { particle: "와" }, { particle: "과" },
    { particle: "도" }, { particle: "만" }
  ]
},
  adverbs: { words: [{adverb: "원활하게"}, {adverb: "그러나"}, {adverb: "많이"}, {adverb: "또한"}, {adverb: "따라서"}, {adverb: "반면에"}, {adverb: "가장"},{adverb: "꾸체적으로"}, {adverb: "꾸체적으로"}, {adverb: "결국"},  {adverb: "그러나"}, {adverb: "불안하게"}, {adverb: "더"}, {adverb: "반드시"}, {adverb: "구체적으로"}, {adverb: "정확하게"}, {adverb: "특히"}, {adverb: "어떻게"}]}
  }
  
  



// You need to rely on an index set to see the live changes
// If you change the highlighted property of one object, processedWords gets recomputed because you changed the original value.
// Problem arised: If your split text has a particle attached to the noun, it won't highlight. Sln: Use Regex instead of a set
const toggleNouns = () => {
  const nouns = kDict.nouns.words.map(x => x.noun)
  // Build regex once: /기술|특성|계산|기계|조언/
  const nounRegex = new RegExp(nouns.join('|'))
  
  
  processedWords.value.forEach((item) => {
    if (nounRegex.test(item.text)) {
      if (highlightedIndices.value.has(item.index)) {
        highlightedIndices.value.delete(item.index)
        delete colorDict.value[item.index]
      } else {
        highlightedIndices.value.add(item.index)
        colorDict.value[item.index] = 'nouns'
      }
    }
  })
  

  nounsToggled.value = !nounsToggled.value
}


const toggleVerbs = () => {
  const verbs = kDict.verbs.words.map(x => x.verb)

  // Build regex once: /기술|특성|계산|기계|조언/
  const verbRegex = new RegExp(verbs.join('|'))
  processedWords.value.forEach((item) => {
    if (verbRegex.test(item.text)) {
      if (highlightedIndices.value.has(item.index)) {
        highlightedIndices.value.delete(item.index)
        delete colorDict.value[item.index]
        
      } else {
        highlightedIndices.value.add(item.index)
        colorDict.value[item.index] = 'verbs'
      }
    }
  })

    verbsToggled.value = !verbsToggled.value

  

}


const toggleAdjectives = () => {
  const adjectives = kDict.adjectives.words.map(x => x.adjective)
  // Build regex once: /기술|특성|계산|기계|조언/
  const adjectiveRegex = new RegExp(adjectives.join('|'))
  processedWords.value.forEach((item) => {
    if (adjectiveRegex.test(item.text)) {
      if (highlightedIndices.value.has(item.index)) {
        highlightedIndices.value.delete(item.index)
        delete colorDict.value[item.index]
      } else {
        highlightedIndices.value.add(item.index)
        colorDict.value[item.index] = 'adjectives'
      }
    }
  })

  adjectivesToggled.value = !adjectivesToggled.value
  
 
}




const toggleParticles = () => {
  const particles = kDict.particles.words.map(x => x.particle)
  const nouns = kDict.nouns.words.map(x => x.noun)

  processedWords.value.forEach((item) => {
    const word = item.text.trim()
    if (!word) return

    // Check for any particle at the end
    const particle = particles.find(p => word.endsWith(p))
    if (particle) {
      const stem = word.slice(0, -particle.length)

      // Only highlight particle if the stem is a known noun
      if (nouns.includes(stem)) {
        colorDict.value[item.index] = 'particles'
        highlightedIndices.value.add(item.index)
      }
    }
  })

  particlesToggled.value = !particlesToggled.value
}


const toggleAdverbs = () => {
  const adverbs = kDict.adverbs.words.map(x => x.adverb)

  // Match Korean word ending with particle
  const particleRegex = new RegExp(adverbs.join('|'))

  processedWords.value.forEach((item) => {
    const word = item.text.trim()

    if (particleRegex.test(word)) {
      if (highlightedIndices.value.has(item.index)) {
        highlightedIndices.value.delete(item.index)
        delete colorDict.value[item.index]
      } else {
        highlightedIndices.value.add(item.index)
        colorDict.value[item.index] = 'adverbs'
      }
    }
  })

  adverbsToggled.value = !adverbsToggled.value
}

const increaseZoom = () => {
  if (fontSize.value <= 1.6 ){
  fontSize.value += 0.1
  }
}

const decreaseZoom = () => {
  if (fontSize.value > 1.2) {
    fontSize.value -= 0.1
  }
}

const currentText = computed(() => {
  return texts.value.find(t => t.id === currentID.value)
})


/* Take the words in each element of the array and return an object of them 
   then in the v-for, you can send back each word inside span tags
*/
const processedWords = computed(() => {
  const text = currentText.value?.text || ''

  // Spaces are preserved ["Yo", " ", "it's",  " ", "Joe"]
  const words = text.split(/(\s+)/)



  return words.map((word, index) => ({
    text: word,
    index: index,
    isHighlighted: highlightedIndices.value.has(index)
  }))
})




</script>

<style>

.text-picker {

  border-bottom: 2px solid var(--dark-border-color);
  display: flex;
  margin-bottom: 1rem;
  select {
    border: 1px solid var(--dark-border-color);
    border-radius: 4px;
    padding: 0.2rem;
    margin-bottom: 1rem;

  }
 
}

.word-dashboard {
  margin-top: 1rem;
  border-top: 2px solid var(--dark-border-color);
  

  button {
    margin-top: 0.6rem;
    margin-right: 0.9rem;
    padding: 0.3rem;
    border: 1px solid green;
    border-radius: 4px;

   
  }



}

/* html.dark .text-picker {
   border-bottom: 10px solid var(--dark-border-color);

} */


.nouns {
  background-color: rgb(250, 200, 60); 
  color: black;
  padding: 2px 0;
  border-radius: 2px;
}

.particles {
  background-color: rgba(232, 95, 111, 0.902); 
  padding: 2px 0;
  border-radius: 2px;

}

.adjectives {
  background-color: rgb(60, 200, 100); 
  color: black;
  padding: 2px 0;
  border-radius: 2px;

 
}

.verbs {
  background-color: rgb(70, 130, 200);
  padding: 2px 0;
  border-radius: 2px;
}

.adverbs {
  background-color:  rgb(204, 115, 214);
  padding: 2px 0;
  border-radius: 2px;
}

html.dark .adverbs {
  background-color:  rgb(149, 67, 158);
}

#zoom-btn, #unzoom-btn {
  
  padding: 0.2rem;
  border-radius: 8px;

}

#zoom-btn:hover,
#unzoom-btn:hover {
  background-color: rgba(0, 128, 0, 0.426);
 
  cursor: pointer;

  svg {
    transform: rotateZ(10deg);
  }
}

#nouns-button {
  border: 2px solid rgb(250, 200, 60); 


}

.nounsToggled {
    font-size: 2rem;
}

#adjectives-button {

  border: 2px solid rgb(60, 200, 100); 
}

#verbs-button {
  border: 2px solid rgb(70, 130, 200);
}

#adverbs-button {
  border: 2px solid rgb(204, 115, 214);
}

#particles-button {
  border: 2px solid rgba(189, 37, 55, 0.559); 
}


#nouns-button.active {
  
  background-color: rgb(250, 200, 60);
  color: black;
}

#adjectives-button.active {
  background-color: rgb(60, 200, 100);
  color: black;
}

#verbs-button.active {
  background-color: rgb(70, 130, 200);
 
}

#adverbs-button.active {
  background-color: rgb(204, 115, 214);
 
}
.korean-compo {

    white-space: pre-wrap;

   
}

.word-button {
  position: relative;
  transition: transform 0.1s cubic-bezier(0.51, 0.38, 0.57, 0.69);
}

.word-button::after {
  content: "";  
  position: absolute;  
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.188);
  clip-path: circle(0% at top left);
  transition: clip-path 0.1s cubic-bezier(0.11, 0.38, 0.57, 0.69);
  z-index: -1;  
}
.word-button:hover {
  transform: scale(1.1)
}

.word-button:hover::after {
  clip-path: circle(150% at top left);
}
.textchange-enter-active,
.textchange-leave-active {
  transition: clip-path 0.3s cubic-bezier(0.51,0.38,0.57,0.69), opacity 0.3s ease;
}

.textchange-enter-from,
.textchange-leave-to {
  clip-path: inset(0 0 0 100%);

  opacity: 0;
}

.textchange-enter-to,
.textchange-leave-from {
  clip-path: inset(0 0 0% 0); 
  opacity: 1;
}


</style>