function f1(){
    const bill = document.getElementById('bill');
    const tip = document.getElementById('tip');
    const totalP = document.getElementById('totalP');

    const billValue = parseFloat(bill.value);
    const tipValue = parseFloat(tip.value);

        let sum = billValue * (1 + tipValue / 100);
        totalP.innerHTML = "Total:" + sum.toFixed(2);
}