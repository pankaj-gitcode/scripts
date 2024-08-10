//1. Match a simple string
const regEx1 = ()=>{
    const str = "this is Jaipur";
    const regex1 = /\w/;  //True || \w, u, o, r, i, pur, etc... can be tested whether these chars exist in "str" or not
    const regex2 = /ia/;  //False
    const regex3 = /ai/;  //True
    const res = regex2.test(str);
    return res;
}
// console.log(regEx1());
//.2. Match any character=====> Not understood, NEED TO LOOK
const regEx2 = ()=>{
    const str1 = "hello";
    const str2 = "Lorem ipsum dolor sit amet consectetur";
    const regex1 = /hel.o/;  //means whole string(hel o) should be there and only the dot(.) part will be replaced with .
    const regex2 = /i...m/;  // whole string is: 'ipsum' regEx: from start:/Lorem...till 'i' now triple dots means 'psu' then 'm', so matched 'ipsum'
    const regex3 = /s../;
    const regEXFromstr2 = /l.*/;

    const res2 = regEXFromstr2.test(str2);
    return res2
    
}
// console.log(regEx2())

//.3. Match start(^) & end (&) of String:
const regEx3 = ()=>{
    const str = "hel7lo";
    const str1 = "image_1.png"
    const regex = /^[A-Za-z0-9]+$/;
    const regex1 = /^[A-Za-z0-9_0-9.A-Za-z]+$/;
    console.log(str1.match(regex1));
    return regex1.test(str1);
}
// console.log("regEx3: ",regEx3());

const regEx4 = ()=>{
    const str = "image_1.png";
    const regEx = /^[A-Za-z_0-9.A-Za-z]+$/
    const res = regEx.test(str);
    const resMatch = str.match(regEx);
    return [{res, resMatch}]
}
// console.log("regEx4: ", regEx4());

const regEx5 = ()=>{
    const str = '23-05-2024';
    const regEx = /^[0-9-0-9-0-9]+$/;
    const regEx2 = /^\d{2}-\d{2}-\d{2,4}$/
    const res = regEx2.test(str)
    const resMatch = str.match(regEx2);
    return [{res, resMatch}];
}
// console.log(regEx5());


