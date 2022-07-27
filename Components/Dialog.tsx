import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import FilterListIcon from "@mui/icons-material/FilterList";
import Slider from "@mui/material/Slider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FilterDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [fats, setFats] = React.useState<number[]>([20, 37]);

  const handleFatsChange = (event: Event, newValue: number | number[]) => {
    setFats(newValue as number[]);
  };
  const [protein, setProtein] = React.useState<number[]>([20, 37]);

  const handleProteinChange = (event: Event, newValue: number | number[]) => {
    setProtein(newValue as number[]);
  };
  const [carbs, setCarbs] = React.useState<number[]>([20, 37]);

  const handleCarbsChange = (event: Event, newValue: number | number[]) => {
    setCarbs(newValue as number[]);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} color="inherit">
        <FilterListIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className="max-w-md mx-auto"
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography className="mx-auto" variant="h6" component="div">
              filters
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <div className="p-4">
          <p className="font-semibold">Protein</p>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={protein}
            onChange={handleProteinChange}
            valueLabelDisplay="auto"
            //   getAriaValueText={valuetext}
          />
        </div>
        <div className="p-4">
          <p className="font-semibold">Carbohydrates</p>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={carbs}
            onChange={handleCarbsChange}
            valueLabelDisplay="auto"
            //   getAriaValueText={valuetext}
          />
        </div>
        <div className="p-4">
          <p className="font-semibold">Fats</p>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={fats}
            onChange={handleFatsChange}
            valueLabelDisplay="auto"
            //   getAriaValueText={valuetext}
          />
        </div>
        <div className="p-4">
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Choose tags</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Keto"
              />
              <FormControlLabel
                control={<Checkbox name="jason" />}
                label="Paleo"
              />
              <FormControlLabel
                control={<Checkbox name="antoine" />}
                label="Vegan"
              />
            </FormGroup>
          </FormControl>
        </div>
      </Dialog>
    </div>
  );
}
