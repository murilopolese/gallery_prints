function Header() {
  return h('header', {},
    h('h1', {}, 'P R I N T S')
  )
}

function Main(articles) {
  return h('main', {}, ...articles)
}

function Article(data) {
  return h('article', {},
    h('a', { href: `#preview-${data}` },
      h('img', { src: `media/${data}` })
    )
  )
}

function Gallery() {
  let articles = db.map(Article).reverse()
  return articles
}

function Preview(data) {
  if (!data) {
    return h('div', { class: 'preview hidden' }, '')
  }
  let [ artist ] = data.split('-')
  let link = credit[artist]
  if (link) { // preview with credit
    return h('div', { class: 'preview' },
      h('a', { href: '#close' }, 'x'),
      h('img', { src: `media/${data}`}),
      h('a', { href: link, target: '_blank' }, data),
    )
  } else { // Without credit
    return h('div', { class: 'preview' },
      h('a', { href: '#close' }, 'x'),
      h('img', { src: `media/${data}`}),
      h('a', {}, data),
    )
  }
}

function getImageUrl() {
  let h = window.location.hash
  let data = window.location.hash.slice(9) // #preview-
  return data
}

function route() {
  let data = getImageUrl()
  if (data) {
    render('#preview', Preview(data))
    document.querySelector('#preview').classList.remove('hidden')
    document.body.style.position = 'fixed'
  } else {
    document.querySelector('#preview').classList.add('hidden')
    document.body.style.position = 'relative'
  }
}

/*
 * Adapted from https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
 */
function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect()
    return bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
}
function scan() {
  const articles = document.querySelectorAll('article')
  for (let i = 0; i < articles.length; i++) {
    let article = articles.item(i)
    article.setAttribute('data-visible', isInViewport(article))
  }
}

window.addEventListener("hashchange", function(e) {
  route()
})

window.addEventListener('scroll', scan)
window.addEventListener('resize', scan)

window.onload = function() {
  let load = db.map(url => {
    return new Promise((resolve, reject) => {
      var img = new Image()
      img.src = `media/${url}`
      img.onload = resolve
    })
  })
  Promise.all(load)
    .then(() => {
      render('main', Gallery())
      route()
      scan()
    })
    .catch((e) => console.log('deu ruim', e))
}
