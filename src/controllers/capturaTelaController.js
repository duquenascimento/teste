const { request } = require('express');
const { map } = require('lodash');
const puppeteer = require('puppeteer');
//const zeloParametrosRepository = require("../repository/zeloParametrosRepository");

class CapturaTelaController {


   async getScreen(req, res) {
      try {

         //const result = await zeloParametrosRepository.buscarParametros();

         const browser = await puppeteer.launch({ headless: false, ignoreDefaultArgs: ['--disable-extensions']} );
         const context = await browser.createIncognitoBrowserContext();
         const page = await context.newPage();


         await page.goto('https://login.microsoftonline.com/');
         

         //await browser.close();

         return res.status(200).send(result);

      } catch (err) {
         console.log("ertrrrr", err);
         return res.status(400).send(err);
      }
   }




}
module.exports = new CapturaTelaController();

