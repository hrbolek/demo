import { useState, useMemo, useCallback } from 'react'

import { CreateDelayer } from 'utils/CreateDelayer'


export const TextInput2 = ({id, placeholder, value, onChange}) => {
    const [localvalue, setLocalvalue] = useState(value)
    
    const delayer = useCallback(CreateDelayer(), [id])

    const localchange = (e) => {
        const newValue = e.target.value
        setLocalvalue(newValue)
        if (onChange) {
            delayer( () => onChange(newValue) )
        }
    }

    // return (
    //     <>{placeholder}
    //     <input type="text" className='form-control'
    //         placeholder={placeholder} value={localvalue} 
    //         onChange={localchange}/>
    //     </>
    // )
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">{placeholder}</span>
            <input type="text" className="form-control" placeholder={placeholder} value={localvalue}
                onChange={localchange}
                aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    )
}

/**
 * Editable Text (input type="text")
 * @param {*} id mandatory identification, often related to id of entity 
 * @param {str} value value of input
 * @param {str} placeholder value of help if the text is not displayed
 * @param {(value) => void} onChange delayed callback notifying about the change
 * @returns 
 */
export const TextInput = ({id, value, onChange, placeholder}) => {
    const [localValue, setLocalValue] = useState(value)

    const delayer = useMemo(
        () => CreateDelayer(), [id]
    )

    const localOnChange = useCallback(
        (e) => {
            const newValue = e.target.value
            setLocalValue(newValue)
            if (onChange) {
                delayer(() => onChange(newValue))
            }
        }, [id, onChange]
    )

    return (
        <input className="form-control" placeholder={placeholder} value={localValue} onChange={localOnChange}/>
    )
}