let arr=[
    [1,"Parth",21],
    [2,"Rajiv",26],
    [3,"Piyush",30],
    [4,"Prince",17],
    [5,"Gavtam",19],
];
const arrfunction = ()=> {
  
    let print = '<table border=2><tr><th>Id</th><th>Name</th><th>Age</th></tr>'

    arr.map((v)=>{     
        print += "<tr>"
        v.map((v1)=>{            
             print += "<td>"+v1+"</td>"             
        });
        print += "</tr>"       
    })
    print += "</table>"
 
document.getElementById("disp").innerHTML=print;

}
arrfunction();
