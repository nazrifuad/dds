import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from '../../pages/Nav/Nav'
import Styleguide from '../../pages/Styleguide/Styleguide'
import NoPage from '../../pages/NoPage/NoPage'
import Homepage from '../../pages/Home/Homepage'
import Upload from '../../pages/Upload/Upload'
import Shortcut from '../../pages/Shortcut/Shortcut'
import EditStyleguide from '../../pages/Styleguide/EditStyleguide'
import Preview from '../../pages/Styleguide/Preview'


// header routing
const HeaderRoutes = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/edit-styleguide" element={<EditStyleguide />} />
          <Route path="/shortcut" element={<Shortcut />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </>
    </Router>
  )
}

export default HeaderRoutes


