-- Stadard DELIMITER is $$

-- Timers statistics table
CREATE  TABLE timers_statistics (
    id BIGSERIAL PRIMARY KEY NOT NULL, 
	timestamp BIGINT NOT NULL,
	name VARCHAR(255) NOT NULL,
	value BIGINT NOT NULL
)$$
