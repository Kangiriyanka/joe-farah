---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Swift Fun or Despair'
pubDate: 2025-08-06T23:23:31-04:00
description: 'Brushing up a bit on Swift/SwiftUI and migrating notes' 
tags: ["swift", "programming"]
postSlug: 'post-5'


---

## Today's Update

I recently finished my write-up of <a class="secondary-a" href="/projects/gameok/"> Gameok</a>, a  game library I made with React and Flask<sup a href="#footnotes" class="secondary-a" >1.</sup> The project itself is far from being "complete", but I'm  happy with the progress I've made so far. In any case, I can always go back to it and patch it up. With that being said, I've slowly shifted my focus back to iOS development. To slowly get back into the groove, I've been reorganizing Swift/SwiftUI notes and code scattered around my folders.  I thought it would be a good idea to reinforce some concepts along the way by showing them here. I'll update this post progressively.


&nbsp;

## SwiftUI

### Alignments
Basing my knowledge on the SwiftUI Lab's <a class="secondary-a" href="https://swiftui-lab.com/alignment-guides/">alignment guide</a>:

1. A VStack must have a horizontal alignment and an HStack must have a vertical alignment. 

2. When a parent view has an alignment, its children elements use it by default (implicit). However, we can explicitly define how we want the children to be aligned inside the parent through their alignmentGuide property. They don't have to obey the parent!


&nbsp;

In this example, all squares belong inside JoeAlignment. With all squares following the same logic: 
- Red will align its leading edge with every other element in JoeAlignment. 
- Green will align will its trailing edge with every other element in JoeAlignment.
- Blue will align will its center with every other element in JoeAlignment.
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


<div class="relative ml-auto mr-auto w-100 h-50 bg-gray-300 block">
  
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
For any View with a body property, ViewBuilder will bundle up the Views inside using special containers (TupleViews).<sup a href="#footnotes" class="secondary-a" >2.</sup>

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

2. This is a distinct way to do (1) with type constraints. The content here is only ONE generic element that conforms to View. so we have to wrap our Text elements in a VStack. We can't pass two Texts, that's two views.
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

<div class="absolute border ml-auto mr-auto relative top-[30%] w-[80%] h-20">
<u>VStack</u>
 <span class="block ml-auto text-center text-md">First Child</span>
 <span class="block ml-auto text-center top-[60%] text-md ">Second Child </span>
</div>
</div>

</div>

Once you add a GeometryReader inside the VStack, the GeometryReader expands with the parent to fill up the available space on the screen. It's a greedy child that wants the parent's full attention! GeometryReader takes all the available space of its parent.

<div class="relative 
items-center justify-center border-2  ml-auto mr-auto w-50 h-50 bg-gray-300">

<u class="text-md" >VStack + GeometryReader</u>
<div class="absolute ml-auto mr-auto relative w-[100%] h-[88%]">

 <div class="flex gap-1 ">
 <span class="block text-md">First Child</span>
 <span class="block text-left  text-md ">Second Child </span>
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
struct TransitonView: View {
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

The major click for me is just knowing that a view's geometry just refers to the size and position.
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


## Footnotes

1. I write about the <a class="secondary-a" href="/projects"> projects </a> I make in a way that I can revisit and study them.

2. I recommend reading this <a  class="secondary-a" href="https://www.hackingwithswift.com/books/ios-swiftui/why-does-swiftui-use-some-view-for-its-view-type"> post</a> by Paul Hudson with this <a  class="secondary-a" href= "https://www.avanderlee.com/swiftui/viewbuilder"> one </a> by Antoine van der Lee for a better understanding of Views. Thank you for your contributions.


