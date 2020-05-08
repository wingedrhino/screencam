const {app, BrowserWindow} = require('electron')

async function main() {
    await app.whenReady()
    // create the browser window
    const win = new BrowserWindow({
        width: 300,
        height: 300,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('index.html')

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
        // On macOS it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
  
    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
        }
    })
}
main()