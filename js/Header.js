function Header(data) {
  Object.assign(this, data)

  this.getHeaderHtml = function () {
    const { logo, userAvatar } = this

    return `
        <div class="header-wrapper">
          <img class="brand" src=${logo} />
          <img class="user-avatar" src=${userAvatar} alt="user avatar" />
        </div>`
  }
}

export default Header
