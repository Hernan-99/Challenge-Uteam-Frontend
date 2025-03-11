import md5 from "md5";
// Función para generar el hash
export const hashedCode = (ts, privKey, pubKey) => md5(ts + privKey + pubKey);
