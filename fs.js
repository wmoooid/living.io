const fs = require('fs');

fs.readdir('./components/sections', (error, data) => {
    data.forEach((item) => {
        if (item.endsWith('.tsx')) {
            fs.mkdir(`./components/sections/${item.split('.')[0]}`, () => {});
            // fs.rename(`./components/sections/${item}`, `./components/${item.split('.')[0]}/${item}`, () => {});
        }
    });
});
