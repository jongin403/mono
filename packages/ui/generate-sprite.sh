#!/bin/bash

# sprite 아이콘 생성
# 실행 방법: ui 경로에서 ./generate-sprite.sh

# 입력 및 출력 경로 설정
ICONS_DIR="./src/sprite-icons"
OUTPUT_FILE="./public/sprite.svg"

# 아이콘 폴더 존재 확인
if [ ! -d "$ICONS_DIR" ]; then
  echo "⚠️ 아이콘 폴더($ICONS_DIR)가 없습니다."
  exit 1
fi

# SVG 헤더 추가
echo '<!-- Auto-generated file -->' > "$OUTPUT_FILE"
echo '<svg xmlns="http://www.w3.org/2000/svg" style="display:none;">' >> "$OUTPUT_FILE"

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

    # # <symbol>에 SVG 내용을 삽입
    svg_content=$(cat "$file")
    echo "  <symbol id=\"$id\" $viewBox>$svg_content</symbol>" >> "$OUTPUT_FILE"
  fi
done

# SVG 닫기
echo '</svg>' >> "$OUTPUT_FILE"

echo "✅ sprite.svg 생성 완료 (${ICONS_DIR} 내 아이콘 병합)"