const request=require('request');
const nodemailer=require('nodemailer');
const schedule=require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.hour =12;rule.minute =6;rule.second =0;
var data='';
var j = schedule.scheduleJob(rule, function(){
	console.log('发送天气预报。。。');
  	sendWeather();
});
function sendWeather(){
	const url=' http://api.yytianqi.com/forecast7d?city=CH281701&key=1r3fajefo4csg9tm';
	request(url,(error,response,body)=>{
		if(error){
			console.log(error);
		}
		data=JSON.parse(body);
			let transporter=nodemailer.createTransport({
			host:"smtp.163.com",//主机，你设置pop3/smtp的时候，网易提供
			port:465,
			secure:true,
			auth:{
				user:'xxxxxx@163.com',//你自己的邮箱，博主的是网易邮箱
				pass:'xxxx'//邮箱的密码
			}
		});
		let mailOptions={
			from:'Kiwis <huahaoworkspace@163.com>',
			to:'1482816494@qq.com',//要发送的邮箱地址
			subject:'今天天气',
			text:'城市 :'+data.data.cityName+'时间：'+data.data.sj,
			html:'<b>白天天气情况：'+data.data.list[0].tq1+'</b><br/><b>夜间天气:'+data.data.list[0].tq2+'</b><br/>白天温度'+data.data.list[0].qw1+'度<br/>夜间温度'+data.data.list[0].qw2
		};
		transporter.sendMail(mailOptions,(err,info)=>{
			if(err){
				return console.log(err);
			}
		console.log('Message %s sent %s',info.messageId,info.response);
		});
	});

}

