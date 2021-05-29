const MySqli = require ( 'mysqli' );

let conn = new MySqli({
    Host: 'localhost',
    post: 3306,
    user: 'aju',
    passwd: '123',
    db: 'hira'
});

let db = conn.emit(false, '');

module.exports = {
    database: db
};
