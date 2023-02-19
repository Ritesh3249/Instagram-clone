import React from 'react'
import "./search.css"
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'

const Search = () => {
    return (
        <div>
            <Header />
            <div className='searchMainDiv'>
                <div className='searchUser'><input placeholder='Search...' /></div>
                <div className='listOfAllFind'>
                    <div className='findUserInfo'>
                        <span className='findImage'><img alt='r' /></span>
                        <div className='findMainDiv'>
                            <div className='findName'>
                                Ritesh gupta
                            </div>
                            <div className='findUserName'>
                                user name gupta
                            </div>
                        </div>
                    </div>
                    <div className='findUserInfo'>
                        <span className='findImage'><img alt='r' /></span>
                        <div className='findMainDiv'>
                            <div className='findName'>
                                Ritesh gupta
                            </div>
                            <div className='findUserName'>
                                user name gupta
                            </div>
                        </div>
                    </div>
                    <div className='findUserInfo'>
                        <span className='findImage'><img alt='r' /></span>
                        <div className='findMainDiv'>
                            <div className='findName'>
                                Ritesh gupta
                            </div>
                            <div className='findUserName'>
                                user name gupta
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Search