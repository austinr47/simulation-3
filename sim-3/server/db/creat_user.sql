INSERT INTO users_sim_3 (auth0_id, email, pictureUrl, name) VALUES ($1, $2, $3, $4)
RETURNING *;