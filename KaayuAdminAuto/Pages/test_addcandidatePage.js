import { Selector } from 'testcafe';

class AddCandidatePage {
    // ... other methods ...

    async getTableData() {
        // Assuming the table has a specific structure with rows and columns
        const rows = Selector('#candidates-table > tbody');

        // Map the data from each row and return an array
        const tableData = await rows.map(async row => {
            const columns = row.find('td');

            return {
                firstName: await columns.nth(0).innerText,
                lastName: await columns.nth(1).innerText,
                phoneNumber: await columns.nth(2).innerText,
                email: await columns.nth(3).innerText,
                country: await columns.nth(4).innerText,
                state: await columns.nth(5).innerText,
                city: await columns.nth(6).innerText,
                locality: await columns.nth(7).innerText,
            };
        });

        return await tableData;
    }

    // ... other methods ...
}

export default new AddCandidatePage();
