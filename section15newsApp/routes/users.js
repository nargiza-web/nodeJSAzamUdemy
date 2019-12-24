const express =require('express')
const router =express.Router()

router.post('/delete-article', (req, res) => {
  let articleId = req.body.articleId
  
  db.none('DELETE FROM articles WHERE articleid = $1', [articleId])
  .then(() => {
    res.redirect('/users/articles')
  })
})

router.get('/add-article', (req, res) => {
  res.render('add-article')
})

router.post('/add-article', (req, res) => {
  let title = req.body.title
  let description = req.body.description
  let userId = req.session.user.userId
  
  db.none('INSERT INTO articles(title, body, userid) VALUES($1, $2, $3)', [title, description, userId])
  .then(() => {
    res.send("SUCCESS")
  })
})

router.post('/update-article', (req, res) => {
  let title = req.body.title
  let description = req.body.description
  let articleId = req.body.articleId

db.none('UPDATE articles SET title = $1, body = $2 WHERE articleid = $3', [tile, description, articleId])
.then(() => {
  res.redirect('/users/articles')
})
})

router.get('/articles/edit/:articleId', (req, res) => {
  
  let articleId = req.params.articleId
  
  db.one('SELECT articleid, title, body FROM articles WHERE articleid = $1', [articleId])
  .then((article) => {
    res.render('edit-article', article)
  })
})

router.get('/articles', (req, res) => {
  
  let userId = req.session.user.userId
  //let userId = 2
  
  db.any('SELECT articleid, title, body FROM articles WHERE userid = $1', [userId])
  .then((articles) => {
    res.render('articles', {articles: articles})
  })
})

module.exports = router