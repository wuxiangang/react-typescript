import React from 'react'

const Detail: React.FC<object> = ({ children }) => (
<div>
  <button>添加todos</button>
  { children }
</div>
)

export default Detail