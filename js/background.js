chrome.app.runtime.onLaunched.addListener(function (launchData) {
  chrome.app.window.create('../index.html', {
    id: 'challegram-ms',
    innerBounds: {
      width: 1000,
      height: 700
    },
    minWidth: 320,
    minHeight: 400,
    frame: { color: "#5682a3" }
  })
})
