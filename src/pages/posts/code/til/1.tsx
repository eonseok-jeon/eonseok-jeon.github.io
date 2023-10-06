import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Post from '@templates/Post';
import { PostContentBox } from '@templates/ReusableCSS';

const Til1 = () => {
  return (
    <Post 
      mainTitle="초기 세팅"
      tag="TIL"
      date="23.08.11"
      subTitle="프로젝트 초기 세팅 하기"
    >
      <StaticImage src="../../../../assets/imgs/review/1.png" alt="post-img" 
        style={{ width: '100%', height: '60vh', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
      <PostContentBox>
        <h2>해야할 것</h2>
        <h3>1. 불필요한 파일들 삭제</h3>
        <p>모든 파일들 다 분석한 뒤, 현재 프로젝트에 필요 없는 파일들 삭제</p>

        <h3>2. 불필요한 코드들 삭제 및 수정</h3>
        <p>import 되어있는 css와 icon, 초기 코드 등 삭제</p>
        <p>head 메타 정보 수정</p>
        <p>favicon 수정</p>
        <p>package.json name, description, author 등 정보 수정</p>
        <p>(bulid 코드 추가)</p>

        <h3>3. css 초기화 및 gloabal css 적용</h3>
        <p>reset, global, variables…</p>
        <p>scss 경우, preprocessorOptions 적용</p>
        <pre>
          <code>{`
css: {
  preprocessorOptions: {
    scss: {
      additionalData: ₩
          @use 'sass:math';
          @import "./src/renderer/src/styles/_global";
          ₩;
    }
  }
}
            `}
          </code>
        </pre>

        <h3>4. path 설정</h3>
        <p>path와 alias 설정</p>
        <pre>
          <code>{`
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
        <pre>
          <code>{`
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
          additionalData: ₩
          @use 'sass:math';
          @import "./src/renderer/src/styles/_global";
          ₩,
        },
      },
    },
  },
});
          `}
          </code>
        </pre>
        
        <h3>5. 코드 공통 규칙 설정</h3>
        <p>.editorconfig 설정</p>
        <p>.eslintrc.json 설정</p>
        <p>.stylelintrc.json 설정</p>
        <p>.prettierrc 설정</p>

        <h3>6. .gitignore 설정</h3>
        <p>.gitignore</p>

        <h3>7. 별 오류 없길 빌기</h3>
        <p>제발,, 🙏</p>
      </PostContentBox>
    </Post>
  );
};

export default Til1;