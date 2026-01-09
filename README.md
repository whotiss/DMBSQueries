
---

## MongoDB Scripts

### 1. insert_100_records.js
- Inserts **100 generated customer records** into the `customers` collection.
- Used to create a controlled dataset for accuracy and integrity validation.

### 2. count_documents.js
- Uses `countDocuments()` to verify the total number of records.
- Supports **record count accuracy verification**.

### 3. attribute_validation.js
- Retrieves selected fields (`_id`, `name`, `email`) from documents.
- Used to confirm **attribute-level integrity and schema consistency**.

---

## Oracle (SQL / NewSQL) Scripts

### 1. create_table.sql
- Creates the `customers` table with primary key and attribute definitions.

### 2. insert_100_records.sql
- Inserts **100 generated records** using a PL/SQL loop.
- Ensures consistent dataset size for comparison with NoSQL results.

### 3. count_records.sql
- Uses `SELECT COUNT(*)` to verify record count accuracy.
- Confirms data completeness and integrity.

---

## Validation Methodology
The following validation techniques were applied consistently across both database systems:

- **Record Count Accuracy Verification**
  - Confirms that the number of retrieved records matches the original dataset size.
  - Accuracy calculated as:
  
    Accuracy (%) = (Retrieved Rows / Total Rows) × 100

- **Attribute-Level Integrity Verification**
  - Confirms that essential fields and schema structures remain intact after database operations.

---

## How to Reproduce Results (Optional)
1. Set up MongoDB (local or MongoDB Atlas) and Oracle Database.
2. Execute the scripts in the order listed within each database folder.
3. Run the record count scripts to verify dataset size.
4. Compare outputs with results reported in the final assignment.

---

## Academic Integrity Statement
All scripts in this repository were **executed or logically validated** as part of the project workflow.  
The repository is provided to ensure **academic transparency and result verifiability**, in accordance with course requirements.

---

## Course Information
- Course: Database Management Systems
- Assignment: Final Project
- Institution: [Sunway University]
- Work done by: Azan, Michelle, Yeap
