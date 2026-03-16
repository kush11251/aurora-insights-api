const data = require('../data/metrics.json');
const getMetrics = () => {
    return new Promise((resolve, reject) => {
        // Simulate data processing delay
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
};
module.exports = { getMetrics };