interface JosephusParams {
    prisoners: number;
    step: number;
}

function josephus(params: JosephusParams): number {
    const { prisoners, step } = params;
    let survivor = 0;
    for (let i = 2; i <= prisoners; i++) {
        survivor = (survivor + step) % i;
    }
    return survivor;
}

const executionParams: JosephusParams = { prisoners: 41, step: 3 };
console.log(josephus(executionParams));
