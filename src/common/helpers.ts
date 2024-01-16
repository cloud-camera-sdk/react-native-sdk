import CryptoJS from 'crypto-js';
import CRC32 from 'crc-32';

export const encryption = (input: string) => {
  //https://github.com/brix/crypto-js/issues/334

  if (!global.serectKey) {
    return;
  }

  const encryptKey = CryptoJS.enc.Utf8.parse(global.serectKey);
  const encryptedStr = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(input),
    encryptKey,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  );
  return encryptedStr.toString();
};

export const decryptSocket = (input: string, secrectKey: string) => {
  if (!input || (input && input.length === 0) || input === '{}') {
    return '{}';
  }
  // console.log(60, 'secrectKey', secrectKey);

  const bytes = CryptoJS.AES.decrypt(
    input,
    CryptoJS.enc.Utf8.parse(secrectKey),
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  );
  const decryptedStr = CryptoJS.enc.Utf8.stringify(bytes);
  return decryptedStr.toString();
};

export const checksum = (input: string) => {
  return CRC32.str(input) >>> 0;
};
