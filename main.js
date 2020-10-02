
//kita membuat sebuah fungsi yang akan
//memunculkan MODAL

const showModal = ()=>{

        //kita ambil element yang akan di SHOW
        let modal = document.querySelector('.modalMenu')

        //kita atur style dari element tersebut
        //jadikan dia terlihat
        modal.style.display = 'flex'
}

//kita buat fungsi untuk hide element
const hideModal = ()=>{

    //kita ambil elment yang akan di SHOW
    let modal = document.
    querySelector('.modalMenu')

    //kita atur STYLE dari element tersebut
    //jadikan dia tersembunyi
    modal.style.display = 'none'
}

//kita buat fungsi hide alert
const hideaboutAlert = ()=>{
    //kita ambil elment yang akan di SHOW
    let aboutAlert = document.querySelector('.aboutAlert')

    //kita atur style dari element tersebut
        //jadikan dia terlihat
        aboutAlert.style.display ='none'
}

//kita akan buat elemen html
//menggunakan javascript

//Tangkap element HTML
let gallery = document.getElementById('container-gallery')
let img = 100

//INSERT HTML SYNTAX into GALLERY

for(let i = 0; i <= 35; i++) {

    gallery.innerHTML += 
        `
        <img src="https://picsum.photos/seed/${img++}/160">
        `
}