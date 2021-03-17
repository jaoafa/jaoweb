---
title: WorldGuardの利用解説
description: 建物を保護したり、細く設定をいじれる「WorldGuard」プラグインの利用方法を解説します。
category: modification
image: https://storage.jaoafa.com/f54f2539629b70b8f3d78cc694236081.png
author: tomachi
createdAt: 2018-10-09
updatedAt: 2021-01-03
---

この記事では、建築物を保護したり、その範囲に入ったときにメッセージを表示したりするプラグイン、「**WorldGuard**」の解説をします。

爆新地や各自治体などで、自身が建てた建築物が荒らされたりしないための一つの機能ですから、ぜひ覚えて利用してみてください。

## 目次

<!--contents-->

## 初めに

この記事で解説する内容には、WorldEditで複雑な範囲を選択する方法も含まれています。  
単純な範囲を選択する場合でも、誤って範囲を選択することを防ぐために必ずLiteLoaderのMod「WorldEditCUI」を導入しましょう。

- [WorldEditCUIの導入解説](/blog/worldeditcui_commentary)

この記事では、WorldGuardのリージョン短縮コマンド「`/rg`」を主に使用します。他の関連コマンド「`/region`」・「`/regions`」も使用できますので、必要に応じて読み替えてください。

## 解説環境

- Spigot(Bukkit) 1.12.2
- WorldGuard 6.2.1;84bc322

## 対象読者・事前習得が必要なもの

- WorldEditを用いて簡単・複雑な範囲選択ができること(保護範囲の指定ができること)
- WorldEditの範囲選択権限があること(当サーバであれば[Verified権限](/server/specifications/permission#Verified)以上)

## 必ず覚えておくべきコマンド

まずは、このプラグインを使う上で必ず覚えておいたほうがいいコマンドをいくつか。

### 保護範囲を新規に登録する

保護を新規に登録する時に使用するコマンドは「`/rg claim`」です。  
「`/rg define`」で解説している記事もありますが、自分の土地として登録する場合はclaimで充分です。ちなみにclaimは「請求」、defineは「定義」という意味です。覚えておくとどこかで使えるかも？
defineの場合は保護数とブロック数制限がないみたいです。  
使い方としては以下のような感じです。

1. WorldEditで保護する範囲を指定します。`//expand vert`を実行することで、Y値0～255をすべて選択できます。  
(範囲指定のやり方などは[こちら](/blog/worldedit_commentary)のWorldEdit解説記事で解説しています)
2. 保護名を決めましょう。市の名前、自分の名前、建物の名前など、わかりやすい名前にするのが良いでしょう。
3. 範囲をきちんと指定したことを確認して、コマンド「`/rg claim <保護名>`」と入力し、実行しましょう。保護名に日本語を指定することは出来ません。
4. 「`A new region has been claimed named '保護名'.`」(黄色)と表示されれば成功です。

なお、爆新地(スポーン周辺の自由建築エリア)で保護を新規に登録する場合は、「`/bakushinchi claim <保護名>`」をご利用ください。メンバーやフラグ等の設定は通常の「`/rg`」コマンドを用いて設定することができます。

#### エラー概要

全部を解説しているわけではありません。謎なエラーが発生した場合は[ソースコード](https://github.com/sk89q/WorldGuard/blob/f76259df82a23391f3fa5e062c893d4a1604adeb/worldguard-legacy/src/main/java/com/sk89q/worldguard/bukkit/commands/region/RegionCommands.java)を見る方が正確です。

- `You own too many regions, delete one first to claim a new one.`  
  サーバ側で規定されている作成できる保護数を超えています。既存の保護を削除しましょう。
- `This region already exists and you don't own it.`  
  あなたが所有していない同じ名前の保護があるので、別の名前にしてみましょう。
- `A region with that name already exists. Please choose another name.`  
  あなたが所有している同じ名前の保護があるので、別の名前にしてみましょう。
- `This region overlaps with someone else's region.`  
  選択された範囲は他の地域と重複しているために保護できません。範囲を再度確認してみましょう。
- `This region is too large to claim.`  
  選択された範囲は大きすぎて保護できません。範囲を再度確認してみましょう

### いまいる場所の保護情報を確認する

![保護範囲情報の例](https://storage.jaoafa.com/985fab5ddb9552c019ec92dfd40e55f4.PNG)

保護の範囲に居て、その保護の情報を確認したい場合は「`/rg info`」コマンドを使用しましょう。「`info`」以外にも「`i (/rg i)`」でも同様の機能を利用できます。
自分が保護内にいなくても「`/rg info <保護名>`」で情報を表示することが出来ます。  
表示された「`Region Info`」の内容がその保護の情報です。

- **Region** : 保護名です。かっこ内のtypeは保護時の選択形式、priorityは優先度です
- **Flag** : その保護内で何ができるかを表示しています。フラグについては別に後で解説します。
- **Owners** : その保護のオーナーが表示されています。  
  オーナーは、その保護のオーナー・メンバーを増減できます。もちろん保護内の建築等も行えるようになります。
- **Members** : その保護のメンバーが表示されています。  
  設定に応じて、その保護内で建築等ができるようになります。

### 保護を削除する

保護を削除するには「`/rg remove <保護名>`」コマンドを実行してください。「`remove`」以外にも、「`delete`」「`del`」「`rem`」でも同等の機能を利用できます。  
「`The region named '保護名' has been removed.`」(黄色)と表示されれば、削除は成功です。

#### エラー概要

全部を解説しているわけではありません。謎なエラーが発生した場合は[ソースコード](https://github.com/sk89q/WorldGuard/blob/f76259df82a23391f3fa5e062c893d4a1604adeb/worldguard-legacy/src/main/java/com/sk89q/worldguard/bukkit/commands/region/RegionCommands.java)を見る方が正確です。

- `No region could be found with the name of '保護名'.`  
  指定された保護名の保護は見つかりません。保護はワールドごとに違いますので、きちんと保護をしたワールドで実行してみてください。

### 保護範囲を再設定する

既存の保護の範囲を変更する際に`/rg redefine`コマンドを使用すると作り直すよりもより簡単に範囲を変更できます。  
WorldEditで広げたあとの保護範囲を選択し、`/rg redefine <保護名>`を実行すると保護範囲を再設定できます。

### 保護フラグを設定する

フラグの一覧や、フラグについての解説は別記事で行っております。

- [WorldGuardのフラグ一覧](https://jaoafa.com/blog/minhero_exp/worldguard_flag-list)

### 保護にメンバーを追加する

基本的に、claimで保護を設定した場合、設定者以外はその中で建築等ができなくなります。  
複数人で建築をする場合などは「`/rg addmember <保護名> <MinecraftID>`」と実行して保護にメンバーを追加してください。「`addmember`」以外にも「`rm`」などでも同等の機能を利用できます。  
「`Region '<保護名>' updated with new members.`」(黄色)と表示されれば、追加は成功です。

`<MinecraftID>`に複数のプレイヤーを指定することもできます。例: `/rg addmember <保護名> X4Z mine_book000 Hirotaisou2012`

### 保護からメンバーを削除する

保護からメンバーを削除するには「`/rg removemember <保護名> <MinecraftID>`」を実行してください。「`removemember`」以外にも「`rm`」などでも同等の機能を利用できます。  
「`Region '<保護名>' updated with members removed.`」(黄色)と表示されれば、削除は成功です。

## サーバに導入する場合

WorldEditが前提プラグインになります。  
「`__global__`」はワールド全体にかかる保護になります。フラグ等が指定できますから、これらでデフォルト値を変えることができます。(TNTの爆発禁止など)

- `/rg define <保護名>`を使用することで、**オーナー無しで保護をかける**ことができます。
  もちろん、`/rg define <保護名> <プレイヤー名>`で指定したプレイヤーをオーナーにした保護をかけることができます。
- `/rg select <保護名>`で保護範囲をWorldEditで選択できます。正直、使い道が思いつきません。
- [WorldGuard Extra Flags](https://www.spigotmc.org/resources/worldguard-extra-flags.4823/)プラグインを導入することで、フラグの数を増やしより細かく設定できるようになります。
- `/rg setpriority`で保護の優先度を設定します。
- `/rg setparent <保護名> <親となる保護名>`で保護の「親」を設定できます。自治体の中に地域を作るときなど、「保護の中に保護を設定し、設定をオーバーライド(上書き)する場合などに保護に親を設定するとやりやすくなります。
- `/rg teleport <保護名>`で保護の場所にテレポートできます。不審な保護等を見つけた場合に使えるでしょう。

## 免責等

- ブログ記事作成者及び当サービス「jao Minecraft Server」では、この記事に記載された内容を行ったことによる問題への**一切の責任を負いません。** 何かを試したり、やってみたりするときには必ず「**自己責任**」を念頭に。
- また、多くの記事は時間を追うことに情報が古くなります。仕様が変わっていたり、そもそも無くなっている可能性もありえるということを覚えておいてほしいです。
- 「どうしたらいいのだろう？」などと疑問が発生した場合は[Discord](community/discord)の`#question`チャンネルにて質問してみましょう。
