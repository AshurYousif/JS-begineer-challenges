function isLoggedInAndSubscribed(loggedIn, subscrbied) {
  return loggedIn === "LOGGED_IN" && subscrbied === "SUBSCRIBED"
    ? true
    : false;
}

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"));
