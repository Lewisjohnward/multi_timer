
export const renderTime = (time, speed) => {

    //10
    //10 * 100 = 1000 = 1 second

    let remain
    const hours = Math.floor(time / (100 * 60 * 60))
    remain = time - (hours * 100 * 60 * 60)
    const mins = Math.floor(remain / (100 * 60))
    remain = remain - (mins * 100 * 60)
    const secs = Math.floor(remain / 100)
    remain = remain - (secs * 100)
    const msecs = remain
    
    const arr = [hours, mins, secs, msecs].map(d => formatTime(d))

    return arr
}

const formatTime = (val) => val < 10 ? "0" + val : val

export const renderTimeb = (d) => {
    const minutes = Math.floor(d / 60)
    const seconds = d - (minutes * 60)
    if (!minutes) return `${seconds}s`
    else return `${minutes}m ${seconds}s`
}
