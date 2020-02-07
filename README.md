# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
#ChatSpace DB設計
##userテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
###Association
_has_many :messages
_has_many :groups

##massegesテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
###Association
_belongs_to: user
_belpngs_to: group

##groupsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false, foreign_key: true|
###Association
_has_many: users_groups
_has_many:users, trough: :users_groups

##users_groupsテーブル
||Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
###Association
_belongs_to: user
_belongs_to: group


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
