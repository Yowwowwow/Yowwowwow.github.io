function getEntry(){
    const s = window.location.href;
    if(!s.includes('?') || (s.includes('#') && s.indexOf('#')<s.indexOf('?')))return "";
    let end = s.length;
    if(s.includes('&'))end = s.indexOf('&');
    if(s.includes('#') && s.indexOf('#')<end)end = s.indexOf('#');
    return decodeURI(s.substring(s.indexOf('?')+1, end));
}
function getTesttxt(func){
    fetch("test.txt").then(x => x.text()).then(y => func(y));
}
function gettxt(file, func){
    fetch(file.concat(".txt")).then(x => x.text()).then(y => func(y));
}
function setEntry(w){
    const s = window.location.href;
    let start = s.length;
    if(s.includes('?'))start = s.indexOf('?');
    if(s.includes('#') && s.indexOf('#')+1<start)start = s.indexOf('#');
    let end = s.length;
    if(s.includes('&'))end = s.indexOf('&');
    if(s.includes('#') && s.indexOf('#')<end)end = s.indexOf('#');
    let head = s.substring(0, start);
    let tail = s.substring(end, s.length);
    history.pushState({}, "", head.concat("?", w, tail));
}