export default function Otp(){
    return(
        <div class="grid grid-rows-3 gap-4 place-items-center bg-gray-600">
            <p>enter the otp below</p>
            <div id="boxes" class="grid grid-cols-4" >
                <input type="number" id="1" class="m-3 h-5 w-5"/>
                <input type="number" id="2" class="m-3 h-5 w-5"/>
                <input type="number" id="3" class="m-3 h-5 w-5"/>
                <input type="number" id="4" class="m-3 h-5 w-5"/> 
            </div>
        </div>
    )
}