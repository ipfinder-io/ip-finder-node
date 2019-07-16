const Ipfinder = require("../src/ipfinder");
const ipfinder = new Ipfinder();

ipfinder.getAddressInfo("1.0.0.0").then(data => {
     console.log(data);
    // console.log(data.status_message);
    })
    .catch(console.log);