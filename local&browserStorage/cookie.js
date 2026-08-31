const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "user123";

storeBtn.addEventListener("click", () => {

    document.cookie = `uid=${userId}`;
  //localStorage.setItem("uid", userId);
});
retrBtn.addEventListener("click", () => {
    console.log(document.cookie);
});
