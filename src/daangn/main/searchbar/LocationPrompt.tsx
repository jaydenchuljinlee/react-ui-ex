import { useState, useEffect, useRef, useLayoutEffect } from 'react';

interface MainLocationPromptProp {
    categories: string[]
}

const MainLocationPrompt = ({ categories }: MainLocationPromptProp) => {
    const [currentWord, setCurrentWord] = useState(categories[0]);
    const [prevWord, setPrevWord] = useState('');
    const [isAnimating, setIsAnimating] = useState(false);
    const [textWidth, setTextWidth] = useState<number>(0);

    const prevRef = useRef<HTMLDivElement>(null);
    const currentRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);

    const BASE_LETTER_WIDTH = 34; // 한 글자당 픽셀 너비 (예: 16px 기준)
    const BASE_PADDING = 20

    useEffect(() => {
        const len = currentWord.length;
        const estimatedWidth = (len * BASE_LETTER_WIDTH) + BASE_PADDING;
        setTextWidth(estimatedWidth);
    }, [currentWord]);

    useEffect(() => {
        const index = categories.indexOf(currentWord);
        const nextIndex = (index + 1) % categories.length;

        const timeout = setTimeout(() => {
            setPrevWord(currentWord);
            setCurrentWord(categories[nextIndex]);
            setIsAnimating(true);

            setTimeout(() => setIsAnimating(false), 1000);
        }, 2500);

        return () => clearTimeout(timeout);
    }, [currentWord, categories]);

    return (
        <div className="mb_16_large mt_32_small mt_12_base mb_12_small display_flex_base justifyContent_center_base">
            <h2 className="main_h2_font">
                <div className="display_none_base width_5_base mr_1_base display_inlineFlex_small mr_1.5_small width_8_small">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="100%" height="100%">
                        <g>
                            <path d="M12.0022 0.498047C6.10466 0.498047 2.06836 4.96307 2.06836 10.4215C2.06836 14.28 4.55706 17.553 6.82617 19.7593C7.98687 20.8782 9.1371 21.7775 10.005 22.3944C10.4679 22.7331 10.9513 23.0575 11.448 23.346C11.7722 23.5342 12.2218 23.5551 12.546 23.3669C13.0436 23.078 13.5163 22.7313 13.989 22.4049C14.8569 21.7879 16.0072 20.8887 17.1679 19.7698C19.437 17.5634 21.9257 14.3009 21.9257 10.4319C21.9361 4.96307 17.8998 0.498047 12.0022 0.498047ZM12.0022 14.4787C9.76451 14.4787 7.94504 12.6592 7.94504 10.4215C7.94504 8.18374 9.76451 6.36427 12.0022 6.36427C14.24 6.36427 16.0595 8.18374 16.0595 10.4215C16.0595 12.6592 14.24 14.4787 12.0022 14.4787Z" fill="currentColor"></path>
                        </g>
                    </svg>
                </div>
                역삼동에서
                <div className="display_inlineFlex_small" style={{overflow: 'hidden'}}>
                    <div
                        style={{
                            position: 'relative',
                            whiteSpace: 'nowrap',
                            height: '44px',
                            width: `${textWidth}px`,
                            overflow: 'hidden',
                            verticalAlign: 'middle'
                        }}
                    >
                        <div
                            ref={prevRef}
                            className={`category_word prev ${isAnimating ? 'fade-up' : ''}`}
                        >
                            {prevWord}
                        </div>
                        <div ref={currentRef} className="category_word current">
                            {currentWord}
                        </div>
                        {/* 측정용 요소 - 개선된 스타일 */}
                        <div
                            ref={measureRef}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                visibility: 'hidden',
                                whiteSpace: 'nowrap',
                                pointerEvents: 'none',
                                zIndex: -1
                            }}
                            className="category_word"
                        >
                            {currentWord}
                        </div>
                    </div>
                </div>
                찾고 계신가요?
            </h2>
        </div>
    );
};

export default MainLocationPrompt;