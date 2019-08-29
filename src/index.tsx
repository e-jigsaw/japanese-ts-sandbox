import * as React from 'react'
import {render} from 'react-dom'

const コンポーネント: React.FC = () => <h1>どうですか</h1>

render(<コンポーネント />, document.getElementById('app'))
