---
title: "초기 세팅"

categories:
  - TIL
tags:
  - [TIL]

toc: true
toc_sticky: true

date: 2023-08-11
last_modified_at: 2023-08-11
---

# 프로젝트 초기 세팅 하기

## 해야할 것

### 1. 불필요한 파일들 삭제

- 모든 파일들 다 분석한 뒤, 현재 프로젝트에 필요 없는 파일들 삭제

### 2. 불필요한 코드들 삭제 및 수정

- import 되어있는 css와 icon, 초기 코드 등 삭제
- head 메타 정보 수정
- favicon 수정
- package.json name, description, author 등 정보 수정
- ~~(bulid 코드 추가)~~

### 3. css 초기화 및 gloabal css 적용

- reset, global, variables...
- scss 경우, preprocessorOptions 적용

```typescript
css: {
  preprocessorOptions: {
    scss: {
      additionalData: `
          @use 'sass:math';
          @import "./src/renderer/src/styles/_global";
          `;
    }
  }
}
```

### 4. path 설정

- path와 alias 설정

```json
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
```

```typescript
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
          additionalData: `
          @use 'sass:math';
          @import "./src/renderer/src/styles/_global";
          `,
        },
      },
    },
  },
});
```

### 5. 코드 공통 규칙 설정

- .editorconfig 설정
- .eslintrc.json 설정
- .stylelintrc.json 설정
- .prettierrc 설정

### 6. .gitignore 설정

- [.gitignore](https://www.toptal.com/developers/gitignore/)

### 7. 별 오류 없길 빌기

- 제발,, 🙏
