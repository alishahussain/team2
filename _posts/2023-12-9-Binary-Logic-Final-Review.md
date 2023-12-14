---
layout: post
toc: false
description:
courses: { csp: {week: 15} }
permalink: review-ticket
type: Arcade
---

# Binary Logic: Arcade 
# Review Ticket
### Alisha Hussain, Anika Bhatnagar, Abdullah Khanani, Vance Reynolds, and Sergi Serpukhovitinov 

<table>
  <tbody>
    <tr>
      <td>Crossover Score</td>
      <td>Feature 1 </td>
      <td>Feature 2</td>
      <td>Feature 3</td>
      <td>Feature 4</td>
      <td>Feature 5</td>
      <td>GitHub</td>
      <td>Analytics</td>
    </tr>
    <tr>
      <td>TBD</td>
      <td><a href="https://alishahussain.github.io/team2//binary-painter">
      Binary Painter Game</a></td>
      <td><a href="https://alishahussain.github.io/team2//memory-game">Binary Memory Game</a></td>
      <td><a href="https://alishahussain.github.io/team2//Binary-Quiz">Binary Knowledge Quiz </a></td>
      <td><a href="https://alishahussain.github.io/team2//Text%20To%20Binary%20Game">Binary Spelling Game</a></td>
      <td><a href="https://alishahussain.github.io/team2//guessing">Binary Guide With Games Linked</a></td>
      <td><a href="https://github.com/alishahussain/team2">BinaryCPT Project Repository</a></td>
      <td><a href="https://github.com/alishahussain/team2/deployments">Deployments</a></td>
    </tr>
  </tbody>
</table>


## Alisha's Painter Game 

The binary painter game is a project that I developed to provide users with an engaging platform for creating pixel art while learning binary logic. Users can easily manipulate RGB values using sliders and even input custom binary codes for precise color selection. Changng values on the sliders simultaneously changes the binary value of the color, showing the users how binary logic applies to color values. By clicking on the grid, users can fill pixels with their chosen colorsI decided to promote a creative way of learning, so that everyone can have fun while expirementing and understanding binary colors. At the beginning of this project, I was unsure of binary logic, but now I can understand how the numbers change, and how to manually do it as well.

#### Issues I encountered
- figuring out how to make the game educational
- storing multiple colors as variables on the canvas
- creating a color bar that the user can pick multiple colors
- adding a cutom binary input option

#### Accomplishments
- did research on mouse click function
- use sliders to have a visual concept of the colors changing
- was able to make variables every time the user made a new color, so that they can draw with lots of different color
- learned how to make an interactive grid
- used math to efficiently format the game, for example: dividing the variables of the grid size by the canvas size so that it fits right

#### If I had more time...
- I would make a color by number game, where the binary values are shownn in each grid, and the user has to select the color that would be made.
- I would add options for the grid size. The user can select if the grid is 5x5, 10x10, etc
    
[![Painter Game Video](https://img.youtube.com/vi/lhSMafcq8IY/0.jpg)](https://youtu.be/tsD74cmm_So)

## Anika's Memory Game

The binary memory game is the feature I focused on for the past couple of weeks. The purpose of the game is for the player to get familier with using the binary numbers and its decimals. The video below goes through the structures, key details of the game, the purpose again. The user is able to learn as well as practice converting binary to its decimal or vice versa, in a fun way! As for making the game, I ran into some issues, an issue I ran into was getting the cards to match up properly. This took a lot of trial and error, I would change things and test it and change more things and test that. The specific parts of the code that I focused on was in the javascript, and it was the functions that releated to card interactions. Another issue I faced was creating 3 gameboards that would work simultaneously. I was sucessfully creating one gamerboard, though with this there was a very recognizable pattern, every other card matched. This way the player was not learning antything. I had to adjust the CSS to make the actual gameboards apppear, and I adjusted them by increasing the number of cards, then I added sperate elements/variables in the HTML for the different gameboards, and lastly I had seperate fuctions that initalize the gameboards in the javascript section of the code. One thing that went well from the start was the style. I liked from the start the format and how the game displayed its self. I also really like the idea of the hover hint. I think it adds a nice touch to the game and makes it more beginner friendly to give away some information without releaving any answers. A vision I had for the future was to have the option to make this a multiplayer game. Currently the scoreboard has no real purpose, so adding on that that, with two players it could keep track of who is able to find more matching pairs. Rather than fully making it single player or multplayer, it would be interesting to be able to display a box that allows the player to select wheather they are playing alone or not. Another thing I would definitely look into is the physical flipping of the cards. Currently the ones I have when you click they just reveal the other side. I think it would be an interesting touch to show a transition of the card flipping over and revealing the numbers on the other side. 
#### Main Takeaways: 
- Purpose of the game: Allowing the player to build recogination and memory skills of the binary numbers and decimals 
- Allows the player to get out of their comfort zone and keep trying to get the correct match over and over again. 
- Issues: The cards would not match up properly, what I would see over and over again was the first pair would match up correctly, though after that inital pair random cards would match up and stay as a match. To fix this I needed to use the help of many outside reasources including my dad and my aunt. I focused a lot on the javascript part editing the the different types of card functions. 
- Creating 3 gameboards that would work simultaneously. I was sucessfully creating one gamerboard, though with this there was a very recognizable pattern. I had to adjust the CSS to make the actual gameboards apppear, then I added seperate elements/variables in the HTML, and lastly I had seperate fuctions that initalize the gameboards in the javascript section of the code.
- Acomplishments: Visual of the game. I like how the game matches the theme, with the neon colors. I like how the cards are displayed. 
- Hover hint. I think this was a nice touch that made the game more enjoyable. I purposefully had it just for the first time a card flips. So after a card is flipped it no long says if it is a decimal or binary number. I did this more for the memory aspect. For future reference I would like to be able to add an option for the player, so they can pick if they would just like it for the first time, or if they want it throughout the game. 
 - Retrospective: Add multiplayer to the game. This gives scoreboard a purpose to count points for each user. Have an option box for letting the players choose if they play alone or with someone. If it is alone take away the scoreboard but if it is with someone have two seperate scores and include a message that displays congragulating the player who wins.
 -  Make cards flip over with an animation when clicked. This adds a more interactive visual to the game, which can grab teh players attention. Possibly could have multicolord cards when they flip, a color that corresponds with decimal and binary number to help with the memorizing.  
 - My learnings: Understand how HTML and CSS work together to build on the visual structure and what gets displayed. I learned how to mess around with editing things to make them look how I want. For example how many cards per game, what color cards, etc. 
 - Learning and praticing JavaScript was a huge part of this game. It was how the game worked, rather than what it looked like. I was able to learn how to get the cards to reveal, match, or go back if it was not a match. JavaScript also updated teh score and the timer.  
 - Learned more about using arrays and how they specifcally helped my cards shuffle up. 
 - I learned how time consuming and tedious coding can be someetimes. Changing one small thing can impact the whole game. But overall the end product is definatly worth it! 
[![Memory Game Video](https://img.https://youtu.be/CnVl-AYDaiY)](https://youtu.be/CnVl-AYDaiY)

## Abdullah's Binary Knowledge Quiz 

The binary knowldege quiz is a quiz that I created and focused on for these past few weeks. The purpose of this quiz is to test the user's knowledge about binary. This quiz is supposed to be taken after using our guides, using our converters, and playing our games. This will help the user finalize their learning about binary as they can tale this quiz as many times as they want. This quiz includes 3 multiple choice options, with 15 questions which include advanced and simple questions and information about binary. Users should take this quiz until they get atleast an 80% (12/15). At the beginning of my development, I ran into issues changing the theme of the quiz, but now I changed it into have a sleek green theme. I also had issues with conducting binary experiments but now I understand it all. I had some up and downs from the start, the up being having a valid selection of questions and answers to input into the JavaScript quiz. I had issues with the styling and the quiz not working itself, but the questions and answers was what went correct from the beginning. Overall, the issues had me struggling for a bit, but using collaboration and team skills, I figured it out. 

#### Abdullah's Issues

- I had issues making the quiz work, as my code had multiple errors
- The quiz theme would show, but the quiz itself wasn't
- When I changed the styles.css file, it crashed my whole quiz due to a missing (")
- The quiz primarily had 5 questions, but when I increased the size to 15 questions, it crashed. 
- Another issue was the font being the same color as the background, which confused me and made me think my questions wren't showing at all
- My final issue was the quiz.js file, I put everything into 1 file instead of the quiz.md, quiz.js, and styles.css files.

#### Accomplishments

- Quiz functions
- Theme change worked into a neon green border and a dark green inside
- Improved from 5 questions to 15 questions
- Added one more multiple choice option, from 2-3
- Worked on theme of whole website
- Had multiple key commits
- Quiz is in table
- The quiz scores work 
- Finally I finished everything

#### If I Had More Time...

- I would make a feature in which it jumbles up the questions instead of the same order
- I would add a feature in which it jumbles up the answer choices
- I would also add more questions
- I would add a feature in which there would be an option to finalize your score, and then it would show the user the correct answer and explanation to the answer
- I would have a skip question button, in case the user would like to skip any oparticular question in the quiz
- I would make a feature in which the correct answer would be shown, if any particular answer was incorrect
- I would make a pre quiz, which would be an easier and simpler version to take before our arcade, and my main quiz would be our post quiz

[Binary Quiz Video](https://youtu.be/yKvhm2D_tdI)

## Vance's Binary Alphabetic Translator Game and Guide

I created the my binary game and its instructions to teach the user how to translate english to binary and vice-versa, the programming required to make this game deepened my knowledge of html and js. The game uses a database of words and gives the user a word in english or binary to translate randomly using a function. The provided video will display how the game works and some of its primary features in more depth. Users should play this game until they can consistantly get atleast 3-5 score before getting three strikes and having to restart. After writing my program I realised that I myself could consitantly convert english to binary but my user might not, so I wrote a long guide with tables, images, and step by step guides on how to do it. As for my team, we worked effectively together, each member successfully completed their assigned tasks as anticipated. We would often help eachother in our different projects to the best extent we could when one of us got stuck.

#### Vance's Issues
 - In the creation of the game I ran into many issues. The first of which came with the most fundemental part of the game, I couldn't get the program to record the correct answers, the program was only recording strikes. After many instances of the program, I got that part of the program to work. However, since the program relied on randomization to give the user prompts, I would sometimes get the same word twice. When this was fixed I worked on getting the program to use english to binary instead of just binary to english and this caused all of my previous work on making two identical things not following eachother to not function.
 - If I had more time to work on this project, I would have added multiple difficulties, and tightened the databases of the difficulties to only one-two letter words for easy, three-four for medium and five letter plus words for hard.

[Translator Game Video](https://youtu.be/f3peOiMGJdI)

## Sergi's Binary Puzzle Game and Guide

For the arcade I created an introductory binary guide that helps students understand the fundamentals of binary. In addition to the guide, I added converter games where the player inputs a decimal or binary number to convert it and potentially learn and memorize the way binary works. I also decided to add a hexadecimal guide since it's another important aspect of binary. One of the converters I created was a converter that included binary, decimals, and hexadecimal conversions. Once the students gets more comfortable with binary I decided it would be a great idea to create two guessing games, one for binary and one for decimals. If the player inputs an incorrect answer, the game makes sure you provide with the right answer to the question. These games help the player not only learn more about binary, but help understand the way it functions. This leads to the last and final binary puzzle game. This is by far the most interactive game which includes instructions, multiple levels that vary in difficulty, and a scoreboard. A cool concept in this game is that the player can run out of time; being able to calculate the conversions fast is really good when using binary, this game helps strengthen those binary skills and have fun at the same time! However, throughout the development of these game I struggled many issues such as the scaling of the games was messing up the menu bar, or the guessing games didn't work as expected whereas it was asking a decimal and expecting a decimal for the answer. I progressed through these games a lot, for example the guessing games didn't have the option to generate a new mumber. If I had more time I would add a hexadecimal guessing game and add more puzzles to the binary puzzle. I think my team and I collaborated well and everyone did their task as far as expected, which was something that calmed me down.

#### Accomplishments: 
- Created a good binary quide
- Learned more about binary in the process
- Added 6 games that focus on math in binary
- Found a great game and was able to make changes to it
- Was able to organize the arcade and assigned tasks for ebergone
- Was a good teammate and collaborator throughout project
- Contributed to the best of my ability and inputted a lot of effort
- Solved many issues that weren't fixing for days
- Learned more about SASS
- Got to give out constructive criticism that helped others

#### If I had more time...
- I would maybe make a multiplayer option for the binary puzzle, this way people can race each other and see who can reach the final level or fail a level the fastest
- I would add a hexadecimal guessing game and add hexadecimal puzzle to binary puzzle game
- I would polish the guide and try to make it easier to understand and more fun/interactive yet educational
- I would try out a new different feature such as ACSII or color code of binary
- I would help my team with their features and imprpove any flaws
- I would organize the arcade in a way where the person just has to follow the instructions and not just wander around it and trying to look for something random

#### Sergi's Issues
- At the very beginning, the puzzle game was not functioning as expected, and the scaling was too big, meaning the player wasn't even able to play it because it conflicted with the theme layout and wasn't able to scroll
- After reading through many lines of code, I found an error that the game had an was able to add new instructions and a link for extra resources regarding binary
- I found conflicting css inside of js that wasn't allowing for me to change the style of my puzzle game
- The convert button for the binary to decimal converter wasn't functioning properly
- The bin-dec-hex converter always had this bug where only 2/3 functions were able to work. After a lot of hard work, I was able to make sure all three inputs worked and all 6 outputs displayed the correct result. 
- The decimal to binary guessing game had this issue where it gave you a decimal and the user had to answer its corresponding binary value, yet if answered incorrectly, the correct answer would be displayed yet again in decimal, not binary. 
- The decimal to binary guessing game had an issue where everytime that I pressed generate new decimal it did not function as expected. 
- At the beginning of the project we had a repo and all the commits never worked. We ended up having to create a new one just so the website could be properly deployed. 
- I had some issues with the permalinks, where many of the files included the same one so it conflicted between all of them and I had to change each one manually. 
- I inputted a couple dates or forgot .md/.ipynb a few times
- Since there was precise scaling needed for my puzzle game to work, I had to remove the header, head, and other parts of the posts section. 

[Sergi's Binary Puzzle Game and Guide Video](https://youtu.be/j0T-oaZraf0)