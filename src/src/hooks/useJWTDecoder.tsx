import { useState, useCallback } from "react";

interface DecodedJWT {
  header: Record<string, any>;
  payload: Record<string, any>;
  signature: string;
}

const base64UrlDecode = (str: string): any => {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) {
    base64 += "=";
  }
  const decodedData = atob(base64);
  return JSON.parse(decodeURIComponent(escape(decodedData)));
};

const decodeJWT = (token: string): DecodedJWT => {
  const [header, payload, signature] = token.split(".");
  const decodedHeader = base64UrlDecode(header);
  const decodedPayload = base64UrlDecode(payload);

  return {
    header: decodedHeader,
    payload: decodedPayload,
    signature: signature,
  };
};

export const useJWTDecoder = (initialToken: string) => {
  const [decodedToken, setDecodedToken] = useState<DecodedJWT | null>(null);
  const decodeToken = useCallback((token: string) => {
    const decoded = decodeJWT(token);
    setDecodedToken(decoded);
  }, []);
  if (!decodedToken && initialToken) {
    decodeToken(initialToken);
  }
  return { decodedToken, decodeToken };
};
