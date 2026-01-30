# The best puzzle game
Background: This is a jigsaw puzzle as I am always a fun of puzzle games. You can choose different difficulty level if you want also. Here is a screenshot of how it looks like:
<img width="1337" height="834" alt="image" src="https://github.com/user-attachments/assets/47db754a-05c6-43c3-bc96-b0860f3c9da0" />

Feel free to access through the link below: 
https://zoetan0714.github.io/The-best-puzzle-game/

**Game overview**
A simple web-based jigsaw puzzle game, where the player can choose from three difficulty levels:
- **Easy:** 4 pieces  
- **Medium:** 8 pieces  
- **Hard:** 12 pieces

Please also note that: 
- The game also has a 1 min timer.
- The user will be able to find the **Game area** where pieces are dragged and placed on the left, and **Image area** where the complete picture is displayed as reference.

The objective is to correctly assemble the puzzle before the timer runs out.

**Technologies Used**
Here is a list of the technologies used: JavaScript for interactions, HTML for UIUX, and CSS for styling

**Planned future enhancement** 
The puzzle game will be improved in following directions: 
1) Users to chose amongst different images, or even upload their own liked images.
2) The will be point reward system, where completing within 20s will get bonus points. 

**Planning**
1) Variables:
   - Reference Image
   - Position of the drag & drop piece
2) Other component
   - Difficulty selection
   - Timer box: 3min
  

**Pseudocode**
1) Top bar
   Difficulty dropdown box (Easy / Medium / Hard);
   "Start" button: only if difficulty level is selected;
   "New Game" button: user can click anytime during the game / after the game finished 

3) Game page
   Upon "Start" is clicked:  
>>> Split images into N pieces, shuffle them randomly, and display in the game area  
>>> Display reference image on the right
>>> Set timer to 3 minutes

3) Progress & Results 
   When timer > 0 and puzzle NOT completed: User can drag and drop pieces
   >>> CHECK if piece placed correctly
       IF correct, lock piece in place
       ELSE, return piece to original position
   >>> IF puzzle completed:
       DISPLAY "You Win!" message

  ELSE IF timer runs out:
    DISPLAY "Time's Up!" message
  
  ELSE IF user click "New Game":  
    INITIATE the game, go back to the starting page 
    
END OF THE GAME, user can click "New Game" button to start a new game  

4) Good to have: 
>>> Pause & Resume button 

