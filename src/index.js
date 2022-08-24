import "./styles.css";

let isLoading = true;

const fetchIP = async () => {
  const result = await fetch("https://api.ipify.org/?format=json")
    .then((res) => res.json())
    .then((data) => {
      const ip = data.ip;
      document.querySelector(".ip").innerHTML = ip;
      isLoading = false;
    })
    .catch((error) => console.error(error));
};

fetchIP();

document.getElementById("app").innerHTML = `
<main>
  <div class="container">
  <h1>Din publika IP-adress är:</h1>
  <div class="ip">${isLoading && "Laddar..."}</div>
  </div>
</main>
`;
