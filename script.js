const calculateTemp=()=>{
    const numberTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_convert');
    const valueTemp=temp_convert.options[tempSelected.selectedIndex].value;

    const celToFah=(cel)=>{
        let tempinfah=Math.round((cel *9/5)+32);
        return tempinfah;
    }
    const fahToCel=(fah)=>{
        let tempincel=Math.round((fah-32)*5/9);
        return tempincel;
    }

    let result;

    if(valueTemp=='cel'){
        result=celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${result}°Fahrenheit`;
    }else{
        result=fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML=`${result}°Celcius`;
    }
}