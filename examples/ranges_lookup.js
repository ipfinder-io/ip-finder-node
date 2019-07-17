const Ipfinder = require('ipfinder');
const ipfinder = new Ipfinder('YOUR_TOKEN_GOES_HERE');

ipfinder.getRanges("Telecom Algeria").then(data => {
     console.log(data);
    // console.log(data.status_message);
}).catch(console.log);