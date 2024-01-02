export const encode = (x: bigint, signed = false) => {
    if (x === 0n) return new Uint8Array([0x00]);
    if (!signed && x < 0n) throw new Error('negative value provided with unsigned');
    let flag = false; // add an extra MSB
    if (signed) {
        if (x < 0n) {
            // negative
            x = -x;
            let p = 1n;
            while (p < x) p *= 128n;
            // console.log('p', p);
            x = p - x;
            // console.log('x', x);
        } else {
            // positive
            flag = x.toString(2).length % 7 === 0; //  1 at a position which is a multiple of 7
        }
    }
    const digits = []; // LSB to MSB
    while (x > 0n) {
        digits.push(x % 128n);
        x = x / 128n;
    }
    // console.log(digits);
    const arr = digits.map(
        (x, i) => (flag || i < digits.length - 1) ? (Number(x) | 0x80) : Number(x)
    );
    return new Uint8Array(flag ? [...arr, 0x00] : arr);
};

export const decode = (bytes: Uint8Array, signed = false) => {
    if (bytes.length === 0) throw new Error('the provided bytes is empty');
    const digits = Array.from(bytes).map(x => BigInt(x & 0x7F)).reverse();
    // console.log(digits);
    let ans = 0n;
    for (let d of digits) {
        ans = ans * 128n + d;
    }
    if (signed && digits[0] !== 0n) {
        let bin = ans.toString(2);
        if (bin.length % 7 !== 0) {
            const n = bin.length + 7 - (bin.length % 7);
            bin = bin.padStart(n, '0');
        }
        if (bin[0] === '1') {
            // negative
            let p = 1n;
            while (p < ans) p *= 128n;
            // console.log('p', p);
            ans = p - ans;
            ans = -ans;
            // console.log('ans', ans);
        }
    }
    return ans;
};
