const postDate = new Date("2023-09-29"); // date of release
const postDateElement = document.getElementById("date");
postDateElement.innerHTML = getPostDate(postDate);

function back() {
  var clickedhome = sessionStorage.getItem("clickedhome");
  if (clickedhome == "false") {
    location.href = "../../news.html";
  } else {
    location.href = "../../../../index.html";
  }
}

function cloud() {
  location.href = "https://www.cloudflarestatus.com/";
}

function getPostDate(postedDate) {
  const currentDate = new Date();
  const milliseconds = Number(currentDate) - Number(postedDate);
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  if (days > 0) {
    return `Posted ${days}d ago`;
  } else if (hours > 0) {
    return `Posted ${hours}h ago`;
  } else if (minutes > 0) {
    return `Posted ${minutes}m ago`;
  } else {
    return `Posted ${seconds}s ago`;
  }
}
