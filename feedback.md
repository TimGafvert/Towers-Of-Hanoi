# Project 1 Evaluation

## Deployment:
**3: Excelling**
> Did you successfully deploy your project to github pages? Is the app's functionality the same deployed as it is locally?

## Technical Requirements:
**3: Excelling**
> Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

## Code Quality:
**2: Performing**
> Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code?

## Creativity/Interface:
**3: Excelling**
> Is your user interface easy to use and understand? Does it make sense for the problem you're solving? Does your interface demonstrate creative design?


## Notes

Great job on this project, it works well and is written well. Consider the following notes as minor points for improvement.

Great separation of concerns (model/view). One thing to improve is thinking about keeping functionality encapsulated and only exposing/using member functions outside sparingly. Ex: In script.js you instantiated a `Display` object and then called three separate methods (`init`, `listen`, `listen2`) to initialize/bootstrap that object when only one (`init()`) would do. You could even take that a step further and call `this.init()` from `Display`'s constructor function and leave just a single line `const display = new Display(logic)` to completely initialize that object.

Some comments in your code, but could benefit from a bit more info describing each function.

A few DRYness issues to be addressed (see below).

Some redundant method calls as well. In `selectPole()` View.js there's a call to `this.makeSounds()` which sets up the sound files and prepares some member variables to play audio later. This was already called by `init()` so any subsequent call litters more `audio` elements in the DOM.


# Things you'd like specific feedback on:

`DRYing my code`

One of the ways we can look for unDRY code is wherever we're doing similar logic in multiple places. Particularly places where the only real difference is a single value.

One example of this is `selectPoleLogic()` in Model.js

Here you have a switch statement which performs a different action depending on the pole which has been clicked. If we look more closely at the case statements, we can see they're identical with one exception: Each case statement number is the same as the pole number referenced under `this.gameLogic`. Case 1 -> `pole1`, case 2 -> `pole2`, case 3 -> `pole2`.

```js
switch (num) {
  case 1:
    if (!this.gameLogic.ringIsSelected) {
      if (this.gameLogic.pole1.length > 0) {
        this.gameLogic.ringIsSelected = true
        this.gameLogic.hand = this.gameLogic.pole1.pop()
        return 1
      } else return 0
    } else {
      if ((this.gameLogic.pole1.length === 0) || (this.gameLogic.pole1[this.gameLogic.pole1.length - 1] < this.gameLogic.hand)) {
        this.gameLogic.ringIsSelected = false
        this.gameLogic.pole1.push(this.gameLogic.hand)
        return 2
      }
    }
    break
```

Object properties can be referenced via the dot operator `.` like you've done here or we can use square bracket notation `[]`. With square brackets we can use a string to represent the property name.

Could we pull this pole label out to a variable? With that in mind, consider the following:

```js
selectPoleLogic (num) {
  // build the key
  let poleKey = `pole${num}`

  // pole array by `num`
  let selectedPole = this.gameLogic[poleKey]

  if (!this.gameLogic.animating) {
    if (!this.gameLogic.ringIsSelected) {
      if (selectedPole.length > 0) {
        this.gameLogic.ringIsSelected = true
        this.gameLogic.hand = selectedPole.pop()
        return 1
      } else return 0
    } else {
      if ((selectedPole.length === 0) || (selectedPole[selectedPole.length - 1] < this.gameLogic.hand)) {
        this.gameLogic.ringIsSelected = false
        selectedPole.push(this.gameLogic.hand)
        return 2
      }
    }
  }
}
```

Another place that can benefit from DRYing up is your `selectPole()` in View.js. I'll leave it as an exercise for you to try slimming down that method in a similar fashion.