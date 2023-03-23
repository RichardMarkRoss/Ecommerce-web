import React, { Component } from 'react';
import  './Card.css';
class Card extends Component {
  render() {
    const blob = document.getElementById("blob");

    window.onpointermove = event => { 
      const { clientX, clientY } = event;
      
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
      }, { duration: 3000, fill: "forwards" });
    }
    const letters = "1234567890!@#$%^*&*ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let interval = null;
    
    const screen = document.querySelector(".screen"),
          name = document.querySelector(".name");
    
    screen.onmouseenter = event => {  
      let iteration = 0;
      
      clearInterval(interval);
      
      interval = setInterval(() => {
        name.innerText = name.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return name.dataset.value[index];
            }
          
            return letters[Math.floor(Math.random() * 26)]
          })
          .join("");
        
        if(iteration >= name.dataset.value.length){ 
          clearInterval(interval);
        }
        
        iteration += 1 / 3;
      }, 30);
    }

    return (
            <div class="screen">  
            <div class="screen-image"></div>  
                <div class="screen-overlay"></div>  
                <div class="screen-content">
                    <i class="screen-icon fa-brands fa-codepen"></i>
                    <div class="screen-user">
                    <span class="name" data-value="Richard">Richard</span>
                    <a class="link" href="#" target="_blank">Full-Stack Developer</a>
                    </div>
                </div>
                
                <div id="blob"></div>
                <div id="blur"></div>
            </div>
    );
  }
}

export default Card;