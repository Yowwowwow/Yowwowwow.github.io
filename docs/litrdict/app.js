function getEntry(){
    const s = window.location.href;
    return s.includes('?')?decodeURI(s.substring(s.indexOf('?')+1, s.includes('&')?s.indexOf('&'):s.length)):"";
}
function getTesttxt(){
    fetch("test.txt").then(x => x.text()).then(y => {return y});
}