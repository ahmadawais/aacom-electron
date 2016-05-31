'use strict';

const electron      = require('electron'); // The first thing to do is to require Electron.
const app           = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow      = null;
var url             = 'https://ahmadawais.com/';

// Quit when all windows are closed.
app.on('window-all-closed', function(event) {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = create_window();
  load_window();

  // Emitted when the window is closed.
  mainWindow.on('closed', function(event) {
    mainWindow = null;
  });

});

// when you click the app dock icon to re-initilize window
app.on('activate', function() {
    if ( mainWindow == null ) {
        mainWindow = create_window();
        load_window();
        // Emitted when the window is closed.
        mainWindow.on('closed', function(event) {
          mainWindow = null;
        });

    }
});

// create a window function
function create_window() {
    return new BrowserWindow({
        width: 800,
        height: 600
    });
}

// load window function, loads the url into browser
function load_window() {
    mainWindow.loadURL(url);
}
