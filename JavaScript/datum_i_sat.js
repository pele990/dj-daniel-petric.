function prikaziDatumISat() {
    const datumISatElement = document.getElementById("datum_i_sat");
    const datumISat = new Date().toLocaleString();
    datumISatElement.textContent = datumISat;
}

prikaziDatumISat();
setInterval(prikaziDatumISat, 1000);
