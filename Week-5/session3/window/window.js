function displayWindowProperties() {
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const userAgentDetails = window.navigator.userAgent;
  const windowHref = window.location.href;
  const windowPathName = window.location.pathname;

  console.log("userAgentDetails", userAgentDetails);
  console.log("screen width", screenWidth);
  console.log("screen height", screenHeight);
  console.log("href", windowHref);
  console.log("pathName", windowPathName);

  /** adding into session and local storage */
  window.localStorage.setItem(
    "userTabDetails",
    JSON.stringify({
      screenHeight,
      screenWidth,
      userAgentDetails,
      windowHref,
      windowPathName,
    })
  );

  window.sessionStorage.setItem(
    "userTabDetails",
    JSON.stringify({
      screenHeight,
      screenWidth,
      userAgentDetails,
      windowHref,
      windowPathName,
    })
  );

  /** retrieving  from local storage and session storage */
  console.log(
    "Local storage",
    JSON.parse(window.localStorage.getItem("userTabDetails"))
  );
  console.log(
    "session storage",
    JSON.parse(window.sessionStorage.getItem("userTabDetails"))
  );
}

displayWindowProperties();
