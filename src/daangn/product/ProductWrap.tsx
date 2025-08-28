import { useRef, useState, useEffect } from 'react';

import * as Checkbox from "@radix-ui/react-checkbox";
import * as RadioGroup from "@radix-ui/react-radio-group";

import DaangnHeader from '../header/DaangnHeader';
import SearchBarSection from '../main/searchbar/SearchBarSection';

const ProductWrap = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const [searchBtnFlag, setSearchBtnFlag] = useState(false);
    const [popullarSearchWords, setPopullarSearchWords] = useState(['에어컨', '에어컨청소', '노트북', '원룸', '현대 중고차', '이사짐 알바', '근처 맛집', '투표', '동네친구', '배드민턴 모집', '자전거', '플스', '투룸 빌라', '닌텐도', '서빙 알바', '기아 중고차', '전세 매물']);
    const [hovered, setHovered] = useState(false);
    const [locationSelected, setLocationSelected] = useState("deungchon");
    const [categorySelected, setCategorySelected] = useState("digitalDevice");
    
    return (
        <div className="main_body">
            <DaangnHeader ref={headerRef} searchBtnFlag={searchBtnFlag} />
            <SearchBarSection popullarSearchWords={popullarSearchWords} classes='wv2v230 pl_4_base pl_10_small pl_16_medium pl_20_large pr_4_base pr_10_small pr_16_medium pr_20_large backgroundColor_layerDefault width_full_base' isMain={false} />

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

                        <div className="mt_2_base">
                            <h1 className="fontSize_400_base fontSize_500_medium fontWeight_bold lineHeight_heading.large_base lineHeight_heading.xlarge">서울특별시 강서구 등촌동 중고거래</h1>
                        </div>
                    </div>

                    {/* 상품 영역 */}
                    <section className="display_flex_base gap_0_base gap_6_medium mt_10_base mb_16_base mb_20_medium mb_32_large">
                        <aside className="product_main_wrap_aside display_none_base display_flex_medium flexDirection_column_base">
                            <header className="display_flex_base justifyContent_spaceBetween_base alignItems_center_base">
                                <h2 className="fontSize_300_base fontWeight_bold lineHeight_heading.medium_base" level="2">필터</h2>
                                <a href="/kr/buy-sell/?in=%EB%93%B1%EC%B4%8C%EB%8F%99-6051" className="fontSize_100_base fontWeight_regular lineHeight_body.small_base color_neutralSubtle textDecoration_underline cursor_pointer" data-discover="true">초기화</a>
                            </header>
                            <section>
                                <div className="mt_6_base pb_5_base">
                                    <Checkbox.Root
                                        className="product_main_wrap_aside_section_div_a"
                                        asChild
                                        defaultChecked={false}
                                        >
                                            <a
                                                href="#"
                                                role="checkbox"
                                                aria-label="거래 가능만 보기"
                                                data-hover={hovered ? "" : undefined}
                                                onMouseEnter={() => setHovered(true)}
                                                onMouseLeave={() => setHovered(false)}
                                                className="product_main_wrap_aside_section_div_a">
                                                <Checkbox.Indicator forceMount asChild>
                                                    <div
                                                        aria-hidden="true"
                                                        data-hover={hovered ? "" : undefined}
                                                        className="product_main_wrap_aside_section_div_a_div">
                                                        <svg
                                                            className="product_main_wrap_aside_section_div_a_svg"
                                                            data-hover={hovered ? "" : undefined}
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            data-seed-icon="true"
                                                            data-seed-icon-version="0.0.23"
                                                            width="24" height="24"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M22.2424 3.55704C22.7631 3.96703 22.8529 4.72151 22.4429 5.24222L10.6321 20.2422C10.4172 20.5151 10.0945 20.6816 9.74756 20.6984C9.40059 20.7153 9.06333 20.581 8.82295 20.3302L1.63376 12.8302C1.17515 12.3518 1.19122 11.5922 1.66966 11.1336C2.1481 10.675 2.90773 10.691 3.36634 11.1695L9.60035 17.673L20.5572 3.75749C20.9672 3.23679 21.7217 3.14705 22.2424 3.55704Z" fill="currentColor"></path></g></svg>
                                                    </div>
                                                </Checkbox.Indicator>
                                                <span className="product_main_wrap_aside_section_div_a_span">거래 가능만 보기</span>
                                                </a>
                                    </Checkbox.Root>
                                </div>
                                <div className="product_main_wrap_aside_section_border"></div>
                                {/* 위치 */}
                                <div className="mt_6_base mb_6_base display_flex_base flexDirection_column_base gap_3_base">
                                    <h3 className="fontSize_200_base fontWeight_bold lineHeight_heading.small_base" level="3">위치</h3>
                                    <div>
                                        <span className="fontSize_200_base fontWeight_regular lineHeight_body.medium_base color_neutral">서울특별시 강서구</span>
                                        {/* 위치 선택 체크방스 영역 */}
                                        <div className="position_relative_base overflow_hidden mt_1_base mb_1_base">
                                            <div className="product_main_wrap_location_div">
                                                <div className="mt_1.5_base">
                                                    <div className="product_main_wrap_location_div_div">
                                                        <div>
                                                            <RadioGroup.Root
                                                                value={locationSelected}
                                                                onValueChange={setLocationSelected}
                                                                aria-label="지역 선택"
                                                                className="flex gap-2"
                                                            >
                                                                <RadioGroup.Item value="deungchon" asChild>
                                                                    <a
                                                                        href="#"
                                                                        className="product_main_wrap_location_div_div_a _15sions1 _15sions0"
                                                                        data-gtm="search_filter"
                                                                        data-discover="true"
                                                                    >
                                                                        {/* 아이콘 영역 */}
                                                                        <div
                                                                            className="product_main_wrap_location_div_div_a_icon_wrap _1ljdcwf5 _1ljdcwf7 _15sions2"
                                                                            data-checked={locationSelected === "deungchon" ? "" : undefined}
                                                                            >
                                                                            <div
                                                                                className="product_main_wrap_location_div_div_a_icon_wrap_inner"
                                                                                data-checked={locationSelected === "deungchon" ? "" : undefined}
                                                                                ></div>
                                                                        </div>

                                                                        {/* 라벨 영역 */}
                                                                        <span className="product_main_wrap_location_div_div_a_label">등촌동</span>
                                                                    </a>
                                                                </RadioGroup.Item>

                                                                <RadioGroup.Item value="mokdong" asChild>
                                                                    <a
                                                                        href="#"
                                                                        className="product_main_wrap_location_div_div_a _15sions1 _15sions0"
                                                                        data-gtm="search_filter"
                                                                        data-discover="true"
                                                                    >
                                                                        {/* 아이콘 영역 */}
                                                                        <div
                                                                            className="product_main_wrap_location_div_div_a_icon_wrap _1ljdcwf5 _1ljdcwf7 _15sions2"
                                                                            data-checked={locationSelected === "mokdong" ? "" : undefined}
                                                                            >
                                                                            <div
                                                                                className="product_main_wrap_location_div_div_a_icon_wrap_inner"
                                                                                data-checked={locationSelected === "mokdong" ? "" : undefined}
                                                                                >
                                                                                
                                                                                </div>
                                                                        </div>

                                                                        {/* 라벨 영역 */}
                                                                        <span className="product_main_wrap_location_div_div_a_label">목동</span>
                                                                    </a>
                                                                </RadioGroup.Item>
                                                            </RadioGroup.Root>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="product_main_wrap_location_add_view mt_1.5_base" data-gtm="search_show_more_options">더보기</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_main_wrap_aside_section_border"></div>
                                {/* 카테고리 */}
                                <div className="mt_6_base mb_6_base display_flex_base flexDirection_column_base gap_3_base">
                                    <h3 className="fontSize_200_base fontWeight_bold lineHeight_heading.small_base">카테고리</h3>
                                    <div className="product_main_wrap_location_div_div">
                                        <div>
                                            <RadioGroup.Root
                                                value={categorySelected}
                                                onValueChange={setCategorySelected}
                                                aria-label="지역 선택"
                                                className="flex gap-2"
                                            >
                                                <RadioGroup.Item value="homeAppliances" asChild>
                                                    <a
                                                        href="#"
                                                        className="product_main_wrap_location_div_div_a _15sions1 _15sions0"
                                                        data-gtm="search_filter"
                                                        data-discover="true"
                                                    >
                                                        {/* 아이콘 영역 */}
                                                        <div
                                                            className="product_main_wrap_location_div_div_a_icon_wrap _1ljdcwf5 _1ljdcwf7 _15sions2"
                                                            data-checked={categorySelected === "homeAppliances" ? "" : undefined}
                                                            >
                                                            <div
                                                                className="product_main_wrap_location_div_div_a_icon_wrap_inner"
                                                                data-checked={categorySelected === "homeAppliances" ? "" : undefined}
                                                                ></div>
                                                        </div>

                                                        {/* 라벨 영역 */}
                                                        <span className="product_main_wrap_location_div_div_a_label">생활가전</span>
                                                    </a>
                                                </RadioGroup.Item>

                                                <RadioGroup.Item value="digitalDevice" asChild>
                                                    <a
                                                        href="#"
                                                        className="product_main_wrap_location_div_div_a _15sions1 _15sions0"
                                                        data-gtm="search_filter"
                                                        data-discover="true"
                                                    >
                                                        {/* 아이콘 영역 */}
                                                        <div
                                                            className="product_main_wrap_location_div_div_a_icon_wrap _1ljdcwf5 _1ljdcwf7 _15sions2"
                                                            data-checked={categorySelected === "digitalDevice" ? "" : undefined}
                                                            >
                                                            <div
                                                                className="product_main_wrap_location_div_div_a_icon_wrap_inner"
                                                                data-checked={categorySelected === "digitalDevice" ? "" : undefined}
                                                                >
                                                                
                                                                </div>
                                                        </div>

                                                        {/* 라벨 영역 */}
                                                        <span className="product_main_wrap_location_div_div_a_label">디지털기기</span>
                                                    </a>
                                                </RadioGroup.Item>
                                            </RadioGroup.Root>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_main_wrap_aside_section_border"></div>
                                {/* 가격 */}
                                <div className="marginTop_6_base marginBottom_6_base display_flex_base flexDirection_column_base gap_3_base">
                                    <h3 className="fontSize_200_base fontWeight_bold lineHeight_heading.small_base" level="3">가격</h3>
                                    <div className="display_flex_base flexDirection_column_base gap_3_base">
                                        <a
                                            data-gtm="search_filter"
                                            href="#"
                                            className="product_main_wrap_price_a pt_1_base pb_1_base pl_3_base pr_3_base display_inlineFlex_base alignItems_center_base justifyContent_center_base gap_1_base borderWidth_1 borderColor_decorative borderRadius_full_base fontSize_100_base "
                                            data-discover="true">나눔</a>
                                        <a
                                            data-gtm="search_filter"
                                            href="#"
                                            className="product_main_wrap_price_a pt_1_base pb_1_base pl_3_base pr_3_base display_inlineFlex_base alignItems_center_base justifyContent_center_base gap_1_base borderWidth_1 borderColor_decorative borderRadius_full_base fontSize_100_base "
                                            data-discover="true">5,000원 이하</a>
                                        <a
                                            data-gtm="search_filter"
                                            href="#"
                                            className="product_main_wrap_price_a pt_1_base pb_1_base pl_3_base pr_3_base display_inlineFlex_base alignItems_center_base justifyContent_center_base gap_1_base borderWidth_1 borderColor_decorative borderRadius_full_base fontSize_100_base "
                                            data-discover="true">10,000원 이하</a>
                                        <a
                                            data-gtm="search_filter"
                                            href="#"
                                            className="product_main_wrap_price_a pt_1_base pb_1_base pl_3_base pr_3_base display_inlineFlex_base alignItems_center_base justifyContent_center_base gap_1_base borderWidth_1 borderColor_decorative borderRadius_full_base fontSize_100_base "
                                            data-discover="true">20,000원 이하</a>
                                    </div>
                                    <div className="mt_2_small">
                                        <div className="display_flex_base alignItems_center_base justifyContent_center_base gap_1.5_base">
                                            <input
                                                id="price-from"
                                                className="_1sevvqs5 fontSize_100_base fontWeight_regular lineHeight_body.small_base color_neutral pt_1.5_base pb_1.5_base pl_2_base pr_2_base width_full_base borderRadius_1.5_base borderWidth_1 borderColor_field backgroundColor_layerDefault"
                                                type="text"
                                                inputmode="numeric"
                                                pattern="[0-9]*"
                                                placeholder="0"
                                                value="0" />
                                            <span className="fontSize_200_base fontWeight_regular lineHeight_body.medium_base color_neutral">-</span>
                                            <input
                                                id="price-to"
                                                className="_1sevvqs5 fontSize_100_base fontWeight_regular lineHeight_body.small_base color_neutral pt_1.5_base pb_1.5_base pl_2_base pr_2_base width_full_base borderRadius_1.5_base borderWidth_1 borderColor_field backgroundColor_layerDefault"
                                                type="text"
                                                inputmode="numeric"
                                                pattern="[0-9]*"
                                                placeholder="최대"
                                                value="0" />
                                        </div>
                                        <div className="mt_1_base">
                                        <a
                                            href="#"
                                            className="_9vtb2d0 fontSize_100_base fontWeight_regular lineHeight_body.small_base color_neutralSubtle textDecoration_underline cursor_pointer"
                                            data-discover="true">적용하기</a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </aside>
                        {/* 상품 리스트 */}
                        <div className="width_full_base display_flex_base flexDirection_column_base">
                            {/* 선택한 카테고리 */}
                            <div className="product_main_wrap_list_div width_full_base display_flex_base alignItems_center_base justifyContent_flexStart_base gap_2_base mt_0_base mt_5_small mt_0_medium">
                                <div className="product_main_wrap_list_div_div display_flex_base alignItems_center_base gap_2_base">
                                    <ul className="display_flex_base gap_2_base">
                                        <li className="display_inlineFlex_base justifyContent_center_base alignItems_center_base">
                                            <a
                                                href="#"
                                                className="product_main_wrap_list_div_div_a pt_1.5_base pb_1.5_base pl_3_base pr_3_base display_inlineFlex_base alignItems_center_base justifyContent_center_base borderRadius_full_base borderColor_decorative borderWidth_1 cursor_pointer fontSize_100_base gap_1_base"
                                                data-discover="true">
                                                디지털기기
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="14" height="14" color="var(--carotene-color-fg-neutral-inverted)" aria-hidden="true"><g><path d="M20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711Z" fill="currentColor"></path></g></svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* 상품 목록 */}
                            <div className="product_main_wrap_list_div_product_div width_full_base">
                                <a
                                    data-gtm="search_article"
                                    className="product_list_a display_flex_base"
                                    href="#"
                                    data-discover="true">
                                    <div className="product_list_a_div display_flex_base flexDirection_column_base gap_2_base lyhwr1a lyhwr18 lyhwr1b lyhwr16 lyhwr1d lyhwr19">
                                        <div className="position_relative_base">
                                            <div className="product_list_thumbnail_div _101lssj1 width_full_base overflow_hidden position_relative_base borderRadius_1.5_base"><noscript></noscript>
                                                <span className="lyhwr1f overflow_hidden position_relative_base display_block_base width_full_base height_full_base lazy-load-image-background opacity lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                                                    <img className="product_list_thumbnail_div_img lyhwr1g width_full_base height_full_base borderRadius_1.5_base" src="https://dnvefa72aowie.cloudfront.net/origin/article/202406/9d6fb0cfe974806c55aac8c602b541189b89f63ed844fede9edf92743c0f3b6d.jpg?q=82&amp;s=300x300&amp;t=crop&amp;f=webp" alt="thumbnail" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="display_flex_base gap_1_base alignItems_flexStart_base flexDirection_column_base">
                                            <div className="display_flex_base color_neutral width_full_base alignItems_flexStart_base flexDirection_column_base gap_0.5_base">
                                                <span className="product_list_title_span lyhwr1h fontSize_200_base fontWeight_regular lineHeight_body.medium_base color_neutral overflow_hidden">맥북프로 MacBook Pro (Retina, 15-inch, Early 2013) A1398</span>
                                                <span className="product_list_price_span lyhwr1i fontSize_200_base fontWeight_semibold lineHeight_body.medium_base color_neutral fontWeight_bold">225,000원</span>
                                            </div>
                                            <div className="width_full_base">
                                                <span className="product_list_location_span _1pwsqmm0 _1pwsqmm1">
                                                    <span className="lyhwr1j overflow_hidden">마곡동</span>
                                                    <span className="product_list_location_span_last_time_span _1pwsqmmd">
                                                        <span>·</span>
                                                        <time datetime="2025-08-10T23:06:07.217+09:00" class="product_list_location_span_last_time_span_time lyhwr1j sprinkles_overflow_hidden__1byufe819">끌올 5분 전</time>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default ProductWrap;