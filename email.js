var nodemailer = require("nodemailer");
 
// 开启一个 SMTP 连接池
var smtpTransport = nodemailer.createTransport({
  host: "smtp.163.com", // 主机
  secureConnection: true, // 使用 SSL
  port: 465, // SMTP 端口
  auth: {
    user: "huahaoworkspace@163.com", // 账号
    pass: "" // 密码
  }
});
 
// 设置邮件内容
var mailOptions = {
  from: "Kiwis <huahaoworkspace@163.com>", // 发件地址
  to: "1261407209@qq.com", // 收件列表
  subject: "Hello world", // 标题
  html: "<b>这是从nodemailer发送的邮件</b>" // html 内容
}
 
// 发送邮件
smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
    console.log(error);
  }else{
    console.log("Message sent: " + response.message);
  }
  smtpTransport.close(); // 如果没用，关闭连接池
});