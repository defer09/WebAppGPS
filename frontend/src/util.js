export default {
    formatCurrency: function (num) {
        return 'L.' + ' ' + Number(num.toFixed(1)).toLocaleString() + '  ';
    }
}