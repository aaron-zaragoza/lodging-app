import React from 'react';
import '../SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
    return (
        <div className="search__page">
            <div className='search__info'>
                <h1>Stays Nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-30354374/original/7c4dee95-fbcc-410d-b9fb-811b6dd3ade6.jpeg"
                location="Private room in center of Seattle"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="$60 / night"
                total="£117 total"
            />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/miso/Hosting-45266481/original/6388b888-94d7-420b-8c49-44bce5f6e1d8.jpeg"
                location="Private room in center of Seattle"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Kitchen"
                star={4.3}
                price="$80 / night"
                total="£157 total"
            />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/03ae523b-d0b8-4cd7-82ec-013110c1bd61.jpg"
                location="Private room in center of Seattle"
                title="Seattle Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathroom(s) · Free parking · Washing Machine"
                star={3.8}
                price="$75 / night"
                total="£207 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/9b6dc433-1e5d-49a8-8211-85b45f0dea62.jpg"
                location="Private room in center of Seattle"
                title="30 mins to Oxford Street, Excel Seattle"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="$85 / night"
                total="£320 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/75dd2e2f-3dff-4cf0-92aa-1f5fca3fd97f.jpg"
                location="Private room in center of Seattle"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="$95 / night"
                total="£450 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/75ab2aba-cc4f-4e79-8d35-d2d94af8c267.jpg"
                location="Private room in center of Seattle"
                title="The Blue Room In Seattle"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Washing Machine"
                star={4.23}
                price="$85 / night"
                total="£480 total"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/368d5cd3-bc13-4c75-ae78-883065666dbe.jpg"
                location="Private room in center of Seattle"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$115 / night"
                total="£650 total"
            />
        </div>
    )
}

export default SearchPage;