import * as puppeteer from 'puppeteer';
export {GetData};

async function GetData(url:string, time_out_ms:number = 5000):Promise<string>
{
  const browser:puppeteer.Browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await delay(time_out_ms);
  var content:string = await page.content();
  await browser.close();
  return content;
}

function delay(time:number) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}