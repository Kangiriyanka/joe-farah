---
layout: ../../layouts/ProjectPostLayout.astro
title: 'Segmance'
pubDate: 2025-05-23
description: 'An iOS app to help performers streamline performance creation'
link: "https://github.com/Kangiriyanka/Segmance"
stack: ['swift']
order: 1
store: "https://apps.apple.com/us/app/segmance/id6756501666"

---

<!-- Link bank -->
<!-- <a  class="secondary-a" href="https://en.wikipedia.org/wiki/Performing_arts"> performing arts</a> -->

This project's post is currently being updated. Everything below consists of quick drafts of text filled with typos and ideas. This message will disappear once this post will be complete. 

&nbsp;

## Why?

In Japan, I was given precious opportunities to perform in festivals and community events in the <a href="https://en.wikipedia.org/wiki/Kihoku,_Mie" class="secondary-a"> town </a> I was living in.<sup class="secondary-a" href="#footnotes" >1.</sup> Generally, to create a performance routine, I split the audio of my target song into parts and write notes on what moves I want to execute inside them. Being the developer I am, my desire was to create a tool tailored for combining audio and notes to practice and structure performances easily.  Granted, the creative process is different for everyone. Some people take long videos to extract footage they'll use,  and others jot down notes in a notebook. Shaped by my own experience, my motivation with Segmance <sup class="secondary-a" href="#footnotes" >2.</sup> was to provide a structured way for performers to streamline performance creation, or atleast lay the initial building blocks.

&nbsp;


## Overview

### What?

Not suprisingly, breaking things down into smaller parts is a fundamental way to start anything. For example, when learning a piece on an instrument, you practice measure by measure to play longer sections and eventually its entirety.  In juggling, you break complex patterns into manageable ones. 

&nbsp;


Following that principle, I wanted users to be able to practice performances in parts. Every part would have its associated audio, reference video and moves. The moves are an abstract unit of action. For a ballet dancer, the move could be pirouette, for a breakdancer a freeze



 <table class="m-auto">
        <thead>
            <tr>
                <th class="px-6 py-3">Part</th>
                <th class="px-6 py-3">Moves</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b  pro-3 hover:bg-pink-100">
                <td class=" px-6 py-3"><span class="px-2 py-1">Part 1 </span></td>
                  <td class=" px-6 py-3"><span class="px-2 py-1">A,B,C</span></td>
            </tr>
            </tr>
            <tr class="border-b  pro-3 hover:bg-pink-100">
              <td class=" px-6 py-3"><span class="px-2 py-1">Part 2</span></td>
                <td class=" px-6 py-3"><span class="px-2 py-1">D,E,F</span></td>
            </tr>
            <tr class="border-b  pro-3 hover:bg-pink-100">
              <td class=" px-6 py-3"><span class="px-2 py-1">Part 3</span></td>
                <td class=" px-6 py-3"><span class="px-2 py-1">G,H,I</span></td>
            </tr>
        </tbody>
    </table>






### Creating a Routine


Users create routines by uploading audio files of a song. Every audio file is converted to a part inside a routine. These parts can be renamed and reordered before finalizing its creation.  They can create clips through the integrated clipper/trimmer  or through their preferred software. 

&nbsp;









Once a user has all parts of a song they want to practice, they can proceed to create a routine. The files are then copied to the app's sandbox and transformed into Part models inside a routine. Each part has a <span class="bold-rounded">fileName</span> property used inside a computed property, <span class="bold-rounded">location</span>, that fetches the uploaded file. Upon creation, every audio file in the routine becomes a linked part (PartView) 

```swift
// Part.swift
class Part {
 // Other properties...
 var fileName: String
 var location: URL? {
        
        let fileManager = FileManager.default
        guard let documentsDirectory = fileManager.urls(for: .documentDirectory, in: .userDomainMask).first else {
            return nil
        }
        return documentsDirectory.appendingPathComponent(fileName)
        
    }
}
```


&nbsp;

<div class="post-img-container">

![Create a routine](../../assets/project_images/segmance/createroutine.png)

</div>

&nbsp;




###  Inside a Routine

Upon creation, every audio file in the routine becomes a linked part (PartView) in which users can: 

1. add, reorder and delete moves of types they specify. 
2. Toggle and control the audio specific to that part. 
3. Link a video from their photos library for reference.

&nbsp;

&nbsp;

<div class="post-img-container">

![Inside a routine](../../assets/project_images/segmance/inroutine.png)

</div>

&nbsp;


### Models 

These are my models for reference. I used SwiftData for this project and my <a  class="secondary-a" href="https://joefarah.com/projects/k-count/">last</a> one. I'll give <a class="secondary-a" href="https://github.com/groue/GRDB.swift"> GRDB </a> a spin for my next iOS project, because I've grown to dislike handling relationships with SwiftData. 



<div class="post-img-container">

![Segmance Models](../../assets/project_images/segmance/models.png)
</div>






&nbsp;


## Playing with AVAudioPlayer



### Controls 

Here are the controls I implemented for the AudioPlayer.


1. play/plause
2. seek forwards and backwards
3. loop
4. custom loop: displaying markers above the player (*)
5. countdown with a timer (*)

&nbsp;

### Edge Cases


1. Changing the play/pause images when audio finishes
2. Turning off the loop if custom loop is on
3. Restarting the timer with the countdown if the audio section ends.
4. Seeking past custom loop markers
5. Preventing the creation of multiple countdown timers 

And more...


&nbsp;

### Cancelling tasks 


Inside the audio player, I've integrated a countdown timer and a custom loop feature. If users have bigger audio files they want to loop through, they can set a custom loop between two marks. The countdown resets every time passes the second mark. However, if the user willing drags the audio past the second mark multiple times, we have to make sure to cancel the loop tasks because otherwise, a stack of delay tasks would happen.
```swift
let task = DispatchWorkItem { [weak self] in
        self?.audioPlayer?.play()  
    }
loopPlayTask = task
DispatchQueue.main.asyncAfter(deadline: .now() + TimeInterval(delay), execute: task)
return
```


### AudioPlayerModel


Every part comes 
```swift
//PartView
if let partURL = part.location {
        AudioPlayerView(audioFileURL: partURL, partTitle: part.title)
    }

```

&nbsp;


### Expanding the player

I followed Kavsoft's <a class="secondary-a" href="https://www.youtube.com/watch?v=vqPK8qFsoBg"> tutorial </a> to implement this



&nbsp;



### Clipping Tracks 

&nbsp;



<div class="post-img-container">

![Clipping audio](../../assets/project_images/segmance/clipper.png)

</div>


The audio waves are generated by using <a class="secondary-a" href="https://github.com/dmrschmidt/DSWaveformImage"> DSWaveformImage </a> by Dennis Schmidt. 


&nbsp;



Edge cases:

1. Preventing the start and end handles from going past each other
2. Clipping already existing parts
3. Disabling buttons during clipping. 





&nbsp;




&nbsp;

## Challenges

This project pushed me to deepen my understanding of some of the more advanced Swift mechanics notably concurrency and AVAudioPlayer. I'm putting them in bullet points here, but I took quite a few bullets mentally from their implementations.

&nbsp;


### Programming
- How to link audio files to each part. 
- How to reorder parts and update their order with DropDelegate
- Creating an expandable audio player and audio clipper (AudioPlayerModel and AudioClipperModel)
- Creating a floating video player across parts (VideoPlayerModel) 
- Utilizing concurrency to manage custom loops, countdown timers, audio trimming.

&nbsp;


### UI/UX 


- Make reordering moves with drag and drop smooth.
- Where to add context menus for deletion, where should the user be able to delete?
- Where to put audio controls
- Making empty state views more explicit robust 
- using TipKit to notify the user of any subtle functionality






&nbsp;






## Footnotes

1. For reference, I juggle and dance to tunes I learn. For example, what I like to do is learn a song on piano and then build a dance/juggling choreography with it.



2. Segmance is a portmanteau of Segment and Performance. It was named ChoreoBuilder before, but I didn't want people to strictly associate the app with dance. I've cycled through names like StageNote, SegForm, CueNote, but most were already taken or didn't capture the app's essence.


<style>

  

</style>