import React from 'react'

export default ({children,result}) => {
    return(
        <div>
           <h4>计算结果：{result}</h4>
            {children}
            <p>点击异步时，数字会延迟1 秒增加 1</p>
        </div>
    )
}

