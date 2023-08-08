const mysql = require('mysql2/promise');

// AWS RDS database credentials
const dbConfig = {
  host: 'db-instance-endpoint',
  user: 'db-username',
  password: 'db-password',
  database: 'database-name'
};

async function connect() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Connected to the database');
    return connection;
  } catch (error) {
    console.error('Connection error:', error);
    return null;
  }
}

async function createRecord(connection, data) {
  try {
    const [result] = await connection.execute('INSERT INTO your_table_name (column1, column2) VALUES (?, ?)', [data.value1, data.value2]);
    console.log('Record created with ID:', result.insertId);
  } catch (error) {
    console.error('Error creating record:', error);
  }
}

async function readRecords(connection) {
  try {
    const [results] = await connection.execute('SELECT * FROM table_name');
    console.log('Records:', results);
  } catch (error) {
    console.error('Error reading records:', error);
  }
}

async function updateRecord(connection, id, newData) {
  try {
    const [result] = await connection.execute('UPDATE table_name SET column1 = ?, column2 = ? WHERE id = ?', [newData.value1, newData.value2, id]);
    if (result.affectedRows > 0) {
      console.log('Record updated successfully');
    } else {
      console.log('Record not found');
    }
  } catch (error) {
    console.error('Error updating record:', error);
  }
}

(async () => {
  const connection = await connect();

  if (connection) {
    // Example data for CRUD operations
    const exampleData = { value1: 'new_value_1', value2: 'new_value_2' };

    // Perform CRUD operations
    await createRecord(connection, exampleData);
    await readRecords(connection);
    await updateRecord(connection, 1, exampleData);

    // Close the connection
    connection.end();
    console.log('Connection closed');
  } else {
    console.log('Database connection failed');
  }
})();
