---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Frontend Fun"
pubDate: 2025-11-10T24:07:15-04:00
description: 'Migrating frontend notes'
tags: ["programming"]
postSlug: 'post-12'
---



&nbsp;

## Intro


Break through the unoptimal dialogue in your mind and outwork your self-doubt consistently.

&nbsp;
## HTML and CSS 

### P.A.R.C Framework

I won't be a wimp.

From Robin Williams's *Non-Designer's Design Book*:
- **Proximity** - Group related items together
- **Alignment** - Create visual connections
- **Repetition** - Strengthen unity and consistency
- **Contrast** - Create visual interest and hierarchy


&nbsp;

### Colours


Black and White
<div class="black-colors flex gap-1">
  <div class="color-box bg-[#1f1f29]"></div>
  <div class="color-box bg-[#17171F]"></div>
  <div class="color-box bg-[#13131A]"></div>
  <div class="color-box bg-[#292727]"></div>
  <div class="color-box bg-[#1f1c1c]"></div>
  <div class="color-box bg-[#1A1616]"></div>

</div>


<div class="black-colors flex gap-1">
  <div class="color-box bg-[#F5F5FA]"></div>
  <div class="color-box bg-[#F0F0F5]"></div>
  <div class="color-box bg-[#F2F2F8]"></div>
  <div class="color-box bg-[#F9F4F4]"></div>
  <div class="color-box bg-[#F5F0F0]"></div>
  <div class="color-box bg-[#FAF4F4]"></div>
</div>


&nbsp;

### Animatable Properties

<div class="property-grid">

<div class="property-box">background </div>
<div class="property-box">color </div>
<div class="property-box">font-size </div>
<div class="property-box">width </div>
<div class="property-box">letter-spacing </div>
<div class="property-box">line-height </div>
<div class="property-box">margin </div>
<div class="property-box">padding </div>
<div class="property-box">border-width </div>

</div>

&nbsp;

Fonts

I use Gabarito for this site, and the font exists in my public folder:

1. public -> fonts
2. styles -> fonts.css
3. global.css -> imports font.css

&nbsp;



&nbsp;

### CSS Syntax
Box-shadow: You can put as many as you want.
&nbsp;

```bash
box-shadow: color offset-x offset-y blur-radius;
```

&nbsp;

Media Queries
```bash
@media (min-width: 600px) { } /* Apply when viewport ≥ 600px */
@media (max-width: 800px) { } /* Apply when viewport ≤ 800px */
```

&nbsp;

Margin

```bash
margin: A , TB LR , T LR B, T R B L
margin: 0 auto # centering [<--->Element Width<--->]
```


<div class="mx-auto mt-5  w-30 bg-green-700">
 
 mx-auto mt-5


</div>



&nbsp;

Convention of adding variables to :root (refers to html)
```bash
:root matches the highest element in the DOM. 
```
&nbsp;




### Debugging

If it's not looking the way you want:
- Check imports, inline styles, Tailwind classes. Can you really override that style (!important loses Javascript inline style)?
- Did you specify a width, height, padding? Headings come with their own margins. 
- You can use inset, line-height as crazy glue.
- Account for all breakpoints: If you change one property at a selected screen size, you have to account for it on others.
- Try grid instead of flex.



&nbsp;

## JavaScript


### Useful stuff


Arrow functions
```javascript
d => d.id
function id(d) {
    return d.id
}

```


&nbsp;


Template literals & object Access
```javascript
const x = { message: { username: "Kangi", text: "Breathe" } };
console.log(`${x.message.username}: ${x.message.text}`);
```
&nbsp;


RNG
```javascript
let range = 11 
const randomInt = Math.floor(Math.random() * range);
```



&nbsp;

Copying arrays
```javascript
let original = ["Oyakodon", "Saba no Misoni", "Gyusuji"]
const copy1 = Array.from(original, x => x);
const copy2 = [...original];
```

&nbsp;

Splicing

What does this <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" class="secondary-a"> log</a>?
```javascript
// array.splice(start, deleteCount, item1, item2);
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 6, 7, 4, 5); 
```


<details>
<summary >Show Answer</summary>
 
 [1,2,6,7,5]

</details>

&nbsp;


Fill & From
```javascript
a = Array(4).fill("entry");
// {length: 3 } is an array-like object
b = Array.from({ length: 3 }, (_, i) => `Team ${i + 1}`);
```



&nbsp;

Every
```javascript
[1, 3, 5].every(n => n % 2 !== 0); // true
["a", "b", ""].every(s => s.trim() !== ''); // false
```

&nbsp;


Entries
```javascript
// Object.entries captures m1 and m2 which you map over.
let messages = { m1: ["Conquer", "The"], m2: ["Terminal"] };
Object.entries(messages).map(([key,value]) => {
    console.log(key)
    console.log(value)
})
```
&nbsp;

Map
```javascript
let teams = { team: ["Joe", "Banaya", "Osroene", "Edessa"] };
teams.team.map((member) => {
  console.log(member);
});
```

&nbsp;

Arrow Functions vs Regular Functions

<u> this </u>
- Function: What calls it.
- Arrow: What's around it.

<u> Hoisting </u>
- Call functions from anywhere

&nbsp;


Examples
```javascript
// Arrow function - lexical `this`
// A lexical 'this' is one that inherits it from the surrounding scope
const App = () => <div>Content</div>;

// Regular function - can be called before declaration
function App() { return <div>Content</div>; }
```

&nbsp;

```javascript
const obj = {
  name: 'MyApp',
  arrowFunc: () => console.log(this.name),    
  regularFunc() { console.log(this.name); }  
};

obj.arrowFunc()    // undefined
obj.regularFunc()  // 'MyApp'
```
&nbsp;

The anonymous function's this here points to the outside, surrounding one.

```javascript
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log(this.seconds);
  }, 1000);
}
new Timer();
```

&nbsp;
## React 

Basics: <a class="secondary-a" href="https://react.dev/learn/render-and-commit"> Render and Commit</a> and <a class="secondary-a" href="https://react.dev/reference/react/useEffect"> useEffect</a>.






&nbsp;

State Updates
```javascript
// Functional state update with previous state
setItems(prevItems => [...prevItems, newItem]);
```





&nbsp;

You can also review the repos for <a class="secondary-a"  href="https://joefarah.com/projects/Gameok"> Gameok </a> and <a   class="secondary-a" href="https://joefarah.com/projects/diary/"> Grid Diary</a>.  






&nbsp;

## Astro

Basics:
- Build time: Prepare everything to be shipped to the browser
- Run time: It's on the browser

### Key Concepts
- Browser APIs only work client-side (no `window`  in frontmatter)
- At build time, components render to HTML/CSS by default (no client JS) 
- Use `client:*` for interactivity (hydration). When your website runs, Astro can help you run React components

&nbsp;

### Applications 


Check out: <a class="secondary-a" href="https://vite.dev/guide/features.html#glob-import"> meta.glob </a>
```typescript
// allPosts will look like this with eager: true
/*[
    [Object: null prototype] [Module] {
    frontmatter: [Getter],
  },
  ...
  ]
*/

// I can include what I need
type AstroPost = {
  frontmatter: {
    pubDate: string;
	tags: string[]
   
  };
  
};

const allPosts = Object.values(import.meta.glob('./posts/*.md', { eager: true })) as AstroPost[];
const tags = [...new Set(allPosts.map((post: AstroPost) => post.frontmatter.tags).flat())];
const sortedPosts = allPosts.sort((a: AstroPost, b: AstroPost) => {
  const dateA = new Date(a.frontmatter.pubDate);
  const dateB = new Date(b.frontmatter.pubDate);
  return dateB.getTime() - dateA.getTime();
});

```


<details>
<summary >Show Answer</summary>
 
 1. What does eager do?

   [Object: null prototype] [Module] {
    frontmatter: [Getter],
    file: [Getter],
    url: [Getter],
    rawContent: [Getter],
    compiledContent: [Getter],
    getHeadings: [Getter],
    Content: [Getter],
    default: [Getter]
  },

}
 



</details>

&nbsp;

## Resources



<a class="secondary-a" href="https://www.w3schools.com/cssref/css_ref_combinators.php">Combinators </a> 

<a class="secondary-a" href="https://typescale.com/">Typescale </a>



<a class="secondary-a" href="https://www.easing.dev/create/cubic-bezier#x1=0.5&y1=0&x2=0.5&y2=1"> Easing Graphs  </a>


<a class="secondary-a" href="https://www.realtimecolors.com"> Realtime Colors</a>

<a class="secondary-a" href="https://gradients.app/en/mix"> Gradients</a>

<a class="secondary-a" href="https://getcssscan.com/css-buttons-examples"> CSS Scan </a>

<a class="secondary-a" href="https://react.dev/learn/keeping-components-pure"> React Docs  </a>




<style>

.color-box {
    width: 3rem;
    height: 2rem;
}

.property-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

/* Add the properties you want to transition to as well before the hover */
/* You can't have a line-height animate without specifying it in the property-box */
.property-box {
    background-color: #dfdbdbff;
    margin-top: 1px;
    transition: all 0.2s ease; 
    width: 100%;
    padding: 2px;
    height: 2rem;
    border-width: 2px;
    line-height: 1.5rem;
}

.property-box:nth-child(1):hover { background-color: green; }
.property-box:nth-child(2):hover { color: green; }
.property-box:nth-child(3):hover { font-size: 18px; }
.property-box:nth-child(4):hover { width: 80%; }
.property-box:nth-child(5):hover { letter-spacing: 0.2rem; }
.property-box:nth-child(6):hover { line-height: 0.2rem; }
.property-box:nth-child(7):hover { margin-top: -0.2rem; }
.property-box:nth-child(8):hover { padding: 10px; }
.property-box:nth-child(9):hover { border-width: 8px; }

</style>


