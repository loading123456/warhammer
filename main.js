const { app, BrowserWindow, ipcMain, net } = require('electron')
const path = require("path")
const request = require("request")
const fs = require("fs")

let i =0

app.on("ready", () => {
    console.log("Start")



    const mainWindow = new BrowserWindow({
        webPreferences:{
            preload:path.join(__dirname + "/test.js"),
          },
          
      })
      mainWindow.maximize()
      
      mainWindow.loadURL("https://google.com")
 
})
  
