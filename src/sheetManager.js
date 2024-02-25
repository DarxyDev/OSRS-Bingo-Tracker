import 'https://apis.google.com/js/api.js';

const RANGE = 'Sheet1'

export default function sheetManagerFactory({
    sheetID,
    apiKey,
    onError = (errorMessage) => console.log(errorMessage),
    range = RANGE,
}) {
    let sheet;
    function load(onLoad = (value) => value) {
        function loadSheet() {
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
                sheet = response.result;
                onLoad(response.result)
            }, function (reason) {
                onError('Error: ' + reason.result.error.message);
            });
        };
        // 1. Load the JavaScript client library.
        gapi.load('client', loadSheet);
    }
    function getSheet() { return sheet }
    function addCategory(categoryName) {
        let emptyIndex = 0;
        for (let i = 0; i <= sheet.values.length; i++) {
            if (sheet.values[i] === undefined) sheet.values.push([]);
            if (sheet.values[i].length === 0 || sheet.values[i][0] === "") {
                emptyIndex = i;
                break;
            }
        }
        sheet.values[emptyIndex][0] = categoryName;
    }

    return { load, getSheet, addCategory };
}