import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
      top: '55px !important',
      left: '28px !important',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

export default function CategoryList() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
           <ListItemIcon>
             <ShoppingCartIcon />
           </ListItemIcon>
           <ListItemText primary="Comprar" />
        </StyledMenuItem>

        <StyledMenuItem onClick={handleClose}>
           <ListItemIcon>
             <LocalShippingIcon />
           </ListItemIcon>
           <ListItemText primary="Envíos" />
        </StyledMenuItem>

        <StyledMenuItem onClick={handleClose}>
           <ListItemIcon>
             <ContactSupportIcon />
           </ListItemIcon>
           <ListItemText primary="Preguntas Frecuentes" />
        </StyledMenuItem>

        <StyledMenuItem onClick={handleClose}>
           <ListItemIcon>
             <InfoIcon />
           </ListItemIcon>
           <ListItemText primary="Contáctenos" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import LocalShippingIcon from '@material-ui/icons/LocalShipping';
// import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// import InfoIcon from '@material-ui/icons/Info';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

// export default function CategoryList() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <List component="nav" aria-label="menu">
//         <ListItem button>
//           <ListItemIcon>
//             <ShoppingCartIcon />
//           </ListItemIcon>
//           <ListItemText primary="Comprar" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <LocalShippingIcon />
//           </ListItemIcon>
//           <ListItemText primary="Envíos" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <InfoIcon />
//           </ListItemIcon>
//           <ListItemText primary="Contáctenos" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <ContactSupportIcon />
//           </ListItemIcon>
//           <ListItemText primary="Preguntas Frecuentes" />
//         </ListItem>
//       </List>
//     </div>
//   );
// }