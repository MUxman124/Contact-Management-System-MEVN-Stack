const express = require('express')
const router = express.Router()

let contactsModel = require('../model/contacts')


router.route('/create').post(async (req, res, next) => {
    try {
       const contact = await contactsModel.create(req.body);
       console.log("created" + contact);
       res.status(201).json({
           message: 'contact created successfully',
          contact: contact
       });
    } catch (err) {
       return next(err);
    }
 });
 
 router.route('/viewcon/:id').get(async (req, res, next) => {
     try {
        const contact = await contactsModel.findById(req.params.id);
        console.log("created" + contact);
        res.status(201).json({
            message: 'contact created successfully',
           contact: contact
        });
     }
     catch (err) {
        return next(err);
     }
 })



router.route('/').get(async (req, res, next) => {
    try {
       const contacts = await contactsModel.find();
       console.log("contacts" + contacts);
       res.status(200).json({
           message: 'contacts fetched successfully',
           contacts: contacts
       });
    } catch (err) {
       return next(err);
    }
})


router.route('/edit/:id').get(async (req, res, next) => {
    try {
       const contact = await contactsModel.findById(req.params.id);
       console.log("contactssssssssssssssssssssssssssssssssssssssssssss");
       res.status(200).json({
           message: 'contact fetched successfully',
           contact: contact
       });
    } catch (err) {
       return next(err);
    }
})

router.route('/delete/:id').delete(async (req, res, next) => {
    try{
        const contact = await contactsModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'contact deleted successfully',
            contact: contact
        })
    } catch (err) {
        return next(err);
    }
    }
    
)

router.route('/update/:id').put(async (req, res, next) => {
    try {
        const contact = await contactsModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            message: 'contact updated successfully',
            contact: contact
        });
    } catch (err) {
        return next(err);
    }
})

module.exports = router