import { useRef, useState, useEffect } from 'react';

import DaangnHeader from '../header/DaangnHeader';
import SearchBarMain from './searchbar/SarchBarMain';
import CategoryView from './CategoryView';
import LocationSection from './LocationSection';

import '../../assets/css/daangn/daangn.css';

type SearchBarMainHandle = {
  searchBarRef: HTMLDivElement | null
  locationPromptElement: HTMLDivElement | null;
};


const DaangnMain = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const searchBarRef = useRef<SearchBarMainHandle>(null);
  const [searchBtnFlag, setSearchBtnFlag] = useState(false);

  useEffect(() => {
    const checkOverlap = () => {
      if (headerRef.current && searchBarRef.current?.locationPromptElement) {
        const headerClientRect = headerRef.current.getBoundingClientRect();
        const searchBarH2ClientRect = searchBarRef.current.locationPromptElement.getBoundingClientRect();
        const overlapFlag = headerClientRect.bottom >= searchBarH2ClientRect.top;
        setSearchBtnFlag(overlapFlag);
      }
    };
  
    const handleScroll = () => {
      requestAnimationFrame(checkOverlap); // 렌더 성능 보호
    };
  
    window.addEventListener('scroll', handleScroll, { passive: true });
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  


  return (
    <div className="main_body">
      <DaangnHeader ref={headerRef} searchBtnFlag={searchBtnFlag} />
      <main className="main_content">
          <div className="wv2v230 pl_20_large pr_20_large pb_4_base pt_4_base">
            <SearchBarMain ref={searchBarRef} />
            <CategoryView />
            <LocationSection />
          </div>
      </main>
    </div>
  );
};

export default DaangnMain;
  