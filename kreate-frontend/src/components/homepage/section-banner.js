import React from "react"
import "../../assets/css/homepage/section-banner.css"

const SectionBanner = () => {
    return(
        <div className="container">
            <div className="container__sectionbanner">
                <div className="container__sectionbanner__image">
                    <img src="https://kreateworld.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjewellery.25db55ed.jpg&w=1080&q=30"  alt="banner-1"/>
                </div>
                <div className="container__sectionbanner__image">
                    <img src="https://kreateworld.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkitchen-table-decor.58891109.jpg&w=1080&q=30" alt="banner-2"/>
                </div>
                <div className="container__sectionbanner__image">
                    <img src="https://kreateworld.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwall-decor.714f3fad.jpg&w=1080&q=30" alt="banner-3"/>
                </div>
            </div>
        </div>
    )
}

export default SectionBanner