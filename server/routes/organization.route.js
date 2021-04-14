'use strict';

const express = require('express');
const router = new express.Router();
const Level = require('./../models/level.model');
const Position = require('./../models/position.model');
const Role = require('./../models/role.model');
const User = require('./../models/user.model');
//const routeGuard = require('../middleware/route-guard');

// Get all users in organization
router.get('/users', async (req, res, next) => {
  const searchQuery = {};
  searchQuery.organization = req.user.organization;

  try {
    const users = await User.find(searchQuery)
      .populate('role', 'name')
      .populate('level', 'name')
      .populate('position', 'name');
    res.json({ users });
  } catch (error) {
    next(error);
  }
});

// Get the levels set by the manager
router.get('/levels', async (req, res, next) => {
  const id = req.user._id;
  //console.log('levels', id);
  try {
    const user = await User.findById(id);
    const orgId = user.organization;
    const levels = await Level.find({ organization: orgId });
    // console.log(levels);
    res.json({ levels });
  } catch (error) {
    next(error);
  }
});

router.get('/roles', async (req, res, next) => {
  const id = req.user._id;
  // console.log('roles', id);
  try {
    const user = await User.findById(id);
    const orgId = user.organization;
    const response = await Role.find({ organization: orgId });
    res.json({ roles: response });
  } catch (error) {
    next(error);
  }
});

router.get('/positions', async (req, res, next) => {
  const id = req.user._id;
  // console.log('positions', id);
  try {
    const user = await User.findById(id);
    const orgId = user.organization;
    const response = await Position.find({ organization: orgId });
    res.json({ positions: response });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
