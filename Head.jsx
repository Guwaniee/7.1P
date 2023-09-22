import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='lef_trow'>
              <label> DevLink Marketplace</label>
          </div>
          <div className='right_row_RText'>
            <a className="nav-icon" href="/">Find DEV</a>
            <span><i class="fa " aria-hidden="true"></i></span>
            <a className="nav-icon" href="/">Find Jobs</a>
            <span><i class="fa " aria-hidden="true"></i></span>
            <a className="nav-icon" href="/login">Login</a>
            <span><i class="fa " aria-hidden="true"></i></span>
            <a className="nav-icon" href="/signup">Create Account</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
