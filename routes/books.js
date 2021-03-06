var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');
 
router.get('/', function(req, res, next) {
      
    dbConn.query('SELECT * FROM books ORDER BY id desc',function(err,rows)     {
 
        if(err) {
            req.flash('error', err);
           
            res.render('books',{data:''});   
        } else {
          
            res.render('books',{data:rows});
        }
    });
});


router.get('/add', function(req, res, next) {    
   
    res.render('books/add', {
        name: '',
        author: ''        
    })
})


router.post('/add', function(req, res, next) {    

    let name = req.body.name;
    let author = req.body.author;
    let errors = false;

    if(name.length === 0 || author.length === 0) {
        errors = true;

       
        req.flash('error', "Please enter name and author");
        
        res.render('books/add', {
            name: name,
            author: author
        })
    }

    
    if(!errors) {

        var form_data = {
            name: name,
            author: author
        }
        
        
        dbConn.query('INSERT INTO books SET ?', form_data, function(err, result) {
           
            if (err) {
                req.flash('error', err)
                 
                
                res.render('books/add', {
                    name: form_data.name,
                    author: form_data.author                    
                })
            } else {                
                req.flash('success', 'Book successfully added');
                res.redirect('/books');
            }
        })
    }
})


router.get('/edit/(:id)', function(req, res, next) {

    let id = req.params.id;
   
    dbConn.query('SELECT * FROM books WHERE id = ' + id, function(err, rows, fields) {
        if(err) throw err
         
        
        if (rows.length <= 0) {
            req.flash('error', 'Book not found with id = ' + id)
            res.redirect('/books')
        }
        
        else {
            
            res.render('books/edit', {
                title: 'Edit Book', 
                id: rows[0].id,
                name: rows[0].name,
                author: rows[0].author
            })
        }
    })
})

// update book data
router.post('/update/:id', function(req, res, next) {

    let id = req.params.id;
    let name = req.body.name;
    let author = req.body.author;
    let errors = false;

    if(name.length === 0 || author.length === 0) {
        errors = true;
        
        // set flash message
        req.flash('error', "Please enter name and author");
        
        res.render('books/edit', {
            id: req.params.id,
            name: name,
            author: author
        })
    }

  
    if( !errors ) {   
 
        var form_data = {
            name: name,
            author: author
        }
        // update query
        dbConn.query('UPDATE books SET ? WHERE id = ' + id, form_data, function(err, result) {
           
            if (err) {
                
                req.flash('error', err)
               
                res.render('books/edit', {
                    id: req.params.id,
                    name: form_data.name,
                    author: form_data.author
                })
            } else {
                req.flash('success', 'Book successfully updated');
                res.redirect('/books');
            }
        })
    }
})
   
// delete book
router.get('/delete/(:id)', function(req, res, next) {

    let id = req.params.id;
     
    dbConn.query('DELETE FROM books WHERE id = ' + id, function(err, result) {
        
        if (err) {
           
            req.flash('error', err)
            
            res.redirect('/books')
        } else {
           
            req.flash('success', 'Book successfully deleted! ID = ' + id)
           
            res.redirect('/books')
        }
    })
})

module.exports = router;
