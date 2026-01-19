// 获取响应体内容
let body = $response.body;

if (body) {
    let obj = JSON.parse(body);
    // 这里的 data.tab 对应你抓包看到的那个列表
    if (obj.data && obj.data.tab) {
        // 过滤掉名字叫 "直播" 的底部按钮
        obj.data.tab = obj.data.tab.filter(item => item.name !== "直播");
        
        // 过滤掉顶部的 "游戏中心" 图标
        if (obj.data.top) {
            obj.data.top = obj.data.top.filter(item => item.name !== "游戏中心");
        }
    }
    // 将修改后的 JSON 重新转为字符串发回给 App
    $done({body: JSON.stringify(obj)});
} else {
    $done({});
}
