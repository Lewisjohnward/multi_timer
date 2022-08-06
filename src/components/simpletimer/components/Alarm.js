import {useState, useEffect, useRef} from "react"
import beep from "../../../assets/sounds/beep.wav"
import soft from "../../../assets/sounds/soft.wav"

export const Alarm = ({time, ringTime, alarm, volume}) => {
    const [rungFor, setRungFor] = useState(0)
    const [audioTime, setAudioTime] = useState(0)
    const audioRef = useRef()

    useEffect(() => {
        time == 5 && playAudio()
    }, [time])

    const playAudio = () => {
        const ringFor = ringTime * 1000
        audioRef.current.play()
        setTimeout(stopAudio, ringFor)
    }

    useEffect(() => {
        audioRef.current.volume = (volume / 100)
    },[volume] )

    const stopAudio = () => audioRef.current.pause()

    return (
        <audio src={alarm == "beep" ? beep : soft} ref={audioRef} loop/>
    )
}
