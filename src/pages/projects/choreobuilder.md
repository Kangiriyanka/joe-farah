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

When I was living in Japan, I was given precious opportunities to perform in festivals and community events in the <a href="https://en.wikipedia.org/wiki/Kihoku,_Mie" class="secondary-a"> town </a> I was living in.<sup class="secondary-a" href="#footnotes" >1.</sup>  Whenever I create a choreography for a tune, I split the audio in parts and write notes on my iPad on what moves or transitions I can do. My motivation with ChoreoBuilder was to help performers streamline this process.





## Uploading a Choreography

Initially, the main idea of this app is 

- Getting audio files from your Files to create separate parts with them
- Copying files to your sandbox.





## Models 

Simply enough, every routine has parts and every parts have moves of different movetypes.



## Challenges



### Uploading audio files




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


Besdies the normal functions an audio player has, I wanted to implement a custom loop and delay feature. 
Functions I implemented:

1. play
2. seek forwards and backwords
3. loop
4. custom loop: displaying markers above the player
5. delay with timer 
6. speedRate 



Delay

Delay timer should be cancelled if the user pauses

Custom Loop Edge Cases: 

Moving the player past or before the markers
Turning off the regular loop if the user is custom looping






### Custom Slider



### Extras

1. Creating a sliding text with two GeometryReaders.

```swift
struct SlidingText: View {
    let text: String
    let speed: Double = 30
    let spacing: CGFloat = 50
    
    @State private var offset: CGFloat = 0
    @State private var needsSliding = false
    @State private var textWidth: CGFloat = 0
    
    var body: some View {
        GeometryReader { geo in
            HStack(spacing: needsSliding ? spacing : 0) {
                Text(text)
                    .fixedSize()
                    .background(
                        GeometryReader { textGeo in
                            Color.clear.onAppear {
                                textWidth = textGeo.size.width
                                needsSliding = textWidth > geo.size.width
                                
                                guard needsSliding else { return }
                                
                                let segmentWidth = textWidth + spacing
                                
                                withAnimation(.linear(duration: segmentWidth / speed).repeatForever(autoreverses: false)) {
                                    offset = -segmentWidth
                                }
                            }
                        }
                    )
                if needsSliding {
                    Text(text).fixedSize()
                }
            }
            .offset(x: offset)
            
        }
        .clipped()
        .frame(height: 20)
    }
}

```










## What to build 
Much of the functionality I've implemented was based on the VLC iOS app.  


1. Custom Loop: Allowing the perfomer to practice a specific section inside the part
2. Delay: For a part, we want the performer to be able to have their own countdown







## Things I learned

1. DropViewDelegate inside a Scrollview
2. Building a custom expandable AudioPlayer
3. Using 


## Things left to do 

- Make a logo
- Change button behavior
- Better export format
- Trimmer


## Footnotes

1. For reference, I juggle and dance to tunes I learn. For example, what I like to do is learn a song on piano and then build a dance/juggling choreography with it.

2. I use choreography and routine interchangeably.