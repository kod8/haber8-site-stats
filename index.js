const { SITELIST } = require("./urls.js");
const fs = require("fs");
const { parse } = require('node-html-parser');
const { fetchAsync } = require('./utils.js');
const BASEURL = "https://www.alexa.com/siteinfo/"
const trimmedSiteList = SITELIST.map(_ => _.split("/")[2]).map(_ => _.startsWith("www") ? _.slice(4) : _)

start();

async function start() {
    var data = {};
    var stats = [];

    for (site of trimmedSiteList) {
        var fullRawHTML = await fetchAsync(BASEURL + site);
        const fullDOM = parse(fullRawHTML);
        stats.push(scrapeData(fullDOM, site))
    }

    data.stats = stats;
    data.lastUpdated = new Date().toLocaleString('tr-TR', { day:'numeric', month:'long', year:"numeric",hour:"numeric",minute:"numeric",hour12: false ,timeZone: 'Asia/Istanbul' });
    
    fs.writeFile("data.json", JSON.stringify(data), () => {
        console.log("data.json yazıldı");
    });
}

function scrapeData(fullDOM, site) {
    var siteData = {};
    siteData.url = site;
    siteData.globalRank = fullDOM.querySelector(".rank-global .big.data") ? fullDOM.querySelector(".rank-global .big.data").innerText.split("#")[1].trim() : null;
    siteData.turkeyRank = fullDOM.querySelector("#countrydropdown .pull-right") ? fullDOM.querySelector("#countrydropdown .pull-right").innerText.split("#")[1].trim() : null;
    console.log(site);
    return siteData;
}