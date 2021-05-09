
var mongoose = require('mongoose');

/*
    TODO:   Complete the TransactionSchema which will contain the name,
            reference number, and the amount of a transaction in the database.
*/

var TransactionSchema = new mongoose.Schema({
    // your code here
});

module.exports = mongoose.model('Transaction', TransactionSchema);
