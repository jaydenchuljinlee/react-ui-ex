import * as Dialog from '@radix-ui/react-dialog';
import type { ReactNode } from 'react';

interface LocationDialogProps {
    children: ReactNode;
  }
  

const LocationDialog = ({ children }: LocationDialogProps) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="location_dialog_overlay" style={{ pointerEvents: 'auto' }} />
                <Dialog.Content
                    className="location_dialog_content_wrap location_dialog_content_wrap_height location_dialog_content_wrap_border location_dialog_content_wrap_box"
                    aria-describedby="dialog-description"
                    style={{pointerEvents: 'auto'}}
                >
                <div className="location_dialog_title">
                    <Dialog.Title id="dialog-title" className="location_dialog_title_h2">지역 변경</Dialog.Title>        
                </div>
                

                <div className="location_dialog_content_main display_flex_base flexDirection_column_base">
                    <div className="pt_4_base pb_4_base display_flex_base flexDirection_column_base gap_4_base">
                        <div className="pl_4_base pr_4_base">
                            <div className="position_relative_base">
                                <form action=".">
                                    <div className="position_relative_base">
                                        <input className="location_dialog_content_search_input" type="search" aria-label="Search input" placeholder="지역이나 동네로 검색하기" value="" />
                                        <button
                                            type="submit"
                                            aria-label="Search"
                                            className="location_dialog_content_search_btn pb_0_base pt_0_base pl_0_base pr_0_base position_absolute_base top_50% display_flex_base alignItems_center_base justifyContent_center_base borderRadius_1_base cursor_pointer">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24" className="_19jmzvh7 color_neutral width_4_base height_4_base"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M10.811 1C5.3928 1 0.999939 5.38822 0.999939 10.8046V10.8176C0.999939 16.234 5.3928 20.6222 10.811 20.6222C12.792 20.6222 14.6438 20.0354 16.1897 19.0193L20.2858 23.1156C21.0669 23.8967 22.3332 23.8967 23.1143 23.1156C23.8953 22.3346 23.8953 21.0683 23.1143 20.2872L19.0171 16.1899C20.0326 14.6429 20.6222 12.7916 20.6222 10.8046C20.6222 5.38822 16.2293 1 10.811 1ZM3.39994 10.8046C3.39994 6.71542 6.71657 3.4 10.811 3.4C14.9055 3.4 18.2222 6.71542 18.2222 10.8046C18.2222 13.0196 17.2561 15.0073 15.7142 16.3681L15.7118 16.3702C14.4095 17.5257 12.6917 18.2222 10.811 18.2222C6.71657 18.2222 3.39994 14.9068 3.39994 10.8176V10.8046Z" fill="currentColor"></path></g></svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="pl_4_base pr_4_base">
                            <button className="location_dialog_content_current_my_location_btn full-width">
                                <div className="display_flex_base alignItems_center_base gap_1_base">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="16" height="16"><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M3.05493 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3.05493C3.51608 17.1716 6.82838 20.4839 11 20.9451V19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19V20.9451C17.1716 20.4839 20.4839 17.1716 20.9451 13H19C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11H20.9451C20.4839 6.82838 17.1716 3.51608 13 3.05493V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3.05493C6.82838 3.51608 3.51608 6.82838 3.05493 11ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z" fill="currentColor"></path></g></g></svg>
                                    <span className="fontSize_100_base fontWeight_semibold lineHeight_body.small_base color_brand fontWeight_bold">현재 내 위치 사용하기</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="location_dialog_content_recommend_wrap display_flex_base flexDirection_column_base">
                        <div className="pl_4_base pr_4_base pt_5_base">
                            <span className="location_dialog_content_recommend_span fontWeight_bold">추천</span>
                        </div>
                        <section className="location_dialog_content_recommend_section pl_4_base pr_4_base pb_12_base">
                            <ul>
                                <li className="location_dialog_content_recommend_li">
                                    <a className="location_dialog_content_recommend_li_a pt_3_base pb_3_base display_flex_base alignItems_center_base fontWeight_regular width_full_base" href="/kr/?in=%EC%86%A1%EB%8F%84%EB%8F%99-6543" data-discover="true">인천광역시, 연수구, 송도동</a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>

                <Dialog.Close asChild>
                    <button type="button" className="location_dialog_close_wrap">
                        <svg style={{width: '100%', height: '100%'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.10" width="24" height="24" ><g><path d="M20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711Z" fill="currentColor"></path></g></svg>
                        <span className="location_dialog_close_span">Close</span>
                    </button>
                </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default LocationDialog;