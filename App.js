import { Route, Routes } from 'react-router-dom'
import Home from 'C:\\Users\\LENOVO\\.vscode\\my-portfolio\\src\\component\\Home'
import About from 'C:\\Users\\LENOVO\\.vscode\\my-portfolio\\src\\component\\About'
import Contact from 'C:\\Users\\LENOVO\\.vscode\\my-portfolio\\src\\component\\Contact'
import Layout from 'C:\\Users\\LENOVO\\.vscode\\my-portfolio\\src\\component\\LayoutC'
import Portfolio from 'C:\\Users\\LENOVO\\.vscode\\my-portfolio\\src\\component\\Portfolio\\index.scss'
import 'C:\\Users\\LENOVO\\.vscode\\my-portfolio\\src\\App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </>
  )
}

export default App 