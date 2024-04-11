import * as React from 'react';
import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Menu, MenuItem, MenuButton } from "@mui/material";
//Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import RocketOutlinedIcon from '@mui/icons-material/RocketOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CampaignRoundedIcon from '@mui/icons-material/CampaignRounded';
import EmojiFlagsOutlinedIcon from '@mui/icons-material/EmojiFlagsOutlined';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
// import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
// import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import Account from './Accounts/Account';
import NewTransaction from './Accounts/NewTransaction';
import TransactionList from './Accounts/TransactionList';
import Announcement from './Announcement/Announcement';
import MyAttendance from './Attendance/MyAttendance';
import Attendance from './Attendance/Attendance';
import Award from './Awards/Award';
import NewAward from './Awards/NewAward';
import Status from './Employment/Status';
import BalanceSheet from './Finance Report/BalanceSheet';
import IncomeStatement from './Finance Report/IncomeStatement';
import TrialBalance from './Finance Report/TrialBalance';
import Department from './HR/Department';
import Designation from './HR/Designation';
import EmployeeList from './HR/EmployeeList';
import NewEmployee from './HR/NewEmployee';
import RoleAndPermission from './HR/RoleAndPermission';
import LeaveStatus from './Leave/LeaveStatus';
import MyLeaves from './Leave/MyLeaves';
import NewLeave from './Leave/NewLeave';
import LeavePolicy from './Leave Policy/LeavePolicy';
import CalculatePayroll from './Payroll/CalculatePayroll';
import PayslipList from './Payroll/PayslipList';
import AddMilestone from './Project/AddMilestone';
import AddProject from './Project/AddProject';
import AddTaskStatus from './Project/AddTaskStatus';
import AllProject from './Project/AllProject';
import TaskPriority from './Project/TaskPriority';
import Team from './Project/Team';
import CompanySettings from './Setting/CompanySettings';
import Shift from './Shift/Shift';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Admindashboard from './Admindashboard/admindashboard.js';
import PublicHoliday from './Holiday/PublicHoliday';
import WeeklyHoliday from './Holiday/WeeklyHoliday';



const drawerWidth = 260;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);

  const Pages = [
    {
      name: "HOME",
      route: 'dashboard',
      icon: <HomeOutlinedIcon style={{ color: 'green' }} />,
    },
    {
      name: "Manage Employees",
      icon: <PersonOutlineOutlinedIcon style={{ color: 'yellowgreen' }} />,
      children: [
        {
          name: "New Employee",
          icon: <GroupOutlinedIcon  />,
          route: "NewEmployee"
        },
        {
          name: "Employee List",
          icon: <GroupOutlinedIcon />,
          route: "EmployeeList"
        },
        {
          name: "Role & Permissions",
          icon: <ManageAccountsOutlinedIcon />,
          route: "RoleAndPermission"
        },
        {
          name: "Designation",
          icon: <ManageAccountsOutlinedIcon />,
          route: "Designation"
        },
        {
          name: "Department",
          icon: <ManageAccountsOutlinedIcon />,
          route: "Department"
        },
      ],
    },
    {
      name: "Attendance",
      icon: <AccessTimeOutlinedIcon  style={{ color: 'green' }}/>,
      children: [
        {
          name: "Attendance",
          icon: <ArticleOutlinedIcon />,
          route: "Attendance"
        },
        {
          name: "My Attendance",
          icon: <ArticleOutlinedIcon />,
          route: "MyAttendance"
        }
      ],
    },
    {
      name: "Payroll",
      icon: <AccountBalanceWalletOutlinedIcon style={{ color: 'yellowgreen' }}/>,
      children: [
        {
          name: "Calculate Payroll",
          icon: <ArticleOutlinedIcon />,
          route: "CalculatePayroll"
        },
        {
          name: "Payslip List",
          icon: <DescriptionOutlinedIcon />,
          route: "PayslipList"
        }
      ],
    },
    {
      name: "Shift Timings",
      icon: <AccessTimeOutlinedIcon style={{ color: 'green' }}/>,
      children: [
        {
          name: "Shift",
          icon: <ArticleOutlinedIcon />,
          route: "Shift"
        }
      ],
    },
    {
      name: "Employee Status",
      icon: <RocketOutlinedIcon style={{ color: 'yellowgreen' }} />,
      children: [
        {
          name: "Status",
          icon: <ArticleOutlinedIcon />,
          route: "Employement/Status"
        },
      ],
    },
    {
      name: "Leave",
      icon: <PeopleAltOutlinedIcon style={{ color: 'green' }}/>,
      children: [
        {
          name: "New Leave",
          icon: <ToggleOnOutlinedIcon style={{ color: 'yellowgreen' }}/>,
          route: "NewLeave"
        },
        {
          name: "Leave Status",
          icon: <ArticleOutlinedIcon style={{ color: 'yellowgreen' }}/>,
          route: "LeaveStatus"
        },
        {
          name: "My Leave",
          icon: <ArticleOutlinedIcon />,
          route: "MyLeaves"
        },
        {
          name: "Leave Policy",
          icon: <DonutSmallOutlinedIcon />,
          route: "LeavePolicy"
        }
      ],
    },
    // {
    //   name: "Holidays",
    //   icon: <CalendarTodayOutlinedIcon style={{ color: 'yellowgreen' }}/>,
    //   children: [
    //     {
    //       name: "Weekly Holiday",
    //       icon: <DonutSmallOutlinedIcon />,
    //       route: "Holiday/WeeklyHoliday"
    //     },
    //     {
    //       name: "Public Holiday",
    //       icon: <DonutSmallOutlinedIcon />,
    //       route: "Holiday/PublicHoliday"
    //     }
    //   ],
    // },
    // {
    //   name: "Leave Policy",
    //   icon: <CalendarTodayOutlinedIcon style={{ color: 'green' }}/>,
    //   children: [
        
    //   ],
    // },
    {
      name: "Announcement",
      icon: <CampaignRoundedIcon style={{ color: 'yellowgreen' }}/>,
      children: [
        {
          name: "Announcement",
          icon: <EmojiFlagsOutlinedIcon />,
          route: "Announcement"
        }
      ],
    },
    // {
    //   name: "Accounts",
    //   icon: <AccountBalanceWalletOutlinedIcon style={{ color: 'green' }}/>,
    //   children: [
    //     {
    //       name: "Account",
    //       icon: <FormatListBulletedOutlinedIcon />,
    //       route: "Account"
    //     },
    //     {
    //       name: "New Transaction",
    //       icon: <DoneOutlinedIcon />,
    //       route: "Accounts/NewTransaction"
    //     },
    //     {
    //       name: "Transaction List",
    //       icon: <FormatListBulletedOutlinedIcon />,
    //       route: "Accounts/TransactionList"
    //     },
    //   ],
    // },
    // {
    //   name: "Finance Report",
    //   icon: <EmojiFlagsOutlinedIcon style={{ color: 'yellowgreen' }} />,
    //   children: [
    //     {
    //       name: "Trail Balance",
    //       icon: <ArticleOutlinedIcon />,
    //       route: "FinanceReport/TrialBalance"
    //     },
    //     {
    //       name: "Balance Sheet",
    //       icon: <DescriptionOutlinedIcon />,
    //       route: "FinanceReport/BalanceSheet"
    //     },
    //     {
    //       name: "Income Statement",
    //       icon: <ArticleOutlinedIcon />,
    //       route: "FinanceReport/IncomeStatement"
    //     }
    //   ]
    // },
    // {
    //   name: "AWARDS",
    //   icon: <EmojiEventsRoundedIcon style={{ color: ' green' }}/>,
    //   children: [
    //     {
    //       name: "New Award",
    //       icon: <EmojiEventsRoundedIcon />,
    //       route: "NewAward"
    //     },
    //     {
    //       name: "Award",
    //       icon: <EmojiEventsRoundedIcon />,
    //       route: "Award"
    //     }
    //   ],
    // },
    {
      name: "Projects",
      icon: <SettingsOutlinedIcon style={{ color: 'yellowgreen' }}/>,
      children: [
        {
          name: "Add Project",
          icon: <SettingsOutlinedIcon />,
          route: "AddProject"
        },
        {
          name: "All Project",
          icon: <SettingsOutlinedIcon />,
          route: "AllProject"
        },
        {
          name: "Team",
          icon: <SettingsOutlinedIcon />,
          route: "Team"
        },
        {
          name: "Task Priority",
          icon: <SettingsOutlinedIcon />,
          route: "TaskPriority"
        },
        // {
        //   name: "Add Milestone",
        //   icon: <SettingsOutlinedIcon />,
        //   route: "AddMilestone"
        // },
        // {
        //   name: "Add Task Status",
        //   icon: <SettingsOutlinedIcon />,
        //   route: "AddTaskStatus"
        // },
      ],
    },
    {
      name: "Setting",
      icon: <SettingsOutlinedIcon style={{ color: 'grey' }}/>,
      route: "CompanySettings",
      // children: [
      //   {
      //     name: "Company Settings",
      //     icon: <SettingsOutlinedIcon />,
          
      //   }
      // ],
    },
    {
      name: "LogOut",
      // icon: <SettingsOutlinedIcon style={{ color: 'grey' }}/>,
      route: "/login",
      
    }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate()

  const RouteToNext = (route) => {
    navigate(route)
  }

  const dropdown = (index, item) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(index); // Open the dropdown
      if (item.route) {
        RouteToNext(item.route);
      }
    }
  };
  
  
  const drawer = (
    <div style={{  
      background: '#FFF',
      // backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='237' height='237' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23CB4232' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23FF0A00'%3E%3Ccircle cx='769' cy='229' r='7'/%3E%3Ccircle cx='539' cy='269' r='7'/%3E%3Ccircle cx='603' cy='493' r='7'/%3E%3Ccircle cx='731' cy='737' r='7'/%3E%3Ccircle cx='520' cy='660' r='7'/%3E%3Ccircle cx='309' cy='538' r='7'/%3E%3Ccircle cx='295' cy='764' r='7'/%3E%3Ccircle cx='40' cy='599' r='7'/%3E%3Ccircle cx='102' cy='382' r='7'/%3E%3Ccircle cx='127' cy='80' r='7'/%3E%3Ccircle cx='370' cy='105' r='7'/%3E%3Ccircle cx='578' cy='42' r='7'/%3E%3Ccircle cx='237' cy='261' r='7'/%3E%3Ccircle cx='390' cy='382' r='7'/%3E%3C/g%3E%3C/svg%3E")`,
      // Add other styles here if needed
    color: '#2C2E31', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif' }}>
      <List>
        <h1 style={{ textAlign: 'center', fontSize: 35, marginTop: 35,marginBottom:30, fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontWeight: 'normal' }}>Core <span style={{ color: "yellowgreen" }}>HR</span> </h1>
        {Pages.map((x, i) => (
          <>
            <ListItem key={x.name} disablePadding>
              <ListItemButton onClick={() => dropdown(i, x)}>
                <ListItemIcon style={{ color: 'yellow', fontSize: 20 }}>
                  {x.icon}
                </ListItemIcon>
                {/* <Typography style={{fontFamily:"poppins",fontSize:16,marginTop:5,marginLeft:"-21px"}}>{x.name}</Typography> */}
                <ListItemText><Typography style={{ marginLeft: '-21px', fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif", fontSize: 17.52 }}>{x.name}</Typography></ListItemText>
                {(x.children && Array.isArray(x.children)) && openDropdown !== i ? <KeyboardArrowDownIcon style={{ fontSize: 22 }} /> : ((openDropdown === i && openDropdown !== 0) && <KeyboardArrowUpIcon style={{ fontSize: 22 }} />)}
              </ListItemButton>
            </ListItem>
            {openDropdown === i && Array.isArray(x.children) &&
              x.children.map((y, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => RouteToNext(y.route)}>
                    <ListItemIcon style={{ color: 'black', marginLeft: 22 }}>
                      {y.icon}
                    </ListItemIcon>
                    <ListItemText><Typography style={{ marginLeft: '-20px', fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif', fontSize: 16 }}>{y.name}</Typography></ListItemText>
                  </ListItemButton>
                </ListItem>
              ))
            }
          </>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'white',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1,  height: '200%', p: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}
        <Routes>
          {/* admindashboard */}
          <Route path="dashboard" element={<Admindashboard />} />
          {/* Accounts */}
          <Route path="Account" element={<Account />} />
          <Route path="Accounts/NewTransaction" element={<NewTransaction />} />
          <Route path="Accounts/TransactionList" element={<TransactionList />} />
          {/* Announcement  */}
          <Route path="Announcement" element={<Announcement />} />
          {/* Attendance  */}
          <Route path="Attendance" element={<Attendance />} />
          <Route path="MyAttendance" element={<MyAttendance />} />
          {/* Awards */}
          <Route path="Award" element={<Award />} />
          <Route path="NewAward" element={<NewAward />} />
          {/* Employement */}
          <Route path="Employement/Status" element={<Status />} />
          {/* FinanceReport */}
          <Route path="FinanceReport/BalanceSheet" element={<BalanceSheet />} />
          <Route path="FinanceReport/IncomeStatement" element={<IncomeStatement />} />
          <Route path="FinanceReport/TrialBalance" element={<TrialBalance />} />
          {/* Holiday */}
          <Route path="Holiday/PublicHoliday" element={<PublicHoliday />} />
          <Route path="Holiday/WeeklyHoliday" element={<WeeklyHoliday />} />
          {/* HR */}
          <Route path="Department" element={<Department />} />
          <Route path="Designation" element={<Designation />} />
          <Route path="EmployeeList" element={<EmployeeList />} />
          <Route path="NewEmployee" element={<NewEmployee />} />
          <Route path="RoleAndPermission" element={<RoleAndPermission />} />
          {/* Leave */}
          <Route path="LeaveStatus" element={<LeaveStatus />} />
          <Route path="MyLeaves" element={<MyLeaves />} />
          <Route path="NewLeave" element={<NewLeave />} />
          {/* Leave Policy */}
          <Route path="LeavePolicy" element={<LeavePolicy />} />

          {/* Payroll */}
          <Route path="CalculatePayroll" element={<CalculatePayroll />} />
          <Route path="PayslipList" element={<PayslipList />} />
          {/* Project */}
          <Route path="AddMilestone" element={<AddMilestone />} />
          <Route path="AddProject" element={<AddProject />} />
          <Route path="AddTaskStatus" element={<AddTaskStatus />} />
          <Route path="AllProject" element={<AllProject />} />
          <Route path="TaskPriority" element={<TaskPriority />} />
          <Route path="Team" element={<Team />} />
          {/* Setting */}
          <Route path="CompanySettings" element={<CompanySettings />} />
          {/* Shift */}
          <Route path="Shift" element={<Shift />} />

        </Routes>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
