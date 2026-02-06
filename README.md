# GoldenSteamPl

이 프로젝트는 Vite를 사용한 React 애플리케이션입니다.

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

개발 서버가 실행되면 브라우저에서 `http://localhost:5173`으로 접속할 수 있습니다.

### 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 디렉토리에 생성됩니다.

### 미리보기

```bash
npm run preview
```

빌드된 프로덕션 버전을 미리 볼 수 있습니다.

## 프로젝트 구조

```
├── public/          # 정적 파일
├── src/
│   ├── App.jsx      # 메인 앱 컴포넌트
│   ├── App.css      # 앱 스타일
│   ├── main.jsx     # 엔트리 포인트
│   └── index.css    # 전역 스타일
├── index.html       # HTML 템플릿
├── vite.config.js   # Vite 설정
└── package.json     # 프로젝트 설정 및 의존성
```

## 기술 스택

- React 18
- Vite 5
- ESLint
