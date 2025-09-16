function myPromise(){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
            resolve([1,2,3,4])
        }, 3000);
	})
}

myPromise().then((data)=>{
    const evenNumbers=data.filter((Element,i)=>{
        if(Element%2==0){
            return true
        }
    })
    setTimeout(() => {
        document.getElementById('output').innerText = evenNumbers.join(',');
    }, 1000);
    return evenNumbers
}).then((data)=>{
    const multiplied=data.map((Element,i)=>{
        return Element*2
    })
    setTimeout(() => {
        document.getElementById('output').innerText = multiplied.join(',');
    }, 2000);
})
