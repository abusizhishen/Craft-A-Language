/**
 * 结合类型体系和数据流分析技术做的一些语义分析
 */

function foo(a:number){
    if (a==2 || a==3){
        
    }
}


// function foo(a:string|null){
//     bar(a);
//     // if (a!=null){
//     //     bar(a);
//     //     // console.log(a);
//     // }
// }

// function bar(s:string){
//     println(s);
//     // console.log(s);
// }

// foo("hello");
// foo(null);

// function bar(b:number){
//     if (b != 5){
//         if (b == 5){
//             return b+1;
//         }
//     }
// }
