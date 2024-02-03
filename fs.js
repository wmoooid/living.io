const fs = require('fs');

fs.readdir('./components', (error, data) => console.log(data));
