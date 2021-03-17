---
title: WorldGuardのフラグ一覧
description: 「WorldGuard」プラグインの「フラグ」について、一覧や利用方法を解説します。
category: modification
image: https://storage.jaoafa.com/f54f2539629b70b8f3d78cc694236081.png
author: ekipa
createdAt: 2020-10-17
updatedAt: 2021-01-03
---

この記事では、WorldGuardの機能の一つである「**フラグ**」の一覧や使い方を記載しています。  
WorldGuardの解説記事は以下からをご覧ください。

- [WorldGuardの利用解説](/blog/worldguard_commentary)

## フラグについて

保護には「フラグ」という、その保護内での行動を制限したり、保護内に入ったときや出たときにメッセージを出すという機能を付与することができます。

### フラグを操作する

コマンドは「`/rg flag <保護名> <フラグ名> <設定値>`」です。「`flag`」だけでなく、「`f`」でも同様の機能を利用できます。  
追加に成功すると、`Region flag <フラグ名> set on '<保護名>' to '<設定値>'`と表示されます。  

### 特定のフラグを削除する

特定のフラグを削除する場合は「`/rg flag <保護名> <フラグ名>`」です。

### 設定値とは

設定値にある、`allow`は**許可**、`deny`は**不許可**となっています。  

## フラグの一覧

ほぼ全てのフラグを記載します。

### 保護系

|フラグ名|機能|設定値|初期設定|
|:-|:-|:-|:-|
|passthrough|すべての行動|allow<br>deny|
|build|ブロックの設置・破壊|allow<br>deny|deny|
|interact|"使用"に関する全て|allow<br>deny||
|block-break|ブロックの破壊|allow<br>deny||
|block-place|ブロックの設置|allow<br>deny||
|use|ドアやレバーの使用|allow<br>deny</br>|allow|
|damage-animals|友好な動物へのダメージ|allow<br>deny||
|chest-access|チェストの使用|allow<br>deny||
|ride|エンティティに乗る|allow<br>deny||
|pvp|プレイヤー同士の攻撃|allow<br>deny||
|sleep|ベッドでの睡眠|allow<br>deny||
|tnt|TNTによる爆破・破壊|allow<br>deny|deny|
|vehicle-place|トロッコ・ボートの設置|allow<br>deny|allow|
|vehicle-destroy|トロッコ・ボートの破壊|allow<br>deny|allow|
|lighter|火打石と打ち金の使用|allow<br>deny|deny|
|firework-damage|花火によるダメージ|allow<br>deny||
|fire-spread|火が燃え広がるかどうか|allow<br>deny|
|entity-<br>painting-</br>destroy</br>|絵画の破壊|allow<br>deny|
|entity-<br>item-frame-</br>destroy</br>|額縁の破壊|allow<br>deny|deny (pl)|

### モブによる干渉系

|フラグ名|機能|設定値|
|:-|:-|:-|
|mob-damage|Mobによるダメージ|allow<br>deny|
|mob-spawning|Mobのスポーン|allow<br>deny|
|deny-spawn|指定したMobのスポーンを禁止|Mobの名称|
|other-explosion|その他の爆破によるダメージ|allow<br>deny|
|creeper-<br>explosion</br>|クリーパーの爆破によるダメージ|allow<br>deny|
|enderdragon-<br>block-damage</br>|エンダードラゴンによるブロックダメージ|allow<br>deny|
|ghast-fireball|ガスとの火の玉による破壊・ダメージ|allow<br>deny|
|enderman-grief|エンダーマンによるブロック干渉|allow<br>deny|
|wither-damage|ウィザーによるダメージ<br>(爆破攻撃についてはghast-fireballによって処理されます)</br>|allow<br>deny|

### 自然現象系

|フラグ名|機能|設定値|初期設定|
|:-|:-|:-|:-|
|lava-fire|溶岩による発火|allow<br>deny|deny (pl)|
|lightning|雷が落ちる|allow<br>deny||
|water-flow|水の拡散？|allow<br>deny||
|lava-flow|溶岩の拡散？|allow<br>deny||
|snow-fall|雪が積もる|allow<br>deny||
|snow-melt|雪が解ける|allow<br>deny||
|ice-form|水が凍って氷になる<br>(一部バイオームのみ)</br>|allow<br>deny||
|ice-melt|氷が解けて水になる|allow<br>deny||
|mushroom-growth|キノコの成長|allow<br>deny||
|leaf-decay|葉ブロックが自然に壊れるか|allow<br>deny||
|grass-growth|草の成長|allow<br>deny||
|mycelium-spread|菌糸が周りの土に広がる|allow<br>deny||
|vine-growth|ツタの成長|allow<br>deny||
|soil-dry|耕地が乾いて土に変化する|allow<br>deny|deny|

### プレイヤーの行動系

|フラグ名|機能|設定値|
|:-|:-|:-|
|greeting|保護範囲内に入ったときに<br>チャット欄に通知する<br>(本人のみ)|メッセージ|
|farewell|保護範囲内から出たときに<br>チャット欄に通知する<br>(本人のみ)|メッセージ|
|deny-message|行動が拒否された時に表示する|メッセージ|
|enderpearl|エンダーパールの使用|allow<br>deny|
|chorus-fruit-<br>teleport</br>|コーラスフルーツを<br>食べてテレポートする|allow<br>deny|
|spawn|プレイヤーが保護範囲内で<br>死亡したら指定の場所に<br>スポーンする|座標|
|entry|保護範囲内に入る|allow<br>deny|
|exit|保護範囲内から出る<br>(利用非推奨)</br>|allow<br>deny|
|exit-via-teleport|保護範囲内からテレポートで出る<br>(利用非推奨)</br>|allow<br>deny|
|item-pickup|アイテムを拾う|allow<br>deny|
|item-drop|アイテムを捨てる|allow<br>deny|
|exp-drops|経験値が落ちる|allow<br>deny|
|invincible|無敵|allow<br>deny|
|fall-damage|落下ダメージ|allow<br>deny|
|game-mode|保護範囲内に入るプレイヤーに<br>適用されるゲームモード|ゲームモード|
|time-lock|保護範囲内の時間|0～24000|
|weather-lock|保護範囲内の天気|<br>晴れ: clear<br>雨・雪: downfall<br>dedrainを無視します|

### その他

|フラグ名|機能|設定値|
|:-|:-|:-|
|pistons|ピストンの動作|allow<br>deny|
|send-chat|チャットの送信<br>(利用非推奨)|allow<br>deny|
|receive-chat|チャットの受信<br>(利用非推奨)|allow<br>deny|
|potion-splash|スプラッシュポーションの効果|allow<br>deny|

## 参考資料

- 参考: [Region Flags - WorldGuard 7.0 documentation](https://worldguard.enginehub.org/en/latest/regions/flags/) (英語)

## 免責等

- ブログ記事作成者及び当サービス「jao Minecraft Server」では、この記事に記載された内容を行ったことによる問題への**一切の責任を負いません。** 何かを試したり、やってみたりするときには必ず「**自己責任**」を念頭に。
- また、多くの記事は時間を追うことに情報が古くなります。仕様が変わっていたり、そもそも無くなっている可能性もありえるということを覚えておいてほしいです。
- 「どうしたらいいのだろう？」などと疑問が発生した場合は[Discord](community/discord)の`#question`チャンネルにて質問してみましょう。
