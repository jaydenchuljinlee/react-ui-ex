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
            <SearchBarSection popullarSearchWords={popullarSearchWords} classes='wv2v230 pl_20_large pr_20_large' />

            <main className="prdouct_main_warp">
                <div className="wv2v230 pl_4_base pl_10_small pl_16_medium pl_20_large pr_4_base pr_10_small pr_16_medium pr_20_large backgroundColor_layerDefault width_full_base">
                    <div className="mt_5_base mt_6_small mt_7_medium">
                        <nav className="" aria-label="중고거래 검색 페이지 네비게이션">
                            <ol className="product_main_wrap_bc_ol">
                                <li className="product_main_wrap_bc_li">
                                    <a href="/kr/?in=%EB%93%B1%EC%B4%8C%EB%8F%99-6051" className="product_main_wrap_bc_a" data-discover="true">홈</a>
                                    <span className="product_main_wrap_bc_a_span" role="presentation">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.10" width="12" height="12"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93106 2.60286C7.47398 3.08276 7.49248 3.84233 7.97238 4.29941L16.06 12.0024L7.97245 19.7043C7.49251 20.1614 7.47396 20.921 7.93101 21.4009C8.38806 21.8808 9.14763 21.8994 9.62756 21.4423L18.6276 12.8715C18.8654 12.645 19 12.3309 19 12.0025C19 11.6741 18.8654 11.36 18.6276 11.1335L9.62762 2.56153C9.14771 2.10445 8.38814 2.12296 7.93106 2.60286Z" fill="currentColor"></path></g></svg>
                                    </span>
                                </li>
                                <li className="product_main_wrap_bc_li">
                                    <span className="product_main_wrap_bc_sub_span_large" aria-current="page">중고거래</span>
                                    <span className="product_main_wrap_bc_sub_span_small" role="presentation">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.10" width="12" height="12"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M7.93106 2.60286C7.47398 3.08276 7.49248 3.84233 7.97238 4.29941L16.06 12.0024L7.97245 19.7043C7.49251 20.1614 7.47396 20.921 7.93101 21.4009C8.38806 21.8808 9.14763 21.8994 9.62756 21.4423L18.6276 12.8715C18.8654 12.645 19 12.3309 19 12.0025C19 11.6741 18.8654 11.36 18.6276 11.1335L9.62762 2.56153C9.14771 2.10445 8.38814 2.12296 7.93106 2.60286Z" fill="currentColor"></path></g></svg>
                                    </span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProductWrap;