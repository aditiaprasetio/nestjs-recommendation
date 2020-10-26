import * as crypto from 'crypto';
import * as uuid from 'uuid';

export function encryptPassword(password: string) {
  password = process.env.SECRET_KEY + '-' + password;
  return crypto.createHmac('sha256', password).digest('hex');
}

export function generateToken() {
  const token = uuid.v4();
  return crypto.createHmac('sha256', token).digest('hex');
}

export function generateRandomString(length: number = 6) {
  let result = '';
  const characters =
    'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz0123456789*/-';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
