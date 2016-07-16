# Holybible

holybible app

```
{
	VERSION: [
		{ "name": NAME, "type": TYPE, "chapterCount": COUNT, "verse": [] },
		...
		{ "name": NAME, "type": TYPE, "chapterCount": COUNT, "verse": [] }
	],
}
```
- VERSION: 성경버전 (GAE, NIV 등)
- TYPE: 신구약 (old, new)
- NAME: 책 이름 (창세기, 출애굽기 등)
- COUNT: verse의 개수. verse를 로드하기 전에 count를 알아야 하는 경우도 있다.
