export default {
    date: (value) => {
        var size = value.length;
        if (size === 2) { value += '/'; }
        if (size === 5) { value += '/'; }
        return value
    },
    percent: (value) => {
        return value.replace('%', '') + '%'
    },
    currency: (value) => {
        var unmask = value.replace(RegExp('[R$.,]'), "")
        return unmask
    }
}