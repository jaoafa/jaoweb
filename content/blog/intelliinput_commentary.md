---
title: IntelliInputの導入解説
description: Minecraft内で簡単に日本語を入力できるようにする「IntelliInput」の導入方法を解説します。
category: modification
image: https://storage.jaoafa.com/685977f8da2b943b0ae34a2dd6081df7.png
author: tomachi
createdAt: 2018-05-20
updatedAt: 2021-01-03
---

## 目次

<!--contents-->

## 解説環境

以下の環境で解説します。他の環境・バージョンの場合は違う点もあるかもしれませんので、適量読み替えてください。

- Windows 10
- Minecraft Version 1.12.2
- Minecraft Forge 1.12.2 14.23.3.2655
- Java 1.8.0_171
- IntelliInput 2.6 for 1.12.2 (IntelliInput-2.6-for1.12.2.jar)
- ゲームディレクトリ: `C:\Users\USER\AppData\Roaming\.minecraft\GameDirectory\1.12.2_forge` (`%appdata%\\.minecraft\GameDirectory\1.12.2_forge`)
- すでに一度以上起動しており、ファイル・フォルダを生成している

## 注意等

1.9から、バニラの状態でも日本語を入力できるようになっているようです。しかし、その方法で入力すると以下の問題が発生します。

- いちいちIMEの入力方式をかえる必要がある
- 入力後にEnterを2回押す必要がある
- 画像のように文字が本来のチャット欄に表示されない(小窓に表示される)
![小窓に表示される入力欄](https://storage.jaoafa.com/660b5ab0c627d939f778682cacfc6017.jpg)

以上のような問題があるので、あまりお勧めはしておりません。MCJPISS2というソフトウェアで疑似的に入力する方法もありますが、看板とかが使えなかったような気がするので(未検証)、Modを入れられるならいれたほうが良いと考えます。

## 競合に関して

### OptiFine

OptiFineを導入している場合、以下のバージョンにおいて**動作しない**という情報があります。

- Optifine 1.12.2 HD U E3
- OptiFine 1.12.2 HD U E2
- OptiFine 1.12.2 HD U E1
- OptiFine 1.12.2 HD U D3
- OptiFine 1.12.2 HD U D2
- OptiFine 1.12.2 HD U D1
- OptiFine 1.12.2 HD U C9

### SignPicture

SignPictureとIntelliInputの共存は**できません**。ログイン時に`Internal Exception: java.lang.NoClassDefFoundError: net/minecraft/client/gui/GuiScreenBook`のエラーが発生します。

## 導入方法

### 1. Forgeを導入しましょう

**※Forgeを導入している場合はこの項は必要ありません。**  

- [Forgeの導入解説](/blog/forge_commentary)  

上記解説を見ながら、Forgeを導入しましょう。

### 2. IntelliInputをダウンロードしましょう

![IntelliInputのダウンロードページ](https://storage.jaoafa.com/f6c8eda667b65a2dc1f6a246829baa66.jpg)

[IntelliInputのダウンロードページ](http://mcc.mcsv.jp/IntelliInput/Download)から、1.12.2のバージョンをダウンロードしましょう。

執筆当時のファイル名は`IntelliInput-2.6-for1.12.2.jar`でした。

### 3. jarファイルをModsフォルダに移動しましょう

![jarファイルをModフォルダに移動](https://storage.jaoafa.com/60bdba7562f78eca6bc503a87eb1a8b7.jpg)  

WindowsキーとRキーを同時に押すと、左下に入力窓が出現するのでそこに「``%appdata%\\.minecraft``」と入力して実行してください。  
するとファイルが開かれるので、入れたいバージョンの「**mods**」フォルダに、ダウンロードしたjarファイルをドラックアンドドロップなどで移動してください。

### 4. IntelliInputが動作しているか確認しましょう

![タイトル画面の「Mod」をクリック](https://storage.jaoafa.com/160b2560e7aea5fbc21f0ebfb4c62476.jpg)

![導入を確認](https://storage.jaoafa.com/0e2c58560e876cc992fc3cb3f8a67eb0.jpg)
ゲームを起動し、左下にある「Mod」をクリックし、IntelliInput for 1.12.2が表示されているかどうか確認してみてください。

### 5. 日本語が入力できるか確認しましょう

![導入をチャット欄で確認](https://storage.jaoafa.com/5461a05a30e08adf0ef47994b8e32fc0.jpg)

チャット欄で日本語が入力できたら成功です。

---

![小窓に表示される入力欄](https://storage.jaoafa.com/660b5ab0c627d939f778682cacfc6017.jpg)

しかし、画像のように日本語を入力しても左上に出るようであれば、導入に成功していません。

## 免責等

- ブログ記事作成者及び当サービス「jao Minecraft Server」では、この記事に記載された内容を行ったことによる問題への**一切の責任を負いません。** 何かを試したり、やってみたりするときには必ず「**自己責任**」を念頭に。
- また、多くの記事は時間を追うことに情報が古くなります。仕様が変わっていたり、そもそも無くなっている可能性もありえるということを覚えておいてほしいです。
- 「どうしたらいいのだろう？」などと疑問が発生した場合は[Discord](community/discord)の`#question`チャンネルにて質問してみましょう。
