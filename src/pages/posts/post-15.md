---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Dormant Videos"
pubDate: 2026-01-16T11:42:13-04:00
description: 'Editing with DaVinci Resolve'
tags: ["writing"]
postSlug: 'post-15'
---


## Intro 



I had a lot of dance/juggling/music footage sleeping on hard drives organized neatly into labeled folders. That's great and all, but it's quite intimidating to revisit old videos even for fun. Albeit well-structured, it takes time and energy to handpick and watch the relevant ones. Making montages with  <a class="secondary-a" href="https://www.blackmagicdesign.com/products/davinciresolve"> DaVinci Resolve</a> was a smart way to enjoy them. I saved heaps of space by editing the videos into montages/compilations. In my case, I didn't care about the quality or about publicly uploading them hence the mp4 format (I like compactness). Boring fact, I only keep a main folder on my desktop which contains the folders I use the most (roughly 15GB). If I'm not frequently accessing items, they're getting deleted or transformed. Hoarding is not my cup of barley tea. 

&nbsp;


## Workflow


Although I'm still a beginner, I recommend this  <a class="secondary-a" href="https://www.youtube.com/watch?v=EF_Wysanmn0"> video </a> by George Kamenov for optimizing your workflow (shortcuts for split clip and ripple delete). From there, you can watch related videos which draw your interest. Also, I think you'll best learn shortcuts when you need them. Swapping clips with <span class="bold-rounded"> ⇧ ⌘ ,</span> is one of my favorite shortcuts. I’ll present some here—keyboard customization is a good starting point*.


&nbsp;



<div class="shortcuts-box">
<div class="shortcut-card">
  Keyboard customization <span data-info="⌘⌥K">⌘⌥K</span>
</div>

<div class="shortcut-card">
  Linked selection
  <span data-info="⌘⇧L">⌘⇧L</span>
</div>

<div class="shortcut-card">
  Switching tabs
  <span data-info="⌘⇧L">⇧ + digit</span>
</div>

<div class="shortcut-card">
  Delete gaps <span data-info="^4"> Preference (^4) </span>
</div>

<div class="shortcut-card">
  Snapping <span data-info="N">N </span>
</div>

<div class="shortcut-card">
  Ripple delete <span data-info="N"> 4 </span>
</div>

<div class="shortcut-card">
  Selection mode <span data-info="A">A </span>
</div>

<div class="shortcut-card">
  Setting clip color <span data-info=""> Preference</span>
</div>

<div class="shortcut-card">
  Select all clips to the right <span  data-info="⌥Y">⌥Y</span>
</div>

<div class="shortcut-card">
  Select all clips to the left <span data-info="⌥⌘Y">⌥⌘Y</span>
</div>

<div class="shortcut-card">
  Select clips <span data-info="⌘↔">⌘↔</span>
</div>

</div>

*: Note that the shortcuts are for Mac.

&nbsp;


<!-- Combos -->

<!-- If you do this in selection mode, it only change duration of the first clip -->
<!-- Trim Edit Mode (T) ⌘D and changing clip duration -->

## People are amazing

The free version of Resolve (still excellent) doesn't include the feature to auto-generate subtitles. Luckily, there's  <a class="secondary-a" href="https://github.com/tmoroney/auto-subs"> AutoSubs </a> by Tom Moroney which does the job. Whenever I stumble upon such creations, I think: "Holy macaroni, people are amazing". It gives me a mental boost.





<style>
    .shortcuts-box {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.2rem;
        
    }

    .shortcut-card {
        display: flex;
        flex-direction: column;
      
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.4rem;
        text-align: center;
        font-family: sans-serif;
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 1px;
        border: 3px solid #241111ff;
        border-radius: 0.4rem;
        position: relative;
  
        transition: 0.5s;

        
    }

    .shortcut-card  span {
      opacity: 0;
      color: #ee9c21ff;
   
   
      
    }

    /* Before is initially at 90 degrees along the X       ---------  */   
    /* After element is initially at 90 degrees along the Y.*/
    /* Hovering on the card reverts them to 0  */

    .shortcut-card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #241111ff;
    transition: 0.5s;
    transform: rotateX(90deg);
    z-index: -1;

}

.shortcut-card:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #241111ff;
    transition: 0.5s;
    transform: rotateY(90deg);
    z-index: -1;

}

.shortcut-card:hover:before {
    transform: rotateX(0deg);
}

.shortcut-card:hover:after {
    transform: rotateY(0deg);
}

.shortcut-card:hover {

  color:white;
  /* font-weight changes the text-size and could cause glitches */


    
    
}

.shortcut-card:hover span {
  opacity: 1;
}

html.dark .shortcut-card {
 
  color: white;
  border: 3px solid #f2f2f2fe;

}
html.dark .shortcut-card::after,
html.dark .shortcut-card::before {
  background-color: #f2f2f2fe;
}



html.dark .shortcut-card  span {
  
      color: #d48105ff;
      font-weight: 600;
   
      
}


html.dark .shortcut-card:hover {
    color: black;
    
} 

  @media screen and (min-width: 636px) {
      .shortcuts-box {
      
           grid-template-columns: repeat(4, 1fr);


      }



    }







</style>