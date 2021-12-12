import http from './httpService';
import { apiUrl } from './config.json';

export function getProducts() {
    return http.get(apiUrl);
}
