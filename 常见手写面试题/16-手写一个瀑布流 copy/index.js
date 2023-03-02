; (function () {
    function Waterfall(options) {
        this.el = document.getElementsByClassName(options.el)[0]
        this.oItems = this.el.getElementsByTagName('div')
        this.column = options.column
        this.gap = options.gap
        // 获得每张图片的宽度
        this.itemWidth = (this.el.offsetWidth - this.gap * (this.column - 1)) / this.column
        // 存放高度的数组
        this.heightArr = []
        this.init()
    }
    Waterfall.prototype.init = function () {
        var item = null
        for (var i = 0; i < this.oItems.length; i++) {
            item = this.oItems[i]
            item.style.width = this.itemWidth + 'px'
            if (i < this.column) {
                item.style.top = '0px'
                item.style.left = i * (this.itemWidth + this.gap) + 'px'
                this.heightArr.push(item.offsetHeight)
                console.log(item.offsetHeight);
            } else {
                var minIdx = getMinIdx(this.heightArr)
                item.style.left = this.oItems[minIdx].offsetLeft + 'px'
                item.style.top = this.heightArr[minIdx] + this.gap + 'px'
                this.heightArr[minIdx] += item.offsetHeight + this.gap
            }
        }
    }
    function getMinIdx(arr) {
        return arr.indexOf(Math.min.apply(null, arr))
    }




    window.Waterfall = Waterfall;
})()