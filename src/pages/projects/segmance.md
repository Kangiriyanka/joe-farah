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
<!-- DI Benefits:  It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out. -->

This project's post is currently being updated. Everything below consists of quick drafts of text filled with ideas and typos. This message will disappear once this post will be complete. The app is however live on the App Store. Please check it out by clicking the link above!

&nbsp;

## Why?

In Japan, I was given precious opportunities to perform in festivals and community events in the <a href="https://en.wikipedia.org/wiki/Kihoku,_Mie" class="secondary-a"> town </a> I was living in.<sup class="secondary-a" href="#footnotes" >1.</sup> Generally, to create a performance routine, I split the audio of my target song into parts and write notes on what moves I want to execute inside them. Being the developer I am, my desire was to create a tool tailored for combining audio and notes to practice and structure performances easily.  Granted, the creative process is different for everyone. Some people take long videos to extract footage they'll use,  and others jot down notes in a notebook. Shaped by my own experience, my motivation with Segmance <sup class="secondary-a" href="#footnotes" >2.</sup> was to provide a structured way for performers to streamline performance creation, or atleast lay the initial building blocks.

&nbsp;



## What?

Not suprisingly, breaking things down into smaller parts is a fundamental way to start anything. For example, when learning a piece on an instrument, you practice measure by measure to play longer sections and eventually its entirety.  In juggling, you break complex patterns into manageable ones (5 -> 552 or 5551).

&nbsp;


Following that principle, I wanted to enable users to practice performances in parts, wherever and whenever they wanted. I designed Segmance in a way that every part would have its associated audio, reference video and moves. Moves  are an abstract unit of action depending on the art performed. For a ballet dancer, that might be a pirouette, and for a breakdancer, it would be a freeze. 

&nbsp;





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


&nbsp;




## Creating a Routine


&nbsp;

<div class="post-img-container">

![Create a routine](../../assets/project_images/segmance/createroutine.png)

</div>

&nbsp;

For starters, users create routines by first entering a title and subtitle for it. Afterwards, they upload audio files of the song they want to rehearse with. Each audio file becomes a part within the routine which can be renamed and reordered before creation. If users forget to upload a file, want to delete a part, or need to update the routine's title, they can manage everything via the Settings. Users provide their own audio files and can create audio clips using Segmance’s built-in clipper or any external audio software.

&nbsp;


On a technical level, audio files are copied into the app's sandbox and converted into Part objects within a routine. Each part stores a <span class="bold-rounded">fileName</span> which is used by a computed <span class="bold-rounded">location</span> property to resolve the file's URL. When a part is created, it's automatically associated with its corresponding audio file.

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




##  Inside a Routine

The heart of the app is the routine (RoutineView) which is the container of its parts (PartView). Each part comes with 4 action buttons (we'll explore them) and their moves, which can be created, dragged and deleted. In the first part of any routine, I include some helpful general tips, because I don't want the user to guess what each button does.
&nbsp;

<div class="post-img-container">

![Routine main](../../assets/project_images/segmance/routinemain.png)

</div>

&nbsp;



In code, we have a ZStack which has:

1.	A horizontal ScrollView displaying each PartView of the routine.
2.	An AudioPlayerView which receives an AudioPlayerModel from the <a class="secondary-a" href="https://github.com/Kangiriyanka/Segmance/blob/main/Segmance/Routines/RoutineView.swift"> RoutineView </a> via dependency injection.
3.	A DraggableVideoPlayer which similarly receives a VideoPlayerModel from the RoutineView via dependency injection.


&nbsp;


In a previous implementation, I let every part instantiate its own audio player instead of centralizing it in the RoutineView. A user could even have three audio players running simultaneously which wastes resources and isn't pleasing to the ears. Speaking of ears, let's talk about audio.


&nbsp;

### Audio 

The first button is the audio button. You can toggle the audio player (AudioPlayerView) through it and expand it on tap.<sup class="secondary-a"> <a href="#footnotes" >3.</a></sup>



&nbsp;

<div class="post-img-container">

![Audio player](../../assets/project_images/segmance/audioplayer.png)

</div>

&nbsp;

The audio player includes: 

1. play/pause (indeed)
2. seek forwards and backwards
3. loop
4. custom loop: displaying markers above the audio progress
5. countdown to set up before rehearsing

&nbsp;



Before rehearsing a part, performers may need time to set up or might want to practice a specific section of a long audio. To support this, I've integrated a countdown timer and a custom loop feature. The countdown is self-explanatory, and the custom loop is indicated by two markers above the audio progress bar. When the playhead passes the rightmost marker (B), playback jumps back to the leftmost marker (A) and restarts. Since the audio player has a lot on its plate (delayed playback, countdown), it's a good time to talk about concurrency.



&nbsp;

In my AudioPlayerModel: I have 

```swift
class AudioPlayerModel: NSObject, AVAudioPlayerDelegate {

// Old way (GCD)
private var delayedPlayTask: DispatchWorkItem?
private var loopTask: DispatchWorkItem?

// Modern way: Task<Success,Failure>
private var loopTask: Task<Void, Never>?
private var delayedPlayTask: Task<Void, Never>?
}

```

&nbsp;


You can use Xcode Instruments to detect memory leaks. A leak happens when objects remain in memory because something is still holding a reference to them, even though they’re no longer needed. The consequence is increased memory usage, which can degrade performance and eventually cause the app to be crash.

<div class="post-img-container">

![Instruments](../../assets/project_images/segmance/leaks.png)

</div>

&nbsp;


A lot of edge cases to consider:


1. Changing the play/pause images when audio finishes
2. Turning off the loop if a custom loop is on
3. Restarting the timer with the countdown if the audio ends
4. Preventing the user from seeking past custom loop markers
5. Preventing the creation of multiple countdown timers

And more...

&nbsp;


### Video

The second button is a film button which opens the PhotosPicker and lets the user select a video to watch inside the routine. When linked, the button's image changes to a play image. Let's say you want to watch a video you filmed for a specific part, then this would be a good use case. The video player is draggable and expandable. 


&nbsp;

<div class="post-img-container">

![Selecting Video Player](../../assets/project_images/segmance/videoplayer.png)

</div>

&nbsp;


Since each <span class="bold-rounded"> PhotosPickerItem</span> has an <span class="bold-rounded"> itemIdentifier</span>, you can store it into a part's videoAssetID (<a class="secondary-a" href="#data-models">Data Models</a>). You can fetch a video with the part's videoAssetID with <span class="bold-rounded"> PHImageManager</span>. Before doing all that, we must kindly ask for permission.

&nbsp;



On first access to the photos library, the user gets prompted to allow the app full, limited or no access to it (not shown here). If the user allows full access, then there's no problem. With limited or no access, we have to alert the user in case they change their mind, that is, want to allow new photos. In limited access, one thing that initially confused me is that Apple by default shows all the photos of the PhotosPicker including the ones you didn't allow (screenshot where it says <span class="text-[#c06f7a]">Learn more...</span>). On apps like WhatsApp, it shows only the photos you restricted, so I'm guessing there's a different implementation going on. Anyways, we only assign the <span class="bold-rounded"> itemIdentifier</span> to the part when appropriate!
```swift
// RoutineView
// Denying access
alert("No Access", isPresented: $videoManager.showingAccessAlert) {
    Button("Open Settings") {
        if let url = URL(string: UIApplication.openSettingsURLString) {
            UIApplication.shared.open(url)
        }
    }
    
    Button("Cancel", role: .cancel) {
        videoManager.showingAccessAlert = false
        videoManager.selectedVideoItem = nil
    }
} message: {
    Text("This video isn’t accessible with your current Photos permissions. You can allow access in Settings.")
}
```



&nbsp;

### Overview and Add Moves


I've included an overview mode for performers, giving them a bird's eye view on all the moves within a part, so they have a quick way to memorize them. As a bonus, if the user taps the part title, a modal opens that lets them navigate directly to the part they want to rehearse without scrolling. This can be especially useful for performances with multiple parts. The last button displays a sheet to add moves.

<div class="post-img-container">

![Create a routine](../../assets/project_images/segmance/overview.png)

</div>

&nbsp;



## Clipping Tracks 

While explaining Segmance to a friend, I realized that if the app revolves so much around parts, why not just add an audio clipper?

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




## Data Models


These are the data models in Segmance. I used SwiftData for this project and my <a  class="secondary-a" href="https://joefarah.com/projects/k-count/">last</a> one. While SwiftData provides unique IDs, I would still UUID for tasks like generating unique filenames. For other projects, I've been experimenting with <a class="secondary-a" href="https://github.com/groue/GRDB.swift">GRDB</a>.

&nbsp;


<div class="post-img-container">

![Segmance Models](../../assets/project_images/segmance/models.png)
</div>




&nbsp;


&nbsp;

## Challenges

Segmance pushed me to deepen my understanding of some of the more advanced mechanics, notably concurrency and AVFoundation. Initially, the project only handled audio, but I later added video support. Moving forward, I’d focus on designing the architecture in expectation that that new features can be integrated without causing regressions or breaking existing functionality. All experience.

&nbsp;


### Programming
- How to link audio files to each part. 
- How to reorder parts and update their order with a DropDelegate
- Creating an expandable audio player and audio clipper (AudioPlayerModel and AudioClipperModel)
- Creating a floating video player across parts (VideoPlayerModel) 
- Utilizing concurrency to manage custom loops, countdown timers, audio trimming.




&nbsp;


### UI/UX 


- Make reordering moves with drag and drop smooth
- Where to add context menus for deletion
- Where to put audio controls
- Making empty state views more explicit robust 
- Using TipKit to notify the user of any subtle functionality






&nbsp;


## Takeaways


1. Don't make the user guess
3. Add a community layer with authentication and user interactions for a future project


&nbsp;


## Footnotes

1. For reference, I juggle and dance to tunes I learn. For example, what I like to do is learn a song on piano and then build a dance/juggling choreography with it.


&nbsp;


2. Segmance is a portmanteau of Segment and Performance. It was named ChoreoBuilder before, but I didn't want people to strictly associate the app with dance. I've cycled through names like StageNote, SegForm, CueNote, but most were already taken or didn't capture the app's essence.

&nbsp;


3. Followed Kavsoft's <a class="secondary-a" href="https://www.youtube.com/watch?v=vqPK8qFsoBg">tutorial</a>, Cebrail's <a class="secondary-a" href="https://www.youtube.com/watch?v=135rXe-YxeQ"> tutorial </a>, and VLC for inspiration.


<style>

  

</style>