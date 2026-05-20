const fetchAPI = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) {
      throw new Error("API cannt be fatch");
    }
    const data = await res.json();
    // console.log(data.products);
    renderData(data.products);
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
};
fetchAPI();

const renderData = (products) => {
  console.log(products);

  const container = document.getElementById("container");
  container.innerHTML = "";

  products?.forEach((product) => {
    const card = document.createElement("div");
    card.innerHTML = `
        <h1>${product?.title}</h1>
        <img src=${product?.thumbnail}>
    `;
    container.appendChild(card);
  });
};
renderData();
