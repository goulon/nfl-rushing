import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  gridClasses,
} from '@mui/x-data-grid';
import './Players.css';
import playersData from './rushing.json';

function getRushValue(value) {
  return Number(String(value).replace(/[^\d]/g, ''));
}

function compareLongestRushes(v1, v2) {
  return getRushValue(v1) - getRushValue(v2);
}

const columns = [
  {
    field: 'Player',
    headerName: 'Player',
    width: 160,
    description: 'Player\'s name'
  },
  {
    field: 'Team',
    headerName: 'Team',
    width: 120,
    description: 'Player\'s team'
  },
  {
    field: 'Pos',
    headerName: 'Pos',
    width: 110,
    description: 'Player\'s position'
  },
  {
    field: 'Att/G',
    headerName: 'Att/G',
    type: 'number',
    width: 110,
    description: 'Rushing attempts per Game Average'
  },
  {
    field: 'Att',
    headerName: 'Att',
    type: 'number',
    width: 110,
    description: 'Rushing Attempts'
  },
  {
    field: 'Yds',
    headerName: 'Yds',
    type: 'number',
    width: 110,
    description: 'Total Rushing Yards'
  },
  {
    field: 'Avg',
    headerName: 'Avg',
    type: 'number',
    width: 110,
    description: 'Rushing Average Yards Per Attempt'
  },
  {
    field: 'Yds/G',
    headerName: 'Yds/G',
    type: 'number',
    width: 130,
    description: 'Rushing Yards Per Game'
  },
  {
    field: 'TD',
    headerName: 'TD',
    type: 'number',
    width: 110,
    description: 'Total Rushing Touchdowns'
  },
  {
    field: 'Lng',
    headerName: 'Lng',
    width: 110,
    description: 'Longest Rush -- a `T` represents a touchdown occurred',
    sortComparator: (v1, v2) => compareLongestRushes(v1, v2),
  },
  {
    field: '1st',
    headerName: '1st',
    type: 'number',
    width: 110,
    description: 'Rushing First Downs'
  },
  {
    field: '1st%',
    headerName: '1st%',
    type: 'number',
    width: 110,
    description: 'Rushing First Down Percentage'
  },
  {
    field: '20+',
    headerName: '20+',
    type: 'number',
    width: 110,
    description: 'Rushing 20+ Yards Each'
  },
  {
    field: '40+',
    headerName: '40+',
    type: 'number',
    width: 110,
    description: 'Rushing 40+ Yards Each'
  },
  {
    field: 'FUM',
    headerName: 'FUM',
    type: 'number',
    width: 110,
    description: 'Rushing Fumbles'
  },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbar />
      <h2 className='table-header'>
        NFL Rushing
      </h2>
    </GridToolbarContainer>
  );
}

export default function Players() {
  return (
    <div className='player-table'>
      <DataGrid
        getRowId={(r) => r.Player}
        rows={playersData}
        columns={columns}
        components={{
          Toolbar: CustomToolbar,
        }}
        disableSelectionOnClick
      />
    </div>
  );
}