# @repo/shadcn-component

이 패키지는 shadcn/ui CLI로 생성한 컴포넌트를 보관하고, monorepo 내 다른 앱에서 재사용할 수 있도록 만든 디자인 시스템 워크스페이스입니다.

## 로컬 개발 흐름

1. **컴포넌트 추가**
   ```bash
   pnpm --filter @repo/shadcn-component shadcn add button
   ```
   - `components.json` 설정을 기준으로 `src/components`에 코드가 생성됩니다.
2. **빌드**
   ```bash
   pnpm --filter @repo/shadcn-component build
   ```
   - `dist/index.js` 와 `dist/index.d.ts` 그리고 `dist/styles.css` 가 생성됩니다.
3. **소비**
   - 앱 쪽에서는 `import { Button } from "@repo/shadcn-component";`
   - 전역 스타일에 `import "@repo/shadcn-component/dist/styles.css";` 를 추가해 Tailwind 기반 스타일을 함께 로드하세요.

## 참고

- Tailwind 설정은 패키지 내부에서 독립적으로 관리됩니다.
- `src/lib/utils.ts` 의 `cn` 헬퍼는 모든 컴포넌트에서 공통으로 사용됩니다.
- 필요 시 `tailwind.config.ts` 의 `theme.extend` 를 수정해 브랜드 토큰을 반영하세요.

