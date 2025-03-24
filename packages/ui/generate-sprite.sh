#!/bin/bash

# sprite 아이콘 생성
# 실행 방법: ui 경로에서 ./generate-sprite.sh

# 입력 및 출력 경로 설정
ICONS_DIR="./src/sprite-icons"
OUTPUT_SVG="./public/sprite.svg"
OUTPUT_TS="./src/components/base/Icon/iconIdList.ts"

# 아이콘 폴더 존재 확인
if [ ! -d "$ICONS_DIR" ]; then
  echo "⚠️ 아이콘 폴더($ICONS_DIR)가 없습니다."
  exit 1
fi

# 아이콘 리스트 생성
ICON_LIST=()

# SVG 헤더 추가
echo '<!-- Auto-generated file -->' > "$OUTPUT_SVG"
echo '<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">' >> "$OUTPUT_SVG"

# 각 SVG 파일을 <symbol>로 변환하여 sprite.svg에 추가
for file in "$ICONS_DIR"/*.svg; do
  if [ -f "$file" ]; then
    filename=$(basename -- "$file")
    id="${filename%.*}"  # 확장자 제거하여 id 생성

    # viewBox 가져오기 (없으면 기본값 적용)
    viewBox=$(grep -o 'viewBox="[^"]*"' "$file" | head -n 1)
    if [ -z "$viewBox" ]; then
      viewBox='viewBox="0 0 24 24"'
    fi

    # SVG 내용 수정: fill="none"을 제외한 다른 fill 속성을 fill="currentColor"로 변경
    svg_content=$(cat "$file")
    svg_content=$(echo "$svg_content" | sed 's/fill="\([^"]*[^none]\)"/fill="currentColor"/g')

    # <symbol>에 SVG 내용을 삽입
    echo "  <symbol id=\"$id\" $viewBox>$svg_content</symbol>" >> "$OUTPUT_SVG"

    # ICON_LIST에 아이콘 추가
    ICON_LIST+=("$id")
  fi
done

# SVG 닫기
echo '</svg>' >> "$OUTPUT_SVG"

# TypeScript 파일 생성 (아이콘 목록만 포함)
echo "// Auto-generated file" > "$OUTPUT_TS"
echo "export const iconIdList = [" >> "$OUTPUT_TS"
for icon in "${ICON_LIST[@]}"; do
  echo "  '$icon'," >> "$OUTPUT_TS"
done
echo "] as const;" >> "$OUTPUT_TS"

echo "✅ sprite.svg와 iconIdType.ts 생성 완료!"