-- Stadard DELIMITER is $$

-- Counters statistics table
CREATE TABLE counters_statistics (
    timestamp BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL ,
    value INT NOT NULL ,
PRIMARY KEY (timestamp, name) )$$
