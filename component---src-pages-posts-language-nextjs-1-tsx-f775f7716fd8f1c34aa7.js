"use strict";(self.webpackChunkeonseok_github_pages=self.webpackChunkeonseok_github_pages||[]).push([[902],{5831:function(e,t,a){a.r(t);var c=a(7294),n=a(8032),l=a(8630),i=a(926);t.default=()=>c.createElement(l.Z,{mainTitle:"EC2를 이용하여 NextJS 배포해 보기",tag:"NextJS",date:"23.08.22",subTitle:"NextJS EC2를 이용하여 배포"},c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/8.png",alt:"post-img",style:{width:"100%",height:"60vh",backgroundSize:"contain",backgroundRepeat:"no-repeat"},__imageData:a(684)}),c.createElement(i.Rw,null,c.createElement("h2",null,"ec2 인스턴스 생성하기"),c.createElement("p",null,"아주 야무지게 하나 뚞딲 만들어 버렸다"),c.createElement("h2",null,"ubuntu 접속하기"),c.createElement("p",null,"ssh 명령어를 통해, 접속을하려고 하였다"),c.createElement("p",null,"접속을 하기 위한 명령어는 인스턴스 아이디를 통해, 인스턴스 정보로 들어간 뒤, 오른쪽 상단의 ‘연결’버튼을 누르면"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/1.png",alt:"nextJS-img-1-1",width:1e3,height:40,__imageData:a(6770)})),c.createElement("p",null,"ssh 클라이언트 항목이 뜬다 거기서 제일 아래에 있는 ssh로 시작하는 명령어를 터미널에 입력해주면 된다"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/2.png",alt:"nextJS-img-1-2",width:1e3,height:100,__imageData:a(6096)})),c.createElement("p",null,"그런데 아래와 같은 오류가 떴다"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/3.png",alt:"nextJS-img-1-3",width:1e3,height:345,__imageData:a(4405)})),c.createElement("p",null,"키를 공개적으로 볼 수 없도록 설정을 해주었다"),c.createElement("pre",null,c.createElement("code",null,"\nchmod 400 stockOneQ.pem\n          ")),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/4.png",alt:"nextJS-img-1-4",width:1e3,height:345,__imageData:a(4689)}),c.createElement("p",null,"성공!")),c.createElement("h2",null,"nodeJS 설치"),c.createElement("p",null,"ubuntu에 접속하여 nodeJS를 설치해주었다"),c.createElement("pre",null,c.createElement("code",null,"\nsudo apt-get update\nsudo apt install nodejs\nsudo apt install npm\n          ")),c.createElement("p",null,"그런 뒤 node -v을 확인해보니, v12.22.9 였다"),c.createElement("p",null,"node를 최신 버전으로 업그레이드 시켜주기 위해, nvm을 설치하였다"),c.createElement("pre",null,c.createElement("code",null,"\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash\n. ~/.nvm/nvm.sh\nnvm install --lts\n          ")),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/5.png",alt:"nextJS-img-1-5",width:1e3,height:140,__imageData:a(4784)}),c.createElement("p",null,"헤헤 이때까진 좋았다,,,")),c.createElement("p",null,"배포를 하기 전에, main에 코드들을 다 옮기기 위해, merge를 진행 하였다"),c.createElement("p",null,"develop에서 main으로 pr날렸더니 conflict 해결하라길래 github가 알려준 대로,"),c.createElement("pre",null,c.createElement("code",null,"\ngit pull origin main\ngit checkout develop\ngit merge main\n          ")),c.createElement("p",null,"이렇게 진행을 해주었다"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/6.png",alt:"nextJS-img-1-6",width:400,height:800,__imageData:a(2944)})),c.createElement("p",null,"그런데 도대체 도대체 왜 이따구로 충돌이 나는지 모르겠다"),c.createElement("p",null,"icon이나 저런 코드들 다 필요한 것들인데, delete 된 걸로 merge가 되려고 하는 것이다 🤯"),c.createElement("p",null,"몇 시간 째 이거 붙잡고 끙끙 거리고 있는데, 아오 이거 왜 이러는 거지,,"),c.createElement("p",null,"서터레스로 병 걸릴 거 같다,,, (시름시름)"),c.createElement("br",null),c.createElement("p",null,"merge하고 나서, 어찌어찌 없어진 아이콘 파일들 다 복구하고, 사라진 코드들 복사해서 붙여넣기 하고, npm run dev 했는데"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/7.png",alt:"nextJS-img-1-7",width:400,height:500,__imageData:a(7916)}),c.createElement("p",null,"이 난리 떨고 있길래 노트북 허리 꺾어 버릴 뻔 🤕")),c.createElement("p",null,"하지만 그러기엔 난 돈이 없기에,,,"),c.createElement("p",null,"빠르게 평정심을 되찾고 다른 해결책을 생각해 보았다"),c.createElement("p",null,"아무래도 이 방법은 아닌 거 같아서, 2개의 방법을 생각했다 (둘 다 좋은 생각은 아닌 거 같지만,,)"),c.createElement("br",null),c.createElement("p",null,"develop의 모든 코드를 main에 복붙하기"),c.createElement("p",null,"main에서 develop을 merge한 뒤, main push 하기"),c.createElement("p",null,"1번을 하려다가, develop과 완벽하게 동일한 코드를 가지면, git push origin develop 했을 때, 달라진 게 없다고, push가 안 될 거 같아서"),c.createElement("p",null,"그냥 2번으로 하기로 했다"),c.createElement("p",null,"main을 직접적으로 건드리는 거라 진짜 이 방법은 쓰고 싶지 않았는데 이대로 계속 가다간 제명에 살지 못할 거 같아 😇 빠르게 타협하였다"),c.createElement("p",null,"자야 하는데,,"),c.createElement("br",null),c.createElement("p",null,"진짜 conflict 오백만 개 해결하고, 심호흡하고 npm run dev 돌려봤다"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/8.png",alt:"nextJS-img-1-8",width:800,height:450,__imageData:a(2482)}),c.createElement("p",null,"🪦 언석, 스트레스로 여기에 잠들다")),c.createElement("p",null,"알고봤더니 conflict 해결하면서 코드들 박살나버려서 아예 버리고 새로 clone 했었는데, npm install을 안해줬던 것이었다"),c.createElement("p",null,"후후,,, 진짜 npm install 딱 대,, 이제 성공이 눈 앞에 아른거린다,,🙊"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/9.png",alt:"nextJS-img-1-9",width:800,height:450,__imageData:a(1130)}),c.createElement("p",null,"🙈")),c.createElement("p",null,"내가 뭘 그리 잘못했길래, 이 야밤에 이런 봉변을 당해야 하는 걸까?"),c.createElement("p",null,"침착하게 다시 없는 파일들 추가해주고, 없는 종속성 추가 해주고, npm run dev,,,"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/10.png",alt:"nextJS-img-1-10",width:1e3,height:400,__imageData:a(9656)}),c.createElement("p",null,"도대체 헤더 어디갔지?? 히히 진짜 죽고싶당😋")),c.createElement("p",null,"진짜 이건 안 되겠다, 그냥 develop 고대로 복붙해서 main에 넣어줘야겠다"),c.createElement("br",null),c.createElement("p",null,"완료,,! ✨"),c.createElement("p",null,"그냥 노가다로 폴더 하나하나 붙여넣어주었다"),c.createElement("p",null,"이게 맞나 싶지만,"),c.createElement("p",null,"그래도 드디어 다음 단계로 넘어갈 수 있게 되었다"),c.createElement("h2",null,"타입 에러 해결"),c.createElement("p",null,"그 후, ubuntu에 내 github를 clone하고, 인바운드 규칙을 http로 수정해주었다"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/11.png",alt:"nextJS-img-1-11",width:1e3,height:200,__imageData:a(2637)})),c.createElement("p",null,"그리고 npm run build를 해주었더니"),c.createElement("p",null,"무수한 에러들의 악수요청이 있었다 🤝"),c.createElement("p",null,"작은 type 에러가 있어도 build가 되지 않았다"),c.createElement("br",null),c.createElement("p",null,"여태껏 빨간줄 떴을 때, 해결 안되면 고냥 무시하고 코드 짰는데, 그러면 안되는 거였다ㅜㅜㅜㅜ 💦"),c.createElement("p",null,"npm run build하고 npm run start만 하면 build 끝나는데"),c.createElement("p",null,"수많은 에러들의 환대에 어질어질해진다,,,💩"),c.createElement("br",null),c.createElement("p",null,"일단 출근하고, 다시 해봐야겠다,,"),c.createElement("h2",null,"재도전"),c.createElement("p",null,"일단 type 에러 나는 모든 부분을 수정해 주었다"),c.createElement("br",null),c.createElement("p",null,"그런 다음 다시 build를 진행해 보았다"),c.createElement("br",null),c.createElement("p",null,"그러자 또 새로운 에러가 발생하였다,,😧"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/12.png",alt:"nextJS-img-1-12",width:900,height:300,__imageData:a(4969)})),c.createElement("p",null,"처음엔 동적으로 주소 받는건데 getStaticPaths 안 해줘서 그런가? 하고 코드 작성을 해줬지만 여전히 오류가 발생하였다"),c.createElement("p",null,"그래서 오류가 발생하는 파일로 가서, 하나하나 코드를 주석처리 하면서 오류가 없어질 때를 기다려 보았다"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/13.png",alt:"nextJS-img-1-13",width:600,height:400,__imageData:a(690)})),c.createElement("p",null,"결국 그렇게 오류를 찾아냈고, selectedImage 옆에 instanceof File 코드를 추가해줘서 발생한 오류였다"),c.createElement("p",null,"이유는 머리를 너무 많이 썼더니 어지러워져서 일단 찾지 않았고, 저 부분 삭제하고 바로 npm run build 해주었다"),c.createElement("br",null),c.createElement("p",null,"build 성공,,!!!!!!!!!!!!! 응애 💃🏻"),c.createElement("br",null),c.createElement("p",null,"npm run start을 해준뒤, ec2 public IP 주소로 접속을 해보았다"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/14.png",alt:"nextJS-img-1-14",width:400,height:200,__imageData:a(1963)}),c.createElement("p",null,"바로 이거지! 슬플 때 웃는 난 어쩌면 1류일지도,,?")),c.createElement("p",null,"원인을 찾아보니 보안 그룹을 설정해 줘야 한다고,,,!!!"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/15.png",alt:"nextJS-img-1-15",width:1e3,height:150,__imageData:a(7846)})),c.createElement("p",null,"처음에는 http만 0.0.0.0으로 모두가 들어올 수 있게 해주었다 실패!"),c.createElement("p",null,"그럼 https도,,? 실패!"),c.createElement("p",null,"아 내 IP 주소를 설정 안 해줘서 그런가?! 실패! 아 오케이,,! 진짜 알았다,, 포트번호 3000번 안 열어줘서 그랬음!! 실패!"),c.createElement("br",null),c.createElement("p",null,"ㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜㅜ ec2 폭파시켜도 합법,,"),c.createElement("br",null),c.createElement("p",null,"몇 시간 동안 구글링 해서 결국 이유를 찾아냈다,,!!!"),c.createElement("br",null),c.createElement("pre",null,c.createElement("code",null,"\nsudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000\n          ")),c.createElement("p",null,"80번 포트 접근을 3000번 포트 접근으로 보내주는 포트포워딩 설정이 필요했던 것이다,,,,"),c.createElement("br",null),c.createElement("p",null,"동적 ip 주소 설정한 뒤, 접속을 해보았다"),c.createElement(i.rK,null,c.createElement(n.S,{src:"../../../../assets/imgs/nextJS/1/16.png",alt:"nextJS-img-1-16",width:350,height:500,__imageData:a(4046)}),c.createElement("p",null,"야호 💃🏻🕺🏻💃🏻🕺🏻💃🏻🕺🏻💃🏻🕺🏻💃🏻🕺🏻💃🏻🕺🏻👯‍♀️👯‍♀️👯‍♀️👯‍♀️👯‍♀️"))))},8630:function(e,t,a){a.d(t,{Z:function(){return p}});var c=a(7294),n=a(6402),l=a(220),i=a(5086),s=a(926);const r=i.default.article.withConfig({displayName:"style__PostArticle",componentId:"sc-rv28xx-0"})(["max-width:120rem;margin:8rem auto 0;padding:13.2rem 10rem 7rem;pre{display:inline-block;overflow:auto;margin:2rem 0;padding:.1rem 2rem;border-radius:1rem;font-size:1.2rem;color:#fff;background-color:#222;border:.1rem solid #666;&::-webkit-scrollbar{display:none;}}"]),b=i.default.div.withConfig({displayName:"style__PostMainTitleBox",componentId:"sc-rv28xx-1"})(["margin-bottom:2rem;"]),d=(0,i.default)(s.DK).withConfig({displayName:"style__PostSubTitle",componentId:"sc-rv28xx-2"})(["padding:2rem 0;font-weight:500;border-bottom:.1rem solid #ddd;"]);var p=e=>{let{mainTitle:t,tag:a,date:i,subTitle:p,children:m}=e;const f=c.Children.toArray(m);return c.createElement(n.Z,null,c.createElement(l.Z,{isSticky:!0}),c.createElement(r,null,c.createElement("div",null,c.createElement(b,null,c.createElement(s.U3,null,t),c.createElement("p",null,"@",a," / ",i)),f[0],c.createElement(d,null,p)),f[1]))}},6096:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/62c426e31e2ed6fa25cdcf12d06a09f2/5bdc3/2.png","srcSet":"/static/62c426e31e2ed6fa25cdcf12d06a09f2/02b22/2.png 216w,\\n/static/62c426e31e2ed6fa25cdcf12d06a09f2/c7470/2.png 432w,\\n/static/62c426e31e2ed6fa25cdcf12d06a09f2/5bdc3/2.png 864w","sizes":"(min-width: 864px) 864px, 100vw"},"sources":[{"srcSet":"/static/62c426e31e2ed6fa25cdcf12d06a09f2/d4672/2.webp 216w,\\n/static/62c426e31e2ed6fa25cdcf12d06a09f2/0cf1b/2.webp 432w,\\n/static/62c426e31e2ed6fa25cdcf12d06a09f2/c1bef/2.webp 864w","type":"image/webp","sizes":"(min-width: 864px) 864px, 100vw"}]},"width":1000,"height":99.53703703703704}')},2482:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182828","images":{"fallback":{"src":"/static/3341602fc6a75c9a3a178ce6f434d420/47126/8.png","srcSet":"/static/3341602fc6a75c9a3a178ce6f434d420/a1453/8.png 200w,\\n/static/3341602fc6a75c9a3a178ce6f434d420/aeb79/8.png 400w,\\n/static/3341602fc6a75c9a3a178ce6f434d420/47126/8.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/3341602fc6a75c9a3a178ce6f434d420/b6124/8.webp 200w,\\n/static/3341602fc6a75c9a3a178ce6f434d420/dff21/8.webp 400w,\\n/static/3341602fc6a75c9a3a178ce6f434d420/b2a35/8.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":450}')},4784:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282838","images":{"fallback":{"src":"/static/05f191a92018113f61d28864b365550e/308b7/5.png","srcSet":"/static/05f191a92018113f61d28864b365550e/3f4a0/5.png 92w,\\n/static/05f191a92018113f61d28864b365550e/8aeed/5.png 184w,\\n/static/05f191a92018113f61d28864b365550e/308b7/5.png 368w","sizes":"(min-width: 368px) 368px, 100vw"},"sources":[{"srcSet":"/static/05f191a92018113f61d28864b365550e/9c62b/5.webp 92w,\\n/static/05f191a92018113f61d28864b365550e/45bd2/5.webp 184w,\\n/static/05f191a92018113f61d28864b365550e/f4bfd/5.webp 368w","type":"image/webp","sizes":"(min-width: 368px) 368px, 100vw"}]},"width":1000,"height":141.30434782608697}')},690:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/c295e438bced6385e6cee5122b01f043/5812a/13.png","srcSet":"/static/c295e438bced6385e6cee5122b01f043/6e391/13.png 104w,\\n/static/c295e438bced6385e6cee5122b01f043/030ea/13.png 207w,\\n/static/c295e438bced6385e6cee5122b01f043/5812a/13.png 414w","sizes":"(min-width: 414px) 414px, 100vw"},"sources":[{"srcSet":"/static/c295e438bced6385e6cee5122b01f043/18bc8/13.webp 104w,\\n/static/c295e438bced6385e6cee5122b01f043/6847c/13.webp 207w,\\n/static/c295e438bced6385e6cee5122b01f043/00900/13.webp 414w","type":"image/webp","sizes":"(min-width: 414px) 414px, 100vw"}]},"width":600,"height":400}')},2944:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182828","images":{"fallback":{"src":"/static/839016986959abc2a6aec3230b5ea262/629a3/6.png","srcSet":"/static/839016986959abc2a6aec3230b5ea262/f2bca/6.png 100w,\\n/static/839016986959abc2a6aec3230b5ea262/a149b/6.png 200w,\\n/static/839016986959abc2a6aec3230b5ea262/629a3/6.png 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/839016986959abc2a6aec3230b5ea262/bf3c2/6.webp 100w,\\n/static/839016986959abc2a6aec3230b5ea262/d0ba8/6.webp 200w,\\n/static/839016986959abc2a6aec3230b5ea262/711b0/6.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":800}')},684:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182828","images":{"fallback":{"src":"/static/3341602fc6a75c9a3a178ce6f434d420/68fd2/8.png","srcSet":"/static/3341602fc6a75c9a3a178ce6f434d420/be714/8.png 224w,\\n/static/3341602fc6a75c9a3a178ce6f434d420/0c3b4/8.png 448w,\\n/static/3341602fc6a75c9a3a178ce6f434d420/68fd2/8.png 896w","sizes":"(min-width: 896px) 896px, 100vw"},"sources":[{"srcSet":"/static/3341602fc6a75c9a3a178ce6f434d420/f62dd/8.webp 224w,\\n/static/3341602fc6a75c9a3a178ce6f434d420/b6f07/8.webp 448w,\\n/static/3341602fc6a75c9a3a178ce6f434d420/8379a/8.webp 896w","type":"image/webp","sizes":"(min-width: 896px) 896px, 100vw"}]},"width":896,"height":490.99999999999994}')},9656:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/e3394ea5d5086fcb1b276de59e428ae2/ec0da/10.png","srcSet":"/static/e3394ea5d5086fcb1b276de59e428ae2/c66da/10.png 228w,\\n/static/e3394ea5d5086fcb1b276de59e428ae2/e9ca2/10.png 455w,\\n/static/e3394ea5d5086fcb1b276de59e428ae2/ec0da/10.png 910w","sizes":"(min-width: 910px) 910px, 100vw"},"sources":[{"srcSet":"/static/e3394ea5d5086fcb1b276de59e428ae2/6e246/10.webp 228w,\\n/static/e3394ea5d5086fcb1b276de59e428ae2/4aef4/10.webp 455w,\\n/static/e3394ea5d5086fcb1b276de59e428ae2/3fa88/10.webp 910w","type":"image/webp","sizes":"(min-width: 910px) 910px, 100vw"}]},"width":1000,"height":400}')},4046:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#989898","images":{"fallback":{"src":"/static/f650a5b652ed35e9475b364a58fcadb7/db935/16.png","srcSet":"/static/f650a5b652ed35e9475b364a58fcadb7/9ffce/16.png 74w,\\n/static/f650a5b652ed35e9475b364a58fcadb7/cc17b/16.png 147w,\\n/static/f650a5b652ed35e9475b364a58fcadb7/db935/16.png 294w","sizes":"(min-width: 294px) 294px, 100vw"},"sources":[{"srcSet":"/static/f650a5b652ed35e9475b364a58fcadb7/2ec4a/16.webp 74w,\\n/static/f650a5b652ed35e9475b364a58fcadb7/8f389/16.webp 147w,\\n/static/f650a5b652ed35e9475b364a58fcadb7/15798/16.webp 294w","type":"image/webp","sizes":"(min-width: 294px) 294px, 100vw"}]},"width":350,"height":500.00000000000006}')},2637:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f1c950e292f858a3a5c7aa10d1269bd7/7aba7/11.png","srcSet":"/static/f1c950e292f858a3a5c7aa10d1269bd7/4a565/11.png 227w,\\n/static/f1c950e292f858a3a5c7aa10d1269bd7/a96ad/11.png 454w,\\n/static/f1c950e292f858a3a5c7aa10d1269bd7/7aba7/11.png 908w","sizes":"(min-width: 908px) 908px, 100vw"},"sources":[{"srcSet":"/static/f1c950e292f858a3a5c7aa10d1269bd7/96abd/11.webp 227w,\\n/static/f1c950e292f858a3a5c7aa10d1269bd7/c1ffa/11.webp 454w,\\n/static/f1c950e292f858a3a5c7aa10d1269bd7/271c1/11.webp 908w","type":"image/webp","sizes":"(min-width: 908px) 908px, 100vw"}]},"width":1000,"height":200.44052863436124}')},7846:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/474d9decb63ad03d097208f6d34bebde/db4ff/15.png","srcSet":"/static/474d9decb63ad03d097208f6d34bebde/3eede/15.png 227w,\\n/static/474d9decb63ad03d097208f6d34bebde/2e863/15.png 454w,\\n/static/474d9decb63ad03d097208f6d34bebde/db4ff/15.png 908w","sizes":"(min-width: 908px) 908px, 100vw"},"sources":[{"srcSet":"/static/474d9decb63ad03d097208f6d34bebde/2fdbf/15.webp 227w,\\n/static/474d9decb63ad03d097208f6d34bebde/9acd3/15.webp 454w,\\n/static/474d9decb63ad03d097208f6d34bebde/f3c7c/15.webp 908w","type":"image/webp","sizes":"(min-width: 908px) 908px, 100vw"}]},"width":1000,"height":149.77973568281936}')},6770:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/87100d4765bcb2b0b57a0fce012ee0a7/48652/1.png","srcSet":"/static/87100d4765bcb2b0b57a0fce012ee0a7/c2c10/1.png 227w,\\n/static/87100d4765bcb2b0b57a0fce012ee0a7/72bab/1.png 454w,\\n/static/87100d4765bcb2b0b57a0fce012ee0a7/48652/1.png 907w","sizes":"(min-width: 907px) 907px, 100vw"},"sources":[{"srcSet":"/static/87100d4765bcb2b0b57a0fce012ee0a7/1c74a/1.webp 227w,\\n/static/87100d4765bcb2b0b57a0fce012ee0a7/06e44/1.webp 454w,\\n/static/87100d4765bcb2b0b57a0fce012ee0a7/b5b59/1.webp 907w","type":"image/webp","sizes":"(min-width: 907px) 907px, 100vw"}]},"width":1000,"height":39.691289966923925}')},4969:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282838","images":{"fallback":{"src":"/static/5956de146a5dcf2ecb2891562fdec603/9412a/12.png","srcSet":"/static/5956de146a5dcf2ecb2891562fdec603/3ba80/12.png 163w,\\n/static/5956de146a5dcf2ecb2891562fdec603/fdf7f/12.png 327w,\\n/static/5956de146a5dcf2ecb2891562fdec603/9412a/12.png 653w","sizes":"(min-width: 653px) 653px, 100vw"},"sources":[{"srcSet":"/static/5956de146a5dcf2ecb2891562fdec603/49c70/12.webp 163w,\\n/static/5956de146a5dcf2ecb2891562fdec603/57dac/12.webp 327w,\\n/static/5956de146a5dcf2ecb2891562fdec603/f58e9/12.webp 653w","type":"image/webp","sizes":"(min-width: 653px) 653px, 100vw"}]},"width":900,"height":300.4594180704441}')},1963:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/c67077bc76135b9bb86f9e40afd60850/c8dce/14.png","srcSet":"/static/c67077bc76135b9bb86f9e40afd60850/5f9fc/14.png 100w,\\n/static/c67077bc76135b9bb86f9e40afd60850/573c0/14.png 200w,\\n/static/c67077bc76135b9bb86f9e40afd60850/c8dce/14.png 400w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/c67077bc76135b9bb86f9e40afd60850/fd9c7/14.webp 100w,\\n/static/c67077bc76135b9bb86f9e40afd60850/f201f/14.webp 200w,\\n/static/c67077bc76135b9bb86f9e40afd60850/e8709/14.webp 400w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":200}')},4405:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282838","images":{"fallback":{"src":"/static/66f0a7503ac1728e0f57ec0a6ba847d9/66bed/3.png","srcSet":"/static/66f0a7503ac1728e0f57ec0a6ba847d9/4f742/3.png 163w,\\n/static/66f0a7503ac1728e0f57ec0a6ba847d9/7401a/3.png 325w,\\n/static/66f0a7503ac1728e0f57ec0a6ba847d9/66bed/3.png 650w","sizes":"(min-width: 650px) 650px, 100vw"},"sources":[{"srcSet":"/static/66f0a7503ac1728e0f57ec0a6ba847d9/418b4/3.webp 163w,\\n/static/66f0a7503ac1728e0f57ec0a6ba847d9/0a528/3.webp 325w,\\n/static/66f0a7503ac1728e0f57ec0a6ba847d9/1ec39/3.webp 650w","type":"image/webp","sizes":"(min-width: 650px) 650px, 100vw"}]},"width":1000,"height":344.6153846153846}')},7916:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/366c57c97b1f3df6d895647ce350c72b/46f72/7.png","srcSet":"/static/366c57c97b1f3df6d895647ce350c72b/e8574/7.png 97w,\\n/static/366c57c97b1f3df6d895647ce350c72b/8adda/7.png 195w,\\n/static/366c57c97b1f3df6d895647ce350c72b/46f72/7.png 389w","sizes":"(min-width: 389px) 389px, 100vw"},"sources":[{"srcSet":"/static/366c57c97b1f3df6d895647ce350c72b/5aa96/7.webp 97w,\\n/static/366c57c97b1f3df6d895647ce350c72b/76919/7.webp 195w,\\n/static/366c57c97b1f3df6d895647ce350c72b/1656b/7.webp 389w","type":"image/webp","sizes":"(min-width: 389px) 389px, 100vw"}]},"width":400,"height":499.74293059125966}')},1130:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#181818","images":{"fallback":{"src":"/static/4b4501ba817efcf4c7907531e5a81708/47126/9.png","srcSet":"/static/4b4501ba817efcf4c7907531e5a81708/a1453/9.png 200w,\\n/static/4b4501ba817efcf4c7907531e5a81708/aeb79/9.png 400w,\\n/static/4b4501ba817efcf4c7907531e5a81708/47126/9.png 800w","sizes":"(min-width: 800px) 800px, 100vw"},"sources":[{"srcSet":"/static/4b4501ba817efcf4c7907531e5a81708/b6124/9.webp 200w,\\n/static/4b4501ba817efcf4c7907531e5a81708/dff21/9.webp 400w,\\n/static/4b4501ba817efcf4c7907531e5a81708/b2a35/9.webp 800w","type":"image/webp","sizes":"(min-width: 800px) 800px, 100vw"}]},"width":800,"height":450}')},4689:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282838","images":{"fallback":{"src":"/static/5648b8e54d2d0b727eb09e5c7e05f01b/19129/4.png","srcSet":"/static/5648b8e54d2d0b727eb09e5c7e05f01b/377e7/4.png 144w,\\n/static/5648b8e54d2d0b727eb09e5c7e05f01b/7641d/4.png 287w,\\n/static/5648b8e54d2d0b727eb09e5c7e05f01b/19129/4.png 574w","sizes":"(min-width: 574px) 574px, 100vw"},"sources":[{"srcSet":"/static/5648b8e54d2d0b727eb09e5c7e05f01b/11e50/4.webp 144w,\\n/static/5648b8e54d2d0b727eb09e5c7e05f01b/7f24f/4.webp 287w,\\n/static/5648b8e54d2d0b727eb09e5c7e05f01b/5274a/4.webp 574w","type":"image/webp","sizes":"(min-width: 574px) 574px, 100vw"}]},"width":1000,"height":344.94773519163766}')}}]);
//# sourceMappingURL=component---src-pages-posts-language-nextjs-1-tsx-f775f7716fd8f1c34aa7.js.map