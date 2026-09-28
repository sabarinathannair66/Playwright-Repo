import XLSX from 'xlsx'

export function getData(row,column){
    const workbook=XLSX.readFile('testdata/Testingdata.xlsx')
    const sheet=workbook.Sheets['LoginPage']
    const celladdress=XLSX.utils.encode_cell({
        r:row-1,
        c:column-1
    }) 
    const cell=sheet[celladdress]
    return cell?cell.v:undefined
}
