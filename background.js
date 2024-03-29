/**
 * Small animation function to create basic animations with setInterval
 */

// If the browser is ready start the function
 window.onload = function () {
   //Select the container in which the animation will be played
   let node_copy = document.getElementById('row1');

   //Your animation frames, frame by frame.
   //Feel free to add or delete frames, to see what happens ;)    
   asciiFrames = 
           [`+ + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             - + + + + + + + + -
             - + + + + + + + + -
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             - - + + + + + + - -
             - - + + + + + + - -
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             - - - + + + + - - -
             - - - + + + + - - -
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             - - - - + + - - - -
             - - - - + + - - - -
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             - - - - - - - - - -
             - - - - - - - - - -
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `
             + + + + + + + + + +
             + + + + + + + + + +
             - - - - - - - - - -
             - - - - - - - - - -
             + + + + + + + + + +
             + + + + + + + + + +
             
            `,
            `
             
             + + + + + + + + + +
             - - - - - - - - - -
             - - - - - - - - - -
             + + + + + + + + + +
             
             
            `,
            `
             
             
             - - - - - - - - - -
             - - - - - - - - - -
             
             
             
            `,
            `
             
             
             - - - - - - - - - 
             - - - - - - - - - 
             
             
             
            `,
            `
             
             
             - - - - - - - -  
             - - - - - - - -  
             
             
             
            `,
            `
             
             
             - - - - - - -  
             - - - - - - -  
             
             
             
            `,
            `
             
             
             - - - - - -  
             - - - - - -  
             
             
             
            `,
            `
             
             
             - - - - -  
             - - - - -  
             
             
             
            `,
            `
             
             
             - - - -   
             - - - -  
             
             
             
            `,
            `
             
             
             - - -   
             - - -  
             
             
             
            `,
            `
             
             
             - -    
             - -  
             
             
             
            `,
            `
             
             
             -     
             -   
             
             
             
            `,
            `
             
             
                  
                
             
             
             
            `,
            `+
             
             
             
             
             
             
                               +
            `,
            `+ +
             +
             
             
             
             
                               +
                             + +
            `,
            `+ + + 
             + +
             +
             
             
                               +
                             + +
                           + + +
            `,
            `+ + + + 
             + + +
             + + 
             + 
                               +
                             + +
                           + + +
                         + + + +
            `,
            `+ + + + +
             + + + +
             + + +
             + +               +
             +               + +
                           + + +
                         + + + +
                       + + + + +
            `,
            `+ + + + + +
             + + + + + 
             + + + +           +
             + + +           + +
             + +           + + +
             +           + + + +
                       + + + + +
                     + + + + + +
            `,
            `+ + + + + + +
             + + + + + +       +
             + + + + +       + +
             + + + +       + + +
             + + +       + + + +
             + +       + + + + +
             +       + + + + + +
                   + + + + + + +
            `,
            `+ + + + + + + +   +
             + + + + + + +   + +
             + + + + + +   + + +
             + + + + +   + + + +
             + + + +   + + + + +
             + + +   + + + + + +
             + +   + + + + + + +
             +   + + + + + + + +
            `,
            `+ + + + + + + + ∆ +
             + + + + + + +   + +
             + + + + + +   + + +
             + + + + +   + + + +
             + + + +   + + + + +
             + + +   + + + + + +
             + +   + + + + + + +
             +   + + + + + + + +
            `,
            `+ + + + + + + + ∆ +
             + + + + + + + ∆ + +
             + + + + + +   + + +
             + + + + +   + + + +
             + + + +   + + + + +
             + + +   + + + + + +
             + +   + + + + + + +
             +   + + + + + + + +
            `,
            `+ + + + + + + + ∆ +
             + + + + + + + ∆ + +
             + + + + + + ∆ + + +
             + + + + +   + + + +
             + + + +   + + + + +
             + + +   + + + + + +
             + +   + + + + + + +
             +   + + + + + + + +
            `,
            `+ + + + + + + + ∆ +
             + + + + + + + ∆ + +
             + + + + + + ∆ + + +
             + + + + + ∆ + + + +
             + + + +   + + + + +
             + + +   + + + + + +
             + +   + + + + + + +
             +   + + + + + + + +
            `,
            `+ + + + + + + + ∆ +
             + + + + + + + ∆ + +
             + + + + + + ∆ + + +
             + + + + + ∆ + + + +
             + + + + ∆ + + + + +
             + + +   + + + + + +
             + +   + + + + + + +
             +   + + + + + + + +
            `,
            `+ + + + + + + + ∆ +
             + + + + + + + ∆ + +
             + + + + + + ∆ + + +
             + + + + + ∆ + + + +
             + + + + ∆ + + + + +
             + + + ∆ + + + + + +
             + +   + + + + + + +
             +   + + + + + + + +
            `,
            `+ + + + + + + + ∆ +
             + + + + + + + ∆ + +
             + + + + + + ∆ + + +
             + + + + + ∆ + + + +
             + + + + ∆ + + + + +
             + + + ∆ + + + + + +
             + + ∆ + + + + + + +
             +   + + + + + + + +
            `,
            `+ + + + + + + + ∆ +
             + + + + + + + ∆ + +
             + + + + + + ∆ + + +
             + + + + + ∆ + + + +
             + + + + ∆ + + + + +
             + + + ∆ + + + + + +
             + + ∆ + + + + + + +
             + ∆ + + + + + + + +
            `,
            `+ + + + + + + ∆ + +
             + + + + + + ∆ + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + ∆ + + + + +
             + + + + ∆ + + + + +
             + + + ∆ + + + + + +
             + + ∆ + + + + + + +
            `,
            `+ + + + + + ∆ + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + ∆ + + + + +
             + + + + ∆ + + + + +
             + + + + ∆ + + + + +
             + + + ∆ + + + + + +
            `,
            `+ + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + ∆ + + + + +
             + + + + ∆ + + + + +
             + + + + ∆ + + + + +
             + + + + ∆ + + + + +
            `,
            `+ + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
            `,
            `+ + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆ + + + +
             + + + + + ∆ + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆ + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + ∆ + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + ∆ + + + + +
             + + + + + ∆∆ + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + ∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + ∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + ∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + ∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + ∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
            `,
            `+ + + + + ∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆∆ + + + + +
            `,
            `+ + + + + ∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
            `,
            `+ + + + + ∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
            `,
            `+ + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
            `,
            `+ + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
            `,
            `+ + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
            `,
            `+ + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆ + + + + +
            `,
            `+ + + + + ∆∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆ + + + + +
            `,
            `+ + + + + ∆∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆ + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆ + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆∆∆∆∆ + + + + +
             + + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆ + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆∆∆∆ + + + + +
             + + + + + ∆∆∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆ + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆∆∆ + + + + +
             + + + + + ∆∆ + + + + +
             + + + + + ∆ + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆∆ + + + + +
             + + + + + ∆ + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + ∆ + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            `+ + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
             + + + + + + + + + +
            `,
            
           ];
   
   
   
   var animateASCII = {
	  init: function(frames, target){
      //Set the start frame to 0
      let i = 0;     
       //Puts the start frame inside the node_copy container   
       node_copy.innerText = frames[0];
       //Starts the interval to render the animation     
       setInterval(() => {
         //Puts the new frame in the node_copy container  
         node_copy.innerText = frames[i];
         /*Goes to the next array element (frame), and set it to 
           zero if we reached the last frame to restart the animation*/
         if (i < frames.length-1) {
           i++;
         } else {
           i = 0;
         }
       //Here you can adjust the animation speed
       }, 150);
    }
   };
   
   //Starts the ASCII function
   animateASCII.init(asciiFrames,node_copy); 
 }