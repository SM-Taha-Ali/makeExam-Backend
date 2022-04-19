const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/Users')

const JWT_SECRET = "clix123#p$rO"

async function createPaper(req, res) {
    // Check whether the user with this email already exists

    let success = false
    try {
        const errors = validationResult(req);
        // Checking if validations are fulfilled
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "Sorry a user with this email already exists." })
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Creating user by using create method of mongoose model
        user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: secPass,
            email: req.body.email,
        });
        // Sending the user object as a response
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        success = true
        res.json({ success, authToken });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(success, "Internal server error")
    }

}

async function getPaper(req, res) {
    try {
        const users = await User.find().select("-password");
        res.json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}

async function updateRole_Status(req, res) {
    try {
        let item = await User.findById(req.body.id);
        if (!item) { return res.status(404).send("Not found!") }
        const { status } = req.body;
        const { role } = req.body;
        const newItem = {};
        if ("boolean" === typeof(status)) { newItem.status = status }
        if (role) { newItem.role = role }
        item = await User.findByIdAndUpdate(req.body.id, { $set: newItem }, { new: true })
        res.json(newItem);
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal server error")
    }
}


module.exports = {
    createPaper,
    getPaper
}