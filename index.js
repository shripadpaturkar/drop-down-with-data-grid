const data = [{
        col1: 'Shripad',
        col2: 'Paturkar',
        col3: '22',
        col4: 'Bhandara',
        col5: 'MCA',
        col6: 'asd',
        col7: 'asdad',
        module: 'Module A'
    },
    {
        col1: 'Ram',
        col2: 'Paturkar',
        col3: '22',
        col4: 'Bhandara',
        col5: 'MCA',
        col6: 'asd',
        col7: 'asdad',
        module: 'Module A'
    },
    {
        col1: 'Sham',
        col2: 'Paturkar',
        col3: '22',
        col4: 'Bhandara',
        col5: 'MCA',
        col6: 'asd',
        col7: 'asdad',
        module: 'Module C'
    },
    {
        col1: 'Ram',
        col2: 'Paturkar',
        col3: '22',
        col4: 'Bhandara',
        col5: 'MCA',
        col6: 'asd',
        col7: 'asdad',
        module: 'Module A'
    },
    {
        col1: 'Sham',
        col2: 'Paturkar',
        col3: '22',
        col4: 'Bhandara',
        col5: 'MCA',
        col6: 'asd',
        col7: 'asdad',
        module: 'Module C'
    },
    {
        col1: 'Ram',
        col2: 'Paturkar',
        col3: '22',
        col4: 'Bhandara',
        col5: 'MCA',
        col6: 'asd',
        col7: 'asdad',
        module: 'Module A'
    },
    {
        col1: 'Sham',
        col2: 'Paturkar',
        col3: '22',
        col4: 'Bhandara',
        col5: 'MCA',
        col6: 'asd',
        col7: 'asdad',
        module: 'Module C'
    }
    
];

const tableBody = document.querySelector('#myTable tbody');
const moduleSelect = document.querySelector('#moduleSelect');

function populateTable() {
    // Clear table body
    tableBody.innerHTML = '';

    // Get selected module
    const selectedModule = moduleSelect.value;

    // Filter data by selected module
    const filteredData = selectedModule ? data.filter(rowData => rowData.module === selectedModule) : data;

    // Add rows to table body
    filteredData.forEach(rowData => {
        const row = document.createElement('tr');

        for (const key in rowData) {
            if (key === 'module') continue; // Skip module column
            const cell = document.createElement('td');
            cell.textContent = rowData[key];
            row.appendChild(cell);
        }

        const downloadCell = document.createElement('td');
        const downloadButton = document.createElement('button');
        downloadButton.textContent = 'Download';
        downloadButton.classList.add("downloadBtn");
        downloadCell.appendChild(downloadButton);
        row.appendChild(downloadCell);

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add("deleteBtn");
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        tableBody.appendChild(row);
    });
}

moduleSelect.addEventListener('change', populateTable);

// Populate table on page load
populateTable();