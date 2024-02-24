import 'https://apis.google.com/js/api.js';

const RANGE = 'Sheet1'

export default function loadSheet({
    sheetID,
    apiKey,
    onLoad = (value) => value,
    onError = (errorMessage) => console.log(errorMessage),
    range = RANGE,
}
) {
    function setSheet() {
        // 2. Initialize the JavaScript client library.
        gapi.client.init({
            'apiKey': apiKey,
        }).then(function () {
            // 3. Initialize and make the API request.
            return gapi.client.request({
                'path': 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetID + '/values/' + RANGE,
            })
        }).then(function (response) {
            // 4.
            onLoad(response.result)
        }, function (reason) {
            onError('Error: ' + reason.result.error.message);
        });
    };
    // 1. Load the JavaScript client library.
    gapi.load('client', setSheet);
}