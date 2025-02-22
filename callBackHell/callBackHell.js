// function getCheese(callback) {
//     setTimeout(() => {
//         const cheese = "🧀";
//         console.log("here is cheese", cheese);
//         callback(cheese);
//     }, 2000);
// }

// function makeDough(cheese, callback) {
//     setTimeout(() => {
//         const dough = cheese + "🫓";
//         console.log("here is the dough", dough);
//         callback(dough);
//     }, 2000);
// }

// function bakePizza(dough, callback) {
//     setTimeout(() => {
//         const pizza = dough + "🍕";
//         console.log("here is the pizza", pizza);
//         callback(pizza);
//     }, 2000);
// }

// getCheese((cheese) => {
//     makeDough(cheese, (dough) => {
//         bakePizza(dough, (pizza) => {
//             console.log("got my pizza", pizza);
//         });
//     });
// });
function firstTask(callback) {
    setTimeout(() => {
        console.log("First Task Done");
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log("Second Task Done");
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log("Third Task Done");
        callback();
    }, 1000);
}

firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log("All Tasks Completed!");
        });
    });
});
