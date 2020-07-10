import NodeRSA from 'node-rsa';
// @ts-ignore
import jsencrypt from "jsencrypt";
import MD5 from 'md5';
import crypto from "crypto";

type randFnStr = (T:number) => string;
type randFnNum = (T:number) => number;

const PUBLIC_PEM = "-----BEGIN PUBLIC KEY-----\n" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDjdmRh1/kIFCowLlbZopx6G4xn\n" +
    "CAi9/yLucYSeX2JeKM+oyrcTuo+kDWYMwB0qjqXgb4a/OYdAk1wnVmgPso/TnZJo\n" +
    "5yi1HwzkesSOM0aVw/iyRjTXxd3aZjeWNWIOWJf1p3Ocu1MfG2AMPnUcydLmO5/j\n" +
    "vvdc6QzwaawE3bGx3QIDAQAB\n" +
    "-----END PUBLIC KEY-----\n"


/**
 * 获取长度为length的随机数
 * @param {number} length
 */
export const getRandNumber :randFnNum = (length: number) => {
    if (!length) return 0;

    let key: string = '',
        rand: number;
    while (key.toString().length < length) {
        rand = Math.round(Math.random() * 10);
        if (rand == 10) continue;
        if (length > 1 && rand == 0 && key.toString().length < 1) continue;
        key += rand.toString();
    }
	return parseInt(key);
};

/**
 * 生成长度为length的随机字符串
 * @param {number} length
 */
export const getRandStr: randFnStr = (length: number) => {
    const randNumber: Array<number| string> = Array.from({
        length: 9
    }, (v, k) => k); // 得到0-9数组
    let randStrLow: Array<string> = [],
        randStrUp: Array<string> = []; // a - z 小写，大写
    for (let i = 65; i < 91; i++) {
        randStrLow.push(String.fromCharCode(i));
    }
    for (let i = 97; i < 123; i++) {
        randStrUp.push(String.fromCharCode(i));
    }
    const rand: Array<number|string> = randNumber.concat(randStrLow, randStrUp);

    let key = '',
        randKey;

    while (key.toString().length < length) {
        randKey = Math.round(Math.random() * (rand.length - 1)); // 键从0开始所以要减1
        key += rand[randKey];
    }
    return key;
};
/**
 * 签名算法
 * @param {string} url
 * @param {string} platform
 * @param {number} once
 * @param {number} time
 * @param {string} char
 */
export const signature = (url: string, platform: string, once: number, time: number, char: string) => {
    let encrypt = new jsencrypt();

    encrypt.setPublicKey(PUBLIC_PEM);

    let params = Object.assign({
            once,
            time,
            url,
            platform,
            char
        }),
        ordered: any = {};

    Object.keys(params).sort().forEach(function (key: string) {
        ordered[key] = params[key];
    });

    let esc = encodeURIComponent,
        searchParameters = Object.keys(ordered).map(k => esc(k) + '=' + esc(ordered[k])).join('&').toString();

    return encrypt.encrypt(searchParameters);
};

/**
 * 参数加密防串改
 * @param {Object} data
 * @param {number} once
 * @param {number} time
 * @param char
 */
export const paramsMd5 = (data: Object, once: number, time: number, char: string) => {
    let params: any = Object.assign({
            once,
            time,
        }, data),
        ordered: any = {};

    Object.keys(params).sort().forEach(function (key) {
        ordered[key] = params[key];
    });

    let esc = encodeURIComponent,
        searchParameters = Object.keys(ordered).map(k => esc(k) + '=' + esc(ordered[k])).join('&').toString();

    console.info(searchParameters);
    console.info(searchParameters);
    return MD5(searchParameters + char);
};