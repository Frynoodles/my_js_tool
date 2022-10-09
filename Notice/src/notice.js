import "../resource/style.css";//导入css文件，需要添加依赖
// yarn add --dev style-loader css-loader


(function () {
    // 初始化
    init_notice_box();
})();

// 初始化，添加box容器
function init_notice_box() {

    // 获取body
    let body = document.body;
    // 添加box
    let notice_box = document.createElement('div');
    notice_box.setAttribute("class", "notice_box")
    notice_box.setAttribute("id", "notice_box_114514")
    body.appendChild(notice_box);
}

window.notice = class Notice {
    title;
    content;
    id;
    element;
    timeout;

    constructor(content, title = '', timeout = 5000) {
        this.title = title;
        this.content = content;
        this.id = 'not' + (new Date()).valueOf().toString();// 将id赋值为not+创建时的时间戳,用来识别身份
        this.timeout = timeout;

        //构造notice元素
        let notice = document.createElement('div');
        notice.setAttribute('class', 'notice_1');
        notice.setAttribute('id', this.id)
        notice.innerHTML = `<div class="notice"><div class="notice_title">${this.title}</div><div class="notice_content">${this.content}</div></div>`
        this.element = notice;
        this.add_list()
    }


    // 添加进队列
    add_list() {
        let box = document.getElementById("notice_box_114514"); // 获取box
        box.appendChild(this.element);
        const obj = this;
        setTimeout(function () {
            document.getElementById(obj.id).remove(); // 不能使用this.id ，5s之后的this已经变成了window
        }, this.timeout);
    }

}
