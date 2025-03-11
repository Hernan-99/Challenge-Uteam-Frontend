import md5 from "md5";

export const hashCode = (ts, privKey, pubKey) => md5(ts, privKey, pubKey);
