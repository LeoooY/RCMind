import React, { useState, useEffect } from 'react';

function App(props) {
    const { data } = props;

    const [example, setExample] = useState('initialValue');
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        // document.title = `You clicked count times`;
    });
    return (
        <div>App</div>
    )
}

export default App;