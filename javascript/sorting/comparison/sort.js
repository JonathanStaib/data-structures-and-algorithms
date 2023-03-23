'use strict';

// const { mainModule } = require('process');
const Movies = require ('./movies');

function sortYear(arr) {
  arr.sort(compareYear);
}


function compareYear() {

  let arr = [];
  for(let i = 0; i < Movies.length; i++){
    arr.push(Movies[i].year);
    console.log('Years', Movies[i].year);
  }
}

function sortTitle(arr) {
  arr.sort(compareTitle);
}


function compareTitle() {

  let arr = [];
  for(let i = 0; i < Movies.length; i++){
    arr.push(Movies[i].title);
    console.log('Years', Movies.title);
  }
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle};
