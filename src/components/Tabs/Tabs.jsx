import { isA } from '@jest/expect-utils'
import React from 'react'
import { Link } from 'react-router-dom'
import { tabLabels } from './constants'
import "./Tabs.css"

const Tabs = ({activeTabName, onClickTab}) => {
    const { CANCEL_AT_ANNY_TIME, PICK_YOUR_PRICE, WATCH_ANY_WHERE } = tabLabels

    const renderTabTitle = (tabTitle, isActive, icon, id) => (
        <div
            onClick={() => onClickTab(tabTitle)}
            id={id}
            className={`tab-item ${isActive && "tab-border"}`}
        >
            <i className={icon}></i>
            <p>{tabTitle}</p>
        </div>
    )

    return (
        <>
            <section className="tabs">
                <div className="container">
                    {renderTabTitle(
                        CANCEL_AT_ANNY_TIME,
                        activeTabName === CANCEL_AT_ANNY_TIME,
                        "fas fa-door-open fa-3x",
                        "tab-1")}
                    {renderTabTitle(
                        WATCH_ANY_WHERE,
                        activeTabName === WATCH_ANY_WHERE,
                        "fas fa-tablet-alt fa-3x",
                        "tab-2")}
                    {renderTabTitle(
                        PICK_YOUR_PRICE,
                        activeTabName === PICK_YOUR_PRICE,
                        "fas fa-tags fa-3x",
                        "tab-3")}
                </div>
            </section>
            {activeTabName === CANCEL_AT_ANNY_TIME && (
                <section className="tab-content">
                    <div className="container">
                        <div 
                        id='tab-1-content' 
                        className={`tab-content-item ${
                            activeTabName === CANCEL_AT_ANNY_TIME && "show"
                            }`}>
                            <div className="tab-1-content-inner">
                                <div>
                                    <p className="text-lg">
                                        If you decide Netflix isn't for you - no problem. 
                                        No commitment. Cancel online anytime
                                    </p>
                                    <Link to='/netflix-show' className='btn btn-lg'>
                                        Watch Free For 30 days
                                    </Link>
                                </div>
                                <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {activeTabName === WATCH_ANY_WHERE && (
                <section className="tab-content">
                    <div className="container">
                        <div 
                            id='tab-2-content' 
                            className={`tab-content-item ${
                                activeTabName === WATCH_ANY_WHERE && "show"
                                }`}>
                                <div className="tab-2-content-top">
                                    <p className="text-lg">
                                        If you decide Netflix isn't for you - no problem. 
                                        No commitment. Cancel online anytime
                                    </p>
                                    <Link to='/netflix-show' className='btn btn-lg'>
                                        Watch Free For 30 days
                                    </Link>
                                </div>
                                <div className="tab-2-content-bottom">
                                    <div>
                                            <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="img" />
                                            <p className="text-md">Watch on your TV</p>
                                            <p className="text-dark">
                                                Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray 
                                                players and more
                                            </p>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="img" />
                                        <p className="text-md">
                                            Watch Instantly or download for later
                                        </p>
                                        <p className="text-dark">
                                            Available on phone and tablet, wherever you go.
                                        </p>
                                    </div>
                                    <div>
                                        <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="img" />
                                        <p className="text-md">
                                            Use any Computer
                                        </p>
                                        <p className="text-dark">
                                            Watch right on Netlfix.com.
                                        </p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                </section>
            )}
            {activeTabName === PICK_YOUR_PRICE && (
                <section className="tab-content">
                    <div className="container">
                        <div 
                            id='tab-3-content' 
                            className={`tab-content-item ${
                            activeTabName === PICK_YOUR_PRICE && "show"
                            }`}>

                            <div className="text-center">
                                <p className="text-lg">
                                    Choose one plan and watch everything on Netflix
                                </p>
                                <Link to='/netflix-show' className='btn btn-lg'>
                                    Watch Free for 30 Days
                                </Link>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                            <th>Basic</th>
                                            <th>Standard</th>
                                            <th>Premium</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Monthly Price after free month ends on 6/1/2023</td>
                                        <td>199</td>
                                        <td>399</td>
                                        <td>599</td>
                                    </tr>
                                    <tr>
                                        <td>HD available</td>
                                        <td>
                                            <i className="fas fa-times"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ultra HD available</td>
                                        <td>
                                            <i className="fas fa-times"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-times"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Screens you can watch on at the same time</td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td>Watch on your Laptop, TV, Phone and tablet</td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Unlimited movies and TV shows</td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cancel anytime</td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>First month Free</td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                        <td>
                                            <i className="fas fa-check"></i>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
export default Tabs