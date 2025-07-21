import type { SearchbarProp } from '../../typescript/searchbar/sarchbar';

const SearchBarSection = ({ popullarSearchWords }: SearchbarProp) => {
    return (
        <div className="search_bar_width display_flex_base full-width-mx-auto">
            <div className="mr_4_base display_block_medium">
                <button className="pl_4_base pr_4_base display_flex_base search-btn alignItems_center_base" data-gtm="gnb_location" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:rb:" data-state="closed">
                    <svg className="search-btn-svg mr_1_base" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24">
                        <g>
                            <path d="M12.0022 0.498047C6.10466 0.498047 2.06836 4.96307 2.06836 10.4215C2.06836 14.28 4.55706 17.553 6.82617 19.7593C7.98687 20.8782 9.1371 21.7775 10.005 22.3944C10.4679 22.7331 10.9513 23.0575 11.448 23.346C11.7722 23.5342 12.2218 23.5551 12.546 23.3669C13.0436 23.078 13.5163 22.7313 13.989 22.4049C14.8569 21.7879 16.0072 20.8887 17.1679 19.7698C19.437 17.5634 21.9257 14.3009 21.9257 10.4319C21.9361 4.96307 17.8998 0.498047 12.0022 0.498047ZM12.0022 14.4787C9.76451 14.4787 7.94504 12.6592 7.94504 10.4215C7.94504 8.18374 9.76451 6.36427 12.0022 6.36427C14.24 6.36427 16.0595 8.18374 16.0595 10.4215C16.0595 12.6592 14.24 14.4787 12.0022 14.4787Z" fill="currentColor"></path>
                        </g>
                    </svg>
                    <span className="search-btn-font">송도동</span>
                    <svg className="ml_1_base" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="14" height="14">
                        <g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3991 6.93106C20.9192 6.47398 20.1596 6.49248 19.7025 6.97238L11.9995 15.06L4.29762 6.97244C3.84057 6.49251 3.081 6.47396 2.60107 6.93101C2.12114 7.38805 2.10258 8.14762 2.55963 8.62756L11.1305 17.6276C11.357 17.8654 11.671 18 11.9994 18C12.3278 18 12.6419 17.8654 12.8684 17.6276L21.4404 8.62762C21.8975 8.14771 21.879 7.38814 21.3991 6.93106Z" fill="currentColor"></path>
                        </g>
                    </svg>
                </button>
            </div>
            <div className="full-width">
                <form className="search-form">
                    <button className="dispay_none" aria-label="검색하려는 서비스를 선택하세요" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:re:" data-state="closed">
                        <div>
                            <span>중고거래</span>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="14" height="14" aria-hidden="true">
                                <g>
                                    <path d="M8.17379 8C6.46508 8 5.54326 10.0042 6.65527 11.3016L10.4811 15.765C11.2792 16.6962 12.7199 16.6962 13.5181 15.765L17.3439 11.3016C18.4559 10.0042 17.5341 8 15.8253 8H8.17379Z" fill="currentColor"></path>
                                </g>
                            </svg>
                        </div>
                    </button>
                    <button className="responsive-block right-border" aria-label="검색하려는 서비스를 선택하세요" type="button" id="radix-:rh:" aria-haspopup="menu" aria-expanded="false" data-state="closed" >
                        <div className="display_flex_base justifyContent_spaceBetween_base alignItems_center_base pr_2.5_base">
                            <span>중고거래</span>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="14" height="14" aria-hidden="true">
                                <g>
                                    <path d="M8.17379 8C6.46508 8 5.54326 10.0042 6.65527 11.3016L10.4811 15.765C11.2792 16.6962 12.7199 16.6962 13.5181 15.765L17.3439 11.3016C18.4559 10.0042 17.5341 8 15.8253 8H8.17379Z" fill="currentColor"></path>
                                </g>
                            </svg>
                        </div>
                    </button>
                    {/* 검색 */}
                    <div className="search_area ml_1_relative">
                        <div className="position_relative">
                            <input className="search_input border_none" type="search" aria-label="검색어 입력" placeholder="검색어를 입력해주세요" name="search" value="" />
                            <button className="search_action_btn justifyContent_center_base alignItems_center_base p_0_base top_50" type="submit" aria-label="검색">
                                <svg className="white_color width_4_base height_4_base" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24" >
                                    <g>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6507 2.15225C11.1821 2.62088 11.1821 3.38068 11.6507 3.84931L18.1022 10.3008H2.99922C2.33648 10.3008 1.79922 10.8381 1.79922 11.5008C1.79922 12.1635 2.33648 12.7008 2.99922 12.7008H18.1022L11.6507 19.1523C11.1821 19.6209 11.1821 20.3807 11.6507 20.8493C12.1193 21.3179 12.8791 21.3179 13.3477 20.8493L21.8477 12.3493C22.0728 12.1243 22.1992 11.8191 22.1992 11.5008C22.1992 11.1825 22.0728 10.8773 21.8477 10.6523L13.3477 2.15225C12.8791 1.68362 12.1193 1.68362 11.6507 2.15225Z" fill="currentColor"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
                <div className="mx_0_responsive position_relative">
                    <div className="position_relative">
                        <div className="full-width overflowX_scroll scroll_none">
                            <div className="popular_search_word_wrap display_inlineFlex_base alignItems_center_base pl1.5_medium pb_3_medium pt_3_medium">
                                <div className="popular_search_word_title fontSize_100_base mr_4_base neutralSubtle">인기 검색어</div>
                                <ul className="display_flex_base alignItems_center_base">
                                    {
                                        popullarSearchWords.map((item, index) => (
                                            <li key={index} className="mr_3_medium">
                                                <a data-gtm="gnb_popular_keyword" className="fontSize_100_base display_flex_base alignItems_center_base popular_search_word_atag" href="/kr/buy-sell/?in=%EC%86%A1%EB%8F%84%EB%8F%99-6543&amp;search=%EC%97%90%EC%96%B4%EC%BB%A8" data-discover="true">{item}</a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBarSection;