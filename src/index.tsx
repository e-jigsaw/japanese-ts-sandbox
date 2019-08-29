import * as React from 'react'
import {render} from 'react-dom'

const あそなす: React.FC = ({children}) => <>{children}</>
const ジーパン: React.FC = () => <div><span>👖</span></div>

render(
  <あそなす>
    <ジーパン />
    <ジーパン />  
  </あそなす>,
  document.getElementById('app')
)
