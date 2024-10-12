module.exports = {
    // 遍历对象
    objForEach: function (files, fn) {
        let result;
        if (!Array.isArray(files)) {
            result = fn.call(files, 'temp', files);
            return;
        }
        for (file of files) {
            result = fn.call(files, 'temp', file);
            if (result === false) {
                break;
            }
        }
    },
};
