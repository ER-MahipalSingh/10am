const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    if (!email || !password) {
      throw "Name and password are required";
    }

    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) {
      throw new Error("Login failed");
    } else {
      isAuth = true;
    }
    const data = res.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log("Error", error);
  }
});
