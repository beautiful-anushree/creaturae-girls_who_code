

var characterNum = [1,2,3,4,5,6,7,8,9,10];
​
function getRandomCharacterNumber() {
  return characterNum[Math.floor(Math.random() * characterNum.length)];
}

​
var plotNum = [1,2,3,4,5,6,7,8,9,10];
​
function getRandomPlotNumber() {
  return plotNum[Math.floor(Math.random() * plotNum.length)];
}

var settingNum = [1,2,3,4,5];
​
function getRandomSettingNumber() {
  return settingNum[Math.floor(Math.random() * settingNum.length)];
}

var genres = ['Romance', 'Fantasy', 'Mystety', 'Thriller', 'Adventure', 'Sci-Fi', 'Young Adult'];
​
function getRandomGenre() {
  return genres[Math.floor(Math.random() * genres.length)];
}
