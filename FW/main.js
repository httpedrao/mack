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