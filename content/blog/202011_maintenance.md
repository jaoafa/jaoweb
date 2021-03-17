---
title: 2020年11月メンテナンス実施のお知らせ
category: news
image: https://storage.jaoafa.com/f54f2539629b70b8f3d78cc694236081.png
author: tomachi
createdAt: 2020-11-10
updatedAt: 2020-11-14
---

**メンテナンスは2020/11/14 08:28に終了しました**

機器メンテナンスに伴い、以下の日程・内容でメンテナンスを実施致します。

## 目次

<!--contents-->

## 期間

2020/11/13(金) 00:00 ～ 2020/11/15(日) 予定 (開始・終了時刻は前後する場合がございます)

## 停止するサービス

- Minecraftメインサーバ
- DiscordBot(jaotan)の一部(Javajaotanが受け持つコマンド・機能)
  - 次の`/`から始まるコマンド: `akakese`, `alpha`, `approvalcity`, `bassline`, `blmap`, `blmaplb`, `blookup`, `chat`, `dice`, `discordlink`, `gentext`, `getatama`, `help`, `javajaotan`, `kogo`, `link`, `listening`, `mcbans`, `mute`, `origin`, `playing`, `potato`, `powa`, `recid`, `setnick`, `setnickatama`, `subaccount`, `super`, `tmttmt`, `toen`, `toenja`, `toese`, `toja`, `tojaen`, `tokanji`, `toswja`, `towakati`, `toyomi`, `tozh`, `tozhja`, `tweet`, `typo`, `user`, `votenotify`, `watching`など
  - 次のチャンネル機能: `#jaochat`など (`#greeting`および`#nsfw`のチャンネル機能は別のシステムで最低限対応します)
- VCSpeaker
- [jao Minecraft Server API](https://api.jaoafa.com/)の一部

[jao Minecraft ServerのWebサイト](https://jaoafa.com/)、[jaopedia](https://wiki.jaoafa.com/)はメンテナンス期間中もサービス提供を継続します。  
また、補助サービスの停止に伴い自治体申請の承認などの運営業務の一部、Verified権限の付与が停止します。

## 作業内容

サーバのホストOSバージョンアップデート及びメンテナンス

## 代用サービス

メンテナンス期間中、代用サービスとして次のMinecraftサーバを運用します。接続アドレス等は変更しない予定です。

### バージョン・ゲームモード・ワールド

- バージョン: **Minecraft JavaEdition 1.16.4**
- ゲームモード: クリエイティブ
- ワールド: 新規ワールド (ネザー・エンドはありません)

- ViaVersionにより、1.8.xから1.16.xまでのJava Editionユーザーもログインが可能です。
- Geyserにより、Bedrock Editionでのログインが可能です(ログインにJava Editionのアカウント情報が必要)。ただし、試験的なため途中でこの対応をやめる場合があります。

### ルール

基本的に[jao Minecraft Serverのサーバルール](/rule)を適用します。

#### 処罰等

全ての処罰はjao Minecraft Serverによる処罰として処理・カウントします。

### プラグイン

- CoreProtect
- LuckPerms
- WorldEdit
- WorldEditSelectionVisualizer
- WorldBorder
- WorldGuard
- DiscordSRV
- Lunachat
- Votifier
- MCBans
- ViaVersion
- Geyser
- Roboot (独自プラグイン)

サーバチャットは公式Discordサーバ`#server-chat_202011`と接続し連携します。
AntiAlts3は必要に応じて導入を検討しますが、とりあえずは導入しません。  
WorldGuardは建築物保護の観点ではなく、特定アイテムの所持規制に関して制限するために導入しています。建築物保護のために使うなとは言いませんが、そういった意図でないことはご理解ください。

### 権限

次のルールで権限を付与します。Minecraftメインサーバでの権限を元にする場合、2020/11/12の時点での情報を利用します。

- `Manager`権限: `Admin`または`Moderator`の権限が付与されている利用者
  - OP権限とサーバ停止を含むMinecraftサーバ内で行える全てのコマンド・行動権限を付与します。
- `User`権限: `Regular`または`Verified`の権限が付与されている利用者
  - 管理コマンドを除くほぼ全てのコマンド・行動権限を付与します。WorldEditも含みます。
- `Default`権限: 上記`Manager`, `User`に当てはまらない利用者
  - 一般的なサーバの権限(OP無し)からWorldEdit、TNTや溶岩・水等の利用を制限した権限を付与します。(通常の建築等が可能な権限)

OP権限はUser権限を持つユーザにも申請・認可を経て付与いたします。公式Discordサーバの`#support`チャンネルで「OP権限が必要な理由」を添えて申請してください。

### 管理者

Tomachi (MinecraftID: `mine_book000`)

- Discord: [tomachi#0310](https://discord.com/users/221991565567066112)
- Twitter: [@book000](https://twitter.com/book000)

但し、Admin, Moderatorもほぼ全ての作業権限と判断権限を有します。
