var db=require('../dbconfiguration');

var Customer= {

    getAllCustomers:function(callback)
    {
        return db.query("Select * from tblCustomer",callback);
    },

    getCustomerById:function(id,callback)
    {
        return db.query("select * from tblCustomer where Id=?",[id],callback);
    },

    addCustomer:function(Customer,callback)
    {
        console.log("inside service");
        return db.query("Insert into tblCustomer (UserName) values(?)",[Customer.UserName],callback);
    },

    deleteCustomer:function(id,callback)
    {
        return db.query("delete from tblCustomer where Id=?",[id],callback);
    },

    updateCustomer:function(id,Customer,callback)
    {
        return  db.query("update tblCustomer set UserName=? where Id=?",[Customer.UserName,id],callback);
    },

    deleteAll:function(item,callback)
    {
        var query =  "delete from tblCustomer where Id in ("+item.id+")";
        return db.query(query,callback);
    }
};
module.exports=Customer;