import "../resource/style.css";//导入css文件，需要添加依赖
// yarn add --dev style-loader css-loader

(function () {
    let body = document.body;
    const notice_box = document.createElement('div');
    notice_box.setAttribute("class", "notice_box")
    body.appendChild(notice_box);
})();

class Notice {
    title = "通知";
    content = "通知内容"

    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    // 添加进队列，如果已满则等待，否则直接添加

    //添加

    //移除
}