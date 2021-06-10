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
                img="https://www.glamping.com/static/media/uploads/property/The_Resort_at_Paws_Up/cliffside%20camp/glamping-united-states-montana-resort-at-paws-up-cliffside-camp_(2_of_6).jpg"
                location="Spacious tent near Tacoma"
                title="Stay at this stunning cliffside camp"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="$60 / night"
                total="$180 total"
            />

            <SearchResult
                img="https://www.glamping.com/static/media/uploads/property/The_Resort_at_Paws_Up/river%20camp/glamping-united-states-montana-resort-at-paws-up-river-camp_(2_of_2).jpg"
                location="Luxury cabin near Tacoma"
                title="Enjoy sunrise overlooking the lake"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Kitchen"
                star={4.3}
                price="$80 / night"
                total="$240 total"
            />

            <SearchResult
                img="https://www.glamping.com/static/media/uploads/property/The_Resort_at_Paws_Up/originals%20optimized/glamping-montana-the-resort-at-paws-up-060917northbank-26.jpg"
                location="Private room in center of Vancouver"
                title="Relax with a front row view of the stars"
                description="4 guest · 4 bedroom · 4 bed · 2 bathroom(s) · Free parking · Washing Machine"
                star={3.8}
                price="$75 / night"
                total="$225 total"
            />
            <SearchResult
                img="https://www.glamping.com/static/media/uploads/property/The_Resort_at_Paws_Up/pinnacle%20camp/glamping-united-states-montana-resort-at-paws-up-pinnacle-camp_(2_of_5).jpg"
                location="Private room in center of Olympia"
                title="30 mins to Oxford Street, Excel Seattle"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="$85 / night"
                total="$255 total"
            />
            <SearchResult
                img="https://www.glamping.com/static/media/uploads/property/The_Resort_at_Paws_Up/cliffside%20camp/glamping-united-states-montana-resort-at-paws-up-cliffside-camp_(1_of_6).jpg"
                location="Private room in center of Everett"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="$95 / night"
                total="$285 total"
            />
            <SearchResult
                img="https://www.glamping.com/static/media/uploads/property/The_Resort_at_Paws_Up/moonlight%20camp/glamping-united-states-montana-resort-at-paws-up-moonlight-camp_(1_of_3).jpg"
                location="Private room in center of Spokane"
                title="The Blue Room In Seattle"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Washing Machine"
                star={4.23}
                price="$85 / night"
                total="$255 total"
            />
            <SearchResult
                img="https://www.glamping.com/static/media/uploads/property/The_Resort_at_Paws_Up/luxury%20homes/glamping-united-states-montana-resort-at-paws-up-luxury-homes_(4_of_6).jpg"
                location="Private room in center of Leavenworth"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bathroom(s) · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="$115 / night"
                total="$345 total"
            />
        </div>
    )
}

export default SearchPage;