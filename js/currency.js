document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#currency-form').onsubmit = ()=>{
        const base = document.getElementById('currency-from').value;
        fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                const amount = document.querySelector("#input-amount").value;
                const currencyTo = document.getElementById('currency-to').value;
                const rate = data.rates[currencyTo];
                function convert(){
                    return amount * rate;
                }
                if(amount == 0 )
                {
                    document.querySelector('.display-result').innerHTML = `$ Please Enter an Amount $`;
                    return false
                }
                document.querySelector('.display-result').innerHTML = `${amount} ${base.toUpperCase()} equal to ${currencyTo} ${convert().toFixed(2)}`;
            })
        .catch((error) =>{
            console.log("Error: ", error);
        });
        return false;
    };
});

