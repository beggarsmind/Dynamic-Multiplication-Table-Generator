// multiplication table

document.getElementById('generateTable').addEventListener('click', () => {
  const tableNumber = parseInt(document.getElementById('tableNumber').value);
  const startRange = parseInt(document.getElementById('startRange').value);
  const endRange = parseInt(document.getElementById('endRange').value);

  if (
    isNaN(tableNumber) ||
    isNaN(startRange) ||
    isNaN(endRange) ||
    startRange > endRange
  ) {
    alert(
      'Please enter valid numbers,and ensure start range is less than or equal to end range.'
    );
    return;
  }
  const outputTable = document.getElementById('outputTable');
  outputTable.innerHTML = '';
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  const header = document.createElement('th');
  header.colSpan = 2;
  header.textContent = `Multiplication Table for ${tableNumber}`;
  headerRow.appendChild(header);
  table.appendChild(headerRow);

  for (let i = startRange; i <= endRange; i++) {
    const row = document.createElement('tr');
    const data1 = document.createElement('td');
    const data2 = document.createElement('td');
    data1.textContent = `${i + ' '}x${' ' + tableNumber + ' ='}`;
    data2.textContent = `${tableNumber * i}`;
    row.appendChild(data1);
    row.appendChild(data2);
    table.appendChild(row);
  }
  outputTable.appendChild(table);
});

// downloadCSV file

document.getElementById('downloadCSV').addEventListener('click', () => {
  const tableNumber = parseInt(document.getElementById('tableNumber').value);
  const startRange = parseInt(document.getElementById('startRange').value);
  const endRange = parseInt(document.getElementById('endRange').value);

  if (
    isNaN(tableNumber) ||
    isNaN(startRange) ||
    isNaN(endRange) ||
    startRange > endRange
  ) {
    alert(
      'please enter valid numbers,and ensure start range is less then or equal to end range.'
    );
    return;
  }
  let csvContent = `data:text/csv;
  charset=utf-8,Multiplication Table for ${tableNumber}\n\n`;
  for (let i = startRange; i <= endRange; i++) {
    csvContent += `${i}x${tableNumber}=${tableNumber * i}\n`;
  }

  const encodeUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodeUri);
  link.setAttribute('download', `Multiplication_Table_${tableNumber}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
