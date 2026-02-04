export const motivationalQuotes = [
    {
        quote: "Menulis adalah cara untuk berbicara tanpa diganggu.",
        author: "Jules Renard"
    },
    {
        quote: "Saya menulis untuk menemukan apa yang saya pikirkan.",
        author: "Joan Didion"
    },
    {
        quote: "Tulisan tidak harus sempurna di percobaan pertama, ia harus diedit.",
        author: "Ernest Hemingway"
    },
    {
        quote: "Tidak ada aturan yang lebih besar dari menulis dengan jujur.",
        author: "Cormac McCarthy"
    },
    {
        quote: "Menulis adalah eksplorasi. Anda memulai dari ketiadaan dan belajar sambil berjalan.",
        author: "E.L. Doctorow"
    },
    {
        quote: "Mulailah menulis, tidak peduli apa. Air tidak mengalir sampai keran dibuka.",
        author: "Louis L'Amour"
    },
    {
        quote: "Saya dapat mengguncang dunia dengan tulisan.",
        author: "Martin Luther"
    },
    {
        quote: "Kata-kata adalah, menurut pendapat saya, sumber sihir terkuat yang kita miliki.",
        author: "J.K. Rowling"
    },
    {
        quote: "Menulis adalah cara untuk menjebak mimpi di atas kertas.",
        author: "Neil Gaiman"
    },
    {
        quote: "Jangan pernah menunggu inspirasi. Mulailah menulis dan inspirasi akan datang.",
        author: "Peter De Vries"
    },
    {
        quote: "Ide bagus bukan yang datang kepadamu, tapi yang kamu tangkap.",
        author: "Chuck Palahniuk"
    },
    {
        quote: "Setiap kata tertulis adalah kemenangan atas kekosongan.",
        author: "Margaret Atwood"
    }
];

export const getRandomQuote = () => {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
};
