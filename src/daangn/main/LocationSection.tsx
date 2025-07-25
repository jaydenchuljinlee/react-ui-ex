import { useState } from 'react';
import {locationList} from './data/location';

const LocationSection = () => {    
    const locations = locationList();
    return (
        <div className="location_section_wrap display_flex_base justifyContent_center_base mt_7_base mt_10_small">
            <ul className="location_section_ul display_flex_base flexWrap_wrap_base alignItems_center_base">
                {locations.map((item) => (
                    <li key={item.key} className="display_flex_base">
                        <a href={`#${item.key}`} className="location_section_a pb_2.5_base pt_2.5_base borderRadius_full_base display_flex_base backgroundColor_neutral">
                            <span className="lineHeight_body.small_base fontSize_100_base fontWeight_semibold color_neutral ">{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationSection;