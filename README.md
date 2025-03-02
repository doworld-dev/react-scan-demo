# react-scan 성능 최적화 데모

React 애플리케이션의 성능 최적화 예제와 `react-scan` 활용 방법을 보여주는 데모 프로젝트입니다.

## 프로젝트 설명

- 비효율적인 구현과 최적화된 구현을 비교
- react-scan을 통한 성능 모니터링
- 실제 성능 최적화 적용 사례

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 주요 기능

- 비효율적인 구현 예시
- 최적화된 구현 예시
- React Scan 통합

## 기술 스택

- React
- TypeScript
- Vite
- react-scan

## 프로젝트 구조

```
src/
├── components/
│   ├── UserList.tsx        # 성능 문제가 있는 컴포넌트
│   └── OptimizedUserList.tsx   # 최적화된 컴포넌트
├── hooks/
│   └── useUsers.ts         # 사용자 데이터 관리 훅
├── types/
│   └── User.ts            # 타입 정의
├── App.tsx
└── App.css
```

## 참고 문헌

- [React Scan GitHub Repository](https://github.com/aidenybai/react-scan)
- [React Scan 공식 웹사이트](https://react-scan.com/)
