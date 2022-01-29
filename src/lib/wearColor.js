// https://stackoverflow.com/a/17267684/6382932

export default function (percent) {
    const r = percent < 50 ? 255 : Math.floor(255 - ((percent * 2 - 100) * 255) / 100);
    const g = percent > 50 ? 255 : Math.floor((percent * 2 * 255) / 100);
    return 'rgba(' + r + ',' + g + ',0,0.4)';
}
