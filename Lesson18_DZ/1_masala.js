function checkLicensePlate(plate) {
    const regex =
        /^(?:\d{2} [A-Z]{2} \d{3}|[A-Z]{2} \d{6}|\d{2} [A-Z]{3} \d{3} [A-Z]{2})$/;
    return regex.test(plate);
}

const plates = [
    "01 AA 123",
    "AA 123456",
    "01 ABC 123 AB",
    "12 XY 987",
    "BB 654321",
    "99 XYZ 321 ZZ",
    "A1 B2 C3",
];

plates.forEach((plate) => {
    console.log(`${plate}: ${checkLicensePlate(plate) ? "To‘g‘ri" : "Xato"}`);
});
