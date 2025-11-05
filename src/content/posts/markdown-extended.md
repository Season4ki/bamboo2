---
title: Markdown拡張機能
published: 2024-05-01
updated: 2024-11-29
description: 'FuwariのMarkdown機能について詳しく読む'
image: ''
tags: [デモ, 例, Markdown, Fuwari]
category: '例'
draft: false 
---

## GitHubリポジトリカード
GitHubリポジトリにリンクする動的なカードを追加できます。ページの読み込み時に、リポジトリ情報がGitHub APIから取得されます。

::github{repo="Fabrizz/MMM-OnSpotify"}

コード`::github{repo="<owner>/<repo>"}`でGitHubリポジトリカードを作成します。

```markdown
::github{repo="saicaca/fuwari"}
```

## 注意書き

以下の種類の注意書きがサポートされています：`note` `tip` `important` `warning` `caution`

:::note
流し読みする場合でも、ユーザーが考慮すべき情報をハイライトします。
:::

:::tip
Optional information to help a user be more successful.
:::

:::important
Crucial information necessary for users to succeed.
:::

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

:::caution
Negative potential consequences of an action.
:::

### Basic Syntax

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

### Custom Titles

The title of the admonition can be customized.

:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::

```markdown
:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::
```

### GitHub Syntax

> [!TIP]
> [The GitHub syntax](https://github.com/orgs/community/discussions/16925) is also supported.

```
> [!NOTE]
> The GitHub syntax is also supported.

> [!TIP]
> The GitHub syntax is also supported.
```

### Spoiler

You can add spoilers to your text. The text also supports **Markdown** syntax.

The content :spoiler[is hidden **ayyy**]!

```markdown
The content :spoiler[is hidden **ayyy**]!

```