let output=document.getElementById("input")

function show(num){
	// console.log(output.value)
	output.value =output.value + num
	
}

function calculate(){
	try{
		output.value=eval(output.value)
	}
	catch{
		output.value="Error"
	}
}

function clr(){
	output.value=""
}
function remove(){
	output.value=output.value.slice(0,-1)

}