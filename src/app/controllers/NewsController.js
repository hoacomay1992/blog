class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug <Biến động> nó sẽ nhận ra nhiều giá trị sau /news/
    show(req, res) {
        res.render('New Detail ...');
    }
}


module.exports = new NewsController;