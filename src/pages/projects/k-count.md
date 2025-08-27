---
layout: ../../layouts/ProjectPostLayout.astro
title: 'K-Count'
description: 'An iOS fitness app focused on tracking calories and weight'
link: https://github.com/Kangiriyanka/K-Count
stack: ['swift']
order: 5
---

This post is being updated progressively.

## Draft (What to talk about)

If you change the weight for the current day, it should be reflected everywhere in your app. Currently, if I update my day's weight, it works, but if a user updates their weight in the settings, it doesn't update the day weight.

Talk about normalizing the date when you create, otherwise it will consider the time and create a duplicate date.

## Why?

There are countless fitness apps on the app store packed with great features. You can track macros, share workouts within a community, and even log water intake and sleep. Personally, I feel a bit overwhelmed seeing a lot of features condensed into one app. Drawing inspiration from "MyFitnessPal" and "Lose It!", I wanted to try creating an app that focuses mostly tracking weight and calories.

&nbsp;

## Design considerations



- There are no exercise or workout features.
- A food database is not included; users create the foods themselves which are stored in SwiftData.
- Only one user on the app.



## Navigating the Structure

The app is separated into 3 main views:

- LogView
- ProgressView
- OptionsView

The LogView allows the user to enter their weight of the day and what they've eaten.
The ProgressView shows graphs of the weight fluctuation through time
The DataView allows the user to see all the data the users have about their days, foods and export them.


## OnboardingView

### Useful Enums for conversion

```swift
enum HeightValue: Equatable, Hashable {

    case metric(Double)
    case imperial(FootInches)
    
 
    struct FootInches: Equatable, Hashable {
        let foot: Int
        let inches: Int
        
        var totalInches: Double {
            Double(foot * 12 + inches)
            }
    }
    
    var asCentimeters: Double {
        switch self {
        case .metric(let value): return value
        case .imperial(let fi): return (Double(fi.foot) * 30.48) + (Double(fi.inches) * 2.54)
        }
    }
    
    var asFeetInches: FootInches {
        switch self {
        case .imperial(let fi): return fi
        case .metric(let value):
            let totalInches = value / 2.54
            let f = Int(totalInches) / 12
            let i = Int(totalInches) % 12
            return FootInches(foot: f, inches: i)
        }
    }
    
    var centimetersDescription: String {
        
        String(format: "%.0f cm", asCentimeters)
    }
    
    var feetInchesDescription: String {
        "\(asFeetInches.foot)' \(asFeetInches.inches)''"
    }
}
```


```swift

enum WeightValue: Equatable {
    case metric(Double)
    case imperial(Double)
    
    var asKilograms: Double {
        switch self {
        case .metric(let value): return value
        case .imperial(let value): return value / 2.20462
        }
    }
    
    var asPounds: Double {
        switch self {
        case .imperial(let value): return value
        case .metric(let value): return value * 2.20462
        }
    }
    
    var kilogramsDescription: String {
        String(format: "%.1f kg", asKilograms)
    }
    
    var poundsDescription: String {
        String(format: "%.1f lbs", asPounds)
    }

    
    // Useful for Text View's 
    func display(for preference: MeasurementSystem) -> String {
           switch preference {
           case .metric: return kilogramsDescription
           case .imperial: return poundsDescription
           }
       }
}


```

## From environment to UserDefaults

The initial way I tried to store a user was to decode a user.json into a User object and inject into in the environment. 

```swift
// ContentView

@State private var user: User = FileManager.default.decode("user.json")
@State private var selectedTab = 0

var body: some View {
    ZStack {
        TabView(selection: $selectedTab)

        ViewA()
            .tag(0)
        ViewB()
            .tag(1)
        ViewC()
            .tag(2)
    }
    .environment(user)
}


// ViewA
@Environment(User.self) var user

```
With this implementation, we'd have to update user.json file every time a user updates their daily weight.


Before the user starts using the app, they need to enter their physical stats for some calculations.

I had to change strategies though, one reason is letting the user choose their units.
Another way is to store the user's information inside UserDefaults and access it with AppStorage. AppStorage is normally used for simple types, but you can actually encode a struct. 



## LogView

This is the first screen the user sees. 

The LogView is initialized with a calendar and the current date. Every day renders a different DayView. When the view appears, we check to see if we already have a Day entry for that date, otherwise we create it. In this manner, we only create Day objects. Once a user selects a new date in the DatePicker, it'll create a new DayView.




### Day View

In the DayView, there's the DayInfoView on top where you can see your current weight of the day and the calories needed to maintain it. It's a NavigationLink to the EditCurrentWeightView which allows you to enter a new weight for the day. 


### Hidden 
When a user update updates their weight on the current day, we should update it the UserDefaults

## ProgressView



### Charts





## DataView



### Updating user settings

We want the user to be able to change their information. We need a save button too to avoid mistakes. The cleanest way to go about this is to make a copy of our userSettings when the view appears (onAppear). 



## What I learned

- Storing a custom object in UserDefaults




&nbsp;

 Customizing ranges inside a DatePicker.
```swift
 private let yearRange: ClosedRange<Date> = {
        let calendar = Calendar.current
        let minDate = calendar.date(byAdding: .year, value: -10, to: .now)!
        let maxDate = calendar.date(from: calendar.dateComponents([.year, .month, .day], from: .now))!
        return minDate...maxDate
    }()
```

&nbsp;

Auto-focusing a field when the user wants to edit something using onAppear and DispatchQueue

```swift
 @FocusState private var isFocused: Bool
.focused($isFocused)
.onAppear {
    DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
        isFocused = true
    }
}
```


## Takeaways

- Because I'm using a list I may have to drop a certain design.
- The functionality will interfere the design 
- Sometimes things don't work because the initial implementation of them interferes (Lists have their own thing)



## Footnotes


1. It's similar to MyFitnessPal's diary view. 
2. I followed <a href="youtube.com/watch?v=LRlSjdTuHWY"> Stewart Lynch's </a> tutorial to learn how.
