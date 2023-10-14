function call(name) {
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log(name);
            resolve(name);
        }, 1000)
    })
}

function back() {
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log('back');
            resolve('back');
        }, 1000)
    })
}

function hell() {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve('callback hell');
        }, 1000)
    })
}


// 1. promis로 변경
// call('kim')
//     .then((result)=>{
//         console.log(result, '반가워');
//         return back(result)
//     })
//     .then((result)=>{
//         console.log(result, '을 실행했구나');
//         return hell(result)
//     })

//     .then((result)=>{
//         console.log('여기는', result);
//     })


// 2. async/await    
// async function exec() {
//     const user = await call('kim');
//     console.log(user, '반가워');
//     const run = await back();
//     console.log(run, '을 실행했구나');
//     const last = await hell();
//     console.log('여기는', last)
// }

// exec();

//3. Promise로 배경색 변경하기 실습

// function red() {
//     return new Promise((resolve) => {
//         setTimeout(function(){
//             let color = ['red', 'orange', 'yellow', 'green', 'blue']
//         resolve(document.body.style.backgroundColor = color);
//         }, 1000)
//     })
// }

// function red() {
//     let colorIndex = 0;
    
//     return new Promise((resolve) => {
//         setTimeout(function(){
//             let color = ['red', 'orange', 'yellow', 'green', 'blue'];
//             document.body.style.backgroundColor = color[colorIndex];
//             colorIndex = (colorIndex + 1) % color.length;
//             resolve(document.body.style.backgroundColor);
//         }, 1000);
//     });
// }

function colors (color) {
    return new Promise ((resolve)=>{
        setTimeout(function(){
            document.body.style.backgroundcolor = color;
            resolve();
        }, 1000)
    })
}


async function exec() {
    await colors('red');
    await colors('orange');
    await colors('yellow');
    await colors('green');
    await colors('blue');
}

exec();