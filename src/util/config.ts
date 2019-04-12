/** about request config */
const host: string = 'http://api.piaopiao.com';
const port: number = 80;
const baseUrl: string = host + '/';
const version: string = 'v1/';
const timeout: number = 7000;
const redirects: number = 3;

export default { 
    baseUrl, 
    version, 
    timeout,
    redirects, 
    host, 
    port 
};