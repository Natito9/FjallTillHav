// lib/swishClient.js
import https from 'https';
import fs from 'fs';
import axios from 'axios';

const p12Buffer = fs.readFileSync('./cert/swish.p12'); // path to your .p12 file
const passphrase = process.env.SWISH_CERT_PASSPHRASE;

const httpsAgent = new https.Agent({
  pfx: p12Buffer,
  passphrase,
  rejectUnauthorized: false // For dev only! Use true in prod with proper cert.
});

const swishApi = axios.create({
  baseURL: 'https://mss.cpc.getswish.net/swish-cpcapi/api/v2', // Production URL
  httpsAgent,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default swishApi;
