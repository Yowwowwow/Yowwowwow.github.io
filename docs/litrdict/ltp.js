const reps = { //replacements
    "[":"action mark open.svg",
    "]":"action mark close.svg",
    "|":"ba.svg",
    "^B":"b_a.svg",
    "fal":"cgu_.svg",
    ",":"comma.svg",
    "^-":"do kuyei.svg",
    "-":"do.svg",
    "^@":"dra kuyei.svg",
    "@":"dra.svg",
    "^+":"dsan kuyei.svg",
    "+":"dsan.svg",
    " ":"dwua.svg",
    "e_*":"e_ kuyei.svg",
    "､":"enumeration mark.svg",
    "_,":"enumeration mark.svg",
    "5":"fo.svg",
    "7":"ga.svg",
    "~":"gepf.svg",
    "^hau_ang":"hau_ang kuyei.svg",
    "^he_":"he_ kuyei.svg",
    "1-":"hiou do.svg",
    "1":"hiou.svg",
    "¡":"imperative mark.svg",
    "_!":"imperative mark.svg",
    "3-":"jyun do.svg",
    "3":"jyun.svg",
    "l(":"l(coda).svg",
    "^r":"l_e.svg",
    "4-":"mu do.svg",
    "4":"mu.svg",
    "n(":"n(coda).svg",
    "2":"ne.svg",
    "=":"p_sa.svg",
    ".":"period.svg",
    "6":"ping.svg",
    "^R":"q_wo.svg",
    "8":"sye.svg",
    "^tiu tran":"tiu tran kuyei.svg",
    "¿":"whisper mark.svg",
    "_?":"whisper mark.svg",
    "^x":"x kuyei.svg",

    "v(":"v(coda).png",
    "ye(":"ye(variant).png",
    "lowerlip":"抿下脣.png",
    "endtrill":"止彈.png",

    "upperlip":"抿上脣.jpg",
    "bothlips":"抿雙脣.jpg",
    "fliplips":"翻脣.jpg"
};
const svgs = [
    "a", "ai", "an", "ang", "au",
    "b", "bb",
    "ch", "cl", "cs",
    "d", "dd", "dh", "dhs", "dr",
    "e_", "en", "eng",
    "f", "fye",
    "gg",
    "ha_", "hau_ang", "he_",
    "i",
    "j", "js",
    "k",
    "l", "lb", "lbh", "lh",
    "m", "mh",
    "miang vyei", "miang",
    "n", "ng", "ngh",
    "o", "ong", "ou",
    "p", "pf",
    "r",
    "s", "sh", "sr", "syu_",
    "t", "tf", "th", "ths", "tiu tran", "tr", "ts",
    "u",
    "v", "vm",
    "wh",
    "x",
    "ya", "ye_a", "yen", "yo", "yu", "yy",
    "zq"
];
const pngs = [
    "am", "ao",
    "cg", "ck",
    "ei", "em", "eu",
    "fp",
    "nh",
    "oi", "om", "on",
    "qh", "qk",
    "we", "wf", "wm", "wo", "wu",
    "yem", "yeng", "yeu", "yi",
    "zb", "zs", "zz"
];
const jpgs = [
    "cn", "cr",
    "db",
    "kh",
    "lg", "lr",
    "nm",
    "q",
    "tp",
    "vb",
    "wa", "wb", "wp",
    "zf", "zl", "zn", "zp", "zr", "zv", "zwf"
];
function parseltp(){
    const ltps = document.getElementsByClassName("ltp");
    const height = "24px";
    for(let fieldcount=0;fieldcount<ltps.length;fieldcount++){
        let s = ltps[fieldcount].innerHTML;
        const seps = s.split(';');
        let ans = "";
        for(let i=0;i<seps.length;i++){
            if(seps[i] in reps){
                let tmp = reps[seps[i]].slice(reps[seps[i]].length-3).concat("s");
                ans = ans.concat(`<img src="${tmp}/${reps[seps[i]]}" height="${height}">`);
            }
            else if(svgs.includes(seps[i]))ans = ans.concat(`<img src="svgs/${seps[i]}.svg" height="${height}">`);
            else if(pngs.includes(seps[i]))ans = ans.concat(`<img src="pngs/${seps[i]}.png" height="${height}">`);
            else if(jpgs.includes(seps[i]))ans = ans.concat(`<img src="jpgs/${seps[i]}.jpg" height="${height}">`);
            else if(seps[i].length>4 && seps[i].slice(seps[i].length-4)=='.')ans.concat(`<img src="misc/${seps[i]}" height="${height}">`);
            else ans = ans.concat(seps[i]);
        }
        ltps[fieldcount].innerHTML = ans;
    }
}
parseltp();
