let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>
{
    button.addEventListener('click', (button_pressed)=>
    {
        if(button_pressed.target.innerHTML == '=')
        {
            string = eval(string);
            document.querySelector('.screen').value = string;
        }
        else if(button_pressed.target.innerHTML == 'C')
        {
            string = ""
            document.querySelector('.screen').value = string;
        }
        else
        {
            string = string + button_pressed.target.innerHTML;
            document.querySelector('.screen').value = string;
        }
    })
})