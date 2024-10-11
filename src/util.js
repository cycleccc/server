module.exports = {
    // 遍历对象
    objForEach: function (files, fn) {
        let result;
        for (file of files) {
            result = fn.call(files, 'temp', file);
            if (result === false) {
                break;
            }
        }
    },
};
