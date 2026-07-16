function parsenipi(tar=0, height="24px", ori="v"){
    let worh = ori=="v" ? "width" : "height";
    const nipi = (tar==0)?document.getElementsByClassName("nipi")[0]:tar;
    //const height = "24px";
    let og = nipi.innerHTML;
    let ans = "";
    let stk = "";
    for(let i=0;i<og.length;i++){
        if(og[i]=='<'){ans += "<br>"; stk = ""; i += 3; continue;}
        if(og[i]==' '){ans += " "; stk = ""; continue;}
        if(stk.length==0){
            if(og[i]=='a' || og[i]=='i' || og[i]=='u')
            {
                ans += `<img src="svgs/${og[i]}.svg" ${worh}="${height}">`;
            }
            else{
                stk = og[i];
            }
        }
        else{
            ans += `<img src="svgs/${stk}${og[i]}.svg" ${worh}="${height}">`;
            stk = "";
        }
    }
    nipi.innerHTML = ans;
}