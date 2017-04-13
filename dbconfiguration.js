var mysql=require('mysql');
var connection=mysql.createPool
({
    host:'127.0.0.1',
    port:'2611',
    user:'root',
    password:'root',
    database:'CustomerDB'

});
module.exports=connection;