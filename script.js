const tbudget=document.getElementById('t_budget');
const budget_btn=document.getElementById('btn_budget');

const ename=document.getElementById('exp_name');
const e_amount=document.getElementById('exp_amount');
const exp_btn=document.getElementById('btn_exp');

const tb=document.getElementById('total_budget');
const te=document.getElementById('total_exp');
const bal=document.getElementById('balance');

const elist=document.getElementById('exp_list');
const clear_btn=document.getElementById('btn_clear');
const elist_name=document.getElementById('list_name');
const elist_amount=document.getElementById('list_amount');

var total_Exp=0;
let total=0;
    
//to add value to total budget

function displayBudget() {
    total=tbudget.value;
    // console.log(total);
    tb.innerHTML=tbudget.value;
    tbudget.value="";
}
budget_btn.addEventListener('click',displayBudget());

// function expList() {
//     elist_name.innerHTML=ename.value;
//     elist_amount.innerHTML=e_amount.value;
// }
// exp_btn.addEventListener('click',expList);

//to add values to the expense list

function expenseList() {

    //get html table
    //0=first table
    var table=document.getElementsByTagName('table')[0];

    //add new empty row to the table
    //0= in the top
    var newRow=table.insertRow(table.rows.length);

    //add cells to the row
    var list_name=newRow.insertCell(0);
    var list_amount=newRow.insertCell(1);

    //add values to the cell
    list_name.innerHTML=ename.value;
    list_amount.innerHTML=e_amount.value;
    
    //to calculate/add expense
    total_Exp=total_Exp+parseInt(e_amount.value);
    te.innerText=total_Exp;

    //to calculate balance
    const totalBalance=total-total_Exp;
    bal.innerText=totalBalance;
    // var bal1=parseInt(tb.value);
    // var bal2=parseInt(te.value);
    // balance=bal1-bal2;
    // bal.innerText=balance;

    //to clear when btn click
    ename.value="";
    e_amount.value="";

    
}
// exp_btn.addEventListener('click',expenseList());

function clearBox(elist) {
    elist.innerHTML="";
}
clear_btn.addEventListener('click',clearBox());
