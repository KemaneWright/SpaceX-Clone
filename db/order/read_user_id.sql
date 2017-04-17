select * from orders where user_id = $1 and completed_date is not null;
