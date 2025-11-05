---
title: Fuwariの簡単ガイド
published: 2024-04-01
description: "このブログテンプレートの使用方法。"
image: "./cover.jpeg"
tags: ["Fuwari", "ブログ", "カスタマイズ"]
category: ガイド
draft: false
---

> カバー画像の出典: [Source](https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg)

このブログテンプレートは[Astro](https://astro.build/)で構築されています。このガイドに記載されていない内容については、[Astroドキュメント](https://docs.astro.build/)で回答を見つけることができるでしょう。

## 投稿のフロントマター

```yaml
---
title: 私の最初のブログ投稿
published: 2023-09-09
description: これは私の新しいAstroブログの最初の投稿です。
image: ./cover.jpg
tags: [Foo, Bar]
category: フロントエンド
draft: false
---
```

| 属性          | 説明                                                                                                                                                                                                         |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | 投稿のタイトル。                                                                                                                                                                                             |
| `published`   | 投稿が公開された日付。                                                                                                                                                                                       |
| `description` | 投稿の短い説明。インデックスページに表示されます。                                                                                                                                                           |
| `image`       | 投稿のカバー画像のパス。<br/>1. `http://`または`https://`で始まる: ウェブ画像を使用<br/>2. `/`で始まる: `public`ディレクトリ内の画像<br/>3. プレフィックスなし: markdownファイルからの相対パス |
| `tags`        | 投稿のタグ。                                                                                                                                                                                                 |
| `category`    | 投稿のカテゴリ。                                                                                                                                                                                             |
| `draft`        | この投稿がまだドラフトの場合、表示されません。                                                                                                                                                               |

## 投稿ファイルの配置場所



投稿ファイルは`src/content/posts/`ディレクトリに配置する必要があります。投稿とアセットをより適切に整理するために、サブディレクトリを作成することもできます。

```
src/content/posts/
├── post-1.md
└── post-2/
    ├── cover.png
    └── index.md
```
