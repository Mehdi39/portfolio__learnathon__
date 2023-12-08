import { Route, Routes } from 'react-router-dom'
import Home from '../Screen/Home'

const Router = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}

export default Router