const MCS = require('sf-extension-mcs');
var options = {
	'backendId': 'YOUR BACKEND ID', //required
	'baseUrl': 'YOUR BASE URL', //required
	'androidApplicationKey': 'YOUR ANDROID APP KEY', //required only for analytics & events
	'iOSApplicationKey': 'YOUR IOS APP KEY', //required only for analytics & events
	'anonymousKey': 'YOUR BASIC AUTHENTICATION ANONYMOUS KEY' //required only to perform operations without logging in first
};
const mcs = new MCS(options);

module.exports = mcs;