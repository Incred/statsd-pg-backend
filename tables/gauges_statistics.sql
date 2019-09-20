-- Stadard DELIMITER is $$

-- Gauges statistics table
CREATE  TABLE gauges_statistics (
    timestamp BIGINT NOT NULL,
    name VARCHAR(255) NOT NULL,
    value INT NOT NULL,
PRIMARY KEY (timestamp, name) )$$
