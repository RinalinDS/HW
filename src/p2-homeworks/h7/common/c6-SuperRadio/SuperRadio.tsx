import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)


    }
    // onChange, onChangeOption


    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                type={name}
                onChange={onChangeCallback}
                value={o}
                checked={value===o}
                name={o}


                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
