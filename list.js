// const List = function(element, listItems){
// 	// sample template
// 	this.pageSize = 10;
// 	this.currentPage = 1;
// 	this.render = function(){
//                 //Empty previous entries
                
// 	    //  $(element).html('');
//                //Code to push page data
//                // Here goes your code
// 	};
// 	this.navigateFirst = function(){
//         // return Listitems[0]
//         var tb = document.getElementById('table');
//                 tb.innerHTML = " ";
        
//     };
// 	this.navigateLast = function(){
//         // return listitems[-1]
//     };
// 	this.navigatePrev = function(){
//         //currentpage--
//         // return 
//     };
// 	this.navigateNext = function(){
//         //currentpage++
//         // return 
//     };
// };


    const listobj = [{
        rollno : 1,
        name : 'first', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 2,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },
    {
        rollno : 3,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 4,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },{
        rollno : 5,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 6,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },{
        rollno : 7,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 8,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },{
        rollno : 9,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 10,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },{
        rollno : 11,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 12,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },{
        rollno : 13,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 14,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },{
        rollno : 15,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 16,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },{
        rollno : 17,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 18,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },{
        rollno : 19,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 20,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },{
        rollno : 21,
        name : 'Shivansh', 
        email : 'mail@gamil.com'
    },
    {
        rollno : 22,
        name:'Shivansh',
        email : 'mail@gmail.com'
    },
    {
        rollno : 23,
        name:'adsoijasoidjasd',
        email : 'asdsadasdas@gmail.com'
    },
    {
        rollno : 24,
        name:'adsoijasoidjasd',
        email : 'asdsadasdas@gmail.com'
    },{
        rollno : 25,
        name:'adsoijasoidjasd',
        email : 'asdsadasdas@gmail.com'
    },{
        rollno : 26,
        name:'adsoijasoidjasd',
        email : 'asdsadasdas@gmail.com'
    },{
        rollno : 27,
        name:'adsoijasoidjasd',
        email : 'asdsadasdas@gmail.com'
    },{
        rollno : 28,
        name:'adsoijasoidjasd',
        email : 'asdsadasdas@gmail.com'
    },{
        rollno : 29,
        name:'adsoijasoidjasd',
        email : 'asdsadasdas@gmail.com'
    },{
        rollno : 30,
        name:'adsoijasoidjasd',
        email : 'asdsadasdas@gmail.com'
    }
];

let pageno = 1;
let page = 0;

// let npages = listobj.length/10 + 1;
var first = document.getElementById('first');
    first.addEventListener('click', function(){
        pageno = 1;
        let table = document.getElementById('table');
        table.innerHTML = "";
        let data = "";
        for(page = 0; page < 10; page++){
            if(listobj[page] === undefined) break;
            let info = '<tr> <td>'+ listobj[page].rollno +'</td> <td>'+ listobj[page].name +'</td> <td>'+ listobj[page].email +'</td>' + '</tr>';
            data += info;
        }
        table.innerHTML = data;
        let pgno = document.getElementById('pageno');
    pgno.innerHTML = pageno;
        // page = 0;
    });

var prev = document.getElementById('prev');
prev.addEventListener('click', function(){ 

    if(page===10) return 
    pageno--;
    let table = document.getElementById('table');
    table.innerHTML = "";
    let data = "";
    let nextpage = page-10;
    page -= 20;
    for(page; page < nextpage; page++){
        if(listobj[page] === undefined) break;
        let info = '<tr> <td>'+ listobj[page].rollno +'</td> <td>'+ listobj[page].name +'</td> <td>'+ listobj[page].email +'</td>' + '</tr>';
        data += info;
    }
    table.innerHTML = data;
    let pgno = document.getElementById('pageno');
    pgno.innerHTML = pageno;
    // page--;
});


var next = document.getElementById('next');
next.addEventListener('click', function(){
    let flag = false;
    if(page==listobj.length) return;
    pageno++;
    // if(listobj.length/10 == npages) flag = true;
    let table = document.getElementById('table');
    table.innerHTML = "";
    let data = "";
    let nextpage=page;
    for(page; page < nextpage+10; page++){
        if(listobj[page] === undefined) break;
        let info = '<tr> <td>'+ listobj[page].rollno +'</td> <td>'+ listobj[page].name +'</td> <td>'+ listobj[page].email +'</td>' + '</tr>';
        data += info;
       
    }
    table.innerHTML = data;
    let pgno = document.getElementById('pageno');
    pgno.innerHTML = pageno;
    if(flag) page = 0;
});


var last = document.getElementById('last');
last.addEventListener('click', function(){
    pageno = listobj.length/10 ;
    let table = document.getElementById('table');
    table.innerHTML = "";
    let data = "";
    let nextpage=listobj.length;
    page=listobj.length-10;
    for(page; page < nextpage; page++){
        if(listobj[page] === undefined) break;
        let info = '<tr> <td>'+ listobj[page].rollno +'</td> <td>'+ listobj[page].name +'</td> <td>'+ listobj[page].email +'</td>' + '</tr>';
        data += info;
    }
    let pgno = document.getElementById('pageno');
    pgno.innerHTML = pageno;
    table.innerHTML = data;
    // page = listobj.length/10;
});



