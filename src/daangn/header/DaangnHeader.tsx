import React, { useEffect, useRef, useState } from 'react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import LocationDialog from '../main/LocationDialog';

type Props = {
    searchBtnFlag: boolean;
};


const Header = React.forwardRef<HTMLDivElement, Props>(({ searchBtnFlag }, ref) =>  {
    const headerBoxRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [realtyOpen, setRealtyOpen] = useState(false);
    const realtyRef = useRef<HTMLDivElement>(null);
    const portalRef = useRef<HTMLDivElement>(null);

    // 🔒 락은 ref로 (동기 갱신)
    const lockRef = useRef(false);
    // requestAnimationFrame id 보관
    const rafRef = useRef<number | null>(null);
    // 잠깐 밖으로 나갔을 때 닫기 지연
    const closeTimerRef = useRef<number | null>(null);

    useEffect(() => {
        if (!realtyOpen) return;
  
        function handleMouseMove(e: MouseEvent) {
            if (lockRef.current) return;
            lockRef.current = true;
        
            const triggerRect = realtyRef.current?.getBoundingClientRect();
            const portalRect  = portalRef.current?.getBoundingClientRect();
        
            const x = e.clientX;
            const y = e.clientY;
        
            const insideTrigger = triggerRect
            ? x >= triggerRect.left && x <= triggerRect.right &&
                y >= triggerRect.top  && y <= triggerRect.bottom
            : false;
        
            const insidePortal = portalRect
            ? x >= portalRect.left && x <= portalRect.right &&
                y >= portalRect.top  && y <= portalRect.bottom
            : false;
        
            const isInside = insideTrigger || insidePortal;
        
            if (isInside) {
            cancelClose();
            } else {
            scheduleClose();
            }
        
            unlockNextFrame();
        }
      
  
        function unlockNextFrame() {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            lockRef.current = false;
        });
        }
  
        function scheduleClose(delay = 100) {
        if (closeTimerRef.current) return; // 이미 예약되어 있으면 중복 예약 금지
        closeTimerRef.current = window.setTimeout(() => {
            setRealtyOpen(false);
            closeTimerRef.current = null;
        }, delay);
        }
  
        function cancelClose() {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        }
  
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current);
            closeTimerRef.current = null;
        }
        lockRef.current = false;
        };
    }, [realtyOpen]);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          setIsScrolled(scrollTop > 10); // 스크롤이 10px 이상이면 true
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // 초기 확인
        handleScroll();
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  

    return (
        <header ref={ref} className="main_header">
            <div ref={headerBoxRef} className="main_header_box flexDirection_column_base justifyContent_spaceBetween_base full_width display_flex_base backgroundColor_layerDefault" data-border={isScrolled ? 'true' : 'false'}>
                <div className="wv2v230 pl_4_base pr_4_base pl_10_small pr_10_small pl_16_medium pr_16_medium pl_20_large pr_20_large full_width backgroundColor_layerDefault">
                    <div className="backgroundColor_layerDefault justifyContent_spaceBetween_base alignItems_center_base pb_4_base pt_4_base position_relative_base display_flex_base top_0 zIndex_2">
                        <a data-gtm="gnb_logo" href="/kr/?in=%EC%97%AD%EC%82%BC%EB%8F%99-6035" className="sprinkles_display_flex_base__1byufe82i sprinkles_alignItems_center_base__1byufe8si sprinkles_cursor_pointer__1byufe81o" aria-label="당근" data-discover="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" fill="none" viewBox="0 0 203 114">
                                <path fill="#FF6F0F" d="M29.234 36.895C13.09 36.895 0 49.695 0 65.855c0 22.327 29.318 34.175 29.234 34.143-.08.032 29.234-11.816 29.234-34.143 0-16.148-13.089-28.96-29.234-28.96Zm0 40.684A11.069 11.069 0 0 1 18.386 64.34a11.073 11.073 0 0 1 8.702-8.693A11.068 11.068 0 0 1 40.312 66.51a11.07 11.07 0 0 1-11.078 11.088v-.02Z"></path>
                                <path fill="#00A05B" d="M35.817 0c-6.823 0-11.574 4.768-12.322 10.4-9.094-2.512-16.22 4.4-16.22 12 0 5.82 3.999 10.52 9.33 12.047 4.299 1.228 12.041.312 12.041.312-.04-1.88 1.692-3.944 4.364-5.824 7.598-5.343 13.54-7.863 14.457-15.151C48.427 6.16 42.767 0 35.817 0Z"></path>
                                <path fill="#FF6F0F" d="M116.493 46.963c-6.175 1.94-16.865 2.972-26.907 2.972V37.719h20.74v-9.096H78.465V59.6c17.424 0 32.637-2.1 39.06-4.088l-1.032-8.548ZM131.134 25h-11.106v35.61h11.106V49.448h8.958v-9.716h-8.958V25ZM110.506 60.527c-11.766 0-20.396 6.484-20.396 16 0 9.515 8.639 16 20.396 16 11.758 0 20.396-6.489 20.396-16 0-9.512-8.63-16-20.396-16Zm0 23.091c-5.303 0-9.282-2.544-9.282-7.108 0-4.563 3.979-7.103 9.282-7.103s9.282 2.544 9.282 7.103c0 4.56-3.975 7.108-9.282 7.108ZM161.72 65.25h-11.354v24.092h45.128v-9.536H161.72V65.251ZM194.086 27.971h-44.232v9.536h33.082c0 2.368.112 8-.972 14.4h-40.568v9.864h61.588v-9.848H192.01c1.472-8.088 1.892-14.392 2.076-23.952Z"></path>
                            </svg>
                        </a>
                        {/* 메인 메뉴 */}
                        
                        
                        <nav aria-label="메인 메뉴" data-orientation="horizontal" dir="ltr" className="position_relative_base main_menu_wrap">
                            <div style={{position: 'relative'}}>
                                <ul data-orientation="horizontal" className="main_menu_wrap_ul display_flex_base alignItems_center_base color_neutral" dir="ltr">
                                    <li>
                                        <a data-gtm="gnb_menu" href="#" className="main_menu_wrap_ul_a_single main_menu_wrap_ul_a pt_2_base pb_2_base pl_3_base pr_3 display_inlineBlock_base" data-discover="true">중고거래</a>
                                    </li>
                                    <li>
                                        <DropdownMenu.Root open={realtyOpen} onOpenChange={setRealtyOpen}>
                                            <div
                                                ref={realtyRef}
                                                className="main_menu_wrap_ul_li_div"
                                                onMouseEnter={() => setRealtyOpen(true)}>
                                                
                                                {/* 트리거 버튼 */}
                                                <DropdownMenu.Trigger asChild>
                                                    <button className="main_menu_wrap_ul_li_multi_div_btn display_flex_base alignItems_center_base cursor_pointer pr_2_base">
                                                        <a data-gtm="gnb_menu" className="_10h6zgx8 main_menu_wrap_ul_a pt_2_base pb_2_base display_flex_base alignItems_center_base gap_1_base pl_3_base pr_1_base" href="#" data-discover="true">부동산</a>
                                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24" aria-hidden="true" className="color_neutralSubtle width_3_base height_3_base _10h6zgx9"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3991 6.93106C20.9192 6.47398 20.1596 6.49248 19.7025 6.97238L11.9995 15.06L4.29762 6.97244C3.84057 6.49251 3.081 6.47396 2.60107 6.93101C2.12114 7.38805 2.10258 8.14762 2.55963 8.62756L11.1305 17.6276C11.357 17.8654 11.671 18 11.9994 18C12.3278 18 12.6419 17.8654 12.8684 17.6276L21.4404 8.62762C21.8975 8.14771 21.879 7.38814 21.3991 6.93106Z" fill="currentColor"></path></g></svg>
                                                    </button>
                                                </DropdownMenu.Trigger>

                                                <DropdownMenu.Content
                                                    side="bottom"
                                                    align="start"
                                                    sideOffset={0}
                                                    alignOffset={0}
                                                    avoidCollisions={false}
                                                    asChild>
                                                    <div
                                                        ref={portalRef}
                                                        className="main_menu_wrap_ul_li_multi_div position_absolute_base zIndex_modal"
                                                        onMouseEnter={() => setRealtyOpen(true)}
                                                        onMouseLeave={(e) => {
                                                            console.log(e.target);
                                                        }}
                                                        >
                                                        <ul className="main_menu_wrap_ul_li_multi_div_ul pt_1.5_base pb_1.5_base pl_1_base pr_1_base display_flex_base flexDirection_column_base borderRadius_1.5_base backgroundColor_layerElevated">          
                                                            {/* 첫 번째 아이템 */}
                                                            <DropdownMenu.Item asChild>
                                                                <li className="pt_2_base pb_2_base pl_2_base pr_2_base display_flex_base alignItems_center_base gap_1_base borderRadius_1_base color_neutral">
                                                                    <a href="/kr/realty/?in=마곡동-6052" data-discover="true">부동산 검색</a>
                                                                </li>
                                                            </DropdownMenu.Item>

                                                            {/* 두 번째 아이템 */}
                                                            <DropdownMenu.Item asChild>
                                                                <li className="pt_2_base pb_2_base pl_2_base pr_2_base display_flex_base alignItems_center_base gap_1_base borderRadius_1_base color_neutral">
                                                                    <a href="#" target="_blank" className="display_flex_base alignItems_center_base">
                                                                        <span>중개사 서비스</span>&nbsp;
                                                                    </a>
                                                                </li>
                                                            </DropdownMenu.Item>

                                                            {/* 세 번째 아이템 */}
                                                            <DropdownMenu.Item asChild>
                                                                <li className="pt_2_base pb_2_base pl_2_base pr_2_base display_flex_base alignItems_center_base gap_1_base borderRadius_1_base color_neutral">
                                                                <a href="#" target="_blank" className="display_flex_base alignItems_center_base">
                                                                    <span>중개사 이용 가이드</span>&nbsp;
                                                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="14" height="14" class="sprinkles_color_neutralSubtle__1byufe82"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M20.0005 19C20.5505 19 21.0005 18.55 21.0005 18V4C21.0005 3.45 20.5505 3 20.0005 3H6.00055C5.45055 3 5.00055 3.45 5.00055 4C5.00055 4.55 5.45055 5 6.00055 5H17.6005L3.29055 19.29C2.90055 19.68 2.90055 20.31 3.29055 20.7C3.68055 21.09 4.31055 21.09 4.70055 20.7L19.0005 6.43V18C19.0005 18.55 19.4505 19 20.0005 19Z" fill="currentColor"></path></g></svg>
                                                                </a>
                                                                </li>
                                                            </DropdownMenu.Item>
                                                        </ul>
                                                    </div>
                                                </DropdownMenu.Content>
                                            </div>
                                        </DropdownMenu.Root>
                                        {/* <div className="main_menu_wrap_ul_li_div">
                                            <button id="radix-:r0:-trigger-radix-:r2:" data-state="closed" aria-expanded="false" aria-controls="radix-:r0:-content-radix-:r2:" className="_10h6zgx0 display_flex_base alignItems_center_base cursor_pointer pr_2_base" data-radix-collection-item="">
                                                <a data-gtm="gnb_menu" className="_10h6zgx8 main_menu_wrap_ul_a pt_2_base pb_2_base display_flex_base alignItems_center_base gap_1_base pl_3_base pr_1_base" href="#" data-discover="true">부동산</a>
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24" aria-hidden="true" className="color_neutralSubtle width_3_base height_3_base _10h6zgx9"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3991 6.93106C20.9192 6.47398 20.1596 6.49248 19.7025 6.97238L11.9995 15.06L4.29762 6.97244C3.84057 6.49251 3.081 6.47396 2.60107 6.93101C2.12114 7.38805 2.10258 8.14762 2.55963 8.62756L11.1305 17.6276C11.357 17.8654 11.671 18 11.9994 18C12.3278 18 12.6419 17.8654 12.8684 17.6276L21.4404 8.62762C21.8975 8.14771 21.879 7.38814 21.3991 6.93106Z" fill="currentColor"></path></g></svg>
                                            </button>
                                        </div> */}
                                    </li>
                                    <li>                                        
                                        <div className="main_menu_wrap_ul_li_div">
                                            <button id="radix-:r0:-trigger-radix-:r3:" data-state="closed" aria-expanded="false" aria-controls="radix-:r0:-content-radix-:r3:" className="_10h6zgx0 display_flex_base alignItems_center_base cursor_pointer pr_2_base" data-radix-collection-item="">
                                                <a data-gtm="gnb_menu" className="_10h6zgx8 main_menu_wrap_ul_a pt_2_base pb_2_base display_flex_base alignItems_center_base gap_1_base pl_3_base pr_1_base" href="#"  data-discover="true">중고차</a>
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24" aria-hidden="true" className="color_neutralSubtle width_3_base height_3_base _10h6zgx9"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3991 6.93106C20.9192 6.47398 20.1596 6.49248 19.7025 6.97238L11.9995 15.06L4.29762 6.97244C3.84057 6.49251 3.081 6.47396 2.60107 6.93101C2.12114 7.38805 2.10258 8.14762 2.55963 8.62756L11.1305 17.6276C11.357 17.8654 11.671 18 11.9994 18C12.3278 18 12.6419 17.8654 12.8684 17.6276L21.4404 8.62762C21.8975 8.14771 21.879 7.38814 21.3991 6.93106Z" fill="currentColor"></path></g></svg>
                                            </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="main_menu_wrap_ul_li_div">
                                            <button id="radix-:r0:-trigger-radix-:r4:" data-state="closed" aria-expanded="false" aria-controls="radix-:r0:-content-radix-:r4:" className="_10h6zgx0 display_flex_base alignItems_center_base cursor_pointer pr_2_base" data-radix-collection-item="">
                                                <a data-gtm="gnb_menu" className="_10h6zgx8 main_menu_wrap_ul_a pt_2_base pb_2_base display_flex_base alignItems_center_base gap_1_base pl_3_base pr_1_base" href="#" data-discover="true">알바</a>
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24" aria-hidden="true" className="color_neutralSubtle width_3_base height_3_base _10h6zgx9"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3991 6.93106C20.9192 6.47398 20.1596 6.49248 19.7025 6.97238L11.9995 15.06L4.29762 6.97244C3.84057 6.49251 3.081 6.47396 2.60107 6.93101C2.12114 7.38805 2.10258 8.14762 2.55963 8.62756L11.1305 17.6276C11.357 17.8654 11.671 18 11.9994 18C12.3278 18 12.6419 17.8654 12.8684 17.6276L21.4404 8.62762C21.8975 8.14771 21.879 7.38814 21.3991 6.93106Z" fill="currentColor"></path></g></svg>
                                            </button>
                                        </div>
                                    </li>
                                    <li>
                                        <a data-gtm="gnb_menu" href="/kr/local-profile/?in=%EB%A7%88%EA%B3%A1%EB%8F%99-6052" className="main_menu_wrap_ul_a_single main_menu_wrap_ul_a pt_2_base pb_2_base pl_3_base pr_3_base display_inlineBlock_base" data-discover="true">동네업체</a>
                                    </li>
                                    <li>
                                        <a data-gtm="gnb_menu" href="/kr/community/?in=%EB%A7%88%EA%B3%A1%EB%8F%99-6052" className="main_menu_wrap_ul_a_single main_menu_wrap_ul_a pt_2_base pb_2_base pl_3_base pr_3_base display_inlineBlock_base" data-discover="true">동네생활</a>
                                    </li>
                                    <li>
                                        <a data-gtm="gnb_menu" href="/kr/group/?in=%EB%A7%88%EA%B3%A1%EB%8F%99-6052" className="main_menu_wrap_ul_a_single main_menu_wrap_ul_a pt_2_base pb_2_base pl_3_base pr_3_base display_inlineBlock_base" data-discover="true">모임</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        
                        {/* 992px 이상일 경우 */}
                        <div className="display_flex_medium alignItems_center_base gap_4_base display_none_base ">
                            <button 
                                className="main_header_search_btn_large pb_1_base pt_1_base pl_1_base pr_1_base borderRadius_1_base cursor_pointer _7hq86o0"
                                style={{ opacity: searchBtnFlag ? 1 : 0 }}
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded="false"
                                aria-controls="radix-:r0:"
                                data-state="closed"
                                data-show={searchBtnFlag ? 'true': 'false'}>
                                <div className="main_header_search_btn_large_div">검색</div>
                                <svg className="color_neutral width_6_base height_6_base display_block_base" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24" aria-hidden="true"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3111 1.2002C6.00313 1.2002 1.69995 5.49902 1.69995 10.8048V10.8178C1.69995 16.1236 6.00313 20.4224 11.3111 20.4224C13.5994 20.4224 15.711 19.6233 17.3631 18.2785L21.493 22.4083C21.8835 22.7988 22.5167 22.7988 22.9072 22.4083C23.2977 22.0177 23.2977 21.3846 22.9072 20.9941L18.777 16.864C20.1196 15.2095 20.9222 13.0996 20.9222 10.8048C20.9222 5.49902 16.619 1.2002 11.3111 1.2002ZM3.69995 10.8048C3.69995 6.60502 7.10627 3.2002 11.3111 3.2002C15.5159 3.2002 18.9222 6.60502 18.9222 10.8048C18.9222 13.0794 17.9298 15.1209 16.3465 16.5182L16.3446 16.52C15.0067 17.707 13.2419 18.4224 11.3111 18.4224C7.10627 18.4224 3.69995 15.0176 3.69995 10.8178V10.8048Z" fill="currentColor"></path></g></svg>
                            </button>
                            <button
                                type="submit"
                                className="app_download_btn_layout app_download_btn_color app_download_btn_font">
                                앱 다운로드
                            </button>
                        </div>
                        {/* 992px 이하일 경우 */}
                        <div className="display_flex_base alignItems_center_base justifyContent_center gap_3_base display_block_base display_none_medium">
                            <div className="display_flex_base gap_3_base alignItems_center_base">
                                <div style={{transform: 'none'}}>
                                    <LocationDialog>
                                        <button 
                                            className="main_header_search_small_btn pl_4_base pr_4_base color_neutral display_flex_base alignItems_center_base fontWeight_bold cursor_pointer flexShrink_0_base " data-gtm="gnb_location"
                                            type="button"
                                            aria-haspopup="dialog"
                                            aria-expanded="false"
                                            aria-controls="radix-:r1:"
                                            data-state="closed">
                                                <svg className="main_header_search_small_svg mr_1_base" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24"><g><path d="M12.0022 0.498047C6.10466 0.498047 2.06836 4.96307 2.06836 10.4215C2.06836 14.28 4.55706 17.553 6.82617 19.7593C7.98687 20.8782 9.1371 21.7775 10.005 22.3944C10.4679 22.7331 10.9513 23.0575 11.448 23.346C11.7722 23.5342 12.2218 23.5551 12.546 23.3669C13.0436 23.078 13.5163 22.7313 13.989 22.4049C14.8569 21.7879 16.0072 20.8887 17.1679 19.7698C19.437 17.5634 21.9257 14.3009 21.9257 10.4319C21.9361 4.96307 17.8998 0.498047 12.0022 0.498047ZM12.0022 14.4787C9.76451 14.4787 7.94504 12.6592 7.94504 10.4215C7.94504 8.18374 9.76451 6.36427 12.0022 6.36427C14.24 6.36427 16.0595 8.18374 16.0595 10.4215C16.0595 12.6592 14.24 14.4787 12.0022 14.4787Z" fill="currentColor"></path></g></svg>
                                                <span
                                                    className="fontSize_100_base fontWeight_semibold lineHeight_body.small_base color_neutral abyzch1 abyzchc bg8nr24"
                                                    style={{
                                                        '--carotene-max-lines-base': '1',
                                                        '--carotene-max-lines-small': '1',
                                                        '--carotene-max-lines-medium': '1',
                                                        '--carotene-max-lines-large': '1',
                                                    } as any}>마곡동</span>
                                                <svg className="ml_1_base" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="14" height="14" ><g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3991 6.93106C20.9192 6.47398 20.1596 6.49248 19.7025 6.97238L11.9995 15.06L4.29762 6.97244C3.84057 6.49251 3.081 6.47396 2.60107 6.93101C2.12114 7.38805 2.10258 8.14762 2.55963 8.62756L11.1305 17.6276C11.357 17.8654 11.671 18 11.9994 18C12.3278 18 12.6419 17.8654 12.8684 17.6276L21.4404 8.62762C21.8975 8.14771 21.879 7.38814 21.3991 6.93106Z" fill="currentColor"></path></g></svg>
                                        </button>
                                    </LocationDialog>
                                </div>
                                <button
                                    className="main_header_search_btn_small pb_1_base pt_1_base pl_1_base pr_1_base borderRadius_1_base cursor_pointer "
                                    style={{opacity: 0}}
                                    type="button"
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="radix-:r4:"
                                    data-state="closed"
                                    data-show="false">
                                        <div className="main_header_search_div_small">검색</div>
                                        <svg className="color_neutral width_6_base height_6_base display_block_base" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24" aria-hidden="true"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M11.3111 1.2002C6.00313 1.2002 1.69995 5.49902 1.69995 10.8048V10.8178C1.69995 16.1236 6.00313 20.4224 11.3111 20.4224C13.5994 20.4224 15.711 19.6233 17.3631 18.2785L21.493 22.4083C21.8835 22.7988 22.5167 22.7988 22.9072 22.4083C23.2977 22.0177 23.2977 21.3846 22.9072 20.9941L18.777 16.864C20.1196 15.2095 20.9222 13.0996 20.9222 10.8048C20.9222 5.49902 16.619 1.2002 11.3111 1.2002ZM3.69995 10.8048C3.69995 6.60502 7.10627 3.2002 11.3111 3.2002C15.5159 3.2002 18.9222 6.60502 18.9222 10.8048C18.9222 13.0794 17.9298 15.1209 16.3465 16.5182L16.3446 16.52C15.0067 17.707 13.2419 18.4224 11.3111 18.4224C7.10627 18.4224 3.69995 15.0176 3.69995 10.8178V10.8048Z" fill="currentColor"></path></g></svg>
                                </button>
                            </div>
                            <div className="display_inlineFlex_base justifyContent_center_base alignItems_center_base">
                                <button
                                    className="main_header_hamberger_btn_small pb_0_base pt_0_base pl_0_base pr_0_base position_relative_base display_flex_base display_none_medium cursor_pointer"
                                    type="button"
                                    aria-haspopup="dialog"
                                    aria-expanded="false"
                                    aria-controls="radix-:r5:"
                                    data-state="closed">
                                    <div data-gtm="gnb_hamburger_menu" className="main_header_hamberger_div_small position_absolute_base top_50% left_50%">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24"><g><g><path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4C22 4.55228 21.5523 5 21 5H3C2.44772 5 2 4.55228 2 4Z" fill="currentColor"></path><path d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="currentColor"></path><path d="M3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H3Z" fill="currentColor"></path></g></g></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    );
})

export default Header;
