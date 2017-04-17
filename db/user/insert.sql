insert into users (name_first, name_last, email)
  values ($1, $2, $3)
  returning *;
