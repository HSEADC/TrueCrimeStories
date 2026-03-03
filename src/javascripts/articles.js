console.clear()

// настройки подключения свайпера (галереи)
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,
    autoplay: {
        delay: 4000,
        pauseOnMouseEnter: 'true'
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: 'true'
    }

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // }
})

// подключение и работа с базой данных airtable

import Airtable from 'airtable'

const token =
    'patrwrepp0k0ELwjS.d89397e519238cb27aca86b4af1c00f9bba9dc1a032405fc4454c64c46516c2c'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
})

var base = Airtable.base('appW4mogQFemHeJy8')

let data
getArticlesTeasers().then((content) => {
    data = content

    updateInfo(data)
})

function getArticlesTeasers() {
    return new Promise((resolve, reject) => {
        const content = []

        base('articles teasers')
            .select({
                maxRecords: 100
            })
            .firstPage()
            .then((result) => {
                result.forEach((record) => {
                    content.push({
                        id: record.id,
                        title: record.fields['Title'],
                        description: record.fields['Description'],
                        tags: record.fields['Tags'],
                        image: record.fields['Images'],
                        url: record.fields['URL']
                    })
                })

                resolve(content)
            })
    })
}

function updateInfo(content) {
    content.forEach((stroke) => {
        createArticleTeaserCard(stroke)
    })
}

function createArticleTeaserCard(stroke) {
    let { title, description, image, tags, url } = stroke

    const card = document.createElement('a')
    card.href = url
    card.classList.add('W_ArticleTeaser')
    card.style.backgroundImage = `url(${image})`

    const header = document.createElement('h3')
    header.innerText = title
    header.classList.add('A_ArticleTeaserHeader')

    const text = document.createElement('p')
    text.innerText = description
    text.classList.add('A_ArticleTeaserDescription')

    const articleTags = document.createElement('div')
    articleTags.classList.add('C_ArticleTeaserTags')

    // const articleImage = document.createElement('img')
    // articleImage.src = image

    tags.forEach((tag) => {
        const articleTag = document.createElement('span')
        articleTag.classList.add('A_ArticleTeaserTag')
        articleTag.innerText = tag

        articleTags.appendChild(articleTag)
    })

    card.appendChild(header)
    card.appendChild(text)
    card.appendChild(articleTags)
    // card.appendChild(articleImage)

    document.querySelector('.O_ArticleTeasers').appendChild(card)
}
