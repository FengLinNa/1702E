// 格式化时间，时间戳=>YYYY-MM-DD HH:MM:SS
export default function formatTime(timestamp){
    let date = new Date();
    date.setTime(timestamp);
    // 获取指定时间戳的年月日，时分秒
    let year = date.getFullYear(),
        month = date.getMonth()+1,
        day = date.getDay(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
    
    return `${year}-${month}-${day} ${hour}:${min}:${sec}`;
}


// 千分符
export function toThousands(num) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}