import React, { useState } from 'react'

function TopBar(){
    return(
        <>
            {/* Topbar */}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
					<ul className="navbar-nav ml-auto">
						<div className="topbar-divider d-none d-sm-block"></div>
						{/* Nav Item - User Information */}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">User</span>
								<img className="img-profile rounded-circle" src="public/assets/images/sin-perfil.jpg" alt="ImagenPerfil" width="260"/>
							</a>
						</li>
					</ul>
				</nav>
				{/* End of Topbar */}
        </>
    )
}

export default TopBar