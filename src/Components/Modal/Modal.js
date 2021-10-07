import * as React from "react";

import { Box } from "@material-ui/system";
import { Button, Modal, TextField, Typography } from "@material-ui/core";
import { Input } from "reactstrap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const back = {
  bgcolor: "black",
};

const textsms = {
  bgcolor: "#D0DFE8",
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Contact</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={back}
      >
        <Box sx={style}>
          <div className="row">
            <div className="col-12">
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                className="text-center "
              >
                Контакты
              </Typography>
            </div>
            <div className="col-12">
              <TextField
                id="filled-basic"
                label="Имя"
                className="w-100 mt-5 "
              />
            </div>
            <div className="col-12">
              <Input
                type="email"
                name="email"
                id="exampleEmail2"
                placeholder="Емаил"
                className="mt-3"
              />
            </div>
            <div className="col-12 ">
              <Input
                type="text"
                name="text"
                id="text"
                className="mt-3"
                placeholder="сообщение..."
                sx={textsms}
              />
            </div>
            <div className="col-12">
              <Button variant="contained" className="w-100 mt-5">
                Отправит
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
