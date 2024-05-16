import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className="developer-info">
                <p id='d'>Developer</p>

                <div className="dev-info">

                    <p>HONEY DHIMAN</p>

                    <div className="contect">
                        <a href="tel:+91 9557671924" id="p"><svg xmlns="http://www.w3.org/2000/svg" height="24"
                            viewBox="0 -960 960 960" width="24">
                            <path
                                d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
                                fill="white" />
                        </svg>+91-9557671924</a>

                        <a href="mailto:mhoneydhiman@gmail.com" id="m"><svg xmlns="http://www.w3.org/2000/svg" height="24"
                            viewBox="0 -960 960 960" width="24">
                            <path
                                d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"
                                fill="white" />
                        </svg>mhoneydhiman@gmail.com</a>
                    </div>


                    <div className="social">
                        <p><a href="https://github.com/ERhoneydhiman" target="_blank" rel="noreferrer">GitHUB</a></p>
                        <p><a href="https://www.linkedin.com/in/er-honey-dhiman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">LinkedIn</a></p>
                        <p><a href="https://x.com/webdevHD?t=nhWSr-I89x5EtA7i_JXM5A&s=08" target="_blank" rel="noreferrer">Twitter</a></p>
                        <p><a href="https://www.instagram.com/er.honeydhiman?igsh=ZGphdWQ5cjc0NGtz" target="_blank" rel="noreferrer">Instagram</a></p>
                        
                        
                        
                        
                    </div>
                </div>

            </div>
            <hr />
            <p className="copy">Copyright &copy; Honey Dhiman 2024</p>
        </div>
    )
}

export default Footer