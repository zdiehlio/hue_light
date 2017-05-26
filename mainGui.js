'use strict';
document.getElementById('start-recording-button');
document.getElementById('stop-recording-button');
document.getElementById('recording-status');
$('#start-recording-button').click(function () {
    $('#start-recording-button').toggleClass('display-none');
    $('#stop-recording-button').toggleClass('display-none');
    document.body.style.backgroundColor = 'red';
    document.getElementById('recording-status').innerHTML = "Recording is in Session!";
});
$('#stop-recording-button').click(function () {
    $('#start-recording-button').toggleClass('display-none');
    $('#stop-recording-button').toggleClass('display-none');
    document.body.style.backgroundColor = 'white';
    document.getElementById('recording-status').innerHTML = "Recording not in Session";
});






//For use with the electron package

// const electron = requirte('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;

// const path = require('path')
// const url = require('url')

// let mainWindow;

// function createWindow () {
//   mainWindow = new BrowserWindow({width: 800, height: 600});
//   mainWindow.loadURL(url.format({
//       pathname: path.join(__dirname, 'index.html'),
//       protocol: 'file',
//       slashes: true
//   }));

//   mainWindow.on('closed', function () {
//     mainWindow = null;
//   });
// };

// app.on('ready', createWindow);
// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   };
// });

// app.on('activate', function () {
//   if (mainWindow === null) {
//     createWindow();
//   };
// });

// $(function(){
//   $(".fancy-button").mousedown(function(){
//     $(this).bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(){
//         $(this).removeClass('active');
//     })
//      $(this).addClass("active");
//   });
// });