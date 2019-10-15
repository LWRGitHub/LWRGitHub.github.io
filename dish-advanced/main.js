// import React from 'react';

document.addEventListener('DOMContentLoaded', () => {
  let storageKey = "savedDishes";
  // contain all the dishes throughout the program
  let dishList = [];
  //let dishContent = {};

  // setup elements
  const form = document.getElementById('registrar');
  const input = form.querySelector('input');
  const textarea = form.querySelector('textarea');
  // const name = form.getElementById('name');
  // const ingredients = form.getElementById('ingredients');
  
  const mainDiv = document.querySelector('.main');
  const ul = document.getElementById('foodList');
  
  const div = document.createElement('div');
  const filterLabel = document.createElement('label');
  
  div.appendChild(filterLabel);

  mainDiv.insertBefore(div, ul);

  // function br() {
  //   return (
  //     <br />
  //   )
  // }
 
  function createLI(text, text2) {
    function createElement(elementName, property, value) {
      const element = document.createElement(elementName);  
      element[property] = value; 
      return element;
    }
    
    function appendToLI(elementName, property, value) {
      const element = createElement(elementName, property, value);     
      li.appendChild(element); 
      //localStorage.setItem(element);
      return element;
    }
    
    const li = document.createElement('li');
    appendToLI('span', 'textContent', text);   
    appendToLI('p', 'innerHTML', text2.replace(/\n/g, '<br />')); 
    appendToLI('span', 'textContent', 'edit: dish rating');
    //appendToLI()
    appendToLI('button', 'textContent', 'edit');
    appendToLI('button', 'textContent', 'remove');
    
    //localStorage.setItem(li);
    return li;
  }

  // visually add a dish on the page (render).
  function addDish(dishName, ingredients1) {
    const li = createLI(dishName, ingredients1);
    ul.appendChild(li);
  }

  function storeDishList() {
    localStorage.setItem(storageKey, JSON.stringify(dishList));
  }

  // add to dishList and store it in local storage.
  function storeDish(newDish, text2) {
    let dishContent = {};
    dishContent.name = newDish;
    dishContent.ingredients = text2;
    dishList.push(dishContent);
    //dishList.push(newDish);
    storeDishList();
  }

  // edit a dish, store again
  function editDish(indexOfDish, newDish, newIngredients) {
      dishList[indexOfDish].name = newDish;
      dishList[indexOfDish].ingredients = newIngredients;
      storeDishList();
  }

  function removeDish(indexOfDish) {
      dishList.splice(indexOfDish, 1);
      storeDishList();
  }
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value;
    const text2 = textarea.value;
    // const text2br = text2.replace("\n", br());
    // console.log(text2);
    if(text === ""){
      alert(`Ooooops, no input.\nPlease enter a dish name.`);
    } else {
      input.value = '';
      addDish(text, text2);
      storeDish(text, text2);
    }
  });
    
  ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      
      const button = e.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      const action = button.textContent;

      // get the index of the <li> within the <ul>
      // so we know which dish to modify/remove in the list
      // before saving it again to localstorage.
      const nodes = Array.from( ul.children );
      const indexOfLi = nodes.indexOf( li );

      const nameActions = {
      
        remove: () => {
          ul.removeChild(li);
          removeDish(indexOfLi);
        },
        edit: () => {
          const span = li.firstElementChild;
          const p = li.children[1]
          const input = document.createElement('input');
          const input2 = document.createElement('textarea');
          input.type = 'text';
          input2.type = 'text';
          input.value = span.textContent;
       
          input2.value = p.innerHTML.replace(/<br>/g, '\n');
          // input2.replace(/<br>/g, '\n')
          // const input2br = input2.replace("\n", br());
          li.insertBefore(input, span);
          li.insertBefore(input2, p);
          li.removeChild(span);
          li.removeChild(p);
          button.textContent = 'save';  
        },
        save: () => {
          const input = li.firstElementChild;
          const input2 = li.children[1]
          const span = document.createElement('span');
          const p = document.createElement('p');
          span.textContent = input.value;
          p.innerHTML = input2.value.replace(/\n/g, '<br />');
          // const input2br = input2.replace("\n", br());
          li.insertBefore(span, input);
          li.insertBefore(p, input2);
          li.removeChild(input);
          li.removeChild(input2);
          button.textContent = 'edit';
          editDish(indexOfLi, input.value, input2.value); 
          //editDish(indexOfLi, );        
        }
      };
      nameActions[action]();
    }
  });  


   // XXX fake stored dishes - this is just for testing

   // let fakeDishList = ["potatoes", "ratatouille", "casserole", "steak"];
   // localStorage.setItem(storageKey, JSON.stringify(fakeDishList))
 
   // retrieve stored dishes
   // and render them on the page.
   let text = localStorage.getItem(storageKey);
   let list = JSON.parse(text);
   if (list !== null) {
     // make sure there is something in storage before setting dishList to it.
     dishList = list;
   }
 
   for (let i = 0; i < dishList.length; i++) {
     addDish(dishList[i].name, dishList[i].ingredients);
   }
 
});  
  
  
  
  
  
  
  