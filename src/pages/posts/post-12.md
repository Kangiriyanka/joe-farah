---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Python Fun"
pubDate: 2025-11-09T23:16:21-04:00
description: 'Migrating Python notes'
tags: ["programming"]
postSlug: 'post-11'
---


## Intro 

This post acts as a hub for Python notes. I can't recall the number of times I've had to look up pythonic concepts like kwargs, decorators or remember  what  \__name__ == "\__main__"  <a class="secondary-a" href="https://stackoverflow.com/questions/419163/what-does-if-name-main-do">means</a>. When you code, be kind to yourself when writing programs and have fun testing different patterns.

&nbsp;



## Python




### Special identifiers and modules




```python
# a.py
def my_function():
    print("Listening to Tupac")

if __name__ == "__main__":
    my_function()
    print(__name__)  #  main
    print("Song: Changes - Tupac")
```
&nbsp;

```python
# b.py
import a
my_module.my_function() #  Listening to Tupac
print(my_module.__name__) # a
# It won't print "Song: Changes - Tupac"
```

&nbsp;

#### Circular imports 

When a module imports another, Python executes all the code at the top level. Print statements and variable assignments happen automatically, but functions only get registered unless they're explicitly called. Basically, the "execution" means something different for functions. Below, <u>c.py</u> and <u>d.py</u>  won't give a circular import unless you call one's play function as they're importing. 

&nbsp;

```python
# c.py
import d
t1 = "Change the World - Eric Clapton"
def play(tune):
    print("Playing" + t1)

```

&nbsp;

```python
# d.py
import c
t2 = "Karma Chameleon - Boy Georges"
# If I uncomment the line below, I'll get a circular import
# d tries to call c's play function before it's defined
def play(tune):
    print("Playing" + t2)
```



&nbsp;

### Slicing

What are you slicing today samurai?

```python
a[:-1]    
a[:-2]    
a[-1:]   
a[-1:-3]  
a[-3:]   
```

&nbsp;
<details>
<summary >Show Answer</summary>

- All except 1
- All except 2
- Last Element 
- Empty ( -1 > -3)
- Last 3 elements

</details>
&nbsp;

&nbsp;

### Paths

What do w,x,y,z print here?
```python
import os

path = "/home"
path2 = "User/Documents"
path3 = "/User"

w = os.path.join(path, "User/Desktop", "file.txt")
x = os.path.join(path2, "/home", "file.txt")
y = os.path.join(path, "User/public/", "Documents")
z = os.path.join(path, "Downloads","file.txt", "/home")

print(f"{w}\n{x}\n{y}\n{z}")

# Bonus: Gives the absolute path of the file
# Used in Gameok for uploading cover photos
basedir = os.path.abspath(os.path.dirname(__file__))

```

&nbsp;
<details>
<summary>Show Answer</summary>

- w = /home/User/Desktop/file.txt  
- x = /home/file.txt  
- y = /home/User/public/Documents  
- z = /home  

</details>
&nbsp;


### Type Hints

The default value for a here is None.
```python
def test(a: dict | None = None) -> None:
    pass
```


&nbsp;

### Functools

What do s1 and s2 return?
```python
import functools
# reduce(function, iterable, initial_value)
s1 = functools.reduce(lambda x, y: x**2 + y**2, [1,2,3,4])
s2 = functools.reduce(lambda acc, y: acc + y**2, [1,2,3,4], 0)
```

&nbsp;
<details>
<summary>Show Answer</summary>

- s1 = ((1<sup>2</sup> + 2<sup>2</sup>)<sup>2</sup> + 3<sup>2</sup>)<sup>2</sup> + 4<sup>2</sup> = 1172
- s2 = 0 + 1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + 4<sup>2</sup> = 30

</details>
&nbsp;


&nbsp;

### Args & Kwargs


Basics
```python
# *: 1 layer [a,b,c]
def draw(*args):
    for item in args:
        print(item)

draw("Hotdog", "Scissors", "Bowl")

# **: 2 layers { a: 1, b: 2, c:3 }
def draw(**kwargs):
    # kwargs is a dictionary
    for key, value in kwargs.items():
        print(key, value)

draw(first="Hotdog", second="Scissors")

```

&nbsp;

Combined


You can specify as many arguments before *args, and ditto for **kwargs
```python
def routines(title, *args, tempo= None, **kwargs):
    print(title, args, tempo, kwargs)

routines("Deku Palace", 1, 2, 3, tempo="fast", location="Bouthiller Park")
```

&nbsp;

Unpacking the stars 
```python
def formula(a, b, c):
    print(a, b, c)

obj = {'b': "A", 'c': "S"}

# formula("C", b= "A", c="S")
formula("C", **obj) 

elements = ["consistency", "focus"]
def truth(x, y):
    print(x, y)
truth(*elements) 
```

&nbsp;


### Inheritance & Polymorphism

What does this print?

```python
class BaseCommand:
    def main(self):
        print(f"Running {self.__class__.__name__}.main()")
        self.invoke()  # Calls subclass implementation
    
    def invoke(self):
        raise NotImplementedError("Subclasses must implement this!")

class Command(BaseCommand):
    def invoke(self):
        print("Executing Command.invoke()")

class Group(BaseCommand):
    def invoke(self):
        print("Executing Group.invoke()")

# BaseCommand().main()  # Raises NotImplementedError
Command().main() 
Group().main() 
```

&nbsp;

<details>
<summary >Show Answer</summary>

- Running Command.main()
- Executing Command.invoke()
- Running Group.main()
- Executing Group.invoke()

</details>

&nbsp;


### Decorators


The function tagged with @ becomes the argument for the decorator.<sup><a href="#footnotes" class="secondary-a">1.</a></sup> When you tag your function, the wrapper is already returned, but not called. Closures in python (inner functions) remembers the arguments from their parent functions.


```python
def stretch_decorator(func):
    # Wrapper knows that its parent stretch_decorator 
    # has a func argument.
    def wrapper():
        print("Stretch")
        func()
        print("Stretch")
    return wrapper

# Tagging with @
# stretch_decorator(run) returns the wrapper function
@stretch_decorator
def run():
    print("Run")

run()
# Output: Stretch, Run, Stretch
```

&nbsp;


The order is: repeat(10) returns  my_decorator(jump) which returns wrapper. The wrapper knows all the previous arguments.

```python
def repeat(num_times):
    def my_decorator(func):
        def wrapper():
            # Wrapper can see num_times 
            for i in range(num_times):
                func()
        return wrapper
    return my_decorator

@repeat(num_times=10)
def jump():
    print("Jump")

# Execute wrapper with original jump func.
jump()
```

&nbsp;

Class decorator

Stretch will have access to duration.
```python
# Play with this code as much as you want (*)
def class_decorator(cls):
    # NewStretch inherits from Stretch 
    # Parent(Child)
    class NewStretch(cls):
        # cooldown is also a keyword argument
                                            # * adding a kwarg before **kwargs
        def __init__(self, *args, cooldown= "Massage your hips", **kwargs):
            
            super().__init__(*args, **kwargs)
            self.cooldown = cooldown
            
        
        def duration(self, time):
            print(f"Stretch {self.name} for {time} seconds")

        def __str__(self):
            return f"After you do {self.name}, {self.cooldown}"

    return NewStretch

# class_decorator(Stretch) returns  NewStretch
@class_decorator
class Stretch:
    def __init__(self, name):
        self.name = name
        
p = Stretch(name= "pigeon")
p.duration(time = 30)  
print(p)
```

&nbsp;

Adding properties via decorator
```python
def add_property(cls):
    @property
    def area(self):
        return self.width * self.height

    # Why does this work?
    # This inserts the area property into the class’s __dict__.
    cls.area = area
    return cls

@add_property
class Paper:
    def __init__(self, width, height):
        self.width = width
        self.height = height

p = Paper(8.5, 11)
print(p.area) 

```







&nbsp;


### Useful Stuff

```python
# divmod
print(divmod(7, 2))  

# 2D matrix for DP
dp = [[0] * (n+1) for _ in range(m+1)]

# Reverse array
arr[::-1]

# Zip (iterables)
pens = ["Fudenosuke", "Pilot Fineliner", "Staedler Pigment Liner"]
prices = [5.49, 5.34, 5.19]
print(list(zip(pens,prices)))

# Enumerate
for i, pen in enumerate(pens):
    print(i,pen)

```

&nbsp;

### Unit Tests

Running a module like a script using -m flag.
```bash
python -m unittest path/to/module
```

&nbsp;

Testing my Chords class from <a class="secondary-a" href="https://joefarah.com/projects/tk-music"> tk-music </a> 
```python
# How to run: python3 -m unittest package.tests.test_chords
import unittest
from package.src.key import Key 
from package.src.chord import Chord

class TestChords(unittest.TestCase):

    def setUp(self):
        """Set up a Chord instance for testing."""
        key= Key("A")
        self.chords = Chord(key)
    
    def test_get_randomChords_valid(self):
        self.assertEqual(self.chords.get_majorChord(), ["A", "C#/Db", "E"])
        self.assertEqual(self.chords.get_minorChord(), ["A", "C", "E"])
        self.assertEqual(self.chords.get_diminished_7thChord(), ["A", "C", "D#/Eb", "F#/Gb"])
        self.assertEqual(self.chords.get_augmentedChord(), ["A", "C#/Db", "F"])
    
    if __name__ == '__main__':
        unittest.main()

```

&nbsp;

### Regex 

What does this print?
```python
import re
text = """1
a
2
bcd
3
Xyz
4
efG"""
pattern = r"(?<=\d\n)[a-z]+"
matches = re.findall(pattern, text)
print(matches)
```



&nbsp;

<details>
<summary >Show Answer</summary>

 Positive lookbehind: lowercase letters after digit + newline: ['a', 'bcd', 'ef'] <sup a href="#footnotes#" class="secondary-a">2.</sup>

</details>




&nbsp;


## Footnotes 

1. Reading about <a class="secondary-a" href="https://realpython.com/syntactic-sugar-python/#decorators"> syntatic sugar</a>.

2. Regex <a class="secondary-a" href="https://learnbyexample.github.io/python-regex-cheatsheet/"> cheatsheet</a>.




