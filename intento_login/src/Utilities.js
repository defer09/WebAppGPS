import axios from 'axios';

let normalAxios = axios.create();

normalAxios.default.headers.common['cache-control'] = 'no-cache';
normalAxios.default.headers.post['Content-Type'] = 'no-cache';
normalAxios.default.headers.put['Content-Type'] = 'no-cache';

export const naxios = normalAxios;
