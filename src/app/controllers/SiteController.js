const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //GET /
    index(req, res, next) {
        // Course.find({}, function (err, course) {
        //     if(!err) {
        //         res.json(courses);
        //         return; 
        //     }
        //     res.status(400).json({ error: 'ERROR!!!'});
        // });
        
        //READ
        Course.find({}) // controller => model
            .then(courses => { // lấy về dữ liệu từ model => controller
                res.render('home', { //controller => view || render (home) view về user
                    courses: mutipleMongooseToObject(courses)// truyền data từ model sang view
                });
            })
            .catch(next);
        //res.render('home');
    }

    //GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
