const express = require('express');
const router = express.Router();
const database = require('../connection/connectMySQL');

// API lay thong tin tat ca cac ban ghi
router.get('/', (req, res) => {
    // Khai bao chuoi query string - cau lenh theo tac vs SQL
    const queryString = 'select * from users'
    
    // Goi database
    database.query(queryString, (err, result) => {
        // Kiem tra ket noi
        if (err) {
            // Neu that bai
            return res.status(500).json({
                message: 'Da co loi xay ra vui long lien he duoc giai dap',
                error: err
            })
        } else {
            // Neu thanh cong
            return res.status(200).json({
                status: 200,
                message: 'Du lieu da duoc lay thanh cong',
                data: result, // lay so luong thanh cong
                results: result.length // So luong ban ghi
            })
        }
    })


});

// Lay thong tin mot ban ghi theo id
router.get('/:id', (req, res)=>{
    const {id} = req.params
    const queryString = 'select * from users where UserId = ?'
    
    database.query(queryString, id, (err, result) => {
        if (err) {
            // Neu that bai
            return res.status(500).json({
                message: 'Da co loi xay ra vui long lien he duoc giai dap',
                error: err
            })
        } else {
            // Neu thanh cong
            return res.status(200).json({
                status: 200,
                message: 'Du lieu da duoc lay thanh cong',
                data: result, // lay so luong thanh cong
            })
        }
    })
})

router.delete('/:id', (req, res) => {

})

module.exports = router;

