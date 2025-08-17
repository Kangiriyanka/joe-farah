---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Swift Fun'
pubDate: 2025-08-06T23:23:31-04:00
upDate: 2025-08-11T13:13:54-04:00
description: 'Migrating personal Swift/SwiftUI notes' 
tags: ["swift", "programming"]
postSlug: 'post-6'


---

## Today's Update

I recently finished my write-up of <a class="secondary-a" href="/projects/gameok/"> Gameok</a>, a game library I made with React and Flask<sup> <a class="secondary-a" href="#footnotes" >1. </a></sup> The project itself is far from being "complete", but I'm  happy with the progress I've made so far. In any case, I can always go back to it and patch it up. With that being said, I've slowly shifted my focus back to iOS development. To slowly get back into the groove, I've been reorganizing Swift/SwiftUI notes and code scattered around my folders.  I thought it would be a good idea to reinforce some concepts along the way by showing them here. I'll update this post progressively.


&nbsp;

## SwiftUI

### Alignments
Basing my knowledge on the SwiftUI Lab's <a class="secondary-a" href="https://swiftui-lab.com/alignment-guides/">alignment guide</a>:

1. A VStack must have a horizontal alignment and an HStack must have a vertical alignment. 

2. When a parent view has an alignment, its children elements use it by default (implicit). However, we can explicitly define how we want the children to be aligned inside the parent through their alignmentGuide property. They don't have to obey the parent!


&nbsp;

In this example, all squares are inside JoeAlignment. With all squares following the same logic: 
- Red will align its leading edge with every other element in JoeAlignment. 
- Green will align its trailing edge with every other element in JoeAlignment.
- Blue will align its center with every other element in JoeAlignment.
- Orange takes the default alignment of the parent which means it's going to align 1/4 of its width to everything else.


```swift
extension HorizontalAlignment {
    private enum JoeAlignment: AlignmentID {
        static func defaultValue(in d: ViewDimensions) -> CGFloat {    
            return d.width / 4
        }
    }
    static let joeAlignment = HorizontalAlignment(JoeAlignment.self)
}

VStack(alignment: .joeAlignment) {
    RedSquare().alignmentGuide(.joeAlignment, computeValue: { d in d[.leading] })
    GreenSquare().alignmentGuide(.joeAlignment, computeValue: { d in d[.trailing] })
    BlueSquare().alignmentGuide(.joeAlignment, computeValue: { d in d[VerticalAlignment.center] })
    OrangeSquare()
}
```
&nbsp;

A glorious attempt at showcasing the above in HTML becomes: 


<div class="relative ml-auto mr-auto w-100 h-50 bg-zinc-300 block">
  
  <span class="block border-left-1 w-10 h-10 bg-red-800 absolute top-0 left-[50%]  ">
         <span class="h-[100%] left-0 absolute border border-2"></span>

  </span>
  <span class="block w-10 h-10 bg-green-600 left-[40%] top-10 absolute" >
       <span class="h-[100%] right-0 absolute border border-2"></span>

  </span>
  
  <span class="block w-10 h-10 bg-blue-900 absolute left-[45%] top-20  ">
     <span class="h-[100%] w-[50%] absolute border border-3"></span>
  </span>
  
  <span class="block w-10 h-10 bg-orange-700 absolute left-[47.5%] top-30  ">
   <span class="h-[100%] w-[25%] absolute border border-3"></span>
  
  </span>
   
</div>

&nbsp;


### ViewBuilder
For any View with a body property, ViewBuilder will bundle up the Views inside using special containers (TupleViews).<sup> <a class="secondary-a" href="#footnotes" >2. </a></sup>

1. Using ViewBuilder behind the scenes.

```swift
// ViewBuilder transform what's inside the body to TupleView<(Text, Text)>
struct SampleView: View {
    var body: some View {
        Text("Joe is awesome")
        Text("Joe is the worst")
    }
}
```
&nbsp;

2. This is a distinct way to do (1) with type constraints. The content here is only ONE generic element that conforms to View. so we have to wrap our Text elements in a VStack. We can't pass two Texts because that's 2 views.
```swift
struct SampleViewWithTypeConstraint<Content: View>: View {
    var content: Content
    // The init expects only one View of type content.
    init(content: Content) {
        self.content = content
    }
    var body: some View {
        content
    }
}

SampleViewWithTypeConstraint(content: 
    VStack {
        Text("Joe is cool")
        Text("Joe is the worst")
    }
)
```

&nbsp;

3. If we don't want to wrap our content with a parent, we can use the ViewBuilder attribute to bundle up the content.

```swift
struct SampleViewWithViewBuilder<Content: View>: View {
    var content: Content
    init(@ViewBuilder content: () -> Content) {
        self.content = content()
    }
    var body: some View {
        content
    }
}
// Explicitly using the closure syntax
SampleViewWithViewBuilder(content: {
    Text("Joe rules")
    Text("Joe follows")
})

// Trailing closure syntax
SampleViewWithViewBuilder {
    Text("Joe rules")
    Text("Joe follows")
}

```

&nbsp;

### GeometryReader

Here's my not so technical way to explain GeometryReader. If you have a normal VStack with 2 Texts inside, the children will just be placed wherever their parent decides. In a View with just a VStack and Text inside, the VStack will conveniently position itself in the middle of the screen with its children.

```swift
// Obedient children listen to their parent VStack
VStack {
    Text("First Child")
    Text("Second Child")
}

```
&nbsp;


<div class="relative 
items-center justify-center ml-auto mr-auto w-50 h-50 bg-gray-300">

<div class="absolute border border-3  border-black ml-auto mr-auto relative top-[30%] w-[80%] h-20">
<u class="text-black" >VStack</u>
 <span class="block ml-auto text-center text-md text-black">First Child</span>
 <span class="block ml-auto text-center top-[60%] text-black text-md ">Second Child </span>
</div>
</div>

</div>

When you add a GeometryReader inside the VStack, the GeometryReader expands with the parent to fill up the available space on the screen. It's a greedy child that wants the parent's full attention! GeometryReader takes all the available space of its parent.

<div class="relative 
items-center justify-center border-black border-3  ml-auto mr-auto w-50 h-50 bg-gray-300">

<u class="text-md text-black" >VStack + GeometryReader</u>
<div class="absolute ml-auto mr-auto relative w-[100%] h-[88%]">

 <div class="flex gap-1 ">
 <span class="block text-md text-black">First Child</span>
 <span class="block text-left  text-black text-md ">Second Child </span>
 </div>
</div>
</div>

</div>

GeometryReader can be used to allow children to choose their own sizes as opposed to being assigned one by their parent. It grants them the power to rebel against their parent VStack! This is all done with the proxy parameter - an instance of a GeometryProxy struct that holds information about GeometryReader.

```swift
VStack {
    GeometryReader { proxy in
        Text("First Child")
            .frame(width: proxy.size.width * 0.5, height: proxy.size.height )
            .background(.red)
        
        Text("Second Child" )
            .frame(width: proxy.size.width)
            .background(.blue)
    }
}

```

&nbsp;

Another glorious HTML attempt  with the GeometryReader and VStack labels removed: 
<div class="relative 
items-center justify-center border-2  ml-auto mr-auto w-50 h-50 bg-gray-300">




 
 <span class="block absolute text-md w-[50%] h-[100%] bg-red-500 ">First Child</span>
 <span class="block text-right  text-md w-[100%] h-[10%] bg-blue-500 ">Second Child </span>

</div>
</div>

### Custom Transitions

You can define custom transitions using ViewModifiers. Here are the steps:

1. Define your custom ViewModifier

```swift
struct MyCustomModifier: ViewModifier {
    let horizontalOffset: Double
    let verticalOffset: Double
    func body(content: Content) -> some View {
        content.offset(x: horizontalOffset, y: verticalOffset )
    }
}
```
2. Extend the functionality of AnyTransition 
```swift
extension AnyTransition {
    static var myOffset: AnyTransition {
     
        AnyTransition.modifier(
            active: MyCustomModifier(horizontalOffset: 200, verticalOffset: 200),
            identity: MyCustomModifier(horizontalOffset: 0, verticalOffset: 0))
    }
}
```

3. Apply it to your View


```swift
struct TransitionView: View {
    @State private var active: Bool = false
    
    var body: some View {
        VStack {
            Button("Activate") {
                withAnimation {
                    active.toggle()
                }
            }
            
            Spacer()
            
            if active {
                Rectangle()
                    .frame(width: 300, height: 200)
                    .transition(
                        .asymmetric(
                            insertion: AnyTransition.myOffset,
                            removal: AnyTransition.myOffset
                        )
                 
                        .combined(with: .opacity)
                    )
            }
        }
    }
}

```

&nbsp;


### MatchedGeometryEffect

I think the article that demonstrates how to think about matchedGeometryEffect the best is SwiftUI's Lab <a class="secondary-a" href="https://swiftui-lab.com/matchedgeometryeffect-part2/"> guide</a>. Javier's work is beyond commendable.

&nbsp;

The major click for me was just knowing that a view's geometry just refers to the size and position.
If you have a View B that wants to match a View A, then A is the source. B will have to match its size and position to look like A. The first step of debugging is making sure the views you want to match have the same id and belong to the same namespace.


```swift
// Snippet similar to what's in the article
struct MatchGeometryView: View {
    @State private var matched: Bool = false
    @Namespace private var joespace

    var body: some View {
        HStack {
            // A is the source
            ViewA()
                .matchedGeometryEffect(id: "id1", in: joespace)
            // B is jealous of A, it's going to try to copy its size and position to match A's.
            ViewB()
                .matchedGeometryEffect(id: matched ? "id1" : "", in: joespace, isSource: false)
        }
    }
}
```


&nbsp;


## Swift 

In this section, I transform Swift concepts into code that represents what I like.

&nbsp;

### Translator with Typealias

We can define a Translator struct which holds dictionaries that convert one word from one foreign language to another. I could have used an elaborate struct to represent a word, but I'm sticking with typealias. 

```swift
typealias Word = String
typealias JapaneseWord = String
typealias KoreanWord = String
typealias SpanishWord = String

struct Translator {
    var JapaneseToKoreanWords: [JapaneseWord: KoreanWord] = [
        "さる": "원숭이",
        "睡蓮の葉": "수련 잎"
    ]
    
    var KoreanToSpanishWords: [KoreanWord: SpanishWord] = [
        "원숭이": "mono",
        "수련 잎": "nenúfar"
    ]
}
```
&nbsp;


We translate words by passing an array of Word (any language) in translate functions. Subscripting a dictionary returns an optional value, so we use a <b class="bold-rounded">guard</b> statement to unwrap our value and throw an error <b class="bold-rounded">TranslationError</b> if we can't find a word. The TranslationError could be on any word, and the cool part is that we can pass it to our enum. I'd like to add that in this piece of code, if let and guard would be functionally equivalent, but since I'm throwing an error when any translation isn't found, guard is more appropriate.
```swift
// No word found in the dictionary
enum TranslationError: Error {
    case wordNotFound(Word)
}

// Pass an array of Word to translate
extension Translator {
    
    func translateJapaneseToKorean(_ japaneseWords: [JapaneseWord]) throws -> [KoreanWord] {
        var koreanWords = [KoreanWord]()
        for japaneseWord in japaneseWords {
            if let koreanWord = JapaneseToKoreanWords[japaneseWord] {
                koreanWords.append(koreanWord)
            } else {
                throw TranslationError.wordNotFound(japaneseWord)
            }
        }
        
        return koreanWords
    }
    
    func translateKoreanToSpanish(_ koreanWords: [KoreanWord]) throws -> [SpanishWord] {
        var spanishWords = [SpanishWord]()
        for koreanWord in koreanWords {
            if let spanishWord = KoreanToSpanishWords[koreanWord] {
                spanishWords.append(spanishWord)
            } else {
                throw TranslationError.wordNotFound(koreanWord)
            }
        }
        
        return spanishWords
    }
}
```
&nbsp;

We initialize a translator, and since our function throws, we need a do-catch block. The words I want to translate are さる  and 睡蓮の葉 which mean "monkey" and "water lily" in English.

```swift
let translator = Translator()
do {
    let koreanWords = try translator.translateJapaneseToKorean(["さる", "睡蓮の葉"])
    let spanishWords = try translator.translateKoreanToSpanish(koreanWords)

} catch TranslationError.wordNotFound(let word) {
    print("Could not find translation for: \(word)")
}


```


&nbsp;

### Decoding and Escaping

My goal here was to blend decoding JSON and escaping closures. For this example, I'm making a task manager for drawings. 

&nbsp;


The data I want to decode are objects of things I want to draw with their name, category and time required (minutes) to draw them: 

```swift
import Foundation
let json = """
[
  { "item_name": "Hotdog", "item_category": "Food", "time_required": 10 },
  { "item_name": "Scissors", "item_category": "Tool", "time_required": 15 },
  { "item_name": "Steak", "item_category": "Food", "time_required": 20 },
  { "item_name": "Fork", "item_category": "Utensil", "time_required": 8 },
  { "item_name": "Moon", "item_category": "Space", "time_required":  4 }
]
""".data(using: .utf8)!

```

&nbsp;

To turn this into DrawingItem struct, I need to use CodingKeys because my struct field names differ from the data (intentionally). This is one among the <b>many</b> <a class="secondary-a" href="https://matteomanferdini.com/codingkey-swift/"> scenarios</a> <sup> <a class="secondary-a" href="#footnotes" >1. </a></sup> you can encounter when decoding JSON. 

```swift
struct DrawingItem: Decodable {
    var name: String
    var category: String
    var timeRequired: Int

    // Raw value of name is item_name
    enum CodingKeys: String, CodingKey {
        case name = "item_name"
        case category = "item_category"
        case timeRequired = "time_required"
    }

    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        // This means: the value inside item_name : <VALUE> will be assigned to 'name' of the DrawingItem.
        name = try container.decode(String.self, forKey: .name)
        category = try container.decode(String.self, forKey: .category)
        timeRequired = try container.decode(Int.self, forKey: .timeRequired)
    }
}

```

&nbsp;

Next, I'll define a DrawingManager class with the following methods:

- addTask: Adds a task to tasks, an array of closures of type (DrawingItem) -> Void
- executeTasks: Execute tasks in a loop. A closure gets passed a DrawingItem argument from this function.
- removeTasks: empties our tasks array, no more closures to be called.

&nbsp;

The addTask allows the closure to be escaping. Normally, when you pass a closure inside a function, it gets executed immediately, but with the @escaping, we can save the execution for later. 

&nbsp;


```swift
class DrawingManager {
    
    // An array of closures accepting DrawingItem
    var tasks: [(DrawingItem) -> Void] = []

    func addTask(completion: @escaping (DrawingItem) -> Void) {
        tasks.append(completion)
    }
    
    func executeTasks(items: [DrawingItem]) {
        for task in tasks {
            task(items.randomElement()!)
        }
        removeTasks()
    }
    
    func removeTasks() {
        tasks.removeAll()
    }
}
```




&nbsp;

We initialize everything we need and add 2 tasks to the task manager. The <b class="bold-rounded"> [DrawingItem]</b> array we decoded serves as an argument for the executeTask function. For every task we have, we select a random item from that array and pass it as an argument to a task: (DrawingItem) -> Void. This simulates someone who finished their drawings.

```swift
// Initialize our decoder and manager
let decoder = JSONDecoder()
let manager = DrawingManager()
// Closure of type (DrawingItem) -> Void
manager.addTask { drawingItem in
    print("Finished Drawing: \(drawingItem.name) - \(drawingItem.category) in \(drawingItem.timeRequired) minutes")
}
manager.addTask { drawingItem in
    print("Finished Drawing: \(drawingItem.name) - \(drawingItem.category) in \(drawingItem.timeRequired) minutes")
}

do {
    // Passing self decodes the TYPE not an INSTANCE
    let thingsToDraw = try decoder.decode([DrawingItem].self, from: json)
    manager.executeTasks(items: thingsToDraw)
} catch {
    // Bad practice, but good for demonstration :)
    print("ERROR:", error)
}
// ---- Prints ----
// Finished Drawing: Hotdog - Food in 120 minutes
// Finished Drawing: Scissors - Tool in 45 minutes
// -----------------
```

&nbsp;

### Playing with Closures


From the <a class="secondary-a"  href="https://docs.swift.org/swift-book/documentation/the-swift-programming-language/closures/"> docs</a>, we learn that closures can be as complex yet as simple as they can be. I used sorted, map and filter on an array of tunes I learned and show the many ways closures can be written.

```swift
let tunes = [
    "Clock Town",
    "Jinjo Village",
    "Lonlon Ranch",
    "Deku Palace",
    "Old Familiar Scent of Iselia",

]
// (Element, Element) -> Bool
let decreasingWordLength: (String, String) -> Bool = { s1, s2 in
    s1 > s2
}

// Pass it to by argument label.
// (Element, Element) -> Bool) -> [Element]
var tunesSorted = tunes.sorted(by: decreasingWordLength)

// Using trailing closure syntax
tunesSorted = tunes.sorted(by: { (s1: String, s2: String) -> Bool in
    return s1 < s2
})

// Simplifying because Swift infers the types for us.
tunesSorted = tunes.sorted(by: { s1, s2 in
    return s1 > s2
})

// Argument label
tunesSorted = tunes.sorted(by: { $0 > $1 })

// Implicit return
tunesSorted = tunes.sorted() { $0 > $1 }

// Without parentheses
tunesSorted = tunes.sorted { $0 > $1 }
```

&nbsp;


If I had an array of <b class="bold-rounded"> (tune, instrument)</b> tuples, I would need to use a map to get a new array of the tuple index I want. Map and filter don't require argument labels.

```swift
let tunes = [
    ("Clock Town", "Piano"),
    ("Jinjo Village", "Piano"),
    ("Lonlon Ranch", "Piano"),
    ("Deku  Palace", "Piano"),
    ("Arirang", "Guitar"),
    ("Kakariko Village", "Guitar"),
    ("Littleroot Town", "Guitar"),
    ("Yuyake Koyake", "Harmonica"),
    ("Lost Woods", "Harmonica"),
    ("Hyrule Market", "Harmonica"),

]

// Also all equivalent.
let transformTuples = {(tuple: (String, String)) in
    tuple.0
}

let sortedTunes1 = tunes.map(transformTuples)
let sortedTunes2 = tunes.map { (tuple: (String, String)) in
    tuple.0
}
let sortedTunes3 = tunes.map {$0.0}
```

&nbsp;

Another example for filtering tunes by instruments:

```swift
let instrumentFilter = {(instrument: String, instrumentToMatch: String) -> Bool in 
    return instrument == instrumentToMatch
}
print(tunes.filter{instrumentFilter($0.1, "Piano")})
print(tunes.filter{instrumentFilter($0.1, "Guitar")})
print(tunes.filter {$0.1 == "Harmonica"})

// [("Yuyake Koyake", "Harmonica"), ("Lost Woods", "Harmonica"), ("Hyrule Market", "Harmonica")
```
&nbsp;

### Inheritance and Enums

I often forget how swell enums can be and I like music, so I'll create a <b class="bold-rounded"> MusicalInstrument</b> class. It'll just have the instrument name, its type (wind,string or percussions) and a playInstrument function the children can override. As a reminder, when you override a function in a child, you can't change the signature of it.

```swift
// Enum with Associated Values
enum Tune {
  case horribleTune
  case goodTune(title: String)
}

class MusicalInstrument {
    
    var instrumentName: String
    var instrumentType: InstrumentType
    func playInstrument(tune: Tune) -> Void {}

    // Enums with Raw values
    enum InstrumentType: String {
        case wind =  "Wind"
        case string = "String"
        case percussion = "Percussion"
   }
    init(instrumentName: String, instrumentType: InstrumentType) {
        
        self.instrumentName = instrumentName
        self.instrumentType = instrumentType
        
    }
}
```
&nbsp;

We can create a DiatonicHarmonica which inherits from the MusicalInstrument.

```swift
class DiatonicHarmonica: MusicalInstrument {

  var brand: Brand
  let numberOfHoles = 10
  override func playInstrument(tune: Tune) {

    switch tune {
    case .horribleTune:
      print("Playing a horrible song on the \(self.brand) harp :(.")

    case .goodTune(let title):
      print("Playing \(title) on the \(self.brand) harp!")
    }

  }

  enum Brand: String {

    case Hohner
    case Suzuki
    case LeeOskar
    case Seydel
    case Joeharp
    // Nested struct inside Enum, magic.
    struct Country {
      let name: String
    }
    // Computed properties can't be constant (let), watch out.
    var country: Country {
      switch self {

      case .Hohner, .Seydel:
        return Country(name: "Germany")

      case .Suzuki, .LeeOskar:
        return Country(name: "Japan")

      default:
        return Country(name: "Canada")
      }
    }

  }

  init(name: String = "Harmonica", instrumentType: InstrumentType = .wind, brand: Brand) {
    self.brand = brand
    super.init(instrumentName: "Harmonica", instrumentType: .wind)
  }

}
// Output
let harmonica = DiatonicHarmonica(brand: .Joeharp)
print(harmonica.instrumentName) // Harmonica 
print(harmonica.brand.country.name) // Canada

```

&nbsp;


The same process applies for a Guitar with a change of properties. 

```swift
class Guitar: MusicalInstrument {

  var numberOfStrings: StringNumber
  var guitarType: GuitarType

  enum GuitarType: String {
    case classical
    case acoustic
    case electric
    case bass

  }
  // Implicit Raw Values
  enum StringNumber: Int {
    case six = 6
    case seven, eight, nine, ten, eleven, twelve
  }

  override func playInstrument(tune: Tune) {

    switch tune {
    case .horribleTune:
      print("Playing a horrible song on the \(self.guitarType) guitar :(.")

    case .goodTune(let title):
      print("Playing \(title) on my \(self.guitarType) guitar!")
    }

  }

  init(
    guitarType: GuitarType, instrumentName: String = "Guitar",
    instrumentType: InstrumentType = .string, numberOfStrings: StringNumber
  ) {

    self.guitarType = guitarType
    self.numberOfStrings = numberOfStrings
    super.init(instrumentName: instrumentName, instrumentType: instrumentType)

  }


}

print(guitar.playInstrument(tune: .horribleTune))
//Playing a horrible song on the Guitar
print(guitar.playInstrument(tune: .goodTune(title: "Kakariko Village"))) 
// Playing Kakariko Village on my electric guitar !
```

&nbsp;

### Stretching Property Wrappers

Property wrappers are similar to Python decorators where you can fine tune your functions for extra functionality. In this code, I write a propertyWrapper that controls the amount of seconds we should be doing for each stretch (is it optimal? :P). We can initialize the property wrapper in 3 different ways:

- @StretchTime var seconds: Int  -> sets seconds (wrappedValue) to 15 , minSeconds to 15 and maxSeconds to 30.
- @StretchTime var seconds: Int = 20 -> sets seconds (wrappedValue) to 20, minSeconds to 15 and maxSeconds to 30
- @StretchTime(minSeconds: 10, maxSeconds: 60) var seconds: Int = 30 -> sets seconds (wrappedValue) to 30, minSeconds to 10 and maxSeconds to 60

```swift
@propertyWrapper
struct StretchTime {
  private var seconds: Int
  private var minSeconds: Int
  private var maxSeconds: Int

  var wrappedValue: Int {
    get { return seconds}
    set { seconds = max(minSeconds, min(newValue, maxSeconds))}
  }

  init() {
    maxSeconds = 30
    minSeconds = 15
    seconds = 15
  }

  // The wrapped value is whatever is after the equal sign. 
  // You can choose to init the property wrapper like:
  init(wrappedValue: Int) {
    maxSeconds = 30
    minSeconds = 15
    seconds = min(wrappedValue, maxSeconds)

  }
  init(wrappedValue: Int, minSeconds: Int,  maxSeconds: Int ) {
    self.maxSeconds = maxSeconds
    self.minSeconds = minSeconds
    seconds = min(wrappedValue, maxSeconds)
  }

}
// When you add a propertyWrapper, Swift creates a wrapper for the value of seconds.
struct OptimalStretch {

  var name: String
  @StretchTime(minSeconds: 20, maxSeconds: 30) var seconds: Int = 25

}

var stretch = OptimalStretch(name: "pigeon")
print(stretch.seconds) // 25 
stretch.seconds = -10
print(stretch.seconds) // 20
```

&nbsp;

### Generic Exercise

I recreated create a Queue of exercises by reading the documentation on <a href="[Generics>](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/generics/).">Generics</a>. Associated types take a bit of time to get used to especially when we create protocols that conform to other protocols. You'll see this down below with the CompletedExercises protocol.

&nbsp;

Let's define a Container protocol. The associated type Item can take on any value it wants as long as it conforms to Equatable. It could be an Int, [Int], [String], a custom struct, anything really.  With this implementation, you can create data structures like Stacks or Queues. 

```swift
// The naming for Item is a bit confusing since it can refer to many elements.
protocol Container {
  associatedtype Item: Equatable
  mutating func append(_ item: Item)
  var size: Int {get}
  subscript(i: Int) -> Item { get }
}
```
&nbsp;

We can define a base Queue struct that uses all the properties in the Container protocol. Swift infers that the Item defined in protocol takes on the value of [E], an array of Elements (E) that conform to Equatable. We can add missing functions with an extension.
```swift
struct Queue<E: Equatable>: Container {
  var items: [E] = []
  mutating func append(_ exercise: E) {
        items.append(exercise)
    }
    var size: Int {
        return items.count
    }
    subscript(i: Int) -> E {
        return items[i]
    }
}
// Add missing dequeue function
extension Queue {
    mutating func dequeue() -> E? {
        guard size > 0 else { return nil }
        return items.removeFirst()
    }
}
```

&nbsp;

We'll create a Queue of Exercise structs and test the functions
```swift
struct Exercise: Equatable {
    let name: String
    var sets: Int
    var reps: Int
}

var q = Queue<Exercise>()
q.append(Exercise(name: "Push-ups", sets: 3, reps: 20))
q.append(Exercise(name: "Lunges", sets: 3, reps: 10))
q.append(Exercise(name: "Mountain Climbers", sets: 2, reps: 40))

print("Queue size: \(q.size)") // 3
print(q[1].sets == q[0].sets) // true
print(q.dequeue()!) // Exercise(name: "Push-ups", sets: 3, reps: 10)
```

&nbsp;

To spice things up, we can create a protocol CompletedExercises that conforms to the Container protocol. It has a <b class="bold-rounded">complete</b> function that returns a Queue of Exercises completed. What the protocol is saying:


1. I have a function that returns a subset of the exercises I completed. It takes an exerciseCount and returns CompletedItems.
2. The Item of CompletedExercises (CompletedItems.Item)  must be of the same type as the Item defined in Container (Container.Item). This means that if I instantiated a <b class="bold-rounded">Queue\<Exercise></b>, then the CompletedItems must be  <b class="bold-rounded">Queue\<Exercise></b>.
3. The CompletedItems themselves must conform to CompletedExercise. This means we can call complete as many times as we want on a Queue.



```swift
// Similar to docs: Using a Protocol in Its Associated Type’s Constraints
protocol CompletedExercises: Container {
     associatedtype CompletedItems:CompletedExercises where CompletedItems.Item == Item
     func complete(_ exerciseCount: Int) -> CompletedItems
}

extension Queue: CompletedExercises {
     func complete(_ exerciseCount: Int) -> Queue {
         var newQueue = Queue()
         for i in 0..<exerciseCount{
             newQueue.append(self[i])
         }
        return newQueue
    }
}

var exerciseQueue =  Queue<Exercise>()
exerciseQueue.append(Exercise(name: "Push-ups", sets: 3, reps: 10))
exerciseQueue.append(Exercise(name: "Squats", sets: 3, reps: 12))
exerciseQueue.append(Exercise(name: "Joe Spider Curls", sets: 100, reps: 400))

let finished = exerciseQueue.complete(2)
print(type(of: finished)) // Queue<Exercise>

print("--- Finished ---")
print(finished[0].name) // Push-ups
print(finished[1].name) // Squats

// Doesn't make sense practically... but programatically....
let whatThe = finished.complete(1)
print(whatThe[0].name)  // Push-ups

```



&nbsp;


## Footnotes

1. I write about the <a class="secondary-a" href="/projects"> projects </a> I make in a way that I can revisit and study them.

2. I recommend reading this <a  class="secondary-a" href="https://www.hackingwithswift.com/books/ios-swiftui/why-does-swiftui-use-some-view-for-its-view-type"> post</a> by Paul Hudson with this <a  class="secondary-a" href= "https://www.avanderlee.com/swiftui/viewbuilder"> one </a> by Antoine van der Lee for a better understanding of Views. Thank you for your contributions.

3. Matteo Manferdini has great guides on all things Swift.


