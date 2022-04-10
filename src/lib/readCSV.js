import Papa from 'papaparse';

export function readCSV(file) {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                resolve(results.data);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}
