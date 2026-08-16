<template>
    <!-- Watch the keys if you run into a problem -->
    <div  v-for="rule in grammarRules" :key="rule.id" class="grammar-rules">
     
        <h3>{{rule.title}}</h3>
        <p class="my-1" >{{rule.explanation }}</p>
       
        <div class="blocks-grid">
        <div class="blocks-box" v-for="block in rule.blocks" :key="block.id">
        <div class="block">
        <h4 class= "text-center bold">{{block.title}}</h4>
        <p class= "text-center bold tip">Tip: {{block.tip}}</p>
       
        <div class="sentences-box" v-for="(sentence,index) in block.sentences" :key="index">
            <div class="sentence-container">
                <p>{{index + 1}}. {{sentence[0]}}</p>
                <span class="translation">{{sentence[1]}}</span>
            </div>
            </div>
        </div>
        </div>


     
        </div>
    </div>



</template>





<script setup lang="ts">



const grammarRules= [{

    id: 1,
    title: "하는, 한다는 and 하다는",
    explanation: `하는 is used to describe or modify (e.g., '하는 일' = work that one does), while 한다는 is for reporting what someone said or does (e.g., '한다는 말' = the statement that one does it). The latter is akin to 'it's said that' or 'reportedly'. For the last one, take with a grain of salt, but 하다는 is less common in everyday conversation; you'd see it mainly in definitions or abstract discussions of concepts.`,
    blocks: [{

         id: 1,
         title: "하는",
         tip: "State facts",
         sentences: [["성공하는 사람은 자신을 믿는다.", "People who succeed believe in themselves."], ["방을 깨끗이 하는 것은 집중력에 도움이 된다.", "Having a clean room improves focus."],]
        }, 
        
        {
        id: 2,
        title: "한다는/하다는",
        tip: "Discuss facts or beliefs",
        sentences: [["나는 자신을 믿는 사람은 반드시 성공한다는 것을 믿는다.", "I believe people that people who believe in themselves are guaranteed to succeed"],
         ["최근 연구에 따르면, 방을 깨끗이 한다는 것이 집중력에 좋다고 한다.", "According to a recent study, having a clean room is beneficial to concentration."]
        ,["잘 공부하다는 것이 무엇입니까?", "What does it mean to study well?"]]
       }
    ]

},

    {id: 2,
    title: "인가요/ 나요",
    explanation: "Both are used as conversation softeners for questions with the latter being exclusively employed with verbs. 인가요 is often seen with yes/no state questions while 나요 has a more inquisitive/curious tone to it. Ideally, you shouldn't overthink it ⁠— it comes naturally.",
    blocks: [{
         id: 1,
         tip: "Polite yes/no questions",
         title: "인가요",
         sentences: [["조는 버스커인가요?", "Is Joe a busker?"], ["그 춤 추기는 어려운가요?", "Is this dance move difficult to do?"]]
        },
        {
        id: 2,
        tip: "Seeking further context or information", 
        title: "나요",
        sentences: [["요즘 프로그래밍 많이 하고 있나요?", "Have you been programming a lot lately? (Anything else?)"], ["어제 기술 컨벤션에 갔나요?", "Did you go to the tech meetup yesterday? (How was it?)"]]
        }
    ]
    },


    {id: 3,
    title: "더~ connectors",
    explanation: "The 더~ connectors report a speaker's experience of a situation, \
    with each giving a different nuance. 더라고 conveys the speaker's experience in \
    a situation they directly observed or participated in. 더니 contrasts two clauses (A,B)\
    where B is often the result or consequence of A. 던데 is used when the speaker is surprised about a \
    situation and could expect the listener's response. 던가 indicates \
     the speaker's attempt to recall or confirm forgotten information. These are very challenging to grasp, and it's always interesting asking native speakers about them, because there's never a clear-cut answer.",
    blocks: [{
         id:1,
         title: "더라",
         tip: "Talk about a personal experience",
         sentences: [["나는 일본 장마철은 정말 싫더라고요.", "I don't like Japan's rainy season at all."], ["지난 주 인터뷰 때문에 걱정되더라고요.","I experienced nervousness from my interview last week. (literally)"]]
        }, {
        id: 2,
        title: "더니",
        tip: "A, then B is neutral/surprising consequence",
        sentences: [["어제 눈 속에서 달렸더니 양말이 흠뻑 젖었어!", "I ran in the snow yesterday, and my socks got soaked!"],
                    ["오늘 하루 종일 '소프라노스'를 봤더니, 이제 '마론' 말하게 됐어.", "I watched the Sopranos all day, and now I started saying 'Marone'."]]
        },
        {
        id: 3,
        title: "던데",
        tip: "Elicit a response from the listener",
        sentences: [["이 동네에 사람들이 많던데, 여기 땅값 비싼가요?","There used to be a lot of people living in here, did the price of land go up? (what happened?)"],["이 배우는 유명한데, 그의 최신 영화는 아무도 안 봤던데요.","This actor is famous, but no one watched his latest movie (What's up with that?)"]]
        },
      
        {
        id: 4,
        title: "던가",
        tip: "Fuzzy memory (sentences below can be replaced with 지)",
        sentences: [["지우개를 어디에 두었던가?", "Man, where did I put my eraser?"], ["그 사람 이름이 뭐였던가?", "What was that person's name?"]]
        },
          {
        id: 5,
        title: "더군",
        tip: "Realization, discovery of something you've experienced",
        sentences: [["혼자 사는 게 꽤 좋더군요.", "Living alone is pretty nice."], ["환경이 모든 것을 바꾸더군요.","I realized that environment changes everything."]]
        },

        
       
    ]}
    

]


// Mistakes: watch out the transition delay, you added one by accident after the easing function
// Mets ça dans ton coco: il faut que tu joue entre le délai et la durée de l'animation.
// I had to add the padding for the longer texts

</script>

<style>



.sentence-container {
  display: block;
  position: relative;
  overflow: hidden;
  padding-bottom: 3.5rem;


  p {
      font-size: 1.3rem;
    
  }
  span {
      font-size: 1.3rem;
  
  }


 
  
}




.sentence-container p {
    
  
  transition: color 0.2s cubic-bezier(0.5, -0.71, 0.7, 0.34) 0.3s;

}

.sentence-container:hover p {
  color: transparent;
  transition-delay: 0s;
}

.translation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color:  var(--soil-color-light);
  white-space: normal;

  transform: translateX(-100%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.5, -0.71, 0.7, 0.34);
  
}




.sentence-container:hover .translation {
  transform: translateX(0%);
  opacity: 1;

}



.tip {
    font-size: 0.8rem;
     border-bottom: 2px solid var(--dark-border-color);
     margin-bottom: 0.8rem;
}

.sentences-box {
    margin-bottom: 1rem;
}

.block {
    border: 2px solid var(--dark-border-color);
    padding: 0.5rem;
    border-radius: 4px;
    width: 100%;

  
}

.blocks-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin: 1rem 0;
}

.blocks-box {
    display: flex;

    padding: 0.5rem;
    
}

.grammar-rules {
    display: grid;
    margin-bottom: 1rem;

}




</style>