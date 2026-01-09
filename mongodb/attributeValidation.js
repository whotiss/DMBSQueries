// Retrieve selected fields to verify schema integrity
db.customers.find(
  {},
  { _id: 1, name: 1, email: 1, orders: 1 }
)
