---
title: HDD破損によるMinecraftサーバおよびその他サービスの一時停止について
category: news
image: https://storage.jaoafa.com/f54f2539629b70b8f3d78cc694236081.png
author: tomachi
createdAt: 2020-12-17
updatedAt: 2020-12-21
---

公式Discordサーバにおいて事前にお知らせしておりましたが、ワールドデータの破損が相次いでおりましたがついにHDDの破損が認められ、サービスを停止せざるを得なくなりました。  
つきましては、2020/12/16 0時より緊急メンテナンスを実施します。

<!--more-->

## 目次

<!--contents-->

## メンテナンス終了のお知らせ

2020/12/21 21:25をもって緊急メンテナンスを終了しました。

## 期間

2020/12/16 00:00 〜 未定 (2020/12/20頃迄予定)

HDD破損という割と面倒な状況の為、終了日時を確定できません。システムを再構築するだけではあるのですが…。

## 停止するサービス

- Minecraftメインサーバ
- DiscordBot(jaotan)の一部(Javajaotanが受け持つコマンド・機能)
  - 次の`/`から始まるコマンド: `akakese`, `alpha`, `approvalcity`, `bassline`, `blmap`, `blmaplb`, `blookup`, `chat`, `dice`, `discordlink`, `gentext`, `getatama`, `help`, `javajaotan`, `kogo`, `link`, `listening`, `mcbans`, `mute`, `origin`, `playing`, `potato`, `powa`, `recid`, `setnick`, `setnickatama`, `subaccount`, `super`, `tmttmt`, `toen`, `toenja`, `toese`, `toja`, `tojaen`, `tokanji`, `toswja`, `towakati`, `toyomi`, `tozh`, `tozhja`, `tweet`, `typo`, `user`, `votenotify`, `watching`など
  - 次のチャンネル機能: `#jaochat`など (`#greeting`および`#nsfw`のチャンネル機能は別のシステムで最低限対応します)
- [jao Minecraft Server API](https://api.jaoafa.com/)の一部

[jao Minecraft ServerのWebサイト](https://jaoafa.com/)、[jaopedia](https://wiki.jaoafa.com/)はメンテナンス期間中もサービス提供を継続します。  
また、補助サービスの停止に伴い自治体申請の承認などの運営業務の一部、Verified権限の付与が停止します。

## 作業内容

- サーバのHDD入れ替え及び再構築
- Minecraftサーバデータ・データベースバックアップからのリストア

## その他

- ワールドデータは場合によって2020/12/13のデータまで戻す可能性があります。なるべくはリカバリする予定ですが、データベースとの差異が出ると困るので…。
- 11月には代用サービスを立てていましたが、個人的理由により代用サービスを立てる余裕がないので期間中は一時的にサーバをクローズします。
