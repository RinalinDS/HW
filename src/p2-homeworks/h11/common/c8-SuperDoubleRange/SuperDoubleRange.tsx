import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
    min: number
    max: number
    step: number
    disabled: boolean
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        min, max, step, disabled
    }
) => {
    // сделать самому, можно подключать библиотеки
    debugger

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[]);
    };

    return (
        <>
            <p>Игнат, если ты прочитаешь, я не понимаю, как можно задизейблить из material UI слайдер, он не поддается
                мне.</p>
            <Box sx={{width: 300}}>

                <Slider
                    getAriaLabel={() => 'Slider'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    disabled={value && value[0] > value[1]}
                    step={step}
                    min={min}
                    max={max}
                />
            </Box>
        </>
    );
}

export default SuperDoubleRange
