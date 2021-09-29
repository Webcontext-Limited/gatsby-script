const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

// most deferred
exports.onInitialClientRender = () => {
    window.onload = () => {
    addScript("https://yourscript/path.com")
    addScript("https://yourscript2/path.com")
  }
}
