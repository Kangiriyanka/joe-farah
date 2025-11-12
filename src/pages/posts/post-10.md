---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Swift Fun II"
pubDate: 2025-11-07T23:10:02-04:00
description: 'Migrating more Swift/SwiftUI notes'
tags: ["swift", "programming"]
postSlug: 'post-10'
---


## Intro 

Following suit with <a class="secondary-a" href="/posts/post-6">Swift Fun</a>, I've relocated more notes to this post. Recently, I've been posting with the intent of using my writings as a mental cache for the knowledge I acquire. One tip for you today is to give yourself time before compiling and correcting your code. You don't have to be optimal on the first try and you don't have to remember everything. If you forget some concepts and syntax, you can always revisit them in your projects, in the documentation or ask people for help when you've struggled enough. 

&nbsp;

## SwiftUI




###  Shapes

You can use Shapes for creative overlays or backgrounds.  
&nbsp;

```swift
struct Diamond: Shape {
    func path(in rect: CGRect) -> Path {
        var path = Path()
        let width = rect.width
        let height = rect.height
        
        path.move(to: CGPoint(x: width / 2, y: 0))             
        path.addLine(to: CGPoint(x: width, y: height / 2))
        path.addLine(to: CGPoint(x: width / 2, y: height))
        path.addLine(to: CGPoint(x: 0, y: height / 2))
        path.closeSubpath()
        return path
    }
}

```
&nbsp;


### Transactions and Animations 


Transactions provide SwiftUI with the information it needs to animate changes between views correctly. Whichever view  with an <u>.animation</u> modifier can be "intercepted" and customized using the <u>.transaction</u> modifier. Inside the transaction, you can modify the <a  class="secondary-a" href="https://developer.apple.com/documentation/swiftui/view/transaction(_:)"> animation</a>. As to what information it specifically holds and what calculations it does, I'd have to dig deeper, but I'm fine at the surface for now.

&nbsp;

There are two types of animation:


- Implicit:  Animates only the elements targeted with the .animation modifier. (struct A) 
- Explicit:  Start the animation from the root view. (struct B) 

&nbsp;

Personally, the naming (implicit vs explicit) is confusing to me , so I shift my focus to grasp the functionality instead. For implicit animations, if you have a VStack of a Rectangle and Text, and you add  <u>.animation</u> to the Rectangle, it's only going to animate the Rectangle. However, if you attach it to the  VStack containing the Rectangle and Text, it animates what's inside the VStack hence both. For explicit animations, you can opt for <u>withAnimation</u>. When you toggle a Button controlling a @State variable  wrapped in <u> withAnimation</u>,  every element inside that View gets affected by the animation.

&nbsp;

```swift
struct A: View -> some View {
    @State private var isExpanded = false
    var body: some View {
        VStack  {
            // Only the rectangle gets animated
            Rectangle()
                .fill(.blue)
                .frame(width: isExpanded ? 200 : 100, height: 100)
                
            
            Text("Snail Rice")
            Button("Toggle") {
                isExpanded.toggle()
            }
        }
    }
}

// B is the root
struct B: View  -> some View {
    @State private var isExpanded = false
    
    var body: some View {
        VStack {
            Rectangle()
                .fill(.blue)
                .frame(width: isExpanded ? 200 : 100, height: 100)
            
            Text("Snail Rice")
            
            // No need for the .animation modifier
            // Everything starts to get animated at B
            Button("Toggle") {
                withAnimation(.spring()) {
                    isExpanded.toggle()
                }
            }
        }
    }
}

```

&nbsp;


You can read more in this solid article from <a class="secondary-a" href="https://holyswift.app/difference-between-implicit-and-explicit-animations-in-swiftui/"> Holy Swift</a>. 


&nbsp;



### Custom Transitions

This is a snippet straight  from the  <a class="secondary-a" href="https://swiftui-lab.com/advanced-transitions/"> SwiftUI Lab</a>. All credits to Javier. In this code, we need to use ViewModifier to create custom transitions, because that's what the <u> static func modifier</u> of the AnyTransition class requires the identity and active elements to be. 

&nbsp;



```swift
struct MyCustomModifier: ViewModifier {
	let opacity: Double
	func body(content: Content) -> some View {
		content.opacity(opacity)
	}
}
```
&nbsp;



```swift
/*
static func modifier<E>(
    active: E,
    identity: E
) -> AnyTransition where E : ViewModifier
*/
extension AnyTransition {
    static var myOpacity: AnyTransition {
        AnyTransition.modifier(
            active: MyOpacityModifier(opacity: 0),
            identity: MyOpacityModifier(opacity: 1))
    }
}

```

&nbsp;


```swift
// The AnyTransition.myOpacity returns an AnyTransition
MyView()
    .transition(
        .asymmetric(
            insertion: AnyTransition.myOpacity
                .combined(with: .slide),
            removal: .scale
        )
    )
```






&nbsp;

### Property Wrappers and Protocols

#### @Binding
Two-way connection  between a source of truth and a view property. Think parent and child (@State and @Binding). You can use them in initializers.

&nbsp;


```swift
// Binding in an initializer
init(food: Food) {
  self.food = food
  _calories = .init(initialValue: Double(food.calories))
}
```
&nbsp;

#### @Observable and Bindable


<a  class="secondary-a" href="https://www.hackingwithswift.com/books/ios-swiftui/sharing-swiftui-state-with-observable"> Paul Hudson</a>  and <a class="secondary-a" href="https://www.donnywals.com/observable-in-swiftui-explained/"> Donny Walls </a> explain this clearly. To paraphrase,
this macro sniffs out changes in the properties of a class to trigger updates in the views that use them. @Bindable allows observed properties to be used in bindings. You'd use it when your observed class has a property that you want to bind to a TextField, TextEditor, Picker, etc.

&nbsp;



In <a class="secondary-a" href="https://joefarah.com/projects/ChoreoBuilder"> ChoreoBuilder</a>, tapping my play/pause button will have SwiftUI re-render the Image view, because it's using the AudioPlayerModel's <u>isPlaying</u> property. The model handles the functionality while the view does its magic to reflect its changes.

&nbsp;
```swift
// AudioPlayerModel
@Observable
class AudioPlayerModel: NSObject, AVAudioPlayerDelegate {
    private var audioPlayer: AVAudioPlayer?
    var isPlaying: Bool = false
}

// AudioPlayerView 
struct AudioPlayerView: View {
    // AudioPlayerView owns the AudioPlayerModel
    @State private var audioPlayerManager: AudioPlayerModel
    var body: some View {
    // SwiftUI rerenders the Image once I tap the play/pause button
    // because it's using the observed isPlaying property.
    Image(systemName: audioPlayerManager.isPlaying ? "pause.fill" : "play.fill")
        .onTapGesture {
            audioPlayerManager.isPlaying
                ? audioPlayerManager.pauseAudio()
                : audioPlayerManager.playAudio()
        }
    }

}
```

&nbsp;

The changes in the move's details in the TextEditor will automatically update the Move's details property. 

&nbsp;

```swift
@Observable
class Move {
    var id: UUID = UUID()
    var title: String = ""
    var details: String
}

// MoveView
@Bindable var move: Move
var body: some View {
    VStack {
        TextField("Enter a move title", text: $move.title)
        TextEditor(text: $move.details)
    }
 }
```


&nbsp;

#### Hashable and  Identifiable

All of Swift's basic value types conform to to Hashable. It allows types to be stored in dicts, sets and  compared since Hashable also conforms to Equatable (HeightValue in <a  class="secondary-a" href="https://joefarah.com/projects/k-count/#enums-galore"> K-Count</a>)<sup><a class="secondary-a" href="#footnotes"> 1.</a></sup>. You need structs to conform to Hashable if you want to use them with navigationDestination. Also, using ForEach with <u>id: \\.self </u> is possible thanks to Hashable. With Identifiable, you don't need the <u>id</u> inside the ForEach. Think Hashable for lookup and equality and Identifiable for tracking uniqueness.

&nbsp;




### Property Observers and Get Set

I always freeze for a second when I have to remember the difference between willSet and didSet:
- willSet: you show the change from old to new.
- didSet: you show the new final result.

&nbsp;


```swift
struct Exercise {
    var name: String
    var repetitions: Int {
		// A function that holds the old and new value
		// Use this when you care about the previous value (show a change)
		willSet {
		print("Going from \(repetitions) to \(newValue)")
		}
        didSet {
            print("\(name) completed \(repetitions)")
        }
    }
}

var flares = Exercise(name: "flares", repetitions: 0)
flares.repetitions = 2
flares.repetitions = 4

```
&nbsp;

With get and set, there are some neat underlying behaviours, and it's nice to see where they come <a class="secondary-a" href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/properties/"> from</a>.

&nbsp;

```swift
struct Rect {
    var origin = Point()
    var size = Size()
    
    // You don't need set if it's read-only
    var center: Point {
        get {
            Point(x: origin.x + (size.width/2), 
                  y: origin.y + (size.height/2))
        }
        // You have access to newValue behind the scenes
        // set(newCenter) is another way to write this
        set {
            origin.x = newValue.x - (size.width/2)
            origin.y = newValue.y - (size.height/2)
        }
    }
}
```

&nbsp;

Static Properties

&nbsp;

```swift
struct VideoGame {
    static var collectionSize = 0
    var videogame: String

    init(name: String) {
        self.videogame = name
        VideoGame.collectionSize += 1
    }
}

let mario64 = VideoGame(name: "Super Mario Sunshine")
let mariorpg = VideoGame(name: "Super Mario RPG")
print(VideoGame.collectionSize) // 2
```


&nbsp;

## Swift

### Value vs Reference Types

Structs are value types which means you'll create a copy instead of accessing the same reference.

&nbsp;

```swift
struct Drawing {
    var title: String
}

var drawing1 = Drawing(title: "Cube")
var drawing2 = drawing1
drawing2.title = "Cylinder"

print(drawing1.title) // Cube
print(drawing2.title) // Cylinder

```

&nbsp;


```swift
class Drawing {
    var title: String
    init(title: String) {
        self.title = title
    }
}


var drawing1 = Drawing(title: "cube")
var drawing2 = drawing1  
drawing2.title = "Cones"  

print(drawing1.title)  // Cones
print(drawing2.title)  // Cones

```



&nbsp;


### BDSM Optionals

No explanations for now, only syntax.


You can  check  many conditions on the same line with optional binding.

&nbsp;

```swift
if let a = optionalA, let b = optionalB, let c = optionalC {}
```

&nbsp;


Optional chaining: 

&nbsp;


```swift
struct Shortcuts {
    let shortcuts: [String]
    var program: Program?
}

struct Program {
    let name: String
}

var shortcuts = Shortcuts(shortcuts: ["Ctrl-A", "Ctrl-E"])
shortcuts.program = Program(name: "Terminal")

print(shortcuts.program!.name)
shortcuts.program = nil

if let terminalShortcuts = shortcuts.program?.name {
    print(terminalShortcuts)
}  else {
    print("No shortcuts")
}
```

&nbsp;

### Enum Types



1. Regular

&nbsp;

```swift
enum LifeParameters {
    case sacrifice, consistency, adjustment
}
```

&nbsp;


2. Associated Values

&nbsp;

```swift
enum LifeParameters {
    case values(Int, Int, Int, Int)  
    case code(String)             
}

```

&nbsp;

3. Raw Values

&nbsp;

```swift
enum LifeParameters: String {
    case sacrifice
    case consistency
    case adjustement
    case trust
}

```


&nbsp;



### Musical Subscripts

For negative indices, Swift’s % operator preserves the sign of the left-hand operand.

&nbsp;


```swift
struct Note {
    let name: String
    let notes = ["C", "C#", "D", "D#", "E", "F", "F#","G", "G#", "A", "A#", "B"]
    
    subscript(index: Int) -> String {
        guard let startIndex = notes.firstIndex(of: name) else { return "?" }
        let count = notes.count
        // Make it work for negative indices
        let normalizedIndex = (startIndex + index % count + count) % count
        return notes[normalizedIndex]
    }
}
let note = Note(name: "C#")
print(note[-1]) 
``` 

&nbsp;

### Closure palooza


1. Basic example with no return and return statements

&nbsp;


```swift
let imagery = { (human: String, object: String) in
    print("\(human) is picturing a \(object) in their mind.")
}

// No return statement
imagery("Joe","guitar")


let imagery_return = { (human: String, object: String) -> String in
    return "\(human) is picturing a \(object) in their mind."
}
    
let harmonica_image =  imagery_return( "Joe", "harmonica")
print(harmonica_image)


```

&nbsp;

2. Closures as parameters

&nbsp;



```swift
// Mixing Void and String  return types
func juggling(_ location: () -> Void, _ move: () -> String) {
    
    print("Joe has started juggling at")
    location()
    let move = move()
    print("With his special move: \(move)")
}

let location = { print("Vison") }
let move = { return  "Behind the Neck" }

juggling(location, move)

// With trailing closure syntax
juggling(location) {
    return "Backcrosses"
}

```

&nbsp;

3. Closure with an Int argument 

&nbsp;


```swift
func draw(object: String, time: (Int) -> Void) {
    // time is closure that takes an Int as an arguemnt
    // 30 is being passed to the closure
    time(30)
}
    
draw(object: "bridge") { (time: Int) in
                //  here
    print("I spent \(time) minutes on it")
}
```

&nbsp;

4. Functions returning closures

&nbsp;


```swift
func travel() -> (String) -> Void {
    return {
        print("I'm going to \($0)")
    }
}
travel()("Fukuoka")
// or 
let result = travel()
result("Osaka")

```
&nbsp;


5. An array of random numbers

&nbsp;


```swift
func makeArray(size: Int, using generator: () -> Int) -> [Int] {
    var numbers = [Int]()
    for _ in 0..<size {
        let newNumber = generator()
        numbers.append(newNumber)
    }
    return numbers
}

let rolls = makeArray(size: 10) {
    Int.random(in: 1...10)
}
```


&nbsp;


6. Sorting and Filtering video games </span>

&nbsp;



```swift
struct VideoGame {
    let title: String
    let copiesSold: Int
    let console: String
}

var v = [
    VideoGame(title: "Mario 64", copiesSold: 140, console: "N64"),
    VideoGame(title:"The Legend of Zelda: Majora's Mask", copiesSold: 244, console: "N64"),
    VideoGame(title: "Paper Mario 64", copiesSold: 430, console: "N64"),
    VideoGame(title: "Pokemon Platinum", copiesSold: 4000, console: "Nintendo DS")
   
]

// We could further simplify this with $0 and $1
let copiesSort = { (g1: VideoGame, g2: VideoGame) -> Bool in
    return g1.copiesSold > g2.copiesSold
}


let consoleFilter = { (console: String) -> (VideoGame) -> Bool in 
    return { $0.console == console }
}

v.sort(by: copiesSort)
let N64Games = v.filter(consoleFilter("N64"))
let DSGames = v.filter { $0.console == "Nintendo DS"}
```


&nbsp;

### Personal Pitfalls


This section will grow if not forgotten. 

1. Mixing up the order of the modifiers applied.

&nbsp;


```swift
frame -> background -> shadow -> corner radius won't show the shadow
frame -> background -> corner radius -> shadow
```

&nbsp;



## Footnotes

1. Dictionaries and SwiftData don't work well together by the way. 