import axios from 'axios';

export function getFrenchCV() {
    return axios.get('https://drive.google.com/uc?id=13y9jGZcxdW5fld3hVqQlOULicT0nvXV5&export=download');
}
export function getEnglishCV() {
    return axios.get('https://drive.google.com/uc?id=1hiOkFJnvzalR0-yI6IZyZXhd2OT-wl-p&export=download');
}
