---
title: WorldEditCUIの導入解説
description: WorldEditの選択範囲を可視化する「WorldEditCUI」Modの導入方法と、簡単な使用方法を解説しています。
category: modification
image: https://storage.jaoafa.com/f54f2539629b70b8f3d78cc694236081.png
author: tomachi
createdAt: 2018-05-02
updatedAt: 2021-01-03
---

当サーバでは、[WorldEdit](/blog/worldedit_commentary)の使用時に選択範囲をミスらないようにするためにWorldEditCUIの導入をお勧めしています。  
この記事ではその「**WorldEditCUI**」の導入方法を解説します。

## 目次

<!--contents-->

## 解説環境

以下の環境で解説します。他の環境・バージョンの場合は違う点もあるかもしれませんので、適量読み替えてください。

- Windows 10
- Minecraft Version 1.12.2
- Minecraft Forge 1.12.2 14.23.3.2655
- Java 1.8.0_171
- LiteLoader 1.12.2 snapshot
- WorldEditCUI 1.12.1_00
- ゲームディレクトリ: `C:\Users\USER\AppData\Roaming\\.minecraft\GameDirectory\1.12.2_forge` (`%appdata%\\.minecraft\GameDirectory\1.12.2_forge`)
- すでに一度以上起動しており、ファイル・フォルダを生成している

## やり方

### 1. Forgeを導入しましょう

**※Forgeを導入している場合はこの項は必要ありません。**

- [Forgeの導入解説](/blog/forge_commentary)

上記解説を見ながら、Forgeを導入しましょう。

### 2. LiteLoaderを導入しましょう

**※LiteLoaderを導入している場合はこの項は必要ありません。**

- [LiteLoaderの導入解説](/blog/liteloader_commentary)

上記解説を見ながら、LiteLoaderを導入しましょう。

### 3. WorldEditCUIをダウンロードしましょう

![WorldEditCUIのダウンロードサイト](https://storage.jaoafa.com/ca4250b7acd56625804c7a86c9d7bed7.png)

[Minecraft ForumのWorldEditCUIページ](https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/minecraft-mods/1292886-worldeditcui)の「**downloads**」内にある「**Download 1.12.1_00 for minecraft 1.12.1 requires liteloader**」をクリックし、ダウンロードしましょう。  
1.12.2に導入する場合でも、今のところ**1.12.1バージョンを導入していて特に問題は発生していない**ので多分大丈夫だと思います。

### 4. ダウンロードしたフォルダをModsファイルに移動させましょう

![ファイルをModsフォルダへ移動](https://storage.jaoafa.com/d74eb9618437b84326bf84c441ddf370.png)

WindowsキーとRキーを同時に押すと、左下に入力窓が出現するのでそこに「``%appdata%\\.minecraft``」と入力して実行してください。  
するとファイルが開かれるので、入れたいバージョンの「**mods**」フォルダに、ダウンロードしたWorldEditCUIのファイルをドラックアンドドロップなどで移動してください。

執筆時のファイル名は「mod_worldeditcui_1.12.1_01_lite_mc1.12.1.litemod」でした。

### 5. Minecraftを起動しましょう

![導入を確認](https://storage.jaoafa.com/524b93d0dd65d6f0a08901f3c28d8ca8.jpg)

LiteLoaderの情報画面を開き、きちんと**WorldEditCUIがActive**になっていれば成功です。

## 実際に使ってみましょう

当サーバで、WorldEditの使用は[Verified権限](/server/specifications/permission#Verified)からとなっています。

今回の解説では、**疑似的にクリック動作をする部分を各種コンクリートブロックにしていますが、実際に使用する場合はコンクリートブロックを置く必要はなく、既存のブロックを木の斧でクリックするだけで動作します。**

### 単純な範囲指定をする(2点指定式)

![WorldEditの範囲選択(2点指定式)](https://storage.jaoafa.com/5f16806d5de1fa1ff90bdd17557cac61.jpg)

画像の「<span style="color: mediumseagreen;">緑のコンクリートブロック</span>」を木の斧で**左クリック**(First position)、「<span style="color: red;">赤のコンクリートブロック</span>」を木の斧で**右クリック**(Second position)すると、画像のように赤い線で範囲指定された範囲が視覚的に確認できます。  
選択を解除するには「`//sel`」と入力します。

### 複雑な範囲指定をする(ポリゴン指定式)

![WorldEditの範囲指定(ポリゴン指定式)](https://storage.jaoafa.com/834faf45b98fdb6178ca9d357a557b99.jpg)

画像のように複雑な範囲指定をする場合は、「`//sel poly`」とコマンドを入力したあと、「<span style="color: red;">赤のコンクリートブロック</span>」を木の斧で**左クリック**し、その後他の「<span style="color: mediumseagreen;">緑のコンクリートブロック</span>」を木の斧で**右クリック**していけば、画像のように視覚的に確認できます。

Y軸にも範囲指定をする場合は、最初の「<span style="color: red;">赤のコンクリートブロック</span>」の位置を上下させてY軸を調整してください。
通常の2点指定式に戻す場合は「`//sel cuboid`」とコマンドを入力してください。

## 免責等

- ブログ記事作成者及び当サービス「jao Minecraft Server」では、この記事に記載された内容を行ったことによる問題への**一切の責任を負いません。** 何かを試したり、やってみたりするときには必ず「**自己責任**」を念頭に。
- また、多くの記事は時間を追うことに情報が古くなります。仕様が変わっていたり、そもそも無くなっている可能性もありえるということを覚えておいてほしいです。
- 「どうしたらいいのだろう？」などと疑問が発生した場合は[Discord](community/discord)の`#question`チャンネルにて質問してみましょう。
