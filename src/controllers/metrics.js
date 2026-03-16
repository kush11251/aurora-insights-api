const express = require('express');
const router = express.Router();
const metricsService = require('../services/metrics');
router.get('/', (req, res) => {
    metricsService.getMetrics().then((metrics) => {
        res.json(metrics);
    }).catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error fetching metrics' });
    });
});
module.exports = router;