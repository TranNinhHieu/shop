export const numberToMap = (number) => {
    let arr = []
    for (let i = 1; i <= number; i++) {
        arr.push({ number: i })
    }
    console.log(arr)
    return arr
}
