---
layout: ../../layouts/ProjectPostLayout.astro
title: 'ChoreoBuilder'
pubDate: 2025-05-23
description: 'An iOS app to create music routines for performers'
link: "https://github.com/Kangiriyanka/ChoreoBuilder"
stack: ['swift']
order: 1

---

This post is being updated as I work on ChoreoBuilder.

## Why?

When I was living in Japan, I was given precious opportunities to perform in festivals and community events in the <a href="https://en.wikipedia.org/wiki/Kihoku,_Mie" class="secondary-a"> town </a> I was living in.<sup class="secondary-a" href="#footnotes" >1.</sup>.  Whenever I create a choreography for a tune, I split the audio in parts and write notes on my iPad on what moves or transitions I can do. My motivation with ChoreoBuilder was to streamline this process.



## Uploading a Choreography

Initially, the main idea of this app is 

- Getting audio files from your Files to create separate parts with them
- Copying files to your sandbox.





## Models 

Simply enough, every routine has parts and every parts have moves of different movetypes.








## Playing with AVAudioPlayer




### AudioPlayerModel


Every part comes 
```swift
//PartView
if let partURL = part.location {
        AudioPlayerView(audioFileURL: partURL, partTitle: part.title)
    }

```


### Controls 

Functions I had learn how to implement:

1. play
2. seek forwards and backwords
3. loop
4. custom loop
5. delay 
6. speedRate 



### Custom Slider







## What to build 
Much of the functionality I've implemented was based on the VLC iOS app.  


1. Custom Loop: Allowing the perfomer to practice a specific section inside the part
2. Delay: For a part, we want the performer to be able to have their own countdown







## Things I learned

1. DropViewDelegate inside a Scrollview
2. Building a custom expandable AudioPlayer





## Footnotes

1. For reference, I juggle and dance to tunes I learn. For example, what I like to do is learn a song on piano and then build a dance/juggling choreography with it.

2. I use choreography and routine interchangeably.