#1:进入xz库中
USE xz;
#2:创建新闻表
CREATE TABLE xz_news(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(128),
 ctime DATETIME,
 img_url VARCHAR(255),
 point INT
);
#now() 当前数据库时间 年月日时分秒
INSERT INTO xz_news VALUES(null,'..1',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..2',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..3',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..4',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..5',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..6',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..7',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..8',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..9',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..10',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..11',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..12',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..13',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..14',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..15',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);



#1:创建评论
CREATE TABLE xz_comment(
  id  INT PRIMARY KEY AUTO_INCREMENT,
  content VARCHAR(140),
  ctime   DATETIME,
  user_name VARCHAR(50),
  nid  INT
);

INSERT INTO xz_comment VALUES(null,'ha ha1',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha2',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha3',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha4',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha5',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha6',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha7',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha8',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha9',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha10',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha11',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha12',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha13',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha14',now(),'匿名 ',1);
INSERT INTO xz_comment VALUES(null,'ha ha15',now(),'匿名 ',1);




