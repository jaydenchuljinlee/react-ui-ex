import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

type CategoryItem = {
    key: number | string;
    name: string;
    link: string;
    svg?: string; // 문자열 SVG
  };
  
type Category = CategoryItem & {
    child?: CategoryItem[];
  };
  

type CustomRadixDropdownProps = {
    category: Category;
  
    /** 트리거를 감싸는 래퍼 div 클래스 (GNB li/div 등) */
    wrapperClassName?: string;
  
    /** 닫힘 지연(ms): 경계 스침시 깜빡임 방지 */
    closeDelay?: number;
  
    /** 외부 제어 (선택): 미지정 시 내부 상태로 동작 */
    open?: boolean;
    onOpenChange?: (next: boolean) => void;
  };
  
const pointInRect = (x: number, y: number, r?: DOMRect | null) =>
    !!r && x >= r.left && x <= r.right && y >= r.top && y <= r.bottom;

const InlineSvg = ({ svg, className }: { svg?: string; className?: string }) => {
    if (!svg) return null;
    return <span className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
  }

export default function CustomRadixDropdown({
    category,
    wrapperClassName,
    closeDelay = 150,
    open: openProp,
    onOpenChange: onOpenChangeProp,
  }: CustomRadixDropdownProps) {
    const hasChild = !!category.child?.length;

    // child 없으면 드롭다운 안 쓰고 일반 링크
    if (!hasChild) {
      return (
        <a data-gtm="gnb_menu" href={category.link} className="main_menu_wrap_ul_a_single main_menu_wrap_ul_a pt_2_base pb_2_base pl_3_base pr_3_base display_inlineBlock_base" data-discover="true">{category.name}</a>
      );
    }
  

    // controlled / uncontrolled 지원
    const [openUncontrolled, setOpenUncontrolled] = React.useState(false);
    const isControlled = typeof openProp === "boolean";
    const open = isControlled ? (openProp as boolean) : openUncontrolled;
    const setOpen = (v: boolean) =>
      isControlled ? onOpenChangeProp?.(v) : setOpenUncontrolled(v);
  
    // 트리거 래퍼 + 콘텐츠 래퍼
    const triggerWrapRef = React.useRef<HTMLDivElement>(null);
    const contentWrapRef = React.useRef<HTMLDivElement>(null);
  
    // 깜빡임 방지 유틸 (re-render 없이 동기 동작)
    const lockRef = React.useRef(false);
    const rafRef = React.useRef<number | null>(null);
    const closeTimerRef = React.useRef<number | null>(null);
  
    // 열렸을 때만 전역 mousemove 감지
    React.useEffect(() => {
      if (!open) return;
  
      function handleMouseMove(e: MouseEvent) {
        if (lockRef.current) return;
        lockRef.current = true;
  
        const x = e.clientX;
        const y = e.clientY;
  
        const triggerRect = triggerWrapRef.current?.getBoundingClientRect();
        const contentRect = contentWrapRef.current?.getBoundingClientRect();
  
        const inside = pointInRect(x, y, triggerRect) || pointInRect(x, y, contentRect);
  
        if (!inside) scheduleClose();

        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          lockRef.current = false;
        });
      }
  
      function scheduleClose(delay = closeDelay) {
        if (closeTimerRef.current) return;
        closeTimerRef.current = window.setTimeout(() => {
          setOpen(false);
          closeTimerRef.current = null;
        }, delay);
      }
  
      document.addEventListener("mousemove", handleMouseMove);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        
        lockRef.current = false;
      };
    }, [open, closeDelay]); // setOpen은 안정적(동일 ref)이라 deps 불필요
  
    return (
      <DropdownMenu.Root open={open} onOpenChange={(next) => {
        if (next) setOpen(true);
        // next === false 는 무시
      }}>
        <div
          ref={triggerWrapRef}
          className={wrapperClassName}
          onMouseEnter={() => setOpen(true)}
        >
          {/* 내부에서 Trigger asChild 캡슐화 */}
          <DropdownMenu.Trigger asChild>
            <button className="main_menu_wrap_ul_li_multi_div_btn display_flex_base alignItems_center_base pr_2_base" >
                <a data-gtm="gnb_menu" className="_10h6zgx8 main_menu_wrap_ul_a pt_2_base pb_2_base display_flex_base alignItems_center_base gap_1_base pl_3_base pr_1_base" href={category.link} data-discover="true">{category.name}</a>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-seed-icon="true" data-seed-icon-version="0.0.23" width="24" height="24" aria-hidden="true" className="color_neutralSubtle width_3_base height_3_base _10h6zgx9"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M21.3991 6.93106C20.9192 6.47398 20.1596 6.49248 19.7025 6.97238L11.9995 15.06L4.29762 6.97244C3.84057 6.49251 3.081 6.47396 2.60107 6.93101C2.12114 7.38805 2.10258 8.14762 2.55963 8.62756L11.1305 17.6276C11.357 17.8654 11.671 18 11.9994 18C12.3278 18 12.6419 17.8654 12.8684 17.6276L21.4404 8.62762C21.8975 8.14771 21.879 7.38814 21.3991 6.93106Z" fill="currentColor"></path></g></svg>
                
            </button>
            
          </DropdownMenu.Trigger>

            {open && (
                <div
                    ref={contentWrapRef}
                    className="main_menu_wrap_ul_li_multi_div position_absolute_base zIndex_modal">
                    
                    <ul className="main_menu_wrap_ul_li_multi_div_ul pt_1.5_base pb_1.5_base pl_1_base pr_1_base display_flex_base flexDirection_column_base borderRadius_1.5_base backgroundColor_layerElevated">
                        {category.child!.map((c) => (
                            <li className="main_menu_wrap_ul_li_multi_div_ul_li pt_2_base pb_2_base pl_2_base pr_2_base display_flex_base alignItems_center_base gap_1_base borderRadius_1_base color_neutral">
                                <a href={c.link} className="display_flex_base alignItems_center_base gap_1_base">
                                <span>{c.name}</span>
                                {c.svg && <InlineSvg svg={c.svg} />}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
      </DropdownMenu.Root>
    );
  }
  

