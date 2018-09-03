const mcs = require("../lib/mcs");
const Http = require("sf-core/net/http");
const http = new Http();

exports.getAllUsers = () => {
    return new Promise((resolve, reject) => {
        http.request(Object.assign(mcs.creteRequestOptions({
            apiName: "hnm",
            endpointPath: "users"
        }), {

            'method': 'GET',
            onLoad: function(response) {
                resolve(JSON.parse(response.body.toString()));
            },
            onError: function(e) {
                reject(e);
            }
        }));
    });
};
