import React, { useState, useRef, useImperativeHandle } from 'react';
import MainLocationPrompt from './LocationPrompt';
import SearchBarSection from './SearchBarSection';

type SearchBarMainHandle = {
    searchBarRef: HTMLDivElement | null
    locationPromptElement: HTMLDivElement | null;
  };
  

const SearchBarMain = React.forwardRef<SearchBarMainHandle>((props, ref) =>  {
    const searchBarRef = useRef<HTMLDivElement>(null);
    const locationPromptRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        searchBarRef: searchBarRef.current,
        locationPromptElement: locationPromptRef.current,
      }));    
    
    
    const [popullarSearchWords, setPopullarSearchWords] = useState(['에어컨', '에어컨청소', '노트북', '원룸', '현대 중고차', '이사짐 알바', '근처 맛집', '투표', '동네친구', '배드민턴 모집', '자전거', '플스', '투룸 빌라', '닌텐도', '서빙 알바', '기아 중고차', '전세 매물']);
    const [categories, setCategories] = useState(['중고거래', '부동산', '중고차', '알바', '동네업체', '동네생활', '모임']);
    return (
        <div ref={searchBarRef} className="pl_20_large pr_20_large pt_1.5_base">
            <MainLocationPrompt ref={locationPromptRef} categories={categories} />
            <SearchBarSection popullarSearchWords={popullarSearchWords} classes='wv2v230 pl_4_base pl_10_small pl_16_medium pl_20_large pr_4_base pr_10_small pr_16_medium pr_20_large backgroundColor_layerDefault width_full_base' isMain={true} />
        </div>
    );
});

export default SearchBarMain;