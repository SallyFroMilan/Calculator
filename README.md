## Calculator

Our ***final project*** is going to combine everything you’ve learned so far: you’re going to make an **on-screen calculator using JavaScript**, **HTML**, and **CSS**.

As usual there are elements of this project that *are not* going to be trivially easy for you, but if you’ve been following the course so far, you definitely have everything you need to finish it. We’re going to walk you through the various steps you can take, but again, how you actually implement them is up to you!

Here are some use cases (abilities your project needs to have):
<ol>
<li>Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console.</li>
<ul>
<li>add</li>
<li>subtract</li>
<li>multiply</li>
<li>divide</li>
</ul><br>
<li>A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.</li><br>
<li>Create a new function <code>operate</code> that takes an operator and 2 numbers and then calls one of the above functions on the numbers.</li><br>
<li>Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
<ul>
<li>Do not worry about wiring up the JS just yet.</li>
<li> There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.</li>
<li>Add a “clear” button.</li>
</ul><br>
<li>Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.</li><br>
<li>Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then <code>operate()</code> on the two numbers when the user presses the “=” key.
<ul>
<li>You should already have the code that can populate the display, so once <code>operate()</code> has been called, update the display with the ‘solution’ to the operation.</li>
<li>This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.</li>
</ul><br>
<li>Gotchas: watch out for and fix these bugs if they show up in your code:</li>
<ul>
<li> Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, <code>12 + 7 - 5 * 3 =</code> should yield <code>42</code>.</li>
<li><strong>Your calculator should not evaluate more than a single pair of numbers at a time</strong>. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).</li>
<li>You should round answers with long decimals so that they don’t overflow the screen.</li>
<li>Pressing <code>=</code> before entering all of the numbers or an operator could cause problems!</li>
<li>Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”.</li>
<li>Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!</li>
</ul>
</ol>

#### Extra credit
<ul>
<li>Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a <code>.</code> button and let users input decimals! Make sure you don’t let them type more than one though: <code>12.3.56.5.</code> It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display).</li>
<li>Make it looks nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.</li>
<li>Add a “backspace” button, so the user can undo if they click the wrong number.</li>
<li>Add keyboard support! You might run into an issue where keys such as (<code>/</code>) might cause you some trouble.</li>
</ul>

