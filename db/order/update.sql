update orders set
  completed_date = coalesce($2, completed_date),
  fulfilled = coalesce($3, fulfilled)
  where order_id = $1
  returning *;
