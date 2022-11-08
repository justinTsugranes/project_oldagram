import { posts } from './posts.js'

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

/* share the post */
const postOneShare = document.getElementById('post-one-share')

postOneShare.addEventListener('click', function () {
  shareToTwitter()
})

let params = 'menubar=no,toolbar=no,status=no,width=570,height=570' // for window

function shareToTwitter() {
  let shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}&via=${user_id}&hashtags=${hash_tags}`
  window.open(shareUrl, 'NewWindow', params)
}
