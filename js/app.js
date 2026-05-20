const $ipAddressLocation = document.querySelector("#ip-address-location");
const $ipAddressValue = document.querySelector("#ip-address-value");
const $ipAddressTimezone = document.querySelector("#ip-address-timezone");
const $ipAddressIsp = document.querySelector("#ip-address-isp");
const $form = document.querySelector(".ip-address-form");
const $input = document.querySelector(".ip-address-input");

$form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const data = await get();
	$ipAddressTimezone.textContent = data.location.timezone;
	$ipAddressValue.textContent = data.ip;
	$ipAddressLocation.textContent =
		data.location.country + ", " + data.location.region;
	$ipAddressIsp.textContent = data.isp;
});

async function get() {
	const response = await fetch(
		`https://geo.ipify.org/api/v2/country,city?apiKey=at_jIcRJKD6iuJkm0acspZDiSmZlhZyv&ipAddress=${$input.value}`,
	);
	const data = await response.json();
	return data;
}
