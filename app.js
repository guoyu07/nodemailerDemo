'use strict';
const nodemailer=require('nodemailer');
let transporter=nodemailer.createTransport({
	host:"smtp.163.com",
	port:465,
	secure:true,
	auth:{
		user:'huahaoworkspace@163.com',
		pass:''
	}
});
let mailOptions={
	from:'Kiwis <huahaoworkspace@163.com>',
	to:'1482816494@qq.com',
	subject:'Hello !',
	text:'hello everyOne !',
	html:'<p>next I will introduce myself to you</p>'
};
transporter.sendMail(mailOptions,(err,info)=>{
	if(err){
		return console.log(err);
	}
	console.log('Message %s sent %s',info.messageId,info.response);
});