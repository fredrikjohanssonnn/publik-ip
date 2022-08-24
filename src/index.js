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
    <p class="vpn-info">PS. Avaktivera din VPN-klient om du använder en sådan. T.ex. för att komma åt ditt arbetes intranät från ditt hem. Annars kommer IP-adressen som visas inte att vara din egna.</p>
  </div>
</main>
`;