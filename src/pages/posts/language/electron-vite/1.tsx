import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Post from '@templates/Post';
import * as R from '@templates/ReusableCSS';

const ElectronVite1 = () => {
  return (
    <Post 
      mainTitle="alias path 설정"
      tag="Electron-vite"
      date="23.08.11"
      subTitle="electron-vite with react 초기 alias 설정하기"
    >
      <StaticImage src="../../../assets/imgs/review/1.png" alt="post-img" 
        style={{ width: '100%', height: '60vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
      <R.PostContentBox>
        <h2>외 않 되 ?!</h2>

        <p>회사에서 electron-vite를 이용하여, 데스크탑 어플리케이션을 만드니까, 초기 세팅을 하라고 하였다</p>
        <p>이전에 프로젝트 진행하면서 이미 초기 세팅 마스터(?) 했기 때문에 굉장히 easy한 작업이겠구만 생각을 했다 </p>
        <p>(후후,, 맡겨만 주시죠?😎)</p>
        <p>전에 했던 프로젝트 코드 참고하면서, 고대로 복붙을 했다</p>
        <br />
        <p>결과는 실패</p>
        <p>똑같이 복붙했는데 왜 안돼,,,</p>
        <br />
        <p>vite를 이용하니, vite.config.ts에 alias 설정해주고, tsconfig.json에 path 똑같이 설정해줬는데 해당 경로를 import 하려고 하니 계속 빨간줄이 떴다</p>
        <br />
        <p>🤯🤯🤯</p>
        <br />
        <p>계속 구글링하고, 다른 점이 있나 비교하고 했지만 계속 실파이,,</p>
        <br />
        <p>서터레스 받아서 머리 다 뽑아버렸다 🤡</p>
        
        <h2>HELP!</h2>
        
        <p>이대로 가다간 탈모 올 거 같아서 사수님께 헬프 요청을 하였다</p>
        <p>1분도 안 돼서 바로 해결,,,</p>
        <p>사라진 내 n시간,,</p>
        
        <blockquote>오늘의 결론: 모르겠으면 바로 물어보쟈! 😋</blockquote>
        
        <p>끝</p>
        
        <h2>원인</h2>
        
        <p>전에 했던 프로젝트는 react-vite를 이용하였고, 그렇기에, vite.config.ts 파일을 이용하여 환경 설정을 해주었다</p>
        <p>하지만 얘는 react-vite가 아닌 electron-vite이므로 vite.config.ts가 아니라, electron.vite.config.ts란 파일에 설정을 해주어야 했다,,!!</p>
        <p>난 그런 줄도 모르고, vite.config.ts가 없어서 새로 만들어줬는데,,</p>
        <br />
        <p>사수님 왈</p>
        
        <blockquote>초기 보일러 플레이트에 없는 파일은 굳이 만드실 필요 없어요</blockquote>
        
        <p>명언이다,,</p>
        <br />
        <p>tsconfig.json 파일 또한, tsconfig.web.json 을 이용했어야 했다</p>
        <br />
        <p>실제로 각 파일들 들어가보니, alias랑 path가 몇 개 설정되어 있었다</p>
        <p>왜 확인을 안 했었을까,,</p>
        <br />
        <p>tsconfig.web.json을 아래와 같이 설정해주고,</p>
        
        <pre>
          <code>
            {`
{
  "extends": "@electron-toolkit/tsconfig/tsconfig.web.json",
  "include": [
    "src/renderer/src/env.d.ts",
    "src/renderer/src/**/*",
    "src/renderer/src/**/*.tsx",
    "src/preload/*.d.ts"
  ],
  "compilerOptions": {
    "composite": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "renderer/*": ["src/renderer/src/*"],
      "styles/*": ["src/renderer/src/styles/*"],
      "@Types/*": ["src/renderer/src/@Types/*"],
      "apis/*": ["src/renderer/src/apis/*"],
      "assets/*": ["src/renderer/src/assets/*"],
      "components/*": ["src/renderer/src/components/*"],
      "layouts/*": ["src/renderer/src/layouts/*"],
      "pages/*": ["src/renderer/src/pages/*"],
      "routes/*": ["src/renderer/src/routes/*"],
      "store/*": ["src/renderer/src/store/*"]
    }
  }
}
            `}
          </code>
        </pre>
        electron.vite.config.ts를 아래와 같이 설정을 해주니
        
        <pre>
          <code>
            {`
import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        renderer: resolve("src/renderer/src"),
        assets: resolve("src/renderer/src/assets"),
        components: resolve("src/renderer/src/components"),
        styles: resolve("src/renderer/src/styles"),
        contexts: resolve("src/renderer/src/contexts"),
        hooks: resolve("src/renderer/src/hooks"),
        layouts: resolve("src/renderer/src/layouts"),
        pages: resolve("src/renderer/src/pages"),
        routes: resolve("src/renderer/src/routes"),
        store: resolve("src/renderer/src/store"),
        utils: resolve("src/renderer/src/utils"),
      },
    },
    plugins: [react()],
    define: {
      "process.env": process.env,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '
          @use 'sass:math';
          @import "./src/renderer/src/styles/_global";
          ',
        },
      },
    },
  },
});
          `}
          </code>
        </pre>
        잘 작동을 하였다!
        
        진짜 제발 초기 코드는 다 분석을 해보쟈,,!!
      </R.PostContentBox>
    </Post>
  );
};

export default ElectronVite1;