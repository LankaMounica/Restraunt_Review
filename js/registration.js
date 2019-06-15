if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("serviceWorker.js")
    .then((register) => {
      console.log("serviceWorker installed successfully", register);
    })
    .catch((event) => {
      console.log("serviceWorker installation failed", event);
    })
} else {
  console.log("Browser not supported");
}
