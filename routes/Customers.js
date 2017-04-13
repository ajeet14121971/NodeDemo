var express = require('express');
var router = express.Router();
var Customer=require('../models/Customer');

//@@ ===== GET Method for LISTING Customer Detail ===== @@//
router.get('/:id?',function(req,res,next)
{
    if(req.params.id)
    {
        //@@ ===== Get Customer By Id "http://localhost:3000/Customers/1" ===== @@//
        Customer.getCustomerById(req.params.id,function(err,rows)
        {
            if(err)
            {
                res.json(err);
            }
            else
            {
                var results= {results:{ReponseCode:"True",Message:"Users Detail",UserData:rows}};
                res.send(JSON.stringify(results,null,' '));
            }
        });
    }
    else
    {
        //@@ ===== Get All Customers "http://localhost:3000/Customers" ===== @@//
        Customer.getAllCustomers(function(err,rows)
        {
            if(err)
            {
                res.json(err);
            }
            else
            {
                var results= {results:{ReponseCode:"True",Message:"Users Detail",UserDetails:rows}};
                res.send(JSON.stringify(results,null,' '));
            }
        });
    }
});

//@@ ===== POST Method for ADDING Customer ===== @@//
router.post('/',function(req,res,next)
{
    Customer.addCustomer(req.body,function(err,count)
    {
        console.log(req.body);
        if(err)
        {
            res.json(err);
        }
        else
        {
            var results= {results:{ReponseCode:"True",Message:"User Inserted Successfully"}};
            res.send(JSON.stringify(results,null,' '));
        }
    });
});

//@@ ===== POST Method for DELETING Customer ===== @@//
router.post('/:id',function(req,res,next)
{
    Customer.deleteAll(req.body,function(err,count)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            var results= {results:{ReponseCode:"True",Message:"User Deleted Successfully"}};
            res.send(JSON.stringify(results,null,' '));
        }
    });
});

//@@ ===== DELETE Method for DELETING Customer ===== @@//
router.delete('/:id',function(req,res,next)
{
    Customer.deleteCustomer(req.params.id,function(err,count)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            var results= {results:{ReponseCode:"True",Message:"User Deleted Successfully"}};
            res.send(JSON.stringify(results,null,' '));
        }
    });
});

//@@ ===== PUT Method for UPDATING Customer Detail ===== @@//
router.put('/:id',function(req,res,next)
{
    Customer.updateCustomer(req.params.id,req.body,function(err,rows)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            var results= {results:{ReponseCode:"True",Message:"User Updated Successfully"}};
            res.send(JSON.stringify(results,null,' '));
        }
    });
});

module.exports=router;