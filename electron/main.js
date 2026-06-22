const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')


function createWindow () {
  const win = new BrowserWindow({
    width: 1960,
    height: 1080,
    autoHideMenuBar: true,
    // remove the default titlebar
    //titleBarStyle: 'hidden',
    // expose window controls in Windows/Linux
    //...(process.platform !== 'darwin' ? { titleBarOverlay: true } : {}),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadURL('http://r4m0s.github.io/visor-3d-didactico/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})