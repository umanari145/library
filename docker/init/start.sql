create table postcode (
    id int not null auto_increment primary key,
    zip VARCHAR(100) COMMENT '郵便番号',
    pref VARCHAR(100) COMMENT '都道府県',
    city VARCHAR(100) COMMENT '市区町村',
    town VARCHAR(100) COMMENT '町内',
    pref_kana VARCHAR(100) COMMENT '都道府県',
    city_kana VARCHAR(100) COMMENT '市区町村',
    town_kana VARCHAR(100) COMMENT '町内',
);

ALTER TABLE postcode ADD INDEX idx_zip(zip);

