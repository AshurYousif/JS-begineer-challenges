function isLoggedInOrSubscribed(loggedIn, subscrbied) {
  return loggedIn === "LOGGED_IN" || subscrbied === "SUBSCRIBED"
    ? true
    : false;
}

console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"));
