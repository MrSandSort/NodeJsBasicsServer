import crypto from "crypto";

const secretKey= 'mrsandsort'
const message='K xa hajur?'

export function generateHMAC(message, secretKey){
    return crypto.createHmac('sha256', secretKey).update(message).digest('hex')
}

const signature= generateHMAC(message, secretKey);
console.log(`HMAC Signature:${signature}`);