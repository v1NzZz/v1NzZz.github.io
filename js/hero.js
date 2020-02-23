function heroLoading() {
  let index = 1
  const dots = ['.', '..', '...']
  const title = document.querySelector('.hero-container h1 span');

  setInterval(function() {
      title.innerHTML = dots[index]
      index += 1

      if (index > 2) {
        index = 0
      }
    }, 1000)
}

heroLoading()