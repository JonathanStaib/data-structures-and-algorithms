'use strict';

// const { mainModule } = require('process');
const Movies = require ('./movies');

function sortYear(arr) {
  arr.sort(compareYear);
  return arr;
}


function compareYear(a, b) {

  return b.year - a.year;
  // let arr = [];
  // for(let i = 0; i < Movies.length; i++){
  //   arr.push(Movies[i].year);
  //   console.log('Years', Movies[i].year);
  // }
}

function sortTitle(arr) {
  arr.sort(compareTitle);
  return arr;
}


function compareTitle(a, b) {

  a = a.title.replace('The ', '');
  // a = a.title.replace('A', '');
  // a = a.title.replace('An', '');
  b = b.title.replace('The ', '');
  // b = b.title.replace('A', '');
  // b = b.title.replace('An', '');
  return a.localeCompare(b);
  // let arr = [];
  // for(let i = 0; i < Movies.length; i++){
  //   arr.push(Movies[i].title);
  //   console.log('Years', Movies.title);
  // }
}


module.exports = {sortYear, compareYear, sortTitle, compareTitle};
