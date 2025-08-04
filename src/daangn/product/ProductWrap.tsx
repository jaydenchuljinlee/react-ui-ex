import { useRef, useState, useEffect } from 'react';

import DaangnHeader from '../header/DaangnHeader';
import SearchBarSection from '../main/searchbar/SearchBarSection';

const ProductWrap = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [searchBtnFlag, setSearchBtnFlag] = useState(false);
    const [popullarSearchWords, setPopullarSearchWords] = useState(['에어컨', '에어컨청소', '노트북', '원룸', '현대 중고차', '이사짐 알바', '근처 맛집', '투표', '동네친구', '배드민턴 모집', '자전거', '플스', '투룸 빌라', '닌텐도', '서빙 알바', '기아 중고차', '전세 매물']);
    
    return (
        <div className="main_body">
            <DaangnHeader ref={headerRef} searchBtnFlag={searchBtnFlag} />
            <SearchBarSection popullarSearchWords={popullarSearchWords} />
        </div>
    );
}

export default ProductWrap;