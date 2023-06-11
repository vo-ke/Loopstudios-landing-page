# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview]
  - [The challenge]
  - [Links]
- [My process] 
  - [Built with] 
  - [What I learned]
  - [Continued development]
  - [Useful resources]
- [Author]
- [Acknowledgments]



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page




### Links
- Solution URL: [http://127.0.0.1:5500/docs/index.html]
- Live Site URL: [https://vo-ke.github.io/Loopstudios-landing-page/]

## My process

### Built with

- Semantic HTML5 markup
- tailwind css
- Mobile-first workflow



### What I learned

i learnt that one can use the span tag to implement some properties that the 'before:: after::' pseudo element can do by labelling the immediate parent element as 'relative' and setting the span tag as 'absolute......' as i created the illusion of animated borderline in the code snippet below
```html
<a href="#" class="hover relative">
            About
            <span class="absolute w-0 left-1/2 -bottom-2 h-v bg-white transform -translate-x-1/2 transition-all duration-500 ease-in-out"></span>
          </a>
```
```css
a:hover span {
    width: 100%;
  }
```


### Continued development

i didnt really do the menu icons on small screen size 'coz i havent learnt javascript yet to implement the nav[-toggler] but in the nearest future I'll be implementin' it

### Useful resources
CHAT-GPT!
CHAT-GPT!!
CHAT-GPT!!!
This cannot be overly emphasized, ONG.

## Author

- Website - comin' soon
- Frontend Mentor - [@vo-ke](https://www.frontendmentor.io/profile/vo-ke)
- Twitter - [@variant_vee](https://www.twitter.com/variant_vee) 


## Acknowledgments
i got inspirations from both Jemmycodes and ecemgo finished works
