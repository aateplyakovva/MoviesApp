const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '2ee984aebe09e73be8a7310df0a61df0',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;