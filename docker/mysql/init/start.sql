create table postcode (
    zip VARCHAR(100) COMMENT '郵便番号',
    pref_kana VARCHAR(100) COMMENT '都道府県(カナ)',
    city_kana VARCHAR(100) COMMENT '市区町村(カナ)',
    town_kana VARCHAR(100) COMMENT '町内(カナ)',
    pref VARCHAR(100) COMMENT '都道府県',
    city VARCHAR(100) COMMENT '市区町村',
    town VARCHAR(100) COMMENT '町内'
);

ALTER TABLE postcode ADD INDEX idx_zip(zip);

LOAD DATA LOCAL infile '/docker-entrypoint-initdb.d/KEN_ALL.CSV' INTO table postcode FIELDS terminated by ',' enclosed by '"' escaped by '"';

GRANT ALL PRIVILEGES ON postcode.* TO user@localhost IDENTIFIED BY 'password' WITH GRANT OPTION;

FLUSH PRIVILEGES;

