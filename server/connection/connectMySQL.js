// Khai bao thu vien
const mysql = require('mysql');

// Khoi tao ket noi mysql
const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Trantuyen2312',
    database: 'posts',
    port: 3306
});

// Kiem tra ket noi
connect.connect((err, conn) => {
    if (err) {
        console.log("ket noi that bai", err);
    } else {
        console.log("ket noi thanh cong");
    }
})

module.exports = connect;