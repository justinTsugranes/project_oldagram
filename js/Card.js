function Card(data) {
  Object.assign(this, data)

  this.getCardHtml = function () {
    const { name, username, location, avatar, post, comment, likes } = this

    return `
    <div>
            <article class="card-container">
                <div class="feed">
                <div class="card-header">
                    <img src=${avatar} alt="" class="card-avatar" />
                    <div class="user-info-container">
                        <h2 class="user-name">${name}</h2>
                        <p class="user-location">${location}</h2>
                    </div>
                </div>
                <div class="card-image-container">
                    <img src=${post} alt="" class="card-image" />
                </div>
                <div class="social-section-container">
                    <div class="icons-container">
                        <img class="like icon" id="post-one-like" src="images/icon-heart.png" alt="">
                        <img class="comment icon" src="images/icon-comment.png" alt="">
                        <img class="share icon" src="images/icon-dm.png" alt="" id="post-one-share">
                    </div>
                    <div class="likes-container">
                        <h3 class="likes" id="post-one-likes">${likes} likes</h3>
                    </div>
                    <div class="comments-container">
                        <div class="comments-user-name">
                            <p>
                            ${username}
                            <span class="user-comment">${comment}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </article>
            </div>`
  }
}

export default Card
