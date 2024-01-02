const fs = require('fs');
const { execSync } = require('child_process');
const createPdf = require('pdfkit');
const puppeteer = require('puppeteer'); // Import puppeteer

fixture("Start test").page("https://www.google.com/");

test('1st test', async t => {
    await t.typeText('#APjFqb', 'testing');
    await t.click('.gNO89b');
    await t.wait(2000);

    const htmlFilePath = 'D:/Test_Cafe/test_cafe_demo/reports/html_reports/pom_reports.html';
    const pdfFilePath = 'D:/Test_Cafe/test_cafe_demo/reports/html_reports/testpdf.pdf';

    // Call the function to convert HTML to PDF
    await convertHtmlToPdf(htmlFilePath, pdfFilePath);
});

// Define the function to convert HTML to PDF
async function convertHtmlToPdf(htmlFilePath, pdfFilePath) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Open the HTML file in the headless browser
    await page.goto(`file://${htmlFilePath}`, { waitUntil: 'networkidle0' });
  
    // Save the content as PDF
    await page.pdf({ path: pdfFilePath, format: 'A4' });
  
    // Close the browser
    await browser.close();

    console.log('Conversion completed successfully');
}
