const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const dbRequest = indexedDB.open("Storage Dummy", 1);

dbRequest.onupgradeneeded = function (event) {
  const db = event.target.result;

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objStore("products");
    productsStore.add({
      id: "p1",
      title: "First Product",
      price: "200",
      tags: "Premium",
    });
  };
};

dbRequest.onerror = function (event) {
  console.log("Error");
};

storeBtn.addEventListener("click", () => {});
retrBtn.addEventListener("click", () => {});
