const fetch = require("node-fetch");

async function fetchAsync (url, type) {
    const init = {
        headers: {
            "content-type": "text/html;charset=UTF-8",
            "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:52.0) Gecko/20100101 Firefox/52.0"
        }
    }
    
    const response = await fetch(url,init).catch(err=>{console.log(err);return;});
    if (type=="json"){
        return await response.json().catch(err=>{console.log(err);return;});
    }

    else{
        return await response.text().catch(err=>{console.log(err);return;});
    }
}




module.exports = {fetchAsync}