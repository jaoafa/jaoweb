---
title: LiteLoaderの導入解説
description: WorldEditCUIなどの前提Modとなる「LiteLoader」の導入方法を解説します。
category: modification
image: https://storage.jaoafa.com/f54f2539629b70b8f3d78cc694236081.png
author: tomachi
createdAt: 2018-05-02
updatedAt: 2021-01-03
---

この記事では、[WorldEditCUI](/blog/worldeditcui_commentary)などの前提Modとなる「**LiteLoader**」の導入方法などを解説します。

#### 目次

<!--contents-->

## 解説環境

以下の環境で解説します。他の環境・バージョンの場合は違う点もあるかもしれませんので、適量読み替えてください。

- Windows 10
- Minecraft Version 1.12.2
- Minecraft Forge 1.12.2 14.23.3.2655
- Java 1.8.0_171
- LiteLoader 1.12.2 snapshot EXEバージョン
- ゲームディレクトリ: `C:\Users\USER\AppData\Roaming\\.minecraft\GameDirectory\1.12.2_forge` (`%appdata%\\.minecraft\GameDirectory\1.12.2_forge`)
- すでに一度以上起動しており、ファイル・フォルダを生成している

## 導入方法

### 1. Forgeを導入しましょう

**※Forgeを導入している場合はこの項は必要ありません。**

- [Forgeの導入解説](/blog/forge_commentary)

上記解説を見ながら、Forgeを導入しましょう。

### 2. LiteLoaderをダウンロードしましょう

まずは、[LiteLoaderのダウンロードサイト](https://www.liteloader.com/download)にアクセスしましょう。

![LiteLoaderのダウンロードサイト](https://storage.jaoafa.com/15e8e1d2518319acc7e432bc0bb1fee9.jpg)

中央の「**choose a major version to see downloads:**」の下から「**1.12**」(①)を選び、「**1.12.2**」をクリックしましょう。(②)

---

![LiteLoaderのダウンロード](https://storage.jaoafa.com/364b131b4a3d02797c5f6eb2299165a7.jpg)

上のような画面になったら「**Download EXE**」の方をクリックし、インストーラをダウンロードしましょう。

### 3. LiteLoaderのjarファイルを生成しましょう

![LiteLoaderのダウンロード2](https://storage.jaoafa.com/ba2369125779824ac497c1ed97eea9f5.jpg)

![ダウンロード先を指定](https://storage.jaoafa.com/570c612bba958612b9b935d3354b7bf3.png)
「select installation action」の画面になったら、「**Extract LiteLoader jar**」を選び(①)、「Choose the minecraft directory for installation/extraction」の欄(②)を**デスクトップ**(③)に変更してください。(④)

もちろん、**デスクトップでなくてもいいです**が、一時的に保存先を指定し、後で移動させてしまうものなので簡単にデスクトップに吐き出させるのが適当かと思います。

「Extract successfully」と出たら成功です。

### 4. デスクトップにあるjarファイルをModフォルダに移動しましょう

![jarファイルをmodsへ移動](https://storage.jaoafa.com/0f08d3778c3c371a9a992ebc9d258477.jpg)

WindowsキーとRキーを同時に押すと、左下に入力窓が出現するのでそこに「``%appdata%\\.minecraft``」と入力して実行してください。  
するとファイルが開かれるので、入れたいバージョンの「**mods**」フォルダに、3で生成したLiteLoaderのjarファイルをドラックアンドドロップなどで移動してください。


### 5. LiteLoaderが動作しているか確認しましょう

![導入されている確認する](https://storage.jaoafa.com/94c81bbb1ad1a44fc4dd57d47288d822.jpg)

起動後に右上あたりになんか付箋のようなものが飛び出ているか確認しましょう。

そこをクリックすると以下のようにLiteLoaderの情報が表示されれば成功です。

![導入されているか確認する2](https://storage.jaoafa.com/ce1bd87bf53a7ba74f59cb1b73fdeb12.jpg)

(2枚目の画像が英語化されているのは、1枚目をメインで使用しているクライアント画面で撮影してしまったためです…別にあまり変わらないので気にしないでください。)

### 5. LiteLoaderに対応したModを導入してみましょう

LiteLoaderに対応したModを導入する場合、できる限りmodsフォルダに生成されるバージョン名(1.12.2等)のバージョンフォルダに入れたほうがよさそうです。(LiteLoaderが生成しているフォルダですし)  
LiteLoaderに対応したModは**拡張子が「litemod」のファイル**です。

[LiteLoaderの公式サイト](http://www.liteloader.com/mods)からModを探したり、他サイトなどで解説されているModを導入して楽しみましょう。

## 免責等

- ブログ記事作成者及び当サービス「jao Minecraft Server」では、この記事に記載された内容を行ったことによる問題への**一切の責任を負いません。** 何かを試したり、やってみたりするときには必ず「**自己責任**」を念頭に。
- また、多くの記事は時間を追うことに情報が古くなります。仕様が変わっていたり、そもそも無くなっている可能性もありえるということを覚えておいてほしいです。
- 「どうしたらいいのだろう？」などと疑問が発生した場合は[Discord](community/discord)の`#question`チャンネルにて質問してみましょう。
