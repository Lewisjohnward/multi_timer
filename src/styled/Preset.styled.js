import styled from "styled-components"

const gray = "#f0f2f0"
const darkgray = "#d7dadb"
const blue = "#30b1cf"
const black = "#6b6464"
const darkblack = "#524f4e"
  
export const PresetTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px 40px;
    background: ${gray};
    font-size: 0.9rem;

    &:hover{
        cursor: pointer;
        background: ${darkgray};
    }
`
export const PresetTimeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 200px);
    grid-gap: 5px;
`

export const SettingsContainer = styled.div`
    background: ${gray};
    padding: 5px 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    
    > * {
        margin-bottom: 20px;
    }
  
`

export const OptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
`
export const Option = styled.div`
`
export const RingTimeContainer = styled.div`
    display: flex;
    color: white;
`
export const Slider = styled.input.attrs(
    props => {
        return ({
            type: 'range',
            min: '0',
            max: '100',
            value: props.slideValue
        })
    }
)`
    height: 5px;
    background: ${blue};
`

export const Dropdown = styled.select`
`
export const TimeSelectContainer = styled.div`
        background: ${({background, theme}) => background ? theme.orange : `${black}`};
        padding: 8px 10px;
        margin: 0px 3px;
        border-radius: 3px;
        cursor: pointer;
        box-shadow: 0px 1px 1px inset rgba(0, 0, 0, 0.3);

        &:hover{
            background: ${darkblack};
        }
`
