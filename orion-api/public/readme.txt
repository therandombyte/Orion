this is a static page

const sql = require('mssql')
 
async () => {
    try {
        await sql.connect('mssql://sa:Sunday@123@MACHINE/SQLEXPRESS')
        const result = await sql.query`SELECT * FROM [WinKeeper].[dbo].[tblMetrics_BAOExecutionRecord]`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}