const Ipfinder = require("ipfinder");
const ipfinder = new Ipfinder();

ipfinder.getAddressInfo("2c0f:fb50:4003::").then(data => {
     console.log(data);
    // console.log(data.status_message);
}).catch(console.log);