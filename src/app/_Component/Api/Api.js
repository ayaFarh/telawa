export const BASE_URL = "https://mp3quran.net/api/v3"
export const API ={
    Allreciter:`${BASE_URL}/reciters?language=ar`,
    surhReader:`${BASE_URL}/reciters?language=ar&sura=1`,
    Allsurah:`${BASE_URL}/surahs?language=ar`,
    Allayah:`${BASE_URL}/ayahs?language=ar`,
    Alljuz:`${BASE_URL}/juzs?language=ar`,
    DetailsOffAllSurh:`${BASE_URL}/suwar?language=ar`,
    radio:`${BASE_URL}/radios?language=ar`,
}