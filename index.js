import { postsData } from './data.js'
import Card from './Card.js'

const postOne = new Card(postsData.userOne)
const postTwo = new Card(postsData.userTwo)
const postThree = new Card(postsData.userThree)

function render() {
  document.getElementById('cardOne').innerHTML = postOne.getCardHtml()
  document.getElementById('cardTwo').innerHTML = postTwo.getCardHtml()
  document.getElementById('cardThree').innerHTML = postThree.getCardHtml()
}

/* call render posts */
render()

/* TODO Refactor the like functions to toggle a boolean so count is either incremented or decremented. */

/* get the counts form posts.js */
let countOne = posts[0].likes
let countTwo = posts[1].likes
let countThree = posts[2].likes

/* Capture the elements */
const postOneLike = document.getElementById('post-one-like')
const postOneLikes = document.getElementById('post-one-likes')
const postTwoLike = document.getElementById('post-two-like')
const postTwoLikes = document.getElementById('post-two-likes')
const postThreeLike = document.getElementById('post-three-like')
const postThreeLikes = document.getElementById('post-three-likes')

/* Listen for button click */
postOneLike.addEventListener('click', function () {
  incrementOne()
})
postTwoLike.addEventListener('click', function () {
  incrementTwo()
})
postThreeLike.addEventListener('click', function () {
  incrementThree()
})

/* Increment the count */
function incrementOne() {
  countOne += 1
  postOneLikes.textContent = `${countOne.toLocaleString('en-US')} likes`
}
function incrementTwo() {
  countTwo += 1
  postTwoLikes.textContent = `${countTwo.toLocaleString('en-US')} likes`
}
function incrementThree() {
  countThree += 1
  postThreeLikes.textContent = `${countThree.toLocaleString('en-US')} likes`
}
