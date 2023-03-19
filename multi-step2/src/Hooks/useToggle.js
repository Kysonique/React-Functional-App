import { useEffect, useState } from "react"

export function useToggle(toggleValue){
    const [arcade, setArcade] = useState(9)
    const [advanced, setAdvanced] = useState(12)
    const [pro, setPro] = useState(15)
    const [one, setOne] = useState(1)
    const [two, setTwo] = useState(2)

    useEffect(() => {
        if(toggleValue === false){
            setArcade(90)
            setAdvanced(120)
            setPro(150)
            setOne(10)
            setTwo(20)
        }
    }, [toggleValue])

    return {arcade, advanced, pro, one, two}
}