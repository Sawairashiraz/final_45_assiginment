function myAlbum(artistName: string,albumTitle: string){
    return{artistName,albumTitle}
}
let album1=myAlbum("Ali","janoon");
let album2=myAlbum("shaz","rung");
let album3=myAlbum("noor","azada parinda");

console.log(album1);
console.log(album2);
console.log(album3);
// number of tracks
function myAlbum2(artistName:string,albumTitle:string, numberOfTracks?: number){
    return{artistName,albumTitle,numberOfTracks}
}

let album4 = myAlbum2("ali", "dil ha tmhara",30);
let album5 = myAlbum2("shaz", "dhoom machaly",55);
let album6 = myAlbum2("noor", "khani suno",45);
console.log(album4);
console.log(album5);
console.log(album6);

