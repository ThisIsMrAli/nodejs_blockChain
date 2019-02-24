
import crypto from 'crypto';
export const calcHash = (arrayArgs) => {
    const secret = 'Some unique characters as key';
    return crypto.createHmac('sha256', secret)
        .update((arrayArgs.reduce((accumulator, currentValue) => accumulator + currentValue)))
        .digest('hex');
}