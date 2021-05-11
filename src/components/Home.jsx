import Card from './Card';
import React from 'react'
import '../Home.css';
import Banner from './Banner';

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className='home__section'>
                <Card
                    src="https://cdn.alivenetwork.com/media/virtualentertainment-2-large.jpg"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique Stays"
                    description="Spaces that are more than just a place to rest your head."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire Homes"
                    description="Comfortable private places, with room for friends or family."
                />
                </div>
                <div className='home__section'>
                <Card
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Los Angeles"
                    description="Superhost with a stunning view of the beachside in Sunny Los Angeles"
                    price="$130/night"
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in Chicago"
                    description="Enjoy the amazing sights of Chicago with this stunning penthouse"
                    price="$185/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom Condo"
                    description="Superhost with great amenities and a fabulous shopping complex nearby"
                    price="$95/night"
                />
            </div>
        </div>
    )
}

export default Home;