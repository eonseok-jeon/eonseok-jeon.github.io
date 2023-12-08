"use strict";(self.webpackChunkeonseok_github_pages=self.webpackChunkeonseok_github_pages||[]).push([[98],{1129:function(e,n,r){r.r(n),r.d(n,{Head:function(){return a}});var t=r(7294),l=r(8032),s=r(8630),c=r(926);const a=()=>t.createElement("title",null,"electron-vite - alias path 설정");n.default=()=>t.createElement(s.Z,{mainTitle:"alias path 설정",tag:"Electron-vite",date:"23.08.11",subTitle:"electron-vite with react 초기 alias 설정하기"},t.createElement(l.S,{src:"../../../../assets/imgs/no-image/3.png",alt:"post-img",style:{width:"100%",height:"60vh",backgroundSize:"contain",backgroundRepeat:"no-repeat"},__imageData:r(8711)}),t.createElement(c.Rw,null,t.createElement("h2",null,"외 않 되 ?!"),t.createElement("p",null,"회사에서 electron-vite를 이용하여, 데스크탑 어플리케이션을 만드니까, 초기 세팅을 하라고 하였다"),t.createElement("p",null,"이전에 프로젝트 진행하면서 이미 초기 세팅 마스터(?) 했기 때문에 굉장히 easy한 작업이겠구만 생각을 했다 "),t.createElement("p",null,"(후후,, 맡겨만 주시죠?😎)"),t.createElement("p",null,"전에 했던 프로젝트 코드 참고하면서, 고대로 복붙을 했다"),t.createElement("br",null),t.createElement("p",null,"결과는 실패"),t.createElement("p",null,"똑같이 복붙했는데 왜 안돼,,,"),t.createElement("br",null),t.createElement("p",null,"vite를 이용하니, vite.config.ts에 alias 설정해주고, tsconfig.json에 path 똑같이 설정해줬는데 해당 경로를 import 하려고 하니 계속 빨간줄이 떴다"),t.createElement("br",null),t.createElement("p",null,"🤯🤯🤯"),t.createElement("br",null),t.createElement("p",null,"계속 구글링하고, 다른 점이 있나 비교하고 했지만 계속 실파이,,"),t.createElement("br",null),t.createElement("p",null,"서터레스 받아서 머리 다 뽑아버렸다 🤡"),t.createElement("h2",null,"HELP!"),t.createElement("p",null,"이대로 가다간 탈모 올 거 같아서 사수님께 헬프 요청을 하였다"),t.createElement("p",null,"1분도 안 돼서 바로 해결,,,"),t.createElement("p",null,"사라진 내 n시간,,"),t.createElement("blockquote",null,"오늘의 결론: 모르겠으면 바로 물어보쟈! 😋"),t.createElement("p",null,"끝"),t.createElement("h2",null,"원인"),t.createElement("p",null,"전에 했던 프로젝트는 react-vite를 이용하였고, 그렇기에, vite.config.ts 파일을 이용하여 환경 설정을 해주었다"),t.createElement("p",null,"하지만 얘는 react-vite가 아닌 electron-vite이므로 vite.config.ts가 아니라, electron.vite.config.ts란 파일에 설정을 해주어야 했다,,!!"),t.createElement("p",null,"난 그런 줄도 모르고, vite.config.ts가 없어서 새로 만들어줬는데,,"),t.createElement("br",null),t.createElement("p",null,"사수님 왈"),t.createElement("blockquote",null,"초기 보일러 플레이트에 없는 파일은 굳이 만드실 필요 없어요"),t.createElement("p",null,"명언이다,,"),t.createElement("br",null),t.createElement("p",null,"tsconfig.json 파일 또한, tsconfig.web.json 을 이용했어야 했다"),t.createElement("br",null),t.createElement("p",null,"실제로 각 파일들 들어가보니, alias랑 path가 몇 개 설정되어 있었다"),t.createElement("p",null,"왜 확인을 안 했었을까,,"),t.createElement("br",null),t.createElement("p",null,"tsconfig.web.json을 아래와 같이 설정해주고,"),t.createElement("pre",null,t.createElement("code",null,'\n{\n  "extends": "@electron-toolkit/tsconfig/tsconfig.web.json",\n  "include": [\n    "src/renderer/src/env.d.ts",\n    "src/renderer/src/**/*",\n    "src/renderer/src/**/*.tsx",\n    "src/preload/*.d.ts"\n  ],\n  "compilerOptions": {\n    "composite": true,\n    "jsx": "react-jsx",\n    "baseUrl": ".",\n    "paths": {\n      "renderer/*": ["src/renderer/src/*"],\n      "styles/*": ["src/renderer/src/styles/*"],\n      "@Types/*": ["src/renderer/src/@Types/*"],\n      "apis/*": ["src/renderer/src/apis/*"],\n      "assets/*": ["src/renderer/src/assets/*"],\n      "components/*": ["src/renderer/src/components/*"],\n      "layouts/*": ["src/renderer/src/layouts/*"],\n      "pages/*": ["src/renderer/src/pages/*"],\n      "routes/*": ["src/renderer/src/routes/*"],\n      "store/*": ["src/renderer/src/store/*"]\n    }\n  }\n}\n            ')),"electron.vite.config.ts를 아래와 같이 설정을 해주니",t.createElement("pre",null,t.createElement("code",null,'\nimport { resolve } from "path";\nimport { defineConfig, externalizeDepsPlugin } from "electron-vite";\nimport react from "@vitejs/plugin-react";\n\nexport default defineConfig({\n  main: {\n    plugins: [externalizeDepsPlugin()],\n  },\n  preload: {\n    plugins: [externalizeDepsPlugin()],\n  },\n  renderer: {\n    resolve: {\n      alias: {\n        renderer: resolve("src/renderer/src"),\n        assets: resolve("src/renderer/src/assets"),\n        components: resolve("src/renderer/src/components"),\n        styles: resolve("src/renderer/src/styles"),\n        contexts: resolve("src/renderer/src/contexts"),\n        hooks: resolve("src/renderer/src/hooks"),\n        layouts: resolve("src/renderer/src/layouts"),\n        pages: resolve("src/renderer/src/pages"),\n        routes: resolve("src/renderer/src/routes"),\n        store: resolve("src/renderer/src/store"),\n        utils: resolve("src/renderer/src/utils"),\n      },\n    },\n    plugins: [react()],\n    define: {\n      "process.env": process.env,\n    },\n    css: {\n      preprocessorOptions: {\n        scss: {\n          additionalData: \'\n          @use \'sass:math\';\n          @import "./src/renderer/src/styles/_global";\n          \',\n        },\n      },\n    },\n  },\n});\n          ')),"잘 작동을 하였다! 진짜 제발 초기 코드는 다 분석을 해보쟈,,!!"))},8630:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(7294),l=r(6402),s=r(3344),c=r(5086),a=r(926);const o=c.default.article.withConfig({displayName:"style__PostArticle",componentId:"sc-rv28xx-0"})(["max-width:120rem;margin:8rem auto 0;padding:7%;&::-webkit-scrollbar{display:visible;}pre{display:inline-block;width:100%;overflow:auto;margin:2rem 0;padding:0.1rem 2rem;border-radius:1rem;font-size:1.2rem;color:#fff;background-color:#222;border:0.1rem solid #666;}"]),i=c.default.div.withConfig({displayName:"style__PostMainTitleBox",componentId:"sc-rv28xx-1"})(["margin-bottom:2rem;"]),p=(0,c.default)(a.DK).withConfig({displayName:"style__PostSubTitle",componentId:"sc-rv28xx-2"})(["padding:2rem 0;font-weight:500;border-bottom:0.1rem solid #ddd;"]);var u=e=>{let{mainTitle:n,tag:r,date:c,subTitle:u,children:m}=e;const d=t.Children.toArray(m);return t.createElement(l.Z,null,t.createElement(s.Z,{isSticky:!0}),t.createElement(o,null,t.createElement("div",null,t.createElement(i,null,t.createElement(a.U3,null,n),t.createElement("p",null,"@",r," / ",c)),d[0],t.createElement(p,null,u)),d[1]))}},8711:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/5cf2bbae042ae3c63a8e598f6eec26a6/09cce/3.png","srcSet":"/static/5cf2bbae042ae3c63a8e598f6eec26a6/3518e/3.png 164w,\\n/static/5cf2bbae042ae3c63a8e598f6eec26a6/4c96c/3.png 329w,\\n/static/5cf2bbae042ae3c63a8e598f6eec26a6/09cce/3.png 657w","sizes":"(min-width: 657px) 657px, 100vw"},"sources":[{"srcSet":"/static/5cf2bbae042ae3c63a8e598f6eec26a6/13090/3.webp 164w,\\n/static/5cf2bbae042ae3c63a8e598f6eec26a6/e81fb/3.webp 329w,\\n/static/5cf2bbae042ae3c63a8e598f6eec26a6/565c7/3.webp 657w","type":"image/webp","sizes":"(min-width: 657px) 657px, 100vw"}]},"width":657,"height":401}')}}]);
//# sourceMappingURL=component---src-pages-posts-language-electron-vite-1-tsx-51b84da560eea006df0e.js.map