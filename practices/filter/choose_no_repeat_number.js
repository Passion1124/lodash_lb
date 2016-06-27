'use strict';

var _ = require("lodash");
function choose_no_repeat_number(collection) {
	var result = _.sortedUniq(collection);
	return result;
}

module.exports = choose_no_repeat_number;
