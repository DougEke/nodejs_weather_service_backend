exports.getProperties = () => {
    console.log(propertiesReader.getPort());
};

exports.getCityNameFromUrl = (url) => {
    let city = url.href.split('/');
    city = city[city.length - 1];

    console.log(`Debug - city name: ${city}`);
    return city;
};

exports.getDateTime = () => {
    return new Date();
};