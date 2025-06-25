---
layout: ../../layouts/ProjectPostLayout.astro
title: 'K-Fit'
description: 'An iOS fitness app focused on tracking calories and weight'
image:
    url: 'https://docs.astro.build/assets/rose.webp'
    alt: 'The Astro logo on a dark background with a pink glow.'
stack: ['swift']
---



## Why?

There are countless fitness apps on the app store packed with great features. A bunch of them include neat features such as tracking macros, creating and sharing workouts within a community, and even logging water intake and sleep. Personally, I feel a bit overwhelmed seeing a lot of features condensed into one app. Drawing inspiration from "MyFitnessPal" and "Lose It!", I wanted to try creating an app that focuses mostly on one aspect: tracking weight and calories.  

&nbsp;

## Design considerations

- There are no exercise or workout features.
- A food database is not included; users create the foods themselves which are then saved in a JSON file. 



## Navigating the Structure

The app is separated into 3 main views:

- LogView
- ProgressView
- OptionsView

The LogView allows the user to 



## LogView



## ProgressView


## DataView



## What I learned




&nbsp;

 Customizing ranges inside a DatePicker.
```swift

struct CustomDatePickerView: View {
    
    @Binding var selectedDate: Date
    
    // Returns a range of dates.
    // The parenthesis computes the range to be assigned to yearRange.
    private let yearRange: ClosedRange<Date> = {
        let calendar = Calendar.current
        guard let minDate = calendar.date(byAdding: .year, value: -10, to: .now),
              let maxDate = calendar.date(from: calendar.dateComponents([.year, .month, .day], from: .now)) else {
            fatalError("Failed to create year range")
        }
        return minDate...maxDate
    }()
    
    var body: some View {
        // in expects a ClosedRange<Date>
        DatePicker(
            "Select Date",
            selection: $selectedDate,
            in: yearRange,
            displayedComponents: [.date]
        )
        .datePickerStyle(GraphicalDatePickerStyle())
    }
}



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



