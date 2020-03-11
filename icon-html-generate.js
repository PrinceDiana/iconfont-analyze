/**
 * 生成图标列表html
 */
const fs = require("fs");

const readFile = function(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if (error) return reject(error);

            resolve(data);
        });
    });
};

(async function() {
    const data = await readFile("./private-sign@4.2-iconfont-unused.json"); // 不再使用的icons
    fileDataMap = JSON.parse(data.toString());

    let htmlContent = "";
    let iconHtml = "";

    fileDataMap.map((icon, index) => {
        iconHtml += `
            <li class="dib">
                <span class="icon iconfont ${icon}"></span>
                <div class="code-name">${icon}</div>
            </li>
        \n`;
    });

    htmlContent = `<ul class="icon_lists dib-box">
                        ${iconHtml}
                    </ul>`;

    // 写入文件
    fs.writeFile("./private-sign@4.2-iconfont-unused.html", htmlContent, "utf8", err => {
        if (err) return console.log(err);

        if (!err) {
            console.log("写入成功！");
        }
    });
})();
