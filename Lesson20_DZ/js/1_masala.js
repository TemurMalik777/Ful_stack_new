// function sumPoweredNumbers(arr) {
//     let sum = 0;
//     let countMap = new Map();

//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === 0) break;

//         let count = (countMap.get(arr[i]) || 0) + 1;
//         countMap.set(arr[i], count);

//         sum += Math.pow(arr[i], count);
//     }

//     return sum;
// }

// let nums = [2, 3, 2, 0, 3, 1, 5, 3];
// console.log(sumPoweredNumbers(nums));

//############################################################

async function fetchSurahTranslation(surahNumber) {
    try {
        let response = await fetch(
            `https://api.alquran.cloud/v1/surah/${surahNumber}/uz.sodik`
        );
        let data = await response.json();

        let text = data.data.ayahs.map((ayah) => ayah.text).join(" ");
        let cleanedText = text.replace(/[?!,\.]/g, "").toLowerCase();
        let words = cleanedText.split(/\s+/);

        let wordMap = new Map();
        words.forEach((word) => {
            if (word) {
                wordMap.set(word, (wordMap.get(word) || 0) + 1);
            }
        });

        return wordMap;
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        return null;
    }
}

// Misol uchun 1-sura tarjimasini olish
fetchSurahTranslation(1).then((wordMap) => console.log(wordMap));
