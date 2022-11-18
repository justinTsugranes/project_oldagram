import { headerData, postsData } from './data.js'
import Header from './Header.js'
import Card from './Card.js'

const header = new Header(headerData.header)
const postOne = new Card(postsData.userOne)
const postTwo = new Card(postsData.userTwo)
const postThree = new Card(postsData.userThree)

function render() {
  document.getElementById('header').innerHTML = header.getHeaderHtml()
  document.getElementById('cardOne').innerHTML = postOne.getCardHtml()
  document.getElementById('cardTwo').innerHTML = postTwo.getCardHtml()
  document.getElementById('cardThree').innerHTML = postThree.getCardHtml()
}

render()
