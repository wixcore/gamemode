CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(64) NOT NULL DEFAULT '',
  `email` varchar(256) NOT NULL DEFAULT '',
  `social` varchar(128) NOT NULL DEFAULT '',
  `serial` varchar(256) NOT NULL DEFAULT '',
  `password` varchar(256) NOT NULL DEFAULT '',
  `allow_stats` tinyint(1) NOT NULL DEFAULT '0',
  `allow_acc` tinyint(1) NOT NULL DEFAULT '0',
  `allow_acc_edit` tinyint(1) NOT NULL DEFAULT '0',
  `admin_level` int(11) NOT NULL DEFAULT '0',
  `reg_ip` varchar(128) NOT NULL DEFAULT '',
  `reg_timestamp` int(11) NOT NULL DEFAULT '0',
  `token` varchar(256) NOT NULL DEFAULT '',
  `hash_acc` varchar(256) NOT NULL,
  `discord_id` varchar(512) NOT NULL,
  `discord_email` varchar(256) NOT NULL,
  `donate_active` tinyint(1) NOT NULL,
  `donate_wallet_1` varchar(128) NOT NULL,
  `donate_wallet_2` varchar(128) NOT NULL,
  `donate_wallet_3` varchar(128) NOT NULL,
  `wallet_card` varchar(64) NOT NULL,
  `wallet_qiwi` varchar(64) NOT NULL,
  `wallet_paypal` varchar(64) NOT NULL,
  `wallet_yandex` varchar(64) NOT NULL,
  `wallet_webmoneyWmr` varchar(64) NOT NULL,
  `wallet_webmoney` varchar(64) NOT NULL,
  `trade_block` tinyint(1) NOT NULL,
  `money_donate` int(11) NOT NULL,
  `money` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `ban_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ban_from` varchar(256) NOT NULL DEFAULT '',
  `ban_to` varchar(256) NOT NULL DEFAULT '',
  `count` varchar(11) NOT NULL DEFAULT '',
  `datetime` int(11) NOT NULL DEFAULT '0',
  `reason` varchar(256) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `black_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `social` varchar(128) NOT NULL DEFAULT '',
  `serial` varchar(256) NOT NULL DEFAULT '',
  `rgsc_id` bigint(20) NOT NULL DEFAULT '0',
  `address` varchar(128) NOT NULL DEFAULT '',
  `reason` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL DEFAULT '',
  `text` varchar(128) NOT NULL DEFAULT '',
  `price` int(11) NOT NULL DEFAULT '0',
  `bank` double NOT NULL DEFAULT '0',
  `bank_tax` double NOT NULL DEFAULT '0',
  `bank_max` int(11) NOT NULL DEFAULT '500000',
  `bank_score` bigint(20) NOT NULL DEFAULT '0',
  `bank_id` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `user_name` varchar(256) NOT NULL DEFAULT '',
  `interior` int(11) NOT NULL DEFAULT '0',
  `sc_font` int(11) NOT NULL DEFAULT '0',
  `sc_color` int(11) NOT NULL DEFAULT '0',
  `sc_alpha` tinyint(1) NOT NULL DEFAULT '0',
  `type` int(11) NOT NULL DEFAULT '0',
  `price_product` float NOT NULL DEFAULT '2',
  `tax_score` int(11) NOT NULL DEFAULT '0',
  `tax_money` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `cars` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `user_name` varchar(256) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `class` varchar(64) NOT NULL DEFAULT '',
  `price` int(11) NOT NULL DEFAULT '0',
  `fuel` float NOT NULL DEFAULT '0',
  `color1` int(11) NOT NULL DEFAULT '0',
  `color2` int(11) NOT NULL DEFAULT '0',
  `color3` int(11) NOT NULL DEFAULT '0',
  `colorwheel` int(11) NOT NULL DEFAULT '0',
  `colord` int(11) NOT NULL DEFAULT '0',
  `colori` int(11) NOT NULL DEFAULT '0',
  `colorl` int(11) NOT NULL DEFAULT '-1',
  `livery` int(11) NOT NULL DEFAULT '0',
  `extra` int(11) NOT NULL DEFAULT '0',
  `is_tyre` tinyint(1) NOT NULL DEFAULT '0',
  `tyre_r` int(11) NOT NULL DEFAULT '255',
  `tyre_g` int(11) NOT NULL DEFAULT '255',
  `tyre_b` int(11) NOT NULL DEFAULT '255',
  `is_neon` tinyint(1) NOT NULL DEFAULT '0',
  `neon_r` int(11) NOT NULL DEFAULT '0',
  `neon_g` int(11) NOT NULL DEFAULT '0',
  `neon_b` int(11) NOT NULL DEFAULT '0',
  `number` varchar(8) NOT NULL,
  `number_type` int(11) NOT NULL DEFAULT '0',
  `is_special` tinyint(1) NOT NULL DEFAULT '0',
  `s_mp` float NOT NULL DEFAULT '0',
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  `rot` float NOT NULL DEFAULT '0',
  `dimension` int(11) NOT NULL DEFAULT '0',
  `upgrade` varchar(1000) NOT NULL DEFAULT '{"18":-1}',
  `s_km` double NOT NULL DEFAULT '0',
  `s_eng` int(11) NOT NULL DEFAULT '100',
  `s_trans` int(11) NOT NULL DEFAULT '100',
  `s_fuel` int(11) NOT NULL DEFAULT '100',
  `s_whel` int(11) NOT NULL DEFAULT '100',
  `s_elec` int(11) NOT NULL DEFAULT '100',
  `s_break` int(11) NOT NULL DEFAULT '100',
  `is_cop_park` int(11) NOT NULL DEFAULT '0',
  `cop_park_name` varchar(256) NOT NULL DEFAULT '',
  `with_delete` tinyint(1) NOT NULL DEFAULT '0',
  `sell_price` int(11) NOT NULL DEFAULT '0',
  `tax_score` int(11) NOT NULL DEFAULT '0',
  `tax_money` int(11) NOT NULL DEFAULT '0',
  `tax_sale` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `cars_fraction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '',
  `number` varchar(10) NOT NULL DEFAULT 'FVEH',
  `fraction_id` int(11) NOT NULL DEFAULT '0',
  `hash` int(11) NOT NULL DEFAULT '0',
  `rank` int(11) NOT NULL DEFAULT '0',
  `rank_type` int(11) NOT NULL DEFAULT '0',
  `fuel` float NOT NULL DEFAULT '0',
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  `rot` float NOT NULL DEFAULT '0',
  `liv` int(11) NOT NULL DEFAULT '-1',
  `color` int(11) NOT NULL DEFAULT '0',
  `price` float NOT NULL DEFAULT '0',
  `is_buy` int(11) NOT NULL DEFAULT '0',
  `is_default` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `condos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` varchar(10) NOT NULL DEFAULT '1',
  `condo_big_id` int(11) NOT NULL DEFAULT '0',
  `address` varchar(256) NOT NULL DEFAULT '',
  `street` varchar(256) NOT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `user_name` varchar(256) NOT NULL DEFAULT '',
  `pin` int(11) NOT NULL DEFAULT '0',
  `is_safe` int(11) NOT NULL DEFAULT '0',
  `is_sec` tinyint(1) NOT NULL DEFAULT '0',
  `is_lock` tinyint(1) NOT NULL DEFAULT '0',
  `interior` int(11) NOT NULL DEFAULT '0',
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  `rot` float NOT NULL DEFAULT '0',
  `tax_score` int(11) NOT NULL DEFAULT '0',
  `tax_money` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `condos_big` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(256) NOT NULL DEFAULT '',
  `street` varchar(256) NOT NULL DEFAULT '',
  `number` varchar(10) NOT NULL DEFAULT '0',
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `daynight` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` int(11) NOT NULL DEFAULT '2018',
  `month` int(11) NOT NULL DEFAULT '1',
  `day` int(11) NOT NULL DEFAULT '1',
  `hour` int(11) NOT NULL DEFAULT '12',
  `minute` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `family_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(64) NOT NULL DEFAULT 'РЎР»РѕС‚ СЃРІРѕР±РѕРґРµРЅ',
  `money` double NOT NULL DEFAULT '100',
  `rank_leader` varchar(64) NOT NULL DEFAULT 'Р›РёРґРµСЂ',
  `rank_sub_leader` varchar(64) NOT NULL DEFAULT 'Р—Р°РјРµСЃС‚РёС‚РµР»СЊ',
  `rank_list` varchar(2000) NOT NULL DEFAULT '[["Р“Р»Р°РІР° РѕС‚РґРµР»Р°", "Р—Р°Рј. РіР»Р°РІС‹ РѕС‚РґРµР»Р°", "РЎРѕСѓС‡Р°СЃС‚РЅРёРє"]]',
  `rank_type_list` varchar(2000) NOT NULL DEFAULT '["РћСЃРЅРѕРІРЅРѕР№ СЃРѕСЃС‚Р°РІ"]',
  `level` int(11) NOT NULL DEFAULT '1',
  `exp` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `fraction_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(64) NOT NULL DEFAULT 'РЎР»РѕС‚ СЃРІРѕР±РѕРґРµРЅ',
  `money` double NOT NULL DEFAULT '100',
  `is_bank` tinyint(1) NOT NULL DEFAULT '0',
  `is_shop` tinyint(1) NOT NULL DEFAULT '0',
  `is_war` tinyint(1) NOT NULL DEFAULT '0',
  `is_mafia` tinyint(1) NOT NULL DEFAULT '0',
  `is_kill` tinyint(1) NOT NULL DEFAULT '0',
  `proc_clear` int(11) NOT NULL DEFAULT '50',
  `rank_leader` varchar(64) NOT NULL DEFAULT 'Р›РёРґРµСЂ',
  `rank_sub_leader` varchar(64) NOT NULL DEFAULT 'Р—Р°РјРµСЃС‚РёС‚РµР»СЊ',
  `rank_list` varchar(2000) NOT NULL DEFAULT '[["Р“Р»Р°РІР° РѕС‚РґРµР»Р°", "Р—Р°Рј. РіР»Р°РІС‹ РѕС‚РґРµР»Р°", "РЎРѕСѓС‡Р°СЃС‚РЅРёРє"]]',
  `rank_type_list` varchar(2000) NOT NULL DEFAULT '["РћСЃРЅРѕРІРЅРѕР№ СЃРѕСЃС‚Р°РІ"]',
  `color` varchar(8) NOT NULL DEFAULT '#9E9E9E',
  `spawn_x` float NOT NULL DEFAULT '0',
  `spawn_y` float NOT NULL DEFAULT '0',
  `spawn_z` float NOT NULL DEFAULT '0',
  `spawn_rot` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `game_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) NOT NULL DEFAULT '0',
  `item_id` int(11) NOT NULL DEFAULT '0',
  `action` varchar(128) NOT NULL DEFAULT '',
  `params` varchar(10000) NOT NULL DEFAULT '{"p1":null}',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `gang_war` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(128) NOT NULL DEFAULT '',
  `zone` varchar(128) NOT NULL DEFAULT '',
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  `fraction_name` varchar(128) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL DEFAULT '',
  `fraction_id` int(11) NOT NULL DEFAULT '0',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `cant_war` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `gang_war_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(128) NOT NULL DEFAULT '',
  `zone` varchar(128) NOT NULL DEFAULT '',
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  `fraction_name` varchar(128) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL DEFAULT '',
  `fraction_id` int(11) NOT NULL DEFAULT '0',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `cant_war` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `graffiti_war` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL DEFAULT '1',
  `address` varchar(256) NOT NULL DEFAULT '',
  `street` varchar(256) NOT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `user_name` varchar(256) NOT NULL DEFAULT '',
  `pin` int(11) NOT NULL DEFAULT '0',
  `is_safe` int(11) NOT NULL DEFAULT '0',
  `is_sec` tinyint(1) NOT NULL DEFAULT '0',
  `is_lock` tinyint(1) NOT NULL DEFAULT '0',
  `interior` int(11) NOT NULL DEFAULT '0',
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  `rot` float NOT NULL DEFAULT '0',
  `ginterior1` int(11) NOT NULL DEFAULT '-1',
  `gx1` float NOT NULL DEFAULT '0',
  `gy1` float NOT NULL DEFAULT '0',
  `gz1` float NOT NULL DEFAULT '0',
  `grot1` float NOT NULL DEFAULT '0',
  `ginterior2` int(11) NOT NULL DEFAULT '-1',
  `gx2` float NOT NULL DEFAULT '0',
  `gy2` float NOT NULL DEFAULT '0',
  `gz2` float NOT NULL DEFAULT '0',
  `grot2` float NOT NULL DEFAULT '0',
  `ginterior3` int(11) NOT NULL DEFAULT '-1',
  `gx3` float NOT NULL DEFAULT '0',
  `gy3` float NOT NULL DEFAULT '0',
  `gz3` float NOT NULL DEFAULT '0',
  `grot3` float NOT NULL DEFAULT '0',
  `max_roommate` int(11) NOT NULL DEFAULT '0',
  `tax_score` int(11) NOT NULL DEFAULT '0',
  `tax_money` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(11) NOT NULL DEFAULT '0',
  `pos_x` float NOT NULL DEFAULT '0',
  `pos_y` float NOT NULL DEFAULT '0',
  `pos_z` float NOT NULL DEFAULT '0',
  `rot_x` float NOT NULL DEFAULT '0',
  `rot_y` float NOT NULL DEFAULT '0',
  `rot_z` float NOT NULL DEFAULT '0',
  `owner_id` bigint(20) NOT NULL DEFAULT '0',
  `owner_type` int(11) NOT NULL DEFAULT '0',
  `count` double NOT NULL DEFAULT '0',
  `is_equip` tinyint(1) NOT NULL DEFAULT '0',
  `timestamp_update` int(11) NOT NULL DEFAULT '0',
  `params` varchar(2048) NOT NULL DEFAULT '{}',
  `price` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '',
  `type` varchar(64) NOT NULL DEFAULT '',
  `do` varchar(1024) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_admin_acc_edit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `col` varchar(64) NOT NULL DEFAULT '',
  `val_old` varchar(512) NOT NULL DEFAULT '',
  `val_new` varchar(512) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_admin_table_edit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tbl` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `row_id` int(11) NOT NULL DEFAULT '0',
  `col` varchar(50) NOT NULL,
  `val_old` varchar(50) NOT NULL,
  `val_new` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_admin_try` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_address1` varchar(256) NOT NULL DEFAULT '',
  `ip_address2` varchar(256) NOT NULL DEFAULT '',
  `ip_address3` varchar(256) NOT NULL DEFAULT '',
  `login` varchar(256) NOT NULL DEFAULT '',
  `pass` varchar(256) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_admin_user_edit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `col` varchar(64) NOT NULL DEFAULT '',
  `val_old` varchar(512) NOT NULL DEFAULT '',
  `val_new` varchar(512) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_anticheat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '',
  `do` varchar(1024) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_bank_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `card` bigint(20) NOT NULL DEFAULT '0',
  `text` varchar(256) NOT NULL DEFAULT '',
  `price` double NOT NULL DEFAULT '0',
  `was` double NOT NULL DEFAULT '0',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_blacklist_checker` (
  `id` int(11) NOT NULL,
  `text` varchar(1024) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_business` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` int(11) NOT NULL DEFAULT '0',
  `product` varchar(256) NOT NULL DEFAULT '',
  `price` double NOT NULL DEFAULT '0',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_business_tax` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `business_id` int(11) NOT NULL DEFAULT '0',
  `price` double NOT NULL DEFAULT '0',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_cash_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `text` varchar(256) NOT NULL DEFAULT '',
  `price` double NOT NULL DEFAULT '0',
  `was` double NOT NULL DEFAULT '0',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(2000) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_coffer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '',
  `text` varchar(512) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_coin_out` (
  `id` int(11) NOT NULL,
  `payout_id` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `type` varchar(16) NOT NULL DEFAULT '',
  `payer` varchar(64) NOT NULL DEFAULT '',
  `sum` int(11) NOT NULL DEFAULT '0',
  `state` varchar(24) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT '0'
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_coin_trade` (
  `id` int(11) NOT NULL,
  `user_from_id` int(11) NOT NULL DEFAULT '0',
  `user_to_id` int(11) NOT NULL DEFAULT '0',
  `coin` int(11) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT '0',
  `type` int(11) NOT NULL DEFAULT '0',
  `date` date DEFAULT NULL,
  `timestamp` varchar(255) NOT NULL DEFAULT '0'
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_connect` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(64) NOT NULL DEFAULT '',
  `social` varchar(256) NOT NULL DEFAULT '',
  `serial` varchar(512) NOT NULL DEFAULT '',
  `address` varchar(128) NOT NULL DEFAULT '',
  `game_id` int(11) NOT NULL DEFAULT '0',
  `account_id` int(11) NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_crypto_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `text` varchar(256) NOT NULL DEFAULT '',
  `price` double NOT NULL DEFAULT '0',
  `was` double NOT NULL DEFAULT '0',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_donate_trade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `money_remove` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4;

CREATE TABLE IF NOT EXISTS `log_fraction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fraction_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(128) NOT NULL DEFAULT '',
  `text` varchar(1000) NOT NULL DEFAULT '',
  `text2` varchar(1000) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_fraction_2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fraction_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(128) NOT NULL DEFAULT '',
  `text` varchar(1000) NOT NULL DEFAULT '',
  `text2` varchar(1000) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `datetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_fraction_gun` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL DEFAULT '',
  `do` varchar(64) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `fraction_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_give_money` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(16) NOT NULL DEFAULT '',
  `user_from` varchar(256) NOT NULL DEFAULT '',
  `user_to` varchar(256) NOT NULL DEFAULT '',
  `sum` double NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_give_wanted` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(16) NOT NULL DEFAULT '',
  `user_from` varchar(256) NOT NULL DEFAULT '',
  `user_to` varchar(256) NOT NULL DEFAULT '',
  `lvl` int(11) NOT NULL DEFAULT '0',
  `reason` varchar(128) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_inventory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(64) NOT NULL DEFAULT '',
  `text` varchar(512) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_official_bank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fraction_id` int(11) NOT NULL DEFAULT '0',
  `money_was` double NOT NULL DEFAULT '0',
  `money` double NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_panel_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(128) NOT NULL DEFAULT 'admin',
  `password` varchar(256) NOT NULL DEFAULT '',
  `admin_level` int(11) NOT NULL,
  `allow_stats` tinyint(1) NOT NULL DEFAULT '0',
  `allow_acc` tinyint(1) NOT NULL DEFAULT '0',
  `allow_acc_edit` tinyint(1) NOT NULL DEFAULT '0',
  `token` varchar(256) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `type` int(11) NOT NULL DEFAULT '0',
  `do` varchar(512) NOT NULL DEFAULT '',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_referrer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL DEFAULT '',
  `referrer` varchar(512) NOT NULL DEFAULT '',
  `money` int(11) NOT NULL DEFAULT '0',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_sell_inactive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(512) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_user_death` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(16) NOT NULL DEFAULT '',
  `user` varchar(256) NOT NULL DEFAULT '',
  `reason` varchar(128) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `log_warning` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '',
  `do` varchar(1024) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `mafia_war` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL DEFAULT '0',
  `money` int(11) NOT NULL DEFAULT '0',
  `m_1` int(11) NOT NULL DEFAULT '0',
  `m_2` int(11) NOT NULL DEFAULT '0',
  `m_3` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `memory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(512) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `monitoring` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(512) NOT NULL DEFAULT '',
  `online` int(11) NOT NULL DEFAULT '0',
  `max_online` int(11) NOT NULL DEFAULT '500',
  `last_update` int(11) NOT NULL,
  `ip` varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `official_bank` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score` bigint(20) NOT NULL DEFAULT '0',
  `name` varchar(128) NOT NULL DEFAULT '',
  `money` double NOT NULL DEFAULT '0',
  `tax_pay_day` float NOT NULL DEFAULT '1',
  `tax_business` float NOT NULL DEFAULT '1',
  `tax_property` float NOT NULL DEFAULT '1',
  `tax_intermediate` float NOT NULL DEFAULT '5',
  `benefit` double NOT NULL DEFAULT '0',
  `payday` varchar(512) NOT NULL DEFAULT '[]',
  `stock_med` int(11) NOT NULL DEFAULT '0',
  `stock_eat` int(11) NOT NULL DEFAULT '0',
  `stock_gun` int(11) NOT NULL DEFAULT '0',
  `stock_gunm` int(11) NOT NULL DEFAULT '0',
  `stock_ammo` int(11) NOT NULL DEFAULT '0',
  `stock_armour` int(11) NOT NULL DEFAULT '0',
  `stock_other` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `page_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `car_list_more` int(11) NOT NULL DEFAULT 0,
  `car_list` int(11) NOT NULL DEFAULT 0,
  `api_get_vehicle` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `phone_call` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number_from` varchar(20) NOT NULL DEFAULT '',
  `number_to` varchar(20) NOT NULL DEFAULT '',
  `date` varchar(16) NOT NULL DEFAULT '',
  `time` varchar(12) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `phone_contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` bigint(20) NOT NULL DEFAULT '0',
  `name` varchar(128) NOT NULL DEFAULT '',
  `numbers` varchar(1024) NOT NULL DEFAULT '[]',
  `is_fav` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `phone_sms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number_from` varchar(20) NOT NULL DEFAULT '',
  `number_to` varchar(20) NOT NULL DEFAULT '',
  `text` varchar(512) NOT NULL DEFAULT '',
  `date` varchar(16) NOT NULL DEFAULT '',
  `time` varchar(12) NOT NULL DEFAULT '',
  `is_unread` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `promocode_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(32) NOT NULL DEFAULT '',
  `bonus` int(11) NOT NULL DEFAULT '1000',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `promocode_top_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `promocode` varchar(64) NOT NULL DEFAULT '',
  `start` varchar(512) NOT NULL DEFAULT '{"money":1000}',
  `end` varchar(512) NOT NULL DEFAULT '{"money":25000}',
  `is_one` tinyint(1) NOT NULL DEFAULT '0',
  `is_use` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO `promocode_top_list` (`id`, `promocode`, `start`, `end`, `is_one`, `is_use`) VALUES (1,'REGISTER','{"money":1000}','{"money":15000}', 0, 0);

CREATE TABLE IF NOT EXISTS `promocode_using` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `promocode_name` varchar(16) NOT NULL DEFAULT '',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `report_user` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `target` int(11) NOT NULL,
  `links` text NOT NULL,
  `text` text NOT NULL,
  `status` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `datetime` varchar(255) NOT NULL,
  `timestamp` varchar(255) NOT NULL,
  `admin_id` int(11) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `rp_business_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `text` varchar(50) DEFAULT NULL,
  `author_name` varchar(50) DEFAULT NULL,
  `fraction` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `rp_gov_party_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) DEFAULT NULL,
  `content` varchar(50) DEFAULT NULL,
  `content_desc` varchar(50) DEFAULT NULL,
  `user_owner` varchar(50) DEFAULT NULL,
  `views` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `rp_gov_vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `rp_inv_ad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `phone` varchar(32) NOT NULL DEFAULT '',
  `text` varchar(1000) NOT NULL DEFAULT '',
  `editor` varchar(128) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `rp_inv_ad_temp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL DEFAULT '',
  `phone` varchar(32) NOT NULL DEFAULT '',
  `text` varchar(1000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `rp_inv_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `text` varchar(1000) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `rp_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL DEFAULT '',
  `name` varchar(128) NOT NULL DEFAULT '',
  `text` varchar(1000) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `fraction` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB DEFAULT CHARSET = utf8 ROW_FORMAT = DYNAMIC;

CREATE TABLE IF NOT EXISTS `rp_rules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` mediumtext,
  `title` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `rules` (
  `id` int(11) NOT NULL,
  `name` varchar(64) NOT NULL DEFAULT '',
  `col` varchar(4) NOT NULL DEFAULT 's2',
  `text` text
) ENGINE = InnoDB DEFAULT CHARSET = utf8 ROW_FORMAT = DYNAMIC;

CREATE TABLE IF NOT EXISTS `stats_online` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `online` int(11) NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `stats_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reg` int(11) NOT NULL DEFAULT '0',
  `auth` int(11) NOT NULL DEFAULT '0',
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `stocks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL DEFAULT '1',
  `address` varchar(256) NOT NULL DEFAULT '',
  `street` varchar(256) NOT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `user_name` varchar(256) NOT NULL DEFAULT '',
  `pin` int(11) NOT NULL DEFAULT '0',
  `pin1` int(11) NOT NULL DEFAULT '0',
  `pin2` int(11) NOT NULL DEFAULT '0',
  `pin3` int(11) NOT NULL DEFAULT '0',
  `pin_o` int(11) NOT NULL DEFAULT '0',
  `pin_l` int(11) NOT NULL DEFAULT '0',
  `pin_b` int(11) NOT NULL DEFAULT '0',
  `interior` int(11) NOT NULL DEFAULT '0',
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  `rot` float NOT NULL DEFAULT '0',
  `vx` float NOT NULL DEFAULT '0',
  `vy` float NOT NULL DEFAULT '0',
  `vz` float NOT NULL DEFAULT '0',
  `vrot` float NOT NULL DEFAULT '0',
  `upgrade` varchar(400) NOT NULL DEFAULT '-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1_-1',
  `upgrade_g` tinyint(1) NOT NULL DEFAULT '0',
  `upgrade_n` tinyint(4) NOT NULL DEFAULT '0',
  `upgrade_l` tinyint(4) NOT NULL DEFAULT '0',
  `upgrade_b` tinyint(4) NOT NULL DEFAULT '0',
  `lab_state` int(11) NOT NULL DEFAULT '0',
  `lab_1_count` int(11) NOT NULL DEFAULT '0',
  `lab_2_count` int(11) NOT NULL DEFAULT '0',
  `lab_3_count` int(11) NOT NULL DEFAULT '0',
  `lab_4_count` int(11) NOT NULL DEFAULT '0',
  `lab_type` int(11) NOT NULL DEFAULT '0',
  `bunk_type` int(11) NOT NULL DEFAULT '0',
  `bunk_state` int(11) NOT NULL DEFAULT '0',
  `bunk_1_count` int(11) NOT NULL DEFAULT '0',
  `bunk_2_count` int(11) NOT NULL DEFAULT '0',
  `bunk_3_count` int(11) NOT NULL DEFAULT '0',
  `bunk_4_count` int(11) NOT NULL DEFAULT '0',
  `tax_score` int(11) NOT NULL DEFAULT '0',
  `tax_money` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL DEFAULT '0',
  `do` varchar(512) NOT NULL DEFAULT '',
  `do2` varchar(256) NOT NULL DEFAULT '',
  `price` int(11) NOT NULL DEFAULT '0',
  `is_pay` tinyint(1) NOT NULL DEFAULT '0',
  `rp_datetime` varchar(64) NOT NULL DEFAULT '',
  `timestamp` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `trade_coin` (
  `id` int(11) NOT NULL,
  `user_social` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `money` int(11) NOT NULL,
  `ac` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  `timestamp` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `social` varchar(128) NOT NULL DEFAULT '',
  `name` varchar(256) NOT NULL DEFAULT '',
  `name_dating` varchar(64) NOT NULL DEFAULT '',
  `age` varchar(10) NOT NULL DEFAULT '01.01.1990',
  `national` varchar(128) NOT NULL DEFAULT 'Р СѓСЃСЃРєРёР№',
  `money` double NOT NULL DEFAULT '199.99',
  `money_bank` double NOT NULL DEFAULT '0',
  `money_payday` double NOT NULL DEFAULT '0',
  `money_crypto` double NOT NULL DEFAULT '0',
  `money_donate` int(11) NOT NULL DEFAULT '0',
  `bank_card` bigint(20) NOT NULL DEFAULT '0',
  `bank_owner` varchar(256) NOT NULL DEFAULT '',
  `bank_pin` int(11) NOT NULL DEFAULT '0',
  `crypto_card` varchar(32) NOT NULL DEFAULT '',
  `phone` bigint(20) NOT NULL DEFAULT '0',
  `phone_type` int(11) NOT NULL DEFAULT '0',
  `phone_bg` varchar(512) NOT NULL DEFAULT 'https://i.imgur.com/v4aju8F.jpg',
  `walkie_buy` tinyint(1) NOT NULL DEFAULT '0',
  `walkie_vol` int(11) NOT NULL DEFAULT '10',
  `walkie_1` varchar(8) NOT NULL DEFAULT '000.000',
  `walkie_2` varchar(8) NOT NULL DEFAULT '000.000',
  `walkie_current` int(11) NOT NULL DEFAULT '0',
  `walkie_color` varchar(32) NOT NULL DEFAULT 'rgba(233, 135, 46, 0.9)',
  `online_time` int(11) NOT NULL DEFAULT '0',
  `online_wheel` int(11) NOT NULL DEFAULT '0',
  `online_cont` int(11) NOT NULL DEFAULT '0',
  `online_contall` int(11) NOT NULL DEFAULT '0',
  `online_warn` int(11) NOT NULL DEFAULT '0',
  `online_lspd` int(11) NOT NULL DEFAULT '0',
  `reg_status` int(11) NOT NULL DEFAULT '0',
  `hp` int(11) NOT NULL DEFAULT '100',
  `ap` int(11) NOT NULL DEFAULT '0',
  `skin` text,
  `partner` varchar(128) NOT NULL DEFAULT '',
  `admin_level` int(11) NOT NULL DEFAULT '0',
  `helper_level` int(11) NOT NULL DEFAULT '0',
  `fraction_id` int(11) NOT NULL DEFAULT '0',
  `rank` int(11) NOT NULL DEFAULT '0',
  `rank_type` int(11) NOT NULL DEFAULT '0',
  `is_leader` tinyint(1) NOT NULL DEFAULT '0',
  `is_sub_leader` tinyint(1) NOT NULL DEFAULT '0',
  `fraction_id2` int(11) NOT NULL DEFAULT '0',
  `rank2` int(11) NOT NULL DEFAULT '0',
  `rank_type2` int(11) NOT NULL DEFAULT '0',
  `is_leader2` tinyint(1) NOT NULL DEFAULT '0',
  `is_sub_leader2` tinyint(1) NOT NULL DEFAULT '0',
  `family_id` int(11) NOT NULL DEFAULT '0',
  `rankf` int(11) NOT NULL DEFAULT '0',
  `rank_typef` int(11) NOT NULL DEFAULT '0',
  `is_leaderf` tinyint(4) NOT NULL DEFAULT '0',
  `is_sub_leaderf` tinyint(4) NOT NULL DEFAULT '0',
  `job` int(11) NOT NULL DEFAULT '0',
  `house_id` int(11) NOT NULL DEFAULT '0',
  `condo_id` int(11) NOT NULL DEFAULT '0',
  `apartment_id` int(11) NOT NULL DEFAULT '0',
  `yacht_id` int(11) NOT NULL DEFAULT '0',
  `stock_id` int(11) NOT NULL DEFAULT '0',
  `business_id` int(11) NOT NULL DEFAULT '0',
  `car_id1` int(11) NOT NULL DEFAULT '0',
  `car_id2` int(11) NOT NULL DEFAULT '0',
  `car_id3` int(11) NOT NULL DEFAULT '0',
  `car_id4` int(11) NOT NULL DEFAULT '0',
  `car_id5` int(11) NOT NULL DEFAULT '0',
  `car_id6` int(11) NOT NULL DEFAULT '0',
  `car_id7` int(11) NOT NULL DEFAULT '0',
  `car_id8` int(11) NOT NULL DEFAULT '0',
  `car_id9` int(11) NOT NULL DEFAULT '0',
  `car_id10` int(11) NOT NULL DEFAULT '0',
  `car_id6_free` tinyint(1) NOT NULL DEFAULT '0',
  `car_id7_free` tinyint(1) NOT NULL DEFAULT '0',
  `car_id8_free` tinyint(1) NOT NULL DEFAULT '0',
  `car_id9_free` tinyint(1) NOT NULL DEFAULT '0',
  `car_id10_free` tinyint(1) NOT NULL DEFAULT '0',
  `is_clock` tinyint(1) NOT NULL DEFAULT '1',
  `mask` int(11) NOT NULL DEFAULT '-1',
  `mask_color` int(11) NOT NULL DEFAULT '0',
  `torso` int(11) NOT NULL DEFAULT '0',
  `torso_color` int(11) NOT NULL DEFAULT '0',
  `gloves` int(11) NOT NULL DEFAULT '0',
  `gloves_color` int(11) NOT NULL DEFAULT '0',
  `leg` int(11) NOT NULL DEFAULT '0',
  `leg_color` int(11) NOT NULL DEFAULT '0',
  `hand` int(11) NOT NULL DEFAULT '0',
  `hand_color` int(11) NOT NULL DEFAULT '0',
  `foot` int(11) NOT NULL DEFAULT '0',
  `foot_color` int(11) NOT NULL DEFAULT '0',
  `accessorie` int(11) NOT NULL DEFAULT '0',
  `accessorie_color` int(11) NOT NULL DEFAULT '0',
  `parachute` int(11) NOT NULL DEFAULT '0',
  `parachute_color` int(11) NOT NULL DEFAULT '0',
  `armor` int(11) NOT NULL DEFAULT '0',
  `armor_color` int(11) NOT NULL DEFAULT '0',
  `decal` int(11) NOT NULL DEFAULT '0',
  `decal_color` int(11) NOT NULL DEFAULT '0',
  `body` int(11) NOT NULL DEFAULT '0',
  `body_color` int(11) NOT NULL DEFAULT '0',
  `hat` int(11) NOT NULL DEFAULT '-1',
  `hat_color` int(11) NOT NULL DEFAULT '-1',
  `glasses` int(11) NOT NULL DEFAULT '-1',
  `glasses_color` int(11) NOT NULL DEFAULT '-1',
  `ear` int(11) NOT NULL DEFAULT '-1',
  `ear_color` int(11) NOT NULL DEFAULT '-1',
  `watch` int(11) NOT NULL DEFAULT '-1',
  `watch_color` int(11) NOT NULL DEFAULT '-1',
  `bracelet` int(11) NOT NULL DEFAULT '-1',
  `bracelet_color` int(11) NOT NULL DEFAULT '-1',
  `tprint_o` varchar(256) NOT NULL DEFAULT '',
  `tprint_c` varchar(256) NOT NULL DEFAULT '',
  `tattoo` varchar(10000) DEFAULT '[]',
  `weapon_1` varchar(128) NOT NULL DEFAULT '',
  `weapon_1_ammo` int(11) NOT NULL DEFAULT '-1',
  `weapon_2` varchar(128) NOT NULL DEFAULT '',
  `weapon_2_ammo` int(11) NOT NULL DEFAULT '-1',
  `weapon_3` varchar(128) NOT NULL DEFAULT '',
  `weapon_3_ammo` int(11) NOT NULL DEFAULT '-1',
  `weapon_4` varchar(128) NOT NULL DEFAULT '',
  `weapon_4_ammo` int(11) NOT NULL DEFAULT '-1',
  `weapon_5` varchar(128) NOT NULL DEFAULT '',
  `weapon_5_ammo` int(11) NOT NULL DEFAULT '-1',
  `stats_strength` int(11) NOT NULL DEFAULT '1',
  `stats_shooting` int(11) NOT NULL DEFAULT '1',
  `stats_endurance` int(11) NOT NULL DEFAULT '1',
  `stats_lung_capacity` int(11) NOT NULL DEFAULT '0',
  `stats_flying` int(11) NOT NULL DEFAULT '1',
  `stats_driving` int(11) NOT NULL DEFAULT '1',
  `stats_psychics` int(11) NOT NULL DEFAULT '1',
  `stats_lucky` int(11) NOT NULL DEFAULT '1',
  `stats_darknet` int(11) NOT NULL DEFAULT '0',
  `a_lic` tinyint(1) NOT NULL DEFAULT '0',
  `a_lic_create` varchar(32) NOT NULL DEFAULT '',
  `a_lic_end` varchar(32) NOT NULL DEFAULT '',
  `b_lic` tinyint(1) NOT NULL DEFAULT '0',
  `b_lic_create` varchar(32) NOT NULL DEFAULT '',
  `b_lic_end` varchar(32) NOT NULL DEFAULT '',
  `c_lic` tinyint(1) NOT NULL DEFAULT '0',
  `c_lic_create` varchar(32) NOT NULL DEFAULT '',
  `c_lic_end` varchar(32) NOT NULL DEFAULT '',
  `air_lic` tinyint(1) NOT NULL DEFAULT '0',
  `air_lic_create` varchar(32) NOT NULL DEFAULT '',
  `air_lic_end` varchar(32) NOT NULL DEFAULT '',
  `ship_lic` tinyint(1) NOT NULL DEFAULT '0',
  `ship_lic_create` varchar(32) NOT NULL DEFAULT '',
  `ship_lic_end` varchar(32) NOT NULL DEFAULT '',
  `taxi_lic` tinyint(1) NOT NULL DEFAULT '0',
  `taxi_lic_create` varchar(32) NOT NULL DEFAULT '',
  `taxi_lic_end` varchar(32) NOT NULL DEFAULT '',
  `law_lic` tinyint(1) NOT NULL DEFAULT '0',
  `law_lic_create` varchar(32) NOT NULL DEFAULT '',
  `law_lic_end` varchar(32) NOT NULL DEFAULT '',
  `med_lic` tinyint(1) NOT NULL DEFAULT '0',
  `med_lic_create` varchar(32) NOT NULL DEFAULT '',
  `med_lic_end` varchar(32) NOT NULL DEFAULT '',
  `marg_lic` tinyint(4) NOT NULL DEFAULT '0',
  `marg_lic_create` varchar(32) NOT NULL DEFAULT '',
  `marg_lic_end` varchar(32) NOT NULL DEFAULT '',
  `gun_lic` tinyint(1) NOT NULL DEFAULT '0',
  `gun_lic_create` varchar(32) NOT NULL DEFAULT '',
  `gun_lic_end` varchar(32) NOT NULL DEFAULT '',
  `biz_lic` tinyint(1) NOT NULL DEFAULT '0',
  `biz_lic_create` varchar(32) NOT NULL DEFAULT '',
  `biz_lic_end` varchar(32) NOT NULL DEFAULT '',
  `fish_lic` tinyint(1) NOT NULL DEFAULT '0',
  `fish_lic_create` varchar(32) NOT NULL DEFAULT '',
  `fish_lic_end` varchar(32) NOT NULL DEFAULT '',
  `work_lic` varchar(64) NOT NULL DEFAULT '',
  `work_date` varchar(32) NOT NULL DEFAULT '',
  `work_lvl` int(11) NOT NULL DEFAULT '1',
  `work_exp` int(11) NOT NULL DEFAULT '0',
  `rep` int(11) NOT NULL DEFAULT '500',
  `eat_level` int(11) NOT NULL DEFAULT '1000',
  `water_level` int(11) NOT NULL DEFAULT '1000',
  `jail_time` int(11) NOT NULL DEFAULT '0',
  `jail_type` int(11) NOT NULL DEFAULT '0',
  `med_time` int(11) NOT NULL DEFAULT '0',
  `med_type` int(11) NOT NULL DEFAULT '0',
  `login_date` int(11) NOT NULL DEFAULT '0',
  `login_ip` varchar(128) NOT NULL DEFAULT '',
  `reg_timestamp` int(11) NOT NULL DEFAULT '0',
  `reg_ip` varchar(128) NOT NULL DEFAULT '',
  `role` int(11) NOT NULL DEFAULT '0',
  `warns` int(11) NOT NULL DEFAULT '0',
  `status_rp` int(11) NOT NULL DEFAULT '0',
  `status_media` int(11) NOT NULL DEFAULT '0',
  `wanted_level` int(11) NOT NULL DEFAULT '0',
  `wanted_reason` varchar(128) NOT NULL DEFAULT '',
  `clipset` varchar(128) NOT NULL DEFAULT '',
  `clipset_w` varchar(32) NOT NULL DEFAULT 'default',
  `s_hud_speed` tinyint(1) NOT NULL DEFAULT '0',
  `s_hud_speed_type` tinyint(1) NOT NULL DEFAULT '0',
  `s_hud_temp` tinyint(1) NOT NULL DEFAULT '0',
  `s_hud_bg` float NOT NULL DEFAULT '0.5',
  `s_hud_raycast` tinyint(1) NOT NULL DEFAULT '1',
  `s_hud_restart` tinyint(1) NOT NULL DEFAULT '0',
  `s_hud_cursor` tinyint(1) NOT NULL DEFAULT '1',
  `s_hud_notify` tinyint(1) NOT NULL DEFAULT '1',
  `s_hud_quest` tinyint(4) NOT NULL DEFAULT '1',
  `s_hud_keys` tinyint(1) NOT NULL DEFAULT '1',
  `s_chat_font` varchar(32) NOT NULL DEFAULT 'Roboto',
  `s_chat_font_s` int(11) NOT NULL DEFAULT '12',
  `s_chat_font_w` int(11) NOT NULL DEFAULT '400',
  `s_chat_font_o` tinyint(1) NOT NULL DEFAULT '0',
  `s_chat_font_l` int(11) NOT NULL DEFAULT '14',
  `s_chat_bg_s` int(11) NOT NULL DEFAULT '1',
  `s_chat_bg_o` float NOT NULL DEFAULT '0.5',
  `s_chat_opacity` int(11) NOT NULL DEFAULT '1',
  `s_chat_width` int(11) NOT NULL DEFAULT '30',
  `s_chat_height` int(11) NOT NULL DEFAULT '10',
  `s_chat_timeout` int(11) NOT NULL DEFAULT '7',
  `s_voice_vol` float NOT NULL DEFAULT '1',
  `s_clipset` varchar(32) NOT NULL DEFAULT '',
  `s_bind_do` int(11) NOT NULL DEFAULT '71',
  `s_bind_inv` int(11) NOT NULL DEFAULT '73',
  `s_bind_inv_world` int(11) NOT NULL DEFAULT '192',
  `s_bind_seat` int(11) NOT NULL DEFAULT '88',
  `s_bind_passanger` int(11) NOT NULL DEFAULT '0',
  `s_bind_belt` int(11) NOT NULL DEFAULT '88',
  `s_bind_lock` int(11) NOT NULL DEFAULT '76',
  `s_bind_engine` int(11) NOT NULL DEFAULT '66',
  `s_bind_phone` int(11) NOT NULL DEFAULT '79',
  `s_bind_stopanim` int(11) NOT NULL DEFAULT '122',
  `s_bind_voice` int(11) NOT NULL DEFAULT '78',
  `s_bind_voice_radio` int(11) NOT NULL DEFAULT '20',
  `s_bind_voice_walkie` int(11) NOT NULL DEFAULT '89',
  `s_bind_voice_en` int(11) NOT NULL DEFAULT '0',
  `s_bind_pnv` int(11) NOT NULL DEFAULT '78',
  `s_bind_cloth` int(11) NOT NULL DEFAULT '0',
  `s_bind_cloth2` int(11) NOT NULL DEFAULT '0',
  `s_bind_megaphone` int(11) NOT NULL DEFAULT '66',
  `s_bind_firemod` int(11) NOT NULL DEFAULT '66',
  `s_bind_fingerpoint` int(11) NOT NULL DEFAULT '66',
  `s_bind_helicam` int(11) NOT NULL DEFAULT '220',
  `s_bind_helicam_vision` int(11) NOT NULL DEFAULT '186',
  `s_bind_helicam_lock` int(11) NOT NULL DEFAULT '191',
  `s_bind_helilight` int(11) NOT NULL DEFAULT '190',
  `s_bind_weapon_slot0` int(11) NOT NULL DEFAULT '0',
  `s_bind_weapon_slot1` int(11) NOT NULL DEFAULT '0',
  `s_bind_weapon_slot2` int(11) NOT NULL DEFAULT '0',
  `s_bind_weapon_slot3` int(11) NOT NULL DEFAULT '0',
  `s_bind_weapon_slot4` int(11) NOT NULL DEFAULT '0',
  `s_bind_weapon_slot5` int(11) NOT NULL DEFAULT '0',
  `s_bind_animations_all` int(11) NOT NULL DEFAULT '0',
  `s_bind_animations_0` int(11) NOT NULL DEFAULT '0',
  `s_bind_animations_1` int(11) NOT NULL DEFAULT '0',
  `s_bind_animations_2` int(11) NOT NULL DEFAULT '0',
  `s_bind_animations_3` int(11) NOT NULL DEFAULT '0',
  `s_bind_animations_4` int(11) NOT NULL DEFAULT '0',
  `s_bind_animations_5` int(11) NOT NULL DEFAULT '0',
  `s_bind_animations_6` int(11) NOT NULL DEFAULT '0',
  `s_bind_veh_menu` int(11) NOT NULL DEFAULT '50',
  `s_bind_player_menu` int(11) NOT NULL DEFAULT '0',
  `s_bind_voice_reload` int(11) NOT NULL DEFAULT '0',
  `s_bind_show_hud` int(11) NOT NULL DEFAULT '0',
  `s_bind_hud_pos` int(11) NOT NULL DEFAULT '0',
  `s_show_id` tinyint(1) NOT NULL DEFAULT '1',
  `s_show_v_id` tinyint(1) NOT NULL DEFAULT '0',
  `s_load_model` tinyint(1) NOT NULL DEFAULT '0',
  `s_pos` varchar(1024) NOT NULL DEFAULT '[]',
  `s_menu_sound` tinyint(1) NOT NULL DEFAULT '1',
  `s_menu_font` varchar(64) NOT NULL DEFAULT 'RobotoLight',
  `s_menu_border` int(11) NOT NULL DEFAULT '8',
  `s_menu_opacity` int(11) NOT NULL DEFAULT '1',
  `s_menu_color` int(11) NOT NULL DEFAULT '0',
  `s_menu_width` int(11) NOT NULL DEFAULT '400',
  `s_menu_height` int(11) NOT NULL DEFAULT '350',
  `s_map_house_b` int(11) NOT NULL DEFAULT '0',
  `s_map_house_f` int(11) NOT NULL DEFAULT '0',
  `s_map_condo` int(11) NOT NULL DEFAULT '0',
  `s_map_yacht` int(11) NOT NULL DEFAULT '0',
  `s_map_tt` int(11) NOT NULL DEFAULT '0',
  `s_map_ghetto` int(11) NOT NULL DEFAULT '0',
  `s_map_spawns` int(11) NOT NULL DEFAULT '0',
  `s_mute_lvl` int(11) NOT NULL DEFAULT '0',
  `pos_x` float NOT NULL DEFAULT '0',
  `pos_y` float NOT NULL DEFAULT '0',
  `pos_z` float NOT NULL DEFAULT '0',
  `rotation` float NOT NULL DEFAULT '0',
  `st_order_atm_f` int(11) NOT NULL DEFAULT '0',
  `st_order_atm_d` int(11) NOT NULL DEFAULT '0',
  `st_order_drug_f` int(11) NOT NULL DEFAULT '0',
  `st_order_drug_d` int(11) NOT NULL DEFAULT '0',
  `st_order_lamar_f` int(11) NOT NULL DEFAULT '0',
  `st_order_lamar_d` int(11) NOT NULL DEFAULT '0',
  `st_order_lamarm_f` int(11) NOT NULL DEFAULT '0',
  `st_order_lamarm_d` int(11) NOT NULL DEFAULT '0',
  `st_death` int(11) NOT NULL DEFAULT '0',
  `st_kill` int(11) NOT NULL DEFAULT '0',
  `st_jail` int(11) NOT NULL DEFAULT '0',
  `st_crime` int(11) NOT NULL DEFAULT '0',
  `st_shoots` int(11) NOT NULL DEFAULT '0',
  `st_walk` int(11) NOT NULL DEFAULT '0',
  `st_run` int(11) NOT NULL DEFAULT '0',
  `st_drive` int(11) NOT NULL DEFAULT '0',
  `st_fly` int(11) NOT NULL DEFAULT '0',
  `st_swim` int(11) NOT NULL DEFAULT '0',
  `st_capt` int(11) NOT NULL DEFAULT '0',
  `st_capt_win` int(11) NOT NULL DEFAULT '0',
  `st_capt_m` int(11) NOT NULL DEFAULT '0',
  `st_capt_m_win` int(11) NOT NULL DEFAULT '0',
  `job_three` int(11) NOT NULL DEFAULT '0',
  `job_build` int(11) NOT NULL DEFAULT '0',
  `job_bus` int(11) NOT NULL DEFAULT '0',
  `job_photo` int(11) NOT NULL DEFAULT '0',
  `job_mail` int(11) NOT NULL DEFAULT '0',
  `job_taxi` int(11) NOT NULL DEFAULT '0',
  `job_gr6` int(11) NOT NULL DEFAULT '0',
  `job_truck` int(11) NOT NULL DEFAULT '0',
  `rating_racer_mmr` int(11) NOT NULL DEFAULT '1000',
  `rating_racer_count` int(11) NOT NULL DEFAULT '0',
  `rating_racer_win` int(11) NOT NULL DEFAULT '0',
  `rating_duel_mmr` int(11) NOT NULL DEFAULT '1000',
  `rating_duel_count` int(11) NOT NULL DEFAULT '0',
  `rating_duel_win` int(11) NOT NULL DEFAULT '0',
  `referer` varchar(128) NOT NULL DEFAULT '',
  `promocode` varchar(64) NOT NULL DEFAULT '',
  `parthner_promocode` varchar(64) NOT NULL DEFAULT '',
  `vip_type` int(11) NOT NULL DEFAULT '0',
  `vip_time` int(11) NOT NULL DEFAULT '0',
  `quest_role_0` int(11) NOT NULL DEFAULT '0',
  `quest_standart` int(11) NOT NULL DEFAULT '0',
  `quest_gang` int(11) NOT NULL DEFAULT '0',
  `quests` text,
  `recepts` varchar(1000) NOT NULL DEFAULT '[]',
  `achiv` varchar(1000) NOT NULL DEFAULT '[]',
  `date_ban` int(11) NOT NULL DEFAULT '0',
  `count_aask` int(11) NOT NULL DEFAULT '0',
  `count_hask` int(11) NOT NULL DEFAULT '0',
  `is_custom` tinyint(1) NOT NULL DEFAULT '0',
  `is_take_vehicle` tinyint(1) NOT NULL DEFAULT '0',
  `is_take_vehicle_2` tinyint(1) NOT NULL DEFAULT '0',
  `is_online` tinyint(1) NOT NULL DEFAULT '0',
  `donate_pack1` tinyint(1) NOT NULL DEFAULT '0',
  `donate_pack2` tinyint(1) NOT NULL DEFAULT '0',
  `donate_pack3` tinyint(1) NOT NULL DEFAULT '0',
  `rp_biography` varchar(350) DEFAULT NULL,
  `rp_weight` int(11) DEFAULT NULL,
  `rp_growth` int(11) DEFAULT NULL,
  `rp_avatar` varchar(50) DEFAULT NULL,
  `rp_character` varchar(50) DEFAULT NULL,
  `rp_diseases` varchar(50) DEFAULT NULL,
  `rp_qualities` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `user_dating` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_owner` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `user_name` varchar(64) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `veh_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `display_name` varchar(64) NOT NULL DEFAULT '',
  `m_name` varchar(64) NOT NULL DEFAULT '',
  `n_name` varchar(64) NOT NULL DEFAULT '',
  `class_name` varchar(64) NOT NULL DEFAULT '',
  `class_name_ru` varchar(64) NOT NULL DEFAULT '',
  `hash` int(11) NOT NULL DEFAULT '0',
  `stock` int(11) NOT NULL DEFAULT '0',
  `stock_full` int(11) NOT NULL DEFAULT '0',
  `fuel_full` int(11) NOT NULL DEFAULT '0',
  `fuel_min` int(11) NOT NULL DEFAULT '0',
  `fuel_type` int(11) NOT NULL DEFAULT '0',
  `type` int(11) NOT NULL DEFAULT '0',
  `price` double NOT NULL DEFAULT '0',
  `price_dc` int(11) NOT NULL DEFAULT '0',
  `sb` int(11) NOT NULL DEFAULT '0',
  `sm` int(11) NOT NULL DEFAULT '1',
  `tm` tinyint(1) NOT NULL DEFAULT '0',
  `temp` tinyint(1) NOT NULL DEFAULT '1',
  `anchor` tinyint(1) NOT NULL DEFAULT '0',
  `lck` tinyint(1) NOT NULL DEFAULT '0',
  `sbag` int(11) NOT NULL DEFAULT '5000',
  `trucker` int(11) NOT NULL DEFAULT '0',
  `t_main` int(11) NOT NULL DEFAULT '0',
  `t_color` tinyint(1) NOT NULL DEFAULT '1',
  `t_inside` int(11) NOT NULL DEFAULT '1',
  `t_chip` int(11) NOT NULL DEFAULT '1',
  `t_vis` int(11) NOT NULL DEFAULT '1',
  `t_module` int(11) NOT NULL DEFAULT '1',
  `t_extra` int(11) NOT NULL DEFAULT '1',
  `t_wheels` tinyint(1) NOT NULL DEFAULT '1',
  `t_block` varchar(1024) NOT NULL DEFAULT '{}',
  `t_neon` tinyint(1) NOT NULL DEFAULT '1',
  `t_light` tinyint(1) NOT NULL DEFAULT '1',
  `r_speed` int(11) NOT NULL DEFAULT '0',
  `a_spawn` int(11) NOT NULL DEFAULT '1',
  `s_park` tinyint(1) NOT NULL DEFAULT '0',
  `ticket_z` int(11) NOT NULL DEFAULT '0',
  `lc` tinyint(1) NOT NULL DEFAULT '1',
  `blt` tinyint(1) NOT NULL DEFAULT '1',
  `siren` int(11) NOT NULL DEFAULT '0',
  `k_block` varchar(64) NOT NULL DEFAULT '[]',
  `addon` enum('default', 'castom') NOT NULL DEFAULT 'default',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE IF NOT EXISTS `yachts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL DEFAULT '',
  `price` int(11) NOT NULL DEFAULT '0',
  `user_id` int(11) NOT NULL DEFAULT '0',
  `user_name` varchar(256) NOT NULL DEFAULT '',
  `x` float NOT NULL DEFAULT '0',
  `y` float NOT NULL DEFAULT '0',
  `z` float NOT NULL DEFAULT '0',
  `rot` float NOT NULL DEFAULT '0',
  `tax_score` int(11) NOT NULL DEFAULT '0',
  `tax_money` float NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;