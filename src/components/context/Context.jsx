import React, { createContext, useState } from 'react'
import main from './gemini'


export const geminiContext = createContext()


const Context = (props) => {

    const [input, setInput] = useState('')
    const [recentPrompts, setRecentPrompts] = useState('')
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState('')


    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData((prev) => prev + nextWord)
        }, 75 * index);
    }

    const newChat = () =>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {

        setResultData(' ')
        setLoading(true)
        setShowResult(true)
        let response ;
        if (prompt !== undefined) {
            response = await main(prompt)
            setRecentPrompts(prompt)
        }
        else {
            setPrevPrompts(prev => [...prev, input])
            setRecentPrompts(input)
            response = await main(input)
        }
        let responseArray = response.split("**")
        let newResponse = " ";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray;
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }

        let newResponse2 = newResponse.split('*').join('</br>')
        let newResponse3 = newResponse2.split("###").join('</br>')
        let newRespArray = newResponse3.split(' ')
        for (let i = 0; i < newRespArray.length; i++) {
            const nextWord = newRespArray[i]
            delayPara(i, nextWord + ' ')
        }


        setLoading(false)
        setInput('')

    }



    const contextValue = {
        input,
        setInput,
        recentPrompts,
        setRecentPrompts,
        prevPrompts,
        setPrevPrompts,
        showResult,
        onSent,
        loading,
        setLoading,
        resultData,
        setResultData,
        newChat

    }

    return (
        <div>
            <geminiContext.Provider value={contextValue}>
                {props.children}
            </geminiContext.Provider>

        </div>
    )
}

export default Context