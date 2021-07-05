import React, { useState } from 'react'

const LikeBtn = (props) => {
    const [count, setCount] = useState(0);
    const onlikeclick = () => {
        // console.log("Click",count)
        return setCount(count+1)
    }
    return (
        <div>
            <button className="btn"onClick={onlikeclick}>👍{count}</button>
            
        </div>
    )
}

export default LikeBtn
