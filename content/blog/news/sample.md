---
title: "ブログ記事サンプル"
category: "お知らせ"
author:
   name: "Hiratake"
   uuid: "39cf878b-ef0b-44fc-a2c6-de3d540a4728"
image: "http://localhost:3000/img/main-visual.jpg"
createdAt: 2020-12-13
updatedAt: 2020-12-14
---

これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。これはサンプルテキストです。

<!--more-->

## 見出し

上の見出しは「H2」の見出しです。これは、記事内で使用することができる見出しの中で最上位のものとなります。Markdownで記述する場合は、文頭に `##` を付けてください。 `##` のすぐ後には半角スペースが必要です。

```markdown
## Heading
```

「H1」は `#` を付けることで使用することができますが、こちらは記事のタイトル部分に使用しているため使わないようにしてください。「H1」はページ内に1つだけという決まりがあるためです。

### H3

「H3」は、記事内で使用することができる見出しの中で2番目にレベルの高い見出しです。Markdownで記述する場合は、文頭に `###` を付けてください。 `###` のすぐ後には半角スペースが必要です。

```markdown
### Heading
```

目次に表示されるのは「H3」までとなります。

#### H4

「H4」は、記事内で使用することができる見出しの中で3番目にレベルの高い見出しです。Markdownで記述する場合は、文頭に `####` を付けてください。 `####` のすぐ後には半角スペースが必要です。

```markdown
#### Heading
```

「H4」は、目次には表示されませんのでご注意ください。

##### H5

「H5」は、記事内で使用することができる見出しの中で4番目にレベルの高い見出しです。Markdownで記述する場合は、文頭に `#####` を付けてください。 `#####` のすぐ後には半角スペースが必要です。

```markdown
##### Heading
```

「H5」は、目次には表示されませんのでご注意ください。

###### H6

「H6」は、記事内で使用することができる見出しの中で最下位のものとなります。。Markdownで記述する場合は、文頭に `######` を付けてください。 `######` のすぐ後には半角スペースが必要です。

```markdown
###### Heading
```

この見出しを使うことは、余程のことがない限りは無いと思います。使う必要が出てきた場合は、本当に見出しが必要なのか、別の記事に分けたほうがよいのではないかなど、一度全体を見直すことをおすすめします。

「H6」は、目次には表示されませんのでご注意ください。

## テキスト装飾

文章中の一部の文字を太字にするなど、装飾をすることができます。

### 太字
Strong emphasis, aka bold, with **asterisks** or __underscores__.

### イタリック
Emphasis, aka italics, with *asterisks* or _underscores_.

Combined emphasis with **asterisks and _underscores_**.

### 取り消し線

Strikethrough uses two tildes. ~~Scratch this.~~

## リンク

これは [外部リンク](https://jaoafa.com/) です。ドメインを省略せずに記述すると、クリックして移動する際に別タブで開くようになります。記述方法は以下の通りです。

```markdown
[外部リンク](https://jaoafa.com/)
```

これは [内部リンク](/) です。同じドメインのページへのリンクは、ドメイン部分を省略することができます。ドメイン部分を省略して記述すると、クリックして移動した際の読み込みが少し速くなるようになっています（事前に移動先の情報を取得しているため）。記述方法は以下の通りです。

```markdown
[内部リンク](/)
```

[リンク](https://jaoafa.com/ "jao Minecraft Server ウェブサイト")にカーソルを合わせた際に表示されるテキストを設定することもできます。

```markdown
[リンク](https://jaoafa.com/ "jao Minecraft Server ウェブサイト")
```

## リスト

リストには「順序なしリスト」と「順序付きリスト」が存在します。

### 順序なしリスト
- リスト1
- リスト2
  - リスト2-1
- リスト3

`*` や `+` を文頭に付けることでもリストを使用することができます。

* リスト1

+ リスト1

### 順序付きリスト

1. First ordered list item
2. Another item
   1. Unordered sub-list.
3. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
4. And another item.

## 画像

![画像](/img/main-visual.jpg)

## コードブロック

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

```html
<script>
  alert('xss');
</script>
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

文章中に `短いコード` を入れることもできます。

```markdown
文章中に `短いコード` を入れることもできます。
```

## 表

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned |  |
| col 2 is      | centered      |    |
| zebra stripes | are neat      |     |

The outer pipes (|) are optional, and you don't need to make the raw `Markdown` line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

## 引用

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

## 水平線

Three or more...

---

Hyphens

***

Asterisks

___

Underscores
