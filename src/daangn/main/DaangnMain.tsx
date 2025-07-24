import { Box } from '@mui/material';
import DaangnHeader from '../header/DaangnHeader';
import SearchBarMain from './searchbar/SarchBarMain';
import CategoryView from './CategoryView';
import { useResponsiveFullWidth } from '../constants/layout';

import '../../assets/css/daangn/daangn.css';

const DaangnMain = () => {
  const width = useResponsiveFullWidth();  

  return (
    <div className="main_body">
      <DaangnHeader />
      <main className="main_content">
          <div className="wv2v230 pl_20_large pr_20_large pb_4_base pt_4_base">
            <SearchBarMain />
            <CategoryView />
          </div>
        </main>
    </div>
  );
};

export default DaangnMain;
  