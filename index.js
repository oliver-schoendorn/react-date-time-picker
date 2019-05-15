'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/date-time-range-picker.production.min.js');
} else {
    module.exports = require('./dist/index.js');
}
