const $ = require("jquery")
import "./assets/css/test2.css"
import lessons from "./assets/json/lessons"


$(function () {
    const $app = $("#app");
    const $ul = $("<ul></ul>");
    lessons.forEach(lesson => {
        $ul.append(`<li>课程名: <span class="lesson-name">${lesson.name}</span>, 时间: ${lesson.days}天</li>`)
    });
    $app.append($ul);
});
