// Helper function: writes any HTML into the #out div
function render(html) {
  document.getElementById('out').innerHTML = html
}

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet() {
  // TODO: Write your code here

  const name = prompt("What is your actual name?")
  if (!name) {
    render("<h1> Do you not have a name? You left this blank! </h1>")
    return
  }
  render(`<p> Hello, ${name}. Nice to mee you!`)

}

/* 
  Function 2 — averageNumbers()
  ------------------------------
  - Prompt the user for a list of numbers separated by commas
  - Split the input into an array, turn into numbers
  - Calculate the average
  - Display the average AND the list of numbers
*/
function averageNumbers() {
  // TODO: Write your code here



}

/* 
  Function 3 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay() {
  // TODO: Write your code here

  const h = new Date().getHours()
  let msg = ''
  if (h < 12) 
    { msg = 'Good Morning!' }
  else if (h < 18)
     { msg = 'Good Afternoon!' }
  else {
    msg = 'Good Evening!'
  }
   render(`<p> ${msg} </p>`)
}

/* 
  Function 4 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween() {
  // TODO: Write your code here
    const min = parseInt(prompt('Enter a minimum number:'))
    const max = parseInt(prompt('Enter a maximum number:'))

    if(isNaN(min) || isNaN(max)){
      render(`Please use actual numbers!`)
    return
    }
    if(min >= max) {
      render(`Please make sure min is less than max`)
      return
    }

    const rndNum = Math.floor( Math.random() * (max - min + 1) + min)
    render(rndNum)
}



/* 
  Function 6 — changeTitle()
  ---------------------------
*/
function changeTitle() {
  const newTitle = prompt("Enter a new title for the page:")
  if (newTitle) {
    document.title = newTitle
    render(`<p>Page title changed to: <strong>${newTitle}</strong></p>`)
  } else {
    render("<p>You didn’t enter a title!</p>")
  }
}

/* 
  Function 6 — cycleTextColor()
  ---------------------------
*/
let colorIndex = 0
const colors = ["red", "green", "orange", "blue", "purple"];

function cycleTextColor() {
  const out = document.getElementById('out');
  colorIndex = (colorIndex + 1) % colors.length;
  out.style.setProperty('color', colors[colorIndex], 'important');
  const p = document.createElement('p');
  p.innerHTML = `Text color changed to <strong>${colors[colorIndex]}</strong>`;
  out.appendChild(p);
}

/* 
  Function 7 — randomBgColor()
  ---------------------------
*/

function randomBgColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  const color = `rgb(${r}, ${g}, ${b})`
  const out = document.getElementById("out")
  out.style.backgroundColor = color
  render(`<p>Background color changed to ${color}</p>`)
}

/* 
  Function 8 — doubleNumber()
  ---------------------------
*/
function doubleNumber() {
  const num = parseFloat(prompt("Enter a number:"))
  if (isNaN(num)) {
    render("<p>That’s not a valid number!</p>")
    return
  }
  render(`<p>${num} doubled is <strong>${num * 2}</strong></p>`)
}




/* 
  Function 5 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput() {
  const out = document.getElementById('out');
    out.style.color = '';
  out.style.backgroundColor = '';
  out.innerHTML = "<p>Output cleared.</p>";
}


// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnAvg').addEventListener('click', averageNumbers)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnTitle').addEventListener('click', changeTitle)
document.getElementById('btnColor').addEventListener('click', cycleTextColor)
document.getElementById('btnBg').addEventListener('click', randomBgColor)
document.getElementById('btnDouble').addEventListener('click', doubleNumber)

document.getElementById('btnClear').addEventListener('click', clearOutput)





/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/
