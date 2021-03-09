const { SITELIST,CITIES } = require("./urls.js");
const fs = require("fs");
const { parse } = require('node-html-parser');
const { fetchAsync } = require('./utils.js');
const BASEURL = "https://www.alexa.com/siteinfo/"

fs.readFile('./data.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    start(JSON.parse(data))
  });


async function start(olddata) {
    var data = {};
    var stats = [];

    for (site of SITELIST) {
        var oldObj = olddata.stats.filter((el)=>{return el.url==site})[0] ? olddata.stats.filter((el)=>{return el.url==site})[0] : null;
        var fullRawHTML = await fetchAsync(BASEURL + trimURL(site.url));
        const fullDOM = parse(fullRawHTML);
        var newDataObj = scrapeData(fullDOM,oldObj); 
        newDataObj.site=trimURL(site.url);
        newDataObj.url=site.url;
        newDataObj.city = site.city;
        stats.push(newDataObj);
        console.log(site.url);
    }

    data.stats = stats;
    data.lastUpdated = new Date().toLocaleString('tr-TR', { day:'numeric', month:'long', year:"numeric",hour:"numeric",minute:"numeric",hour12: false ,timeZone: 'Asia/Istanbul' });
    
    fs.writeFile("data.json", JSON.stringify(data), () => {
        console.log("data.json yazıldı");
    });
}

function scrapeData(fullDOM,olddata) {
    var siteData = {};
    siteData.globalRank = fullDOM.querySelector(".rank-global .big.data") ? fullDOM.querySelector(".rank-global .big.data").innerText.split("#")[1].trim() : null;
    siteData.turkeyRank = fullDOM.querySelector("#countrydropdown .pull-right") ? fullDOM.querySelector("#countrydropdown .pull-right").innerText.split("#")[1].trim() : null;
       
    if(olddata==null||!(olddata.globalRankOld&&olddata.turkeyRankOld)){
        siteData.globalRankOld = siteData.globalRank;
        siteData.turkeyRankOld = siteData.turkeyRank;
    }
    else{
        siteData.globalRankOld = siteData.globalRank == olddata.globalRank ? olddata.globalRankOld : olddata.globalRank;
        siteData.turkeyRankOld = siteData.turkeyRank == olddata.turkeyRank ? olddata.turkeyRankOld : olddata.turkeyRank;
    }
    

    return siteData;
}

function trimURL(url){
    var trimmed = url.split("/")[2]
    return trimmed.startsWith("www") ? trimmed.slice(4) : trimmed;
}
