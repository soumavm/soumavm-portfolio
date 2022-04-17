import React from "react"

const sortData = (sorted, data, setData, setSort) => {
    if(!sorted){
        const myData = [].concat(data)
        .sort((a, b) => a.Order > b.Order ? 1 : -1)
        setData(myData)
        setSort(true)
    }
}

export default sortData