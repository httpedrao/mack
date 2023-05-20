const fullName = "Pedro Queiroz";
const year = new Date().getFullYear();
const socials = "@jshero";
const gender = "Masculino";
const campus = "Higienópolis";

document.write(
	`<footer>
		<hr>
		<p>${fullName}</p>
		<p>Ano - ${year}</p>
		<p>Twitter: ${socials}</p>
		<p>Facebook: ${socials}</p>
		<p>Instagram: ${socials}</p>
		<p>LinkedIn: ${socials}</p>
		<p>Gênero: ${gender}</p>
		<p>Localização - polo: ${campus}</p>
	</footer>`
);

function sayHello() {
  const weekDays = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];

  function getGreeting(hour) {
    if (hour >= 4 && hour < 12) return "Bom dia!";
    if (hour >= 12 && hour < 18) return "Boa tarde!";
    if (hour >= 18 || hour < 4) return "Boa noite!";
  }

  window.addEventListener("load", () => {
    const hour = new Date().getHours();
    const day = weekDays[new Date().getDay()];
    const message = `${getGreeting(hour)} Hoje é ${day}.`;

    alert(
      `Me chamo ${fullName} \n\nSão Paulo - Análise e desenvolvimento de Sistemas / Universidade Presbiteriana Mackenzie\n\n${message}`
    );
  });
}
