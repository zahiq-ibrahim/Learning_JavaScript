const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "user123";

storeBtn.addEventListener("click", () => {
  localStorage.setItem("uid", userId);
});
retrBtn.addEventListener("click", () => {
    const extractedId = localStorage.getItem('uid');
    console.log(extractedId);
});
