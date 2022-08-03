
export const renderTime = (time, speed) => {
    let remain
    const multiple = 1000 / speed 
    const total = time / multiple
    let hours = Math.floor(total / 60)
    remain = total - (hours * 60)
    let mins = Math.floor(remain / 600)
    remain = remain - (mins * 60)
    let secs = Math.floor(remain)
    hours = formatTime(hours)
    mins = formatTime(mins)
    secs = formatTime(secs)

    return [hours, mins, secs]
}

const formatTime = (val) => val < 10 ? "0" + val : val
